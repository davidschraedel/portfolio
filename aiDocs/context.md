# Project Context

Personal developer portfolio — recruiter-scannable and voice-first. One-line pitch: [description.md](./description.md)

**Status:** MVP shipped on Astro. Hero (layout shell), Story page (`/about`), featured projects grid, and contact links are implemented; `profile.json` is the single content source with `site.ts` and `projects.ts` adapters. Deploys to GitHub Pages from the `staging` branch. Legacy React/Vite app remains in `legacy/` (`npm run dev:legacy`).

**Post-MVP (not blocking launch):** Case study routes exist as “coming soon” stubs; `handshakeLine` is in data but not rendered; PRD nice-to-haves (JSON-LD, sitemap, analytics, etc.) not built. Hero and about copy still need cold-read validation before recruiter outreach — see [mvp.md](./mvp.md) §5.

**Product docs:** [prd.md](./prd.md) v3.2 · [mvp.md](./mvp.md) v2.2 · Content model: `src/data/profile.json` (single source of truth — reusable template for other projects)

**Stack:** Astro · Tailwind v4 · React integration configured (no islands in use yet) · GitHub Pages

---

## aiDocs/ — permanent knowledge (tracked)

| File                                 | What's in it                                                    |
| ------------------------------------ | --------------------------------------------------------------- |
| [prd.md](./prd.md)                   | Product requirements — features, users, success criteria (v3.2) |
| [mvp.md](./mvp.md)                   | Minimum product for success — validation gates (v2.2)           |
| [coding-style.md](./coding-style.md) | How to write code in this repo                                  |
| [architecture.md](./architecture.md) | Data layer, layout shell, pages, dim mode, button system        |
| [changelog.md](./changelog.md)       | Concise change history — update with every commit               |

---

## ai/ — working space (gitignored)

| Folder                       | Use                                                                                                                                         |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [notes/](../ai/notes/)       | Research and brainstorming — start with [initial-agent-instructions.md](../ai/notes/initial-agent-instructions.md) for new refactor context |
| [roadmaps/](../ai/roadmaps/) | Plans and implementation checklists                                                                                                         |
| [guides/](../ai/guides/)     | Library docs and external research output                                                                                                   |

Notable notes: [techstack report](../ai/notes/2026-06-14_techstack-report.md) · [Astro research](../ai/notes/2026-06-14_astro-framework-research.md)

---

## scripts/ — CLI entry points

`dev.sh` · `dev-legacy.sh` · `build.sh` · `lint.sh` — wrap npm commands (`dev:legacy` runs the preserved React/Vite app in `legacy/`).

---

## Tool config (gitignored, personal)

- `claude.md` — Claude Code config
- `.cursorrules` — Cursor config
