# Agent Guide: Yashrajsingh2001.github.io

Static portfolio for Yashraj Singh Boparai. Pure HTML/CSS/JS deployed to GitHub Pages.

## Core Rules & Guardrails

- **Live URLs**:
  - Primary Custom Domain: [`https://ysb.is-a.dev/`](https://ysb.is-a.dev/)
  - Default GitHub Pages: [`https://yashrajsingh2001.github.io/`](https://yashrajsingh2001.github.io/)
- **Custom Domain (`src/CNAME`)**: Contains `ysb.is-a.dev`. Do not delete or rename.
- **Source root**: All web pages, styles, scripts, and media must stay inside `src/`.
- **Favicon & Assets**: Pure static HTML multi-page site. Always include explicit `<link rel="icon" type="image/svg+xml" href=".../assets/favicon.svg" />` in every single HTML file's `<head>`.
- **`app.css` (`src/assets/app.css`)**: Vendor Tailwind bundle. Never edit, recompile, or format.
- **`.nojekyll` (`src/.nojekyll`)**: Must stay completely empty (0 bytes). Skips Jekyll on GitHub Pages.
- **Zero build step**: Pure static site. No webpack/vite/bundler required.

## Automation & Tooling

- **Pre-commit**: Husky (`.husky/pre-commit`) + `lint-staged` auto-formats staged files on `git commit`. No manual formatting step needed.
- **Deploy**: GitHub Actions (`.github/workflows/deploy.yml`) auto-deploys `src/` to Pages on every `git push origin main`.
- **Local preview**: `npm run serve` (serves `src/` on `http://127.0.0.1:8765`).

## Workflow After Code Changes

1. Edit files inside `src/`.
2. Test: `npm run serve`.
3. Commit: `git add <files> && git commit -m "<msg>"` (Husky auto-formats).
4. Publish: `git push origin main` (GitHub Actions deploys live).

## Structure

```
src/
├── index.html            # / (home)
├── work.html             # /work.html
├── contact.html          # /contact.html
├── CNAME                 # Custom domain record (ysb.is-a.dev)
├── .nojekyll             # Empty Jekyll bypass
├── projects/             # /projects/project-*.html
├── assets/               # app.css, site.css, fonts.css, main.js, fonts/
└── images/               # ibm/, work/
```

## Relative Links

- `src/*.html`: `assets/...`, `images/...`, `projects/project-*.html`
- `src/projects/*.html`: `../assets/...`, `../images/...`, `../index.html`, `../work.html`, `../contact.html`, `project-*.html`
