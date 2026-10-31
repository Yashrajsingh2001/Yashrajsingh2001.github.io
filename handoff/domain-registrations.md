# Handoff: Custom Domain Registrations for Portfolio

## 1. Context & Metadata

- **Current Status**: `ysb.is-a.dev` MERGED & ACTIVE | `yashraj.js.org` CLOSED (Policy) | `yashraj.is-a.bot` PENDING
- **Last Updated**: 2026-10-31 08:58 IST
- **Objective**: Track status of custom subdomains registered for GitHub Pages at `yashrajsingh2001.github.io`.

## 2. Pull Requests Status

| Domain             | Registry Repo           | PR URL                                                       | Status                            | Target CNAME                 | Notes                                                                                 |
| :----------------- | :---------------------- | :----------------------------------------------------------- | :-------------------------------- | :--------------------------- | :------------------------------------------------------------------------------------ |
| `ysb.is-a.dev`     | `is-a-dev/register`     | [PR #59175](https://github.com/is-a-dev/register/pull/59175) | :white_check_mark: **MERGED**     | `yashrajsingh2001.github.io` | DNS resolved (`dig` verified). Ready to bind.                                         |
| `yashraj.js.org`   | `js-org/js.org`         | [PR #12890](https://github.com/js-org/js.org/pull/12890)     | :x: **CLOSED**                    | `yashrajsingh2001.github.io` | Rejected by maintainer (`indus`): js.org no longer accepts personal portfolios/blogs. |
| `yashraj.is-a.bot` | `free-domains/is-a.bot` | [PR #704](https://github.com/free-domains/is-a.bot/pull/704) | :hourglass_flowing_sand: **OPEN** | `yashrajsingh2001.github.io` | CI passing, awaiting maintainer review.                                               |

## 3. Active Domain Details (`ysb.is-a.dev`)

- **DNS Resolution**: `ysb.is-a.dev` -> `yashrajsingh2001.github.io` (`185.199.108.153`...)
- **Target Repository**: `Yashrajsingh2001/Yashrajsingh2001.github.io`

## 4. Next Steps

1. Add `src/CNAME` with content `ysb.is-a.dev`.
2. Configure custom domain `ysb.is-a.dev` in GitHub Pages settings via API / UI.
3. Verify HTTPS certificate provisioning.
4. (Optional) Follow up on `yashraj.is-a.bot` PR #704 once maintainers review.
