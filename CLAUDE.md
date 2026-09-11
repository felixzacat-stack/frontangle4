# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Front-end consulting/agency website for Oliver Watkins. Multilingual (English + German). Built with React 18 + Vite. Deployed to Azure Static Web Apps on push to `master`.

Requires Node >= 22.12.0.

## Commands

```bash
npm start            # Dev server on port 3000
npm run build        # Production build → build/
npm run preview      # Preview production build
npm run lint         # ESLint
npm run lint:fix     # ESLint with auto-fix
npm run format       # Check Prettier formatting
npm run format:write # Apply Prettier formatting
```

## Architecture

```
src/
├── pages/
│   ├── HomePage.jsx
│   ├── ServicesPage.jsx
│   ├── PreviousWorkPage.jsx
│   ├── ContactPage.jsx
│   ├── icharts/        # Sub-app: IcebergCharts product demo (own layout)
│   ├── prevworkSections/  # Section components used inside PreviousWorkPage
│   └── snakething/     # Snake demo page
├── layout/             # Header, Nav, Footer, ErrorBoundary
├── img/                # All static images
├── i18n.js             # i18next initialisation + all translations
├── global.scss         # SCSS variables and base styles
├── router.jsx          # All routes
├── App.jsx             # Root layout (Header + Nav + Outlet + Footer)
└── index.jsx           # Entry point (imports i18n.js)
```

### Routes

| Path | Component |
|---|---|
| `/` `/main` | HomePage |
| `/services` | ServicesPage |
| `/previous` | PreviousWorkPage |
| `/contact` | ContactPage |
| `/icharts` | PageLayoutICharts (own layout, nested routes for home/screenshots/codesamples) |

### Internationalisation

Translations live **inline in `src/i18n.js`** as JSON objects — there are no separate translation files. Add or edit translations directly in that file. Components consume translations via the `useTranslation()` hook from `react-i18next`. Supported languages: `en`, `de`.

### SCSS

`src/global.scss` defines shared variables (`$sidePadding_*`, `$standardTextColor`, breakpoints). Import it in any component that needs these variables.

### Deployment

`.github/workflows/azure-static-web-apps-ambitious-cliff-052ac5f03.yml` handles CI/CD. `src/staticwebapp.config.json` rewrites all paths to `index.html` for SPA routing on Azure.

The `src` path alias is configured in `vite.config.js` — use `import X from 'src/...'` not relative paths.
