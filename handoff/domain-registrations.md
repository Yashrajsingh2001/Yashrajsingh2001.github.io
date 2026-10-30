# Handoff: Custom Domain Registrations for Portfolio

## 1. Context & Metadata

- **Current Status**: Complete / PRs Awaiting Upstream Maintainer Review
- **Last Updated**: 2026-10-30
- **Objective**: Register free developer subdomains across `is-a.bot`, `is-a.dev`, and `js.org` pointing CNAME records to GitHub Pages at `yashrajsingh2001.github.io`.

## 2. Submitted Pull Requests

| Domain             | Registry Repo           | Pull Request URL                                             | Status | Target CNAME                 |
| :----------------- | :---------------------- | :----------------------------------------------------------- | :----- | :--------------------------- |
| `yashraj.is-a.bot` | `free-domains/is-a.bot` | [PR #704](https://github.com/free-domains/is-a.bot/pull/704) | Open   | `yashrajsingh2001.github.io` |
| `ysb.is-a.dev`     | `is-a-dev/register`     | [PR #59175](https://github.com/is-a-dev/register/pull/59175) | Open   | `yashrajsingh2001.github.io` |
| `yashraj.js.org`   | `js-org/js.org`         | [PR #12890](https://github.com/js-org/js.org/pull/12890)     | Open   | `yashrajsingh2001.github.io` |

## 3. Registration Details & Payload

### 1. `yashraj.is-a.bot`

- **File**: `domains/yashraj.json` in `free-domains/is-a.bot`
- **Owner**: `Yashrajsingh2001` (`yboparai2001@gmail.com`)
- **Record**: `CNAME -> yashrajsingh2001.github.io`

### 2. `ysb.is-a.dev`

- **File**: `domains/ysb.json` in `is-a-dev/register`
- **Owner**: `Yashrajsingh2001` (`yboparai2001@gmail.com`)
- **Record**: `CNAME -> yashrajsingh2001.github.io`

### 3. `yashraj.js.org`

- **File**: `cnames_active.js` in `js-org/js.org`
- **Entry**: `"yashraj": "yashrajsingh2001.github.io"`

## 4. Next Steps

1. Monitor PR comment notifications on GitHub for maintainer reviews.
2. Once merged, DNS records propagate automatically within a few minutes to hours.
3. Configure preferred custom domain in GitHub Pages repository settings when active.
