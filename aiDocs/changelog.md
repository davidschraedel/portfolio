# Changelog

A concise history of changes.

## 2026-06-22 (docs — differentiation strategy)

- **PRD v3.0** — voice-first + recruiter-scannable dual audience; homepage arc Hook → Track → Proof → Presence → Handshake; `profile.json` content model; Handshake replaces “For Recruiters” block; JSON-LD `@graph` with separated lists; development phase gates removed
- **MVP v2.0** — updated minimum feature set, link tiers (primary vs secondary), cold-read hard criteria + soft voice guidelines
- **`context.md`** — status reflects shipped initial refactor; points to differentiation roadmap (D0–D4) and doc versions

## 2026-06-20 (Phase 4 — P1 depth)

- Added Astro content collections (`src/content.config.ts`, `src/content/projects/`) with Zod schema for TL;DR, production-thinking, and optional my-role fields
- Created case study pages at `projects/[slug].astro` for Soundwatch, I AM, and YouTube Transcript Pipeline
- Added `CaseStudyTldr`, `ProductionThinking`, `MyRole`, and `TechStack` components
- Linked each `ProjectShowcase` to its case study; added `slug` to `projects.ts`
- Added About section to homepage (`site.about`); nav anchors for `#about`, `#projects`
- Added custom `404.astro` using `BaseLayout`

## 2026-06-20 (UI)

- Reduced tech stack tag text size on project cards

## 2026-06-15 (UI polish)

- GitHub Pages deploy workflow targets `staging` branch instead of `main`
- Removed `ForRecruiters` and `RecruiterSkillMap`; simplified homepage to hero, about, and projects
- Added dark mode tokens and styling across layout, hero, showcase, footer, and section headings
- Brand gradient buttons; optimized I AM demo preview image
- Restored correct LinkedIn and GitHub URLs in site data
- Copy and styling pass on hero, footer, nav, projects, and global CSS
- Removed “flagship” label from project showcase cards

## 2026-06-15 (Phase 2 — MVP homepage)

- Added GitHub Pages deploy workflow (`.github/workflows/deploy.yml`)
- Built MVP homepage: `Hero`, `Footer`, `Nav`, `ProjectShowcase`, `ForRecruiters`, `RecruiterSkillMap`, `SectionHeading`, `BaseLayout`
- Composed `index.astro` — asymmetric project showcase (1 flagship + 2 compact), For Recruiters block with skill map

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
