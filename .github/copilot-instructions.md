# Copilot Instructions

## Project Overview

This is a **multi-person React learning workspace** containing independent Vite-based sub-projects. There is no monorepo tooling — each folder under `Yash-React/`, `param-dholakia/`, and `Jadeja/` is a standalone app with its own `package.json` and `node_modules`. Always `cd` into the specific sub-project before running commands.

## Workspace Layout

- **`Yash-React/`** — Primary developer's projects (most active). The progression is: `Learning_1` → `Class_Components` → `Class_Lifecycle_methods` → `UseEffect` → `Tailwind` → `UI_Project` (capstone).
- **`param-dholakia/`** — Teaching reference material organized as `lesson1`–`lesson5`, each with self-contained concept demos.
- **`Jadeja/`** — Separate student's hello-world scaffold.

## Tech Stack & Versions

- **React 19.2** with **React Compiler** (`babel-plugin-react-compiler`) enabled in all `Yash-React/` projects
- **Vite 7.3** as bundler — all projects use `@vitejs/plugin-react` with flat ESLint config
- **Tailwind CSS v4.2** via `@tailwindcss/vite` plugin in `UI_Project` and `Tailwind`; earlier projects use plain CSS
- **Remix Icon** (CSS import `remixicon/fonts/remixicon.css` + `<i>` tags) in `UI_Project`
- No routing library, no global state management, no test framework configured

## Component Conventions

- **Arrow function components** with `const Name = () => {}` and `export default Name` at the bottom of the file:
  ```jsx
  // Yash-React/UI_Project/src/components/Section1/Navbar.jsx
  import React from "react";
  const Navbar = () => { return (<nav>...</nav>); };
  export default Navbar;
  ```
- **Folder-per-section** in `UI_Project`: `src/components/Section1/Section1.jsx` composes `Navbar.jsx`, `LeftContent.jsx`, `RightContent.jsx`, etc.
- Earlier projects use **flat** `src/components/ComponentName.jsx` with co-located `.css` files.
- `import React from "react"` is included even though React 19 doesn't require it — keep this convention.
- Props are destructured in the parameter: `const Card = ({ title, image }) => {}`.

## CSS Patterns

- **`UI_Project` / `Tailwind`**: Tailwind v4 utility classes exclusively — no custom CSS files. `App.css` and `index.css` are empty or contain only `@import "tailwindcss"`.
- **Older projects** (`Class_Components`, `Class_Lifecycle_methods`): Plain CSS in co-located `.css` files with BEM-like class names (`.card`, `.card-container`).
- **`UseEffect`**: Inline styles via `style={{}}` objects — no CSS files for components.

## State & Data

- Local state via `useState` (functional) or `this.state`/`this.setState` (class components) — no Redux, Context, or Zustand.
- Data fetching uses raw `fetch()` inside `useEffect` (functional) or `componentDidMount` (class) — no Axios or React Query.
- `AbortController` cleanup is used in `Class_Lifecycle_methods` for fetch cancellation.

## Dev Workflow

```bash
# Always cd into the specific project first
cd Yash-React/UI_Project
npm install        # first time only
npm run dev        # starts Vite dev server (default port 5173)
```

- ESLint is configured via flat config (`eslint.config.js`) with `react-hooks` and `react-refresh` plugins.
- Custom ESLint rule: `no-unused-vars` ignores PascalCase variables (`varsIgnorePattern: '^[A-Z_]'`) to allow unused component imports during development.
- No build/deploy scripts or CI/CD — this is a local learning environment.

## TypeScript Notes

- TypeScript types are installed as dev deps everywhere, but **only `UseEffect/` and `param-dholakia/lesson5/` actually use `.tsx` files**.
- `UI_Project` and all other Yash-React projects use `.jsx` — do not convert to TypeScript unless explicitly asked.

## Key Patterns to Follow

1. New components go in `src/components/<SectionName>/` with PascalCase filenames
2. Each section folder has a root component (e.g., `Section2.jsx`) that composes its children
3. Use Tailwind utility classes for all styling in `UI_Project` — avoid creating `.css` files
4. Use Remix Icon classes (`ri-*`) for icons, not SVG imports
5. Keep `param-dholakia/` as read-only reference — active development happens in `Yash-React/`
