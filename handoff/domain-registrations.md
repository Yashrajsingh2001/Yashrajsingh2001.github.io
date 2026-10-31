# Handoff: Custom Domain Registrations for Portfolio

## 1. Context & Metadata

- **Current Status**: `https://ysb.is-a.dev/` LIVE & VERIFIED
- **Last Updated**: 2026-10-31 09:12 IST
- **Objective**: Configure and track custom domain bindings for GitHub Pages.

## 2. Active Portfolio URLs

- **Primary Custom Domain**: [`https://ysb.is-a.dev/`](https://ysb.is-a.dev/) (HTTP/2 200 Live)
- **Default GitHub Domain**: [`https://yashrajsingh2001.github.io/`](https://yashrajsingh2001.github.io/) (Redirects to `ysb.is-a.dev`)

## 3. Pull Requests Status

| Domain             | Registry Repo           | PR URL                                                       | Status                            | Target CNAME                 | Notes                                      |
| :----------------- | :---------------------- | :----------------------------------------------------------- | :-------------------------------- | :--------------------------- | :----------------------------------------- |
| `ysb.is-a.dev`     | `is-a-dev/register`     | [PR #59175](https://github.com/is-a-dev/register/pull/59175) | :white_check_mark: **MERGED**     | `yashrajsingh2001.github.io` | **LIVE & ACTIVE**                          |
| `yashraj.is-a.bot` | `free-domains/is-a.bot` | [PR #704](https://github.com/free-domains/is-a.bot/pull/704) | :hourglass_flowing_sand: **OPEN** | `yashrajsingh2001.github.io` | CI passing, pending review                 |
| `yashraj.js.org`   | `js-org/js.org`         | [PR #12890](https://github.com/js-org/js.org/pull/12890)     | :x: **CLOSED**                    | `yashrajsingh2001.github.io` | Closed per policy (no personal portfolios) |

## 4. Repository Configuration

- `src/CNAME`: `ysb.is-a.dev` (preserves custom domain across workflow builds).
- `src/.nojekyll`: Present (bypasses Jekyll processing).
