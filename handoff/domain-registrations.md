# Handoff: Custom Domain Registrations for Portfolio

## 1. Context & Metadata

- **Current Status**: All PRs Validated & Passing CI Checks (Awaiting Maintainer Merges)
- **Last Updated**: 2026-10-30
- **Objective**: Register free developer subdomains across `is-a.bot`, `is-a.dev`, and `js.org` pointing CNAME records to GitHub Pages at `yashrajsingh2001.github.io`.

## 2. Submitted Pull Requests & Status

| Domain             | Registry Repo           | Pull Request URL                                             | CI Status                  | Target CNAME                 |
| :----------------- | :---------------------- | :----------------------------------------------------------- | :------------------------- | :--------------------------- |
| `yashraj.is-a.bot` | `free-domains/is-a.bot` | [PR #704](https://github.com/free-domains/is-a.bot/pull/704) | :white_check_mark: Passing | `yashrajsingh2001.github.io` |
| `ysb.is-a.dev`     | `is-a-dev/register`     | [PR #59175](https://github.com/is-a-dev/register/pull/59175) | :white_check_mark: Passing | `yashrajsingh2001.github.io` |
| `yashraj.js.org`   | `js-org/js.org`         | [PR #12890](https://github.com/js-org/js.org/pull/12890)     | :white_check_mark: Passing | `yashrajsingh2001.github.io` |

## 3. Template & Compliance Verification

### 1. `free-domains/is-a.bot` ([PR #704](https://github.com/free-domains/is-a.bot/pull/704))

- **Template**: Requirements checked, preview link & purpose provided.
- **CI Checks**: `Tests` passed.

### 2. `is-a-dev/register` ([PR #59175](https://github.com/is-a-dev/register/pull/59175))

- **Template**: Formatted with exact `.github/PULL_REQUEST_TEMPLATE.md` comment markers.
- **CI Checks**: `Tests`, `Clanker Honeypot`, `Label`, `Template` all passed.

### 3. `js-org/js.org` ([PR #12890](https://github.com/js-org/js.org/pull/12890))

- **Template**: Formatted with `PULL_REQUEST_TEMPLATE.md` checkboxes, site link, and JavaScript relevance explanation.
- **CI Checks**: `cnames_active.js`, `PR description` all passed.

## 4. Next Steps

1. Upstream maintainers will review and merge.
2. DNS records propagate automatically post-merge.
3. Configure preferred custom domain in repository settings when active.
