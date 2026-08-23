# Dev Portfolio — Planning Prompt (final)

For Cursor / Replit / Antigravity. Paste as-is. Plan only, no code yet.

---

Senior web designer + frontend architect. Plan (not code) a personal dev portfolio. If info is missing, make sensible assumptions and state them briefly — don't stop to ask.

**Vibe:** 2026, technically sophisticated, calm, minimal, fast. Not a generic AI-template look.

## Style: Minimal Technical Editorial
- Hierarchy-driven minimalism: big type, generous whitespace, restrained mono/near-mono palette + 1 accent color
- Swiss/editorial grid: structured, asymmetric-but-intentional, magazine composition — polished, not brutalist
- Terminal/monospace accents: small CLI-style labels/metadata, used sparingly
- Thin borders > shadows; restrained radius; no excessive rounding
- Motion: subtle only — scroll fade/slide, hover micro-interactions, `transform`/`opacity` only, respect `prefers-reduced-motion`. Design must still work well with animation fully disabled.

**Avoid:** heavy 3D/WebGL, neon/cyberpunk, gradient overload, glassmorphism, everything-in-a-rounded-card, dashboard look, pill-UI overload, matrix/hacker clichés, constant parallax, stock photos, trend-for-trend's-sake choices.

**Compare 3 directions, recommend one (or a coherent combination) + why:**
- A. Terminal Minimal — dark-first, code/mono accents, dev-tool-inspired restraint
- B. Editorial Engineer — typography-first, big headlines, asymmetric, blog-forward
- C. Modern Technical Grid — modular grid, project/skill cards, GitHub stats integrated, controlled bento influence

For each: visual personality, strengths/weaknesses, effect on Hero/Skills/Projects/GitHub/Blog, suitability rating.

## Structure (homepage order)
1. Hero — name/title/intro, primary+secondary CTA, GitHub/LinkedIn/email, optional resume. Type-driven, no illustration/3D dependency.
2. About — background/expertise/stack, short narrative, light metadata/timeline (not a card wall)
3. GitHub Stats — contributions/repos/stars/top langs/pinned repos. Specify fetch method (build-time vs client vs static badge) + loading/error/empty states. Homepage must stay functional if GitHub is down/rate-limited. **Never expose API credentials in the browser.**
4. Skills — grouped by real categories (adjust to my actual stack, e.g. Languages / Systems-Embedded / Dev Tools / Testing), name+icon+category per item. No % bars, no pill-everything.
5. Projects — name/desc/stack+icons/links/image, featured vs. other with visual weight difference. No hover-only info (need touch/visible fallback).
6. Blog — 5 most recent, newest-first (LIFO): title/date/excerpt/tags/read-time. "View all" → `/blog`.
7. Footer — name/descriptor/social/resume/copyright.

Also: `/blog` listing (same shell, reading-focused, scalable to 50+ posts), `/blog/[slug]` article template (long-form type, code+syntax highlighting, related posts, prev/next), 404 page, consistent nav.

## Content/data
- Posts NOT hardcoded — recommend Markdown vs. hand-authored static HTML vs. headless CMS w/ tradeoffs, given the no-local-npm/no-framework constraint (MDX is out — see Stack)
- Post fields: title, slug, date, updated, author, excerpt, tags, category, read-time, cover image, content, draft flag — auto-sort newest-first, drafts excluded from sitemap/build
- Site config/personal info/skills/projects kept separate from UI components
- Evaluate whether an RSS/Atom feed is worth adding
- Deliver: sitemap, component list (reusable vs page-specific), folder structure

## Stack — constraint: no local npm/Node install, no React or heavy framework
- Default to static-first, zero-JS-by-default: JS is opt-in only for things that genuinely need it (mobile nav, theme persistence, GitHub fetch if static isn't feasible) — not the default rendering mechanism.
- Compare real candidates, don't default to React/Next:
  - **Hugo** — single Go binary; does not require npm/Node for the core site or build. Handles Markdown, sorting, tags, and RSS natively — worth the small templating learning curve given the blog's LIFO/tag/archive requirements. **Preferred candidate.**
  - **Hand-authored HTML/CSS/JS** — zero tooling at all, but shared layout/nav and post listing/sorting become manual maintenance work as posts grow. Only prefer this over Hugo if the blog will realistically stay very small (a handful of posts).
  - **Eleventy/Astro** — npm-based but lightweight/near-zero client JS. Only acceptable if the build runs in CI (e.g. GitHub Actions), never locally.
  - Recommend Hugo unless a stated reason (e.g. very low post volume) favors hand-written HTML instead.
- MDX is out of scope — it requires JSX/React tooling, which conflicts with the no-framework constraint outright. Plain Markdown or hand-authored HTML only.
- List dependencies by category: required / optional / build-time-only / client-side-runtime. The runtime list should be near-zero.
- Prefer self-hosted/static assets for icons (optimized local SVGs) and build-time processing (e.g. Hugo's built-in syntax highlighting at build time, avoiding runtime highlighting JS entirely). Use CDN-hosted third-party libraries only when they materially simplify implementation without hurting performance/reliability — an external library adds a DNS/TLS connection, an extra request, and a dependency on that provider's uptime.
- Local workflow: install (if any) → run local server → write content → build → deploy. No Docker, database, backend server, or multiple local services unless truly justified.
- Report actual production build output: total HTML/CSS/JS/image size, page count, client JS bundle count, external request count — so what ships is inspected, not assumed.
- Deploy the generated static output to a CDN-backed static host (Cloudflare Pages, Netlify, GitHub Pages, or Vercel static) with no production runtime server: cover HTTPS, compression, HTTP/2+, immutable/versioned asset caching, auto cache-invalidation on deploy, apex/www domain strategy.
- GitHub stats: build-time/scheduled static fetch preferred over live client calls; fall back to client `fetch()` only if static generation isn't feasible. Never expose a token to the browser either way. Site stays functional if GitHub is down.
- Note how the architecture could evolve if more interactivity (e.g. search/filtering) is needed later, without abandoning the static-first foundation.

## Mobile (first-class, not shrunk desktop)
- Breakpoints: ~320–374 / 375–767 / 768–1023 / 1024–1439 / 1440+
- Per-section transform (not just scale) for: nav, hero, grid, skills, GitHub stats, projects, blog, footer
- Hero: fluid type (`clamp()`), stacked CTAs, no horizontal scroll
- Nav: real mobile pattern (drawer/trigger), keyboard-accessible, focus trap, esc-to-close
- No hover-only functionality; real touch target sizes
- Blog: comfortable reading width/line-height; code blocks may scroll horizontally, page never does
- Validate at: 320/360/375/390/414/768/1024/1280/1440+. Check: no h-scroll, no clipped text, no overlaps, no broken grid.

## SEO
- Per-page metadata (title/description/canonical/OG/Twitter card) — unique per article, no dupes
- Structured data: Person, WebSite, BlogPosting per article, BreadcrumbList where real
- Stable readable slugs, no IDs/hashes/query params
- sitemap.xml (published only) + robots.txt (drafts/internal excluded)
- Semantic HTML, correct heading hierarchy, real alt text
- Static/SSR for indexable content — no client-JS-gated content
- Internal linking between related posts/projects where genuinely useful

## Performance
- Targets: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 — note how measured (Lighthouse/WebPageTest + real device)
- Minimal JS: CSS transitions over animation libs where sufficient; lazy-load non-critical interactivity
- Images: WebP/AVIF, responsive sizes, lazy-load below fold, explicit dimensions/aspect-ratio (LCP image not lazy-loaded)
- Fonts: minimal stack, variable fonts where practical, `font-display: swap`, preload only critical
- GitHub stats + blog content cached/static
- No accessibility-for-performance tradeoffs (keep focus states, semantics, keyboard access)

## Accessibility
Semantic HTML, heading hierarchy, full keyboard nav, visible focus states, sufficient contrast, real alt text, accessible theme toggle if present, full `prefers-reduced-motion` support. Never convey essential info by color or hover alone.

## Self-check before finalizing
Distinctive (not templated)? Type carries real weight? Grid intentional not decorative? Calm not noisy? Works with zero 3D and with animation disabled? Solid at 320px? Blog reads like a technical publication? Scales to 50+ posts / many projects without turning into a dashboard? Is SEO/performance architectural, not cosmetic?

## Final Design Specification (required closing section)
Resolve everything above into one locked set of decisions — not multiple options. Must state definitively: chosen direction, color system, type scale, grid/spacing, component style (borders/radius/shadows), nav, hero/about/GitHub/skills/projects/blog/footer treatment, mobile behavior, animation rules, SEO approach, performance principles, final stack. This is the source of truth for implementation — ambiguity here should be resolved now, not left for build time.

## Deliverables
1) 3 directions compared + recommendation, 2) visual system, 3) section-by-section homepage design, 4) skills/projects/GitHub/blog architecture, 5) responsive strategy, 6) SEO strategy, 7) performance strategy, 8) stack + folder structure, 9) phased implementation order w/ dependencies, 10) risks/trade-offs, 11) Final Design Specification. No code yet.
