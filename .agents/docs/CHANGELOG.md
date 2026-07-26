# Changelog

Agent-maintained log of significant project changes and audits.

## 2026-07-24 — Initial Architecture Audit

- Reviewed full codebase: Vite + React 19 SPA for MicroSysLogic corporate site
- Documented stack, routing, data flow, and deployment in `ARCHITECTURE.md`
- Documented browser exposure rules for `public/` vs project root in `PUBLIC_EXPOSURE.md`
- Identified known issues: missing `public/assets/img/`, CSS import mismatches, exposed backup files, hardcoded Web3Forms key
- Created `.agents/docs/` tracking folder for future agent sessions
