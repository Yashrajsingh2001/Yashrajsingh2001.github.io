# Agent Guide: Yashrajsingh2001.github.io

Personal portfolio website for Yashraj Singh Boparai. Pure static HTML/CSS/JS deployed to GitHub Pages.

## Site & Hosting

- **Live URL**: `https://yashrajsingh2001.github.io/`
- **Deployment**: Automatic via GitHub Actions [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) on push to `main`.
- **Runtime**: Static web server, no build step required.

## Directory Structure

```
.
├── index.html                  # Homepage (hero, statement, work rows, about, contact CTA)
├── work.html                   # Filterable projects gallery
├── contact.html                # Contact form (submits to Gmail compose)
├── projects/                   # Case studies
│   ├── project-one.html        # Propel & AI Developer Tooling
│   ├── project-two.html        # Carbon Design System Integrations
│   ├── project-three.html      # NebulaForge
│   ├── project-four.html       # Docling & Agent Skills
│   ├── project-five.html       # Git Spice / Stacked PR Workflows
│   └── project-six.html        # Future case study
├── assets/
│   ├── app.css                 # Template Tailwind bundle (DO NOT modify or format)
│   ├── site.css                # Custom styles, animations, theme variables
│   ├── fonts.css               # Font declarations (@font-face)
│   ├── main.js                 # Theme toggle, mobile menu, scroll reveal, preview
│   └── fonts/                  # Self-hosted WOFF2 fonts (Inter, Garamond, JetBrains)
├── images/
│   ├── ibm/                    # Active visual assets
│   └── work/                   # Template fallback images
├── handoff/                    # Task and session handoff documentation
└── .github/workflows/          # GitHub Actions deployment
```

## Linking Rules

- **Root pages** (`index.html`, `work.html`, `contact.html`):
  - Assets: `assets/app.css`, `assets/site.css`, `assets/main.js`
  - Images: `images/ibm/...`
  - Project links: `projects/project-one.html`
- **Project pages** (`projects/project-*.html`):
  - Assets: `../assets/app.css`, `../assets/site.css`, `../assets/main.js`
  - Images: `../images/ibm/...`
  - Navigation: `../index.html`, `../work.html`, `../contact.html`
  - Peer projects: `project-two.html` (same directory)

## Code Quality & Tooling

- **Prettier**: `npm run format` / `npm run format:check`.
- **Pre-commit**: Husky + `lint-staged` auto-formats staged files on commit.
- **Local preview**: `npm run serve` (runs `python3 -m http.server 8765 --bind 127.0.0.1`).
