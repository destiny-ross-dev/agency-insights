# AGENTS.md

## Project overview

- Next.js App Router project using React 19, TypeScript, and Tailwind CSS 4.
- Source lives in `app/` with static assets in `public/`.
- Linting via ESLint with `eslint-config-next`.

## Build and test commands

- Install dependencies: `npm install`
- Development server: `npm run dev`
- Production build: `npm run build`
- Start production server: `npm run start`
- Lint: `npm run lint`

## Code style guidelines

- Prefer TypeScript for all new code; keep types narrow and explicit.
- Use functional React components and hooks; avoid class components.
- Keep components small and focused; split UI and data logic when it grows.
- Tailwind CSS utilities are preferred over custom CSS; keep class lists readable.
- Keep accessibility in mind: semantic elements, labels, and keyboard focus states.

## Testing instructions

- Use Vitest + React Testing Library for unit/integration tests.
- Colocate unit/integration tests next to the file under test (e.g., `app/page.test.tsx`).
- Do not create `tests/unit` or other centralized unit-test folders.
- Use Playwright for end-to-end tests in `tests/e2e`.
- Add scripts in `package.json` when wiring tests:
  - `test`: `vitest`
  - `test:ui`: `vitest --ui`
  - `test:e2e`: `playwright test`

## Security considerations

- Never hardcode secrets; use environment variables (e.g., `.env.local`).
- Validate and sanitize any user input on both client and server boundaries.
- Avoid rendering untrusted HTML; use safe rendering APIs.
- Keep dependencies updated; review npm audit output before release.
- Follow Next.js guidance for server actions and API routes to prevent leakage of secrets.
