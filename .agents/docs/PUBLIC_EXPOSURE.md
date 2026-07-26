# Public Exposure Guide

What can and cannot be seen by users in the browser for this Vite SPA deployed on Vercel.

## Quick Rules

| Location | Direct URL access? | Visible in bundled JS? | Safe for secrets? |
|----------|-------------------|------------------------|-------------------|
| `public/**` | **Yes** | N/A (served as-is) | **No** |
| Root files not imported | No | No | Yes (not exposed) |
| Root files imported into JS | No direct URL | **Yes** | **No** |
| `src/**` source | No (prod) | Yes, after build | **No** |
| Hardcoded values in JSX | N/A | **Yes** | **No** |

## `/public` Folder — Fully Browser-Accessible

Vite copies everything under `public/` verbatim into `dist/` at build time. The static host serves these files at matching URL paths.

**Examples anyone can fetch:**

```
https://yoursite.com/assets/css/base.css
https://yoursite.com/assets/vendor/bootstrap/js/bootstrap.js
https://yoursite.com/assets/css/hero.css.bak
https://yoursite.com/assets/vendor/bootstrap-icons/bootstrap-icons.json
```

### Do

- Put images, fonts, CSS, and JS intended for the website here
- Use paths like `/assets/img/logo.webp` in JSX (maps to `public/assets/img/logo.webp`)

### Do NOT

- Store API keys, passwords, or private documents in `public/`
- Leave backup files (`.bak`, `.backup`, `.old`) in `public/` — they are publicly reachable
- Assume obscurity — any file here can be found by URL guessing or crawling

## Project Root — Not Directly Served

These files are **not** available at direct URLs in production:

- `CompanyInfo.json`
- `package.json`, `vite.config.js`, `eslint.config.js`
- `DESIGN_SYSTEM.md`, `README.md`
- `.agents/**`, `src/**`

Vercel's SPA rewrite (`vercel.json`) sends unknown paths to `/index.html`. A request to `/CompanyInfo.json` returns the React app shell, not the JSON file.

## Bundled Data — Indirectly Visible

Files imported into JavaScript are embedded in the production bundle. Users can read this data via browser DevTools (Sources or Network tab → JS files).

**Currently bundled:**

- `CompanyInfo.json` — addresses, phone, email, stats (imported by Footer, Stats, Contact)
- All React component source (minified/obfuscated but readable)

**Hardcoded in client code:**

- Web3Forms `access_key` in `src/pages/Contact.jsx` — fully exposed in the JS bundle

Root is **not** a secure place for sensitive data if that data is imported into the app.

## Development vs Production

| Behavior | Dev (`npm run dev`) | Production (`npm run build`) |
|----------|---------------------|------------------------------|
| `public/` files | Served at `/` | Copied to `dist/`, served at `/` |
| `src/` modules | Served as ES modules for HMR | Bundled into `dist/assets/*.js` |
| Root config files | Not served | Not served |

Dev-mode module serving is local only and does not apply to deployed sites.

## Recommendations

1. **Secrets** — use server-side env vars + a serverless API proxy (this SPA has no server layer today)
2. **Contact form key** — move Web3Forms `access_key` to a Vercel serverless function or similar
3. **Cleanup** — remove `.bak` / `.backup` files from `public/assets/css/`
4. **Sensitive docs** — keep internal docs outside the repo or in a private location, not in `public/`
