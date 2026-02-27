# Scoreflow

NBA school project for a 9-Friday delivery plan.

Current scope:
- Home
- Games (single page with `Upcoming / Finished / Live` toggle)
- Players & Stats

Main project plan:
- [plan-scoreflowProsjektplan.md](./plan-scoreflowProsjektplan.md)

## Team Workflow

1. Pull latest `main`.
2. Create branch from `main`:
   - `feature/<short-name>`
   - `fix/<short-name>`
   - `chore/<short-name>`
3. Commit small and focused changes.
4. Open PR with the provided template.
5. At least one teammate review before merge.
6. Merge only after CI is green.

## Local Setup (when app scaffold is added)

```bash
npm install
npm run dev
```

Common scripts (if present in `package.json`):
- `npm run lint`
- `npm run test`
- `npm run build`

## Branch Rules (recommended)

Configure on GitHub:
- Protect `main`.
- Require pull request before merge.
- Require at least 1 approval.
- Require status checks to pass (CI).
- Disable force pushes and branch deletion protection exceptions.

Detailed checklist:
- [docs/repo-setup-checklist.md](./docs/repo-setup-checklist.md)

## Repository Structure

Expected after scaffold:
- `src/` app source
- `src/components/` shared UI
- `src/pages/` route pages
- `src/services/` API layer
- `.github/` automation and templates

## Definition of Done (short)

- No console errors.
- Responsive on mobile and desktop.
- English UI text.
- PR reviewed and CI green.
