# Portfolio

Personal developer portfolio — recruiter-scannable, voice-first. Refactored from a legacy React/Vite site to **Astro + Tailwind v4**, with updated copy, styling, and a content model built for reuse.

## What changed

- **Framework:** React SPA → Astro static site (React islands where needed)
- **Content:** `src/data/profile.json` is the single source of truth; `site.ts` and `projects.ts` adapt it for components
- **Pages:** Home (hero + projects), Story (`/about`), project case studies (`/projects/[slug]`), 404
- **Design:** Dim mode, sticky nav, button system, recruiter-focused project cards (objective / trade-off)
- **Deploy:** GitHub Pages via `.github/workflows/deploy.yml`
- **Legacy:** Original app preserved in `legacy/` — `npm run dev:legacy` for side-by-side comparison

## AI documentation template

This repo doubles as a **standardized template** for spinning up other portfolio drafts. Permanent docs live in `aiDocs/` (PRD, MVP, architecture, coding style, changelog). Working notes and roadmaps go in `ai/` (gitignored). See [`aiDocs/context.md`](aiDocs/context.md) for the full map.

## Stack

Astro · Tailwind v4 · React (islands) · GitHub Pages

## Commands

```bash
npm install
npm run dev          # Astro dev server
npm run build        # Production build
npm run dev:legacy   # Legacy React app
npm run lint
```

## Content edits

Edit `src/data/profile.json` only. To add a project, add an entry there and drop a preview image in `src/assets/portfolio/`.
