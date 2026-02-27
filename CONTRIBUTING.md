# Contributing Guide

## Branch Naming

Use one of:
- `feature/<short-name>`
- `fix/<short-name>`
- `chore/<short-name>`
- `docs/<short-name>`

Examples:
- `feature/games-toggle`
- `fix/live-badge-color`

## Commit Messages

Keep commits small and explicit.

Preferred format:
- `feat: add games toggle component`
- `fix: handle empty live games state`
- `docs: update project plan`

## Pull Request Rules

- One logical change per PR.
- Link issue/task in PR description.
- Add testing notes in PR template.
- Request at least one reviewer.
- Do not merge with failing CI.

## Review Checklist

- Scope is clear and limited.
- No regressions in existing behavior.
- Edge cases handled (loading/empty/error).
- Naming and file structure are clear.
- UI text is in English.
