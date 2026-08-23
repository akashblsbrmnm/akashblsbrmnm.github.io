#!/usr/bin/env bash
# Fetch GitHub stats at build time. Never ships a token to the browser.
# Prefer GraphQL + STATS_TOKEN; fall back to public REST for a configured username.
# HTTP 401/403 with a token exits 1 so a dead token fails CI instead of silently publishing zeros.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/data/github.json"
TOKEN="${STATS_TOKEN:-}"
USER="${GITHUB_USERNAME:-}"

if [[ -z "$USER" && -f "$ROOT/data/site.yml" ]]; then
  USER="$(python3 - <<'PY' "$ROOT/data/site.yml"
import sys, re
text = open(sys.argv[1], encoding="utf-8").read()
m = re.search(r"(?m)^github_username:\s*[\"']?([A-Za-z0-9-]+)[\"']?", text)
if not m:
    m = re.search(r"github:\s*https?://github\.com/([A-Za-z0-9-]+)", text)
print(m.group(1) if m else "")
PY
)"
fi

if [[ -z "$USER" ]]; then
  echo "no github username; keeping existing $OUT" >&2
  exit 0
fi

TMP="$(mktemp)"
NOW="$(date -u +%Y-%m-%dT%H:%M:%SZ)"

write_json() {
  python3 - "$OUT" "$NOW" "$@" <<'PY'
import json, sys
dest, now = sys.argv[1], sys.argv[2]
keys = ["commits", "repos", "stars", "topLanguage", "prs", "followers", "username", "profileUrl"]
vals = sys.argv[3:]
data = dict(zip(keys, vals))
for k in ("commits", "repos", "stars", "prs", "followers"):
    try:
        data[k] = int(data[k])
    except Exception:
        data[k] = 0
data["fetchedAt"] = now
with open(dest, "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)
    f.write("\n")
print("wrote", dest, data)
PY
}

if [[ -n "$TOKEN" ]]; then
  QUERY="$(python3 - <<PY
import json
print(json.dumps({"query":"""query($login:String!){
  user(login:$login){
    followers{totalCount}
    pullRequests(states:MERGED){totalCount}
    repositories(first:100, ownerAffiliations:OWNER, isFork:false, privacy:PUBLIC){
      totalCount
      nodes{stargazerCount primaryLanguage{name}}
    }
    contributionsCollection{contributionCalendar{totalContributions}}
    url
  }
}""", "variables":{"login":"$USER"}}))
PY
)"
  CODE="$(curl -sS -o "$TMP" -w "%{http_code}" \
    -H "Authorization: bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d "$QUERY" \
    https://api.github.com/graphql)"

  if [[ "$CODE" == "401" || "$CODE" == "403" ]]; then
    echo "error: GitHub GraphQL returned $CODE (token expired or forbidden)" >&2
    cat "$TMP" >&2 || true
    rm -f "$TMP"
    exit 1
  fi

  if [[ "$CODE" == "200" ]]; then
    python3 - "$TMP" "$OUT" "$NOW" "$USER" <<'PY'
import json, sys, datetime
src, dest, now, user = sys.argv[1:5]
raw = json.load(open(src, encoding="utf-8"))
if raw.get("errors"):
    print("error: GraphQL errors:", json.dumps(raw["errors"]), file=sys.stderr)
    sys.exit(1)
v = raw["data"]["user"]
if not v:
    print("error: user not found", file=sys.stderr)
    sys.exit(1)
nodes = v["repositories"]["nodes"] or []
stars = sum(n.get("stargazerCount") or 0 for n in nodes)
counts = {}
for n in nodes:
    lang = (n.get("primaryLanguage") or {}).get("name")
    if lang:
        counts[lang] = counts.get(lang, 0) + 1
top = "—"
if counts:
    top = sorted(counts.items(), key=lambda kv: (-kv[1], kv[0]))[0][0]
out = {
    "commits": v["contributionsCollection"]["contributionCalendar"]["totalContributions"],
    "repos": v["repositories"]["totalCount"],
    "stars": stars,
    "topLanguage": top,
    "prs": v["pullRequests"]["totalCount"],
    "followers": v["followers"]["totalCount"],
    "fetchedAt": now,
    "username": user,
    "profileUrl": v.get("url") or f"https://github.com/{user}",
}
with open(dest, "w", encoding="utf-8") as f:
    json.dump(out, f, indent=2)
    f.write("\n")
print("wrote", dest, "(graphql)")
PY
    rm -f "$TMP"
    exit 0
  fi
  echo "warn: GraphQL HTTP $CODE; falling back to public REST" >&2
fi

# Public REST fallback (no token) — commits/PRs may be unavailable (0 → "—" in UI)
CODE="$(curl -sS -o "$TMP" -w "%{http_code}" \
  -H "User-Agent: portfolio-stats" \
  -H "Accept: application/vnd.github+json" \
  "https://api.github.com/users/${USER}")"

if [[ "$CODE" != "200" ]]; then
  echo "error: GitHub REST /users returned $CODE" >&2
  cat "$TMP" >&2 || true
  rm -f "$TMP"
  exit 1
fi

REPOS_TMP="$(mktemp)"
RCODE="$(curl -sS -o "$REPOS_TMP" -w "%{http_code}" \
  -H "User-Agent: portfolio-stats" \
  -H "Accept: application/vnd.github+json" \
  "https://api.github.com/users/${USER}/repos?per_page=100&type=owner")"

if [[ "$RCODE" != "200" ]]; then
  echo "error: GitHub REST /repos returned $RCODE" >&2
  cat "$REPOS_TMP" >&2 || true
  rm -f "$TMP" "$REPOS_TMP"
  exit 1
fi

python3 - "$TMP" "$REPOS_TMP" "$OUT" "$NOW" "$USER" <<'PY'
import json, sys
user_path, repos_path, dest, now, user = sys.argv[1:6]
u = json.load(open(user_path, encoding="utf-8"))
repos = json.load(open(repos_path, encoding="utf-8"))
stars = sum(r.get("stargazers_count") or 0 for r in repos)
counts = {}
for r in repos:
    lang = r.get("language")
    if lang:
        counts[lang] = counts.get(lang, 0) + 1
top = "—"
if counts:
    top = sorted(counts.items(), key=lambda kv: (-kv[1], kv[0]))[0][0]
out = {
    "commits": 0,
    "repos": u.get("public_repos") or 0,
    "stars": stars,
    "topLanguage": top,
    "prs": 0,
    "followers": u.get("followers") or 0,
    "fetchedAt": now,
    "username": user,
    "profileUrl": u.get("html_url") or f"https://github.com/{user}",
}
with open(dest, "w", encoding="utf-8") as f:
    json.dump(out, f, indent=2)
    f.write("\n")
print("wrote", dest, "(rest)")
PY

rm -f "$TMP" "$REPOS_TMP"
