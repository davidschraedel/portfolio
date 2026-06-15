# Changelog

A concise history of changes.

## 2026-06-15 (docs)

- MVP deploy target updated to GitHub Pages across roadmaps, context, mvp, prd, and notes

## 2026-06-15 (Phase 1 fixes)

- Added `public/resume.pdf`; `site.resumePath` now resolves at dev/build time
- Added `npm run dev:legacy` + `scripts/dev-legacy.sh`; legacy Vite/Tailwind v3 deps restored for side-by-side comparison
- Split Transcript Pipeline `demoUrl` from `githubUrl` — `transcriptPipelineDemoVideoUrl` export pending walkthrough recording
- Created `src/layouts/` and `src/components/` scaffold dirs; moved legacy ESLint config to `legacy/.eslintrc.cjs`
- Synced roadmap Phase 0/1 checkboxes with repo state

## 2026-06-15

- Completed Phase 1 scaffold: Astro + Tailwind v4 + design tokens, directory structure, ESLint
- Migrated showcase assets to `src/assets/portfolio/`; headshot to `src/assets/headshot.svg`
- Created typed `src/data/site.ts` and `src/data/projects.ts` from Phase 0 copy
- Moved legacy React/Vite app to `legacy/` for reference until Phase 5 deletion
- Completed Phase 0 content audit: confirmed Soundwatch (flagship), I AM, YouTube Transcript Pipeline
- Drafted MVP hero, project showcase, For Recruiters copy, and I AM contribution callout
- GitHub profile audit documented; showcase screenshots captured in `ai/assets/showcase/`

## YYYY-MM-DD

- Initial project setup: React frontend, Express backend
- Created PRD and MVP definition
