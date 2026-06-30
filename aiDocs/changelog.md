# Changelog

A concise history of changes.

## 2026-06-30 (copy)

- Revised `profile.json` hero copy (`contrastLead` rewritten; `professionalSentence` tightened)
- Added opening paragraph to `profile.about.paragraphs`
- `ProjectShowcase` label updated: "Key decision" → "Solution"; case study link text changed to "Read more..."
- Nav "About" link renamed to "Story"

## 2026-06-30 (sticky nav, layout)

- Nav made sticky (`sticky top-0 z-50`); moved outside `<header>` in `BaseLayout` so it scrolls with the page independently
- Header gets `rounded-t-4xl`; footer gets `rounded-b-4xl`; container `shadow-md` removed
- `off-white` token nudged from `#fcfcfc` to `#fafafa`
- Nav `position: relative` rule removed from `global.css` (sticky handles positioning now)
- Projects page section subtitle copy updated

## 2026-06-30 (copy and styling — corrections)

- Rewrote all three project `problem` / `keyDecision` / `outcome` fields in `projects.ts` (I AM framing significantly corrected to audience-connection angle)
- Added favicon using headshot SVG (`<link rel="icon">` in `BaseLayout`)
- Removed container `shadow-md`; narrowed max content width at `lg`/`xl` breakpoints
- Hero `contrastLead` and `professionalSentence` updated in `profile.json`
- Hero font size adjusted for mobile

## 2026-06-30 (fix — case study placeholder)

- Removed hallucinated content from `src/content/projects/*.md` (all three case study files deleted)
- Simplified `[slug].astro` — drops content collections entirely; reads from `projects.ts` directly and renders a "coming soon" placeholder card with project links
- `ProjectShowcase` card link now points to `/projects/[slug]` consistently

## 2026-06-29 (docs — aiDocs expansion)

- Added `aiDocs/architecture.md` — documents data layer (`profile.json` → `site.ts` → components), layout shell, button system, dim mode, and content collection schema
- Expanded `aiDocs/coding-style.md` — added `profile.json`/`site.ts` section and button system reference table
- Updated `aiDocs/context.md` — status note and links reflect current `architecture.md` entry

## 2026-06-29 (D0/D1 — project showcase refactor)

- Removed flagship standout layout from `ProjectShowcase`; all projects now render in a uniform two-column grid
- `ProjectShowcase` reads `problem`, `keyDecision`, `outcome` fields from `projects.ts`; displays as labeled `<dl>` rows
- Removed `layout` and `isFlagship` rendering logic from component (fields still exist in `projects.ts` but are unused)
- Image opacity softened to `opacity-80` by default; hover lifts to `opacity-95` on linked previews

## 2026-06-29 (D0 — about page and timeline)

- Added `src/pages/about.astro` — About section driven by `profile.about.paragraphs` and Timeline section driven by `profile.timeline`
- Added `about` key (heading + paragraphs array + images placeholder) and `timeline` array to `profile.json`
- Timeline entries render year-only from ISO `start` date; layout is `year · label` row list

## 2026-06-29 (D0/D1 — nav, copy, styling)

- `site.ts` now reads all values from `profile.json` (`person`, `hero`, `presence`, `handshakeLine`); no more hardcoded strings
- `Hero` component moved into `BaseLayout` header — renders on every page
- Nav simplified; `aria-current="page"` wired to active route
- Footer refactored to use `site.*` values; social links driven by `profile.presence`
- Added `@layer components` button and nav-link system to `global.css` (see coding-style.md)
- Added `dim-*` palette tokens to `@theme` block; `dark:` variants now use warm parchment dim mode, not true dark

## 2026-06-22 (D0 — content model)

- Created `profile.json` as the single hand-edited content source; initial fields: `person`, `hero`, `handshakeLine`, `presence`, `projects` (with `objective`/`tradeOff` fields)
- Added `dim-*` color token stubs to `global.css`

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
