# Taste redesign plan (preserve)

**Reading this as: developer resume-portfolio for recruiters and embedded hiring managers, Swiss-editorial language, leaning toward custom Hugo SCSS (not SaaS, not GSAP).** Dials stay **DESIGN_VARIANCE 5 · MOTION_INTENSITY 3 · VISUAL_DENSITY 5**. No +1 motion: hover/focus already covers the band; extra motion would fight a scan-first resume.

Mode: **redesign-preserve** (taste-skill 11). Targeted evolution (levers 1-4: type rhythm, spacing, color/surfaces, tiny motion hygiene). Not a stack swap and not a hero overhaul.

**Status:** Implemented in the working tree (P0-P2). Verify locally with `hugo server -D`.

---

## Browser verification (read-only)

Checked **https://akashblsbrmnm.in** (live). `http://127.0.0.1:1313/` did not load in the Cursor browser.

- **Light + desktop:** sticky sidebar + scrolling main works. Nav is one line, ~60px. Resume/mail sit at the bottom of the sidebar. **Surname `Balasubramaniyam` clips** at the sidebar edge. Eyebrows `01 / ABOUT`, `02 / EXPERIENCE` visible. No theme toggle on live.
- **Mobile (CDP 390x844):** hamburger present. CTAs in first viewport (`bottom` ~813 vs `vh` 844). Live first-screen is identity stack, not clipped name. Local uncommitted CSS intends `min-height: calc(100dvh - var(--nav-h))` in [`assets/scss/_resume-layout.scss`](assets/scss/_resume-layout.scss) (~523+).
- **Dark:** live `--bg` stayed `#f4f3ee` after `data-theme="dark"`. Dark tokens exist only in the **working tree** ([`assets/scss/_variables.scss`](assets/scss/_variables.scss) mixin + [`layouts/_default/baseof.html`](layouts/_default/baseof.html) + [`assets/js/theme.js`](assets/js/theme.js)). Treat dark as designed-not-shipped.
- **GitHub ink:** `#141413` band with cream metric tile. Deliberate color-block in **light**. In **local dark**, `--surface-ink` flips to cream, so this section inverts against the rest of the page.

---

## 11.B Audit

### Brand tokens (keep)

- Cream paper `#f4f3ee`, ink `#141413`, copper `#c45c26` / hover `#9a4318` ([`assets/scss/_variables.scss`](assets/scss/_variables.scss) 5-29).
- Type: Inter body/headings, Instrument Serif on surname + role italic, Geist Mono labels. **Inter + Instrument Serif are brand, not slop.** Do not ban or swap.
- Radius token `--radius: 0` (81). Avatar exception `border-radius: 0.375rem` ([`_resume-layout.scss`](assets/scss/_resume-layout.scss) 71). Implementation choice: square the photo to match chrome (`border-radius: 0`).
- Nav height `--nav-h: 60px`. Self-hosted `@font-face` in [`assets/scss/_typography.scss`](assets/scss/_typography.scss).

### IA (do not change)

Home shell: nav, sticky profile, main sections About, Experience, Skills, GitHub, Projects, Blogs, Contact. Nav labels: Background, Experience, Skills, GitHub, Blogs, Message. Routes: `/`, `/blog/`, post slugs, hash ids `#about` `#experience` `#skills` `#github` `#contact`. Conversion: Resume PDF + contact form.

### Keep vs retire

**Keep:** copper accent, Swiss hairlines, sticky profile + scroll-main, sharp chrome, Hugo/SCSS, copy voice, photo, Resume + Message intents, local theme toggle once shipped, green favicon as semantic "online," `prefers-reduced-motion` gates.

**Retire / thin:** `01 / About` … `07 / Contact` numbering on every section; visible em-dashes and en-dashes; duplicate contact CTAs; "Field notes…" blog lede; dark-mode ink cream-flip; infinite chat-ring if it still reads as decoration.

### SEO baseline

Tab title `$aka.sh`. OG title uses em-dash in [`layouts/partials/seo.html`](layouts/partials/seo.html) line 5. Person JSON-LD present. **Do not change slugs, nav labels, form field names, or logo.** OG dash swap is low-risk if title string stays equivalent.

---

## Ranked work (to implement in Agent mode)

### P0

1. Desktop surname wrap + italic `line-height` >= 1.1 in [`assets/scss/_resume-layout.scss`](assets/scss/_resume-layout.scss).
2. Keep `--surface-ink` dark in both themes; cream only as GitHub metric tile (`--ink-tile`). Add `--ink-fg` / `--ink-muted`. Update [`.section--ink`](assets/scss/_grid.scss) and [`_github-stats.scss`](assets/scss/_github-stats.scss).
3. Darken light `--text-3` (e.g. `#3f3e39`); ink labels use `--ink-muted`.
4. Square avatar (`border-radius: 0`). Keep theme toggle in local tree.
5. Re-check mobile first-screen CTAs after wrap.

### P1

6. Drop `NN / Section` eyebrows (and skill `01` indexes, blog archive `06 / Blogs`).
7. Replace em-dashes / en-dashes in `data/site.yml`, `data/projects.yml`, experience dates, blog excerpts + `_index.md`, GitHub fallback, OG title.
8. One contact verb: keep nav **Message**. Sidebar mail icon-only (no "Email Me" expand). Drop About mailto. Drop footer Email. Contact heading `Contact`.
9. Stack About / Experience / Skills / `ed-head` (no split header).
10. Replace "Field notes…" lede.
11. Homepage blogs as text index (hide thumbs); projects keep thumbs.
12. Contact invalid border `var(--accent-hover)`.

### P2

13. Chat ring on hover/focus only.
14. 404 `100dvh`.
15. GitHub empty: `Unavailable`.
16. Comment `--radius: 0` as the one shape system.
17. Skip grain.

**Out of scope:** no React/Tailwind/GSAP, no banning Inter, no URL or nav-label changes, no form field rename.

---

## After Agent mode is on

Implement P0-P2 above, then verify locally: light + dark, desktop sidebar (no surname clip), mobile first-screen hero with Resume in view.
