# Yashraj Singh Boparai — Portfolio

Personal portfolio website showcasing software development projects, AI developer tooling, full-stack applications, and design system engineering.

🌐 **Live Website**: [https://yashrajsingh2001.github.io/](https://yashrajsingh2001.github.io/)

---

## 🚀 Overview

- **Static & Fast**: Pure HTML5, compiled Tailwind CSS tokens, custom styling, and vanilla JavaScript without heavy frameworks or build steps.
- **Self-Hosted Typography**: Inter, Source Serif 4, EB Garamond, and JetBrains Mono fonts packaged in WOFF2 format.
- **Automated CI/CD**: GitHub Actions workflow deploys the `src/` directory to GitHub Pages on every push to `main`.
- **Pre-Commit Quality**: Prettier automated formatting enforced via Husky and `lint-staged`.

---

## 📁 Repository Structure

```text
.
├── src/                        # Deployed site source
│   ├── index.html              # Homepage
│   ├── work.html               # Filterable work & project gallery
│   ├── contact.html            # Contact page with pre-filled Gmail compose
│   ├── .nojekyll               # Bypasses Jekyll on GitHub Pages
│   ├── projects/               # Case study detail pages
│   │   ├── project-one.html    # Propel & AI Developer Tooling
│   │   ├── project-two.html    # Carbon Design System Integrations
│   │   ├── project-three.html  # NebulaForge
│   │   ├── project-four.html   # Docling & Agent Skills
│   │   ├── project-five.html   # Git Spice / Stacked PR Workflows
│   │   └── project-six.html    # Case study
│   ├── assets/                 # Styles, scripts, and fonts
│   │   ├── app.css             # Compiled Tailwind design tokens
│   │   ├── site.css            # Custom animations and theme rules
│   │   ├── fonts.css           # Typography declarations
│   │   ├── main.js             # Theme toggle, mobile menu, scroll reveal
│   │   └── fonts/              # Self-hosted WOFF2 web fonts
│   └── images/                 # Project imagery and visual assets
├── handoff/                    # Session continuity and handoff notes
├── .github/workflows/          # GitHub Actions deployment workflow
├── AGENTS.md                   # AI agent reference and guidelines
└── package.json                # Development and formatting scripts
```

---

## 🛠️ Local Development

### 1. Prerequisites

- Python 3 (for local server)
- Node.js & npm (for Prettier & Husky)

### 2. Setup

```bash
npm install
```

### 3. Start Local Server

```bash
npm run serve
```

Open [http://127.0.0.1:8765](http://127.0.0.1:8765) in your browser.

### 4. Code Formatting

```bash
# Format all files
npm run format

# Verify formatting
npm run format:check
```

---

## 🚢 Deployment

Deployments are automated through [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Any push to the `main` branch uploads `src/` as a GitHub Pages artifact and publishes it live.

---

## 📄 License

© 2026 Yashraj Singh Boparai. All rights reserved.
