# Repository Guidelines

## Project Structure & Module Organization
This repository is a Vite + React + TypeScript site. Application code lives in `src/`, with route-level pages in `src/pages`, reusable sections and shadcn-based UI in `src/components`, hooks in `src/hooks`, and shared helpers in `src/lib`. Static data currently lives in `src/data/monthly-books.json`. Public assets and SEO files belong in `public/`; imported images belong in `src/assets/`. Tests are colocated under `src/` and test setup lives in `src/test/setup.ts`.

## Build, Test, and Development Commands
Use `npm` for local development:

- `npm install`: install dependencies.
- `npm run dev`: start the Vite dev server.
- `npm run build`: create a production build in `dist/`.
- `npm run build:dev`: build using development mode.
- `npm run preview`: serve the built app locally.
- `npm run lint`: run ESLint across the repo.
- `npm run test`: run Vitest once.
- `npm run test:watch`: run Vitest in watch mode.

CI deployment is defined in `.github/workflows/deploy.yaml` and currently builds with `bun`.

## Coding Style & Naming Conventions
Follow the existing TypeScript/React style: functional components, semicolons, double quotes, and 2-space indentation. Use `PascalCase` for components and page files (`MonthlyBooks.tsx`), `camelCase` for hooks and utilities (`use-mobile.tsx`, `analytics.ts`), and keep JSON/data files descriptive. Prefer the `@/` alias for imports from `src`. Tailwind utilities are the default styling approach; keep class names close to the JSX they affect.

## Testing Guidelines
Vitest runs in the `jsdom` environment with Testing Library support. Add tests as `*.test.ts` or `*.spec.tsx` anywhere under `src/`; keep them close to the code they cover when practical. Cover new logic in hooks, utilities, and route behavior. There is no enforced coverage threshold yet, so contributors should add meaningful assertions for each bug fix or feature.

## Commit & Pull Request Guidelines
Recent history favors short, imperative commit messages, often with prefixes like `feat:`. Prefer `feat:`, `fix:`, `refactor:`, `test:`, or `docs:` followed by a concise summary. Pull requests should include a clear description, testing notes (`npm run lint && npm run test`), linked issues when relevant, and screenshots or short recordings for UI changes.
