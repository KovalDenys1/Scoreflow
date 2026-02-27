# Repository Setup Checklist

## Already Added In Repository

- `.gitignore` for Node/Vite project files
- `.editorconfig` for unified formatting
- `.nvmrc` with Node 20
- `README.md` with team workflow and setup notes
- `CONTRIBUTING.md` with branch/commit/PR conventions
- `.github/pull_request_template.md`
- `.github/ISSUE_TEMPLATE/bug_report.md`
- `.github/ISSUE_TEMPLATE/feature_request.md`
- `.github/workflows/ci.yml` (safe before app scaffold)

## Required GitHub Settings (manual)

1. Protect `main` branch:
   - Require pull request before merge
   - Require at least 1 approval
   - Require status checks to pass (`CI`)
   - Block force pushes
2. Enable auto-delete for merged branches.
3. Restrict direct pushes to `main` (admins optional).
4. Set repository default merge method:
   - `Squash merge` (recommended for cleaner history)
5. Add team members with correct roles:
   - Maintainers: admin/write as needed
   - Contributors: write
6. Add `CODEOWNERS` after final GitHub usernames are confirmed.

## Optional (recommended next)

1. Add labels (`bug`, `enhancement`, `priority:*`).
2. Add GitHub Project board (Backlog / In Progress / Review / Done).
3. Add release tags for Friday milestones (`f1`, `f2`, ... `f9`).
