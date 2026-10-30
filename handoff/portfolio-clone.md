# Handoff: portfolio-clone - Portfolio site cloned from getdesign.md template

## 1. Context & Metadata

- **Reference**: https://portfolio-website-template.getdesign.md/
- **Current Status**: In Progress (site complete and working; copy, links and images are still placeholder quality)
- **Last Updated**: 2026-10-30 00:10
- **Objective**: Static multi-page clone of the getdesign.md portfolio template for Yashraj Singh Boparai. Plain HTML/CSS/JS, no build step, English only, no cookies.

## 2. Technical Scope & Affected Files

- **Pages (repo root)**: `index.html`, `work.html`, `project-one.html` to `project-six.html`, `contact.html`. Edit the HTML directly. The generator script used earlier was deleted.
- **Assets**:
  - `assets/app.css`: template's compiled Tailwind CSS, unchanged. Tokens, light/dark palettes, `.sun-halo`, `.paper-grid`, `.page-frame`, `.btn-clay`, `.btn-glass`, marquee keyframes.
  - `assets/site.css`: own additions: smooth scroll, `[data-reveal]` animation, hover-preview styles, reduced-motion.
  - `assets/fonts.css` + `assets/fonts/*.woff2`: self-hosted latin subsets of Inter, Source Serif 4, EB Garamond, JetBrains Mono.
  - `assets/main.js`: theme toggle, mobile menu, scroll reveal, parallax cover, work-row hover preview, work filters, contact form to Gmail.
- **Images**: `images/ibm/*.jpg` (7, from the ibm-ppt-generator skill, in use). `images/work/*.jpg` (6 original template photos, unused, kept for revert). See section 8.
- **Other**: `message.txt` is the prompt log written by `.bob/hooks/log-prompt.sh`. Keep.
- **Design Decisions**:
  - Template's compiled `app.css` reused so colours, spacing and breakpoints match.
  - English only. No EN/ES switch, no i18n code.
  - No cookie banner: site sets no cookies and has no analytics. Only `localStorage` key: `portfolio-theme`.
  - Every Email link opens Gmail compose to `yashrajcu@gmail.com` in a new tab: `https://mail.google.com/mail/?view=cm&fs=1&to=yashrajcu@gmail.com`. The contact form submit opens the same compose with name, email and message prefilled. No file attachment (Gmail link cannot carry files).
  - Header buttons: LinkedIn and Email (template had Sign in / Sign up).
  - Hero name stays on two staggered lines at all widths (template look). A one-line version was tried and rejected: it looked bad.
  - `work.html` filters: AI tooling, Design systems, Full-stack, Developer tooling.

## 3. Implementation Plan & Progress

- [x] Inspect template with ego-browser (home, `/work`, six project pages, `/contact`, `/privacy`, `/about`)
- [x] Self-host fonts
- [x] Build home page and assets
- [x] Add `work.html`, six project pages, `contact.html`
- [x] Remove `backup/`, unused template bundles, scratch files
- [x] Replace stock images with IBM skill images (section 8)
- [x] Remove EN/ES, remove cookie banner
- [x] Gmail links and form
- [x] Hero name: one-line variant tried, reverted to the two-line template look
- [ ] Confirm real LinkedIn URL (current one is a guess) and GitHub URL (placeholder `https://github.com/`)
- [ ] Replace placeholder project copy with real case studies
- [ ] Check dark mode and mobile layout on the new pages
- [ ] Test hover preview, parallax and reveal animations by eye
- [ ] Decide on the "Template from getdesign.md" footer credit
- [ ] Optional: privacy/terms pages (template footer had them; removed)

## 4. Work Completed & Code Changes

- Created all pages and assets listed above.
- Deleted: `backup/`, template JS bundles, duplicate CSS, `.scratch/`, verification screenshots, `.DS_Store`.
- Verified in ego-browser: all 9 pages load, no broken images, nav, filter, project to project navigation, CTA to contact, Gmail URL on submit, theme toggle, mobile menu (earlier build).
- Not verified: dark mode on new pages, mobile layout of new pages, hover preview, parallax, scroll reveal, smooth scroll.

## 5. Suggested Skills for Next Session

- `ego-browser`: re-check rendering and interactions.
- `carbon-content-writer`: only if the copy needs polish.

## 6. Next Steps

1. Give real LinkedIn and GitHub URLs, then update links in all pages (search for `linkedin.com/in/yashraj-singh-boparai` and `https://github.com/`).
2. Replace project copy in `project-*.html` and the work-row text in `index.html` with real details.
3. Optional: swap in real screenshots (see section 8 for revert and swap). IBM sample imagery needs a reuse-rights check. Check any IBM-internal screenshot for confidentiality first.
4. Run the checks in section 7, including dark mode and a 390px viewport.

## 7. Verification

- **Run**: `cd /Users/yashraj_2001/Documents/github_personal/portfolio && python3 -m http.server 8765 --bind 127.0.0.1`, open `http://127.0.0.1:8765/index.html`. Stop the server afterwards.
- **Expected**: serif display type renders; theme toggle flips and persists; filters hide and show cards on `work.html`; Email opens Gmail compose; mobile menu opens under 1024px; no console errors; no broken images; no banner.
- **Status**: Passing for the items under section 4 "Verified". Rest untested.

## 8. Image map (used where) and revert

Source of IBM images: `~/.bob/skills/ibm-ppt-generator/media/images/` (copied into `images/ibm/`, same filenames). Web search/fetch was not used.

| Slot in `index.html` (home page)                     | Now                                                      | Original (template)              |
| ---------------------------------------------------- | -------------------------------------------------------- | -------------------------------- |
| Statement, tall image (top right)                    | `images/ibm/isometric-cloud-blocks.jpg`                  | `images/work/mono-1.jpg`         |
| Statement, small square image                        | `images/ibm/isometric-cube-stack.jpg`                    | `images/work/atlas-2.jpg`        |
| Work row 01 hover preview + preview default          | `images/ibm/ibm-watsonx-abstract-purple-swirl-orb.jpg`   | `images/work/mono-1.jpg`         |
| Work row 02 hover preview                            | `images/ibm/ibm-corporate-abstract-mosaic-grey-blue.jpg` | `images/work/atlas-2.jpg`        |
| Work row 03 hover preview                            | `images/ibm/ibm-corporate-isometric-city-blue.jpg`       | `images/work/fieldnotes-2.jpg`   |
| Work row 04 hover preview                            | `images/ibm/ibm-quantum-circuit-board-macro.jpg`         | `images/work/northwind-1.jpg`    |
| Work row 05 hover preview                            | `images/ibm/isometric-cloud-blocks.jpg`                  | `images/work/solstice-1.jpg`     |
| Work row 06 hover preview                            | `images/ibm/ibm-corporate-abstract-white-paper-fold.jpg` | `images/work/solstice-cover.jpg` |
| Full-width parallax cover                            | `images/ibm/ibm-quantum-circuit-board-macro.jpg`         | `images/work/solstice-cover.jpg` |
| Strip 01 (caption "01 / Architecture")               | `images/ibm/ibm-corporate-isometric-city-blue.jpg`       | `images/work/northwind-1.jpg`    |
| Strip 02 (caption "02 / Interfaces")                 | `images/ibm/ibm-corporate-abstract-mosaic-grey-blue.jpg` | `images/work/solstice-1.jpg`     |
| Strip 03 (caption now "03 / AI", was "03 / Writing") | `images/ibm/ibm-watsonx-abstract-purple-swirl-orb.jpg`   | `images/work/fieldnotes-2.jpg`   |

`alt` text was rewritten for each swapped image to describe the new picture.

**Revert (home page):** in `index.html`, replace each `images/ibm/<new>` with the matching `images/work/<original>` from the table, restore the old alt text (originals: "Fountain pen drawing letterforms", "Wireframes pinned to a planning wall", "Festival crowd in warm stage light", "Forest trail photograph", "Stage under yellow lights", "Journal cover on marble"), and change caption "03 / AI" back to "03 / Writing". Ask Bob to do it in one pass.

**Other pages (added later, all from `images/ibm/`)**: `work.html` cards and the project cover images use orb (01), mosaic (02), city (03), circuit (04), cube (05), fold (06). Project galleries: p1 cloud + cube, p2 fold + city, p3 cube + mosaic, p4 cloud + fold, p5 circuit + city, p6 orb + mosaic. `contact.html` background: circuit. These pages were never built with the original `images/work/*` photos, so revert there means choosing new images.
