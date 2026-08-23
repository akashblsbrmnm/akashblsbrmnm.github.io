# Dev portfolio (Hugo Extended)

Static personal site: Markdown blog, YAML data, build-time GitHub stats, almost no client JavaScript.

## Requirements

- [Hugo Extended](https://gohugo.io/installation/) **0.164.0** (this repo is pinned to that version in CI)
- Git

No Node, npm, Docker, or database. After the first commit, set `enableGitInfo = true` in `config.toml` so `lastmod` can be inferred from git.

No Node, npm, Docker, or database.

If `hugo` is not on `PATH` after a winget install, the binary is typically:

`%LOCALAPPDATA%\Microsoft\WinGet\Packages\Hugo.Hugo.Extended_Microsoft.Winget.Source_8wekyb3d8bbwe\hugo.exe`

## Local

```bash
hugo server -D
```

Edit:

- `data/site.yml` — name, role, socials, about, timeline
- `data/skills.yml` — skills and icon keys
- `data/projects.yml` — projects
- `content/blog/` — posts (`hugo new blog/my-post.md` from the `blog` archetype)
- `data/github.json` — fallback zeros; overwritten by `scripts/fetch-github-stats.sh` when a token is present

Self-hosted fonts live in `static/fonts/` (Inter, Geist Mono, Instrument Serif). Swap `--font-mono` in `assets/scss/_variables.scss` to change the monospace stack.

## Production build

```bash
hugo --minify
```

Output is `public/`. Deploy that folder to Cloudflare Pages (or any static host).

## GitHub stats

`scripts/fetch-github-stats.sh` calls the GraphQL API and writes `data/github.json`.

- Locally, with no token, the committed fallback file is left as-is (zeros render as `—`).
- In CI, set repository secret `STATS_TOKEN` (fine-grained PAT: read user profile / public repos). A 401/403 **fails the build**.
- Nightly workflow (02:00 UTC) also has `workflow_dispatch` so it can be run by hand after GitHub pauses stale crons.

## Cloudflare Pages

Repository secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`
- `STATS_TOKEN`

Set Actions variable `CF_PAGES_PROJECT` to enable the Cloudflare deploy step (omit it to build-only).

Connect the repo in the Cloudflare dashboard (build command `hugo --minify`, output `public`, env `HUGO_VERSION=0.164.0`) or set Actions variable `CF_PAGES_PROJECT` plus the Cloudflare secrets above.

## Production output (this repo, `hugo --minify`)

Inspected, not assumed:

| Asset | Size |
|---|---|
| Homepage HTML | ~13 KB |
| CSS (one fingerprinted file) | ~15 KB |
| JS (one deferred file, `nav.js`) | ~1 KB |
| Client JS bundle count | 1 |
| External runtime requests | 0 (no fonts CDN, no analytics) |
| Pages | 28 (home, blog, posts, tags, categories, RSS) |

Lighthouse / WebPageTest / screen reader passes are local: run `hugo server`, then Chrome Lighthouse and a keyboard pass (Tab, drawer, Esc).

