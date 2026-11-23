# Development workflow

## Branches

- `main` is always deployable and protected (CI must pass).
- One branch per issue: `feature/<issue-number>-short-name`, `fix/<issue-number>-short-name`, `chore/...`, `docs/...`.

## Commits

Conventional Commits: `feat: add entry pagination`, `fix: handle Spotify 429`, `test: ...`, `chore: ...`, `docs: ...`.

## Pull requests

1. Open a PR early (draft is fine) and link the issue with `Closes #N`.
2. CI must be green.
3. Re-read your own diff before merging; it's your code review.
4. Squash-merge; delete the branch.

## Definition of done (every issue)

- Acceptance criteria met
- Tests written for new logic
- Works in production after merge (if deployable)
- Notion session log updated
