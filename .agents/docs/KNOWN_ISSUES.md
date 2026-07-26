# Known Issues

Tracked gaps and risks identified during the architecture audit (2026-07-24).

## Missing Image Assets

**Severity:** High (broken UI)

Many components reference `/assets/img/...` paths, but `public/assets/img/` does not exist in the repo.

**Affected files (partial list):**

- `src/components/Header.jsx` — logo
- `src/components/Hero.jsx` — hero carousel images
- `src/components/Clients.jsx` — client logos
- `src/pages/Manufacturing.jsx`, `Defense.jsx`, `AiSolutions.jsx`, etc.
- `index.html` — favicon at `/assets/img/companies/logo.webp`

**Fix:** Add image files under `public/assets/img/` matching the paths used in JSX, or update references to point to existing assets.

---

## CSS Import Path Mismatch

**Severity:** Medium (potential build/dev failure)

`src/main.jsx` imports minified CSS files that do not exist in `public/`:

```js
import '../public/assets/vendor/bootstrap/css/bootstrap.min.css'
import '../public/assets/vendor/boxicons/css/boxicons.min.css'
```

The repo contains non-minified versions only:

- `public/assets/vendor/bootstrap/css/bootstrap.css`
- `public/assets/vendor/boxicons/css/boxicons.css`

**Fix:** Update imports to match existing filenames, or add the `.min.css` files.

---

## Exposed Backup Files in `public/`

**Severity:** Low (unnecessary public exposure)

These files are directly accessible via URL:

- `public/assets/css/hero.css.bak`
- `public/assets/css/hero.css.backup`

**Fix:** Delete backup files from `public/` or move them outside the project.

---

## Hardcoded Web3Forms API Key

**Severity:** Medium (security)

`src/pages/Contact.jsx` contains a hardcoded Web3Forms `access_key`:

```
832a16fa-fc9a-43bb-935c-ba69c49425d9
```

This is visible to anyone who inspects the JS bundle. If abused, rotate the key in the Web3Forms dashboard.

**Fix:** Proxy form submissions through a Vercel serverless function with the key in environment variables.

---

## Placeholder Routes

**Severity:** Low (incomplete features)

These routes render a generic Placeholder page:

- `/products`, `/products/:slug`
- `/services`, `/services/:slug`
- `/training`, `/career`

**Fix:** Implement real pages or remove nav links pointing to them.

---

## No Environment Variable Setup

**Severity:** Info

The project has no `.env` files and no `import.meta.env` usage. All configuration is hardcoded or in JSON files.

**Fix:** Add `.env` + Vite env vars when server-side secrets or per-environment config are needed.

---

## Legacy PHP Email Form Asset

**Severity:** Info

`public/assets/vendor/php-email-form/validate.js` expects a PHP backend. The React contact page uses Web3Forms instead — this vendor file is unused.

**Fix:** Remove if not needed, or document why it is kept.
