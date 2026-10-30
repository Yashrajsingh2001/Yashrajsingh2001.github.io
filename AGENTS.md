# Agent Guide: Yashrajsingh2001.github.io

Static portfolio for Yashraj Singh Boparai. Pure HTML/CSS/JS deployed to GitHub Pages.

## Core Rules

- **Live URL**: `https://yashrajsingh2001.github.io/`
- **Deploy**: GitHub Actions (`.github/workflows/deploy.yml`) on `main` push. Deploys `src/`.
- **Pre-commit**: Husky + `lint-staged` auto-formats staged files on `git commit`. No manual Prettier run required.
- **Manual format**: `npm run format` / `npm run format:check` (optional).
- **Local server**: `npm run serve` (serves `src/` on `http://127.0.0.1:8765`).
- **`.nojekyll`**: In `src/`. Must stay empty (0 bytes). Skips Jekyll on Pages.
- **`app.css`**: Vendor Tailwind bundle. Never edit or format.

## Structure

```
src/
├── index.html            # / (home)
├── work.html             # /work.html
├── contact.html          # /contact.html
├── .nojekyll             # Empty Jekyll bypass
├── projects/             # /projects/project-*.html
├── assets/               # app.css, site.css, fonts.css, main.js, fonts/
└── images/               # ibm/, work/
```

## Relative Links

- `src/*.html`: `assets/...`, `images/...`, `projects/project-*.html`
- `src/projects/*.html`: `../assets/...`, `../images/...`, `../index.html`, `../work.html`, `../contact.html`, `project-*.html`
