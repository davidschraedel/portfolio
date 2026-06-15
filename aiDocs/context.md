# Project Context

Personal developer portfolio — recruiter-first, signal over spectacle. One-line pitch: [description.md](./description.md)

**Status:** Phase 1 complete — Astro scaffold + data modules in `src/`; `public/resume.pdf` added; legacy React app in `legacy/` runnable via `npm run dev:legacy` until Phase 5 deletion. Phase 2 (MVP build) unblocked.

**Stack:** Astro · Tailwind v4 · React islands (sparingly) · GitHub Pages

---

## aiDocs/ — permanent knowledge (tracked)

| File                                 | What's in it                                                                 |
| ------------------------------------ | ---------------------------------------------------------------------------- |
| [prd.md](./prd.md)                   | Product requirements — source of truth for features, users, and launch gates |
| [mvp.md](./mvp.md)                   | Minimum first deploy — what to cut, what to validate                         |
| [coding-style.md](./coding-style.md) | How to write code in this repo                                               |
| [architecture.md](./architecture.md) | System architecture _(not written yet)_                                      |
| [changelog.md](./changelog.md)       | Concise change history - update with every commit                            |

---

## ai/ — working space (gitignored)

| Folder                       | Use                                       |
| ---------------------------- | ----------------------------------------- |
| [notes/](../ai/notes/)       | Research and brainstorming                |
| [roadmaps/](../ai/roadmaps/) | Plans and implementation checklists       |
| [guides/](../ai/guides/)     | Library docs and external research output |

Notable notes: [techstack report](../ai/notes/2026-06-14_techstack-report.md) · [Astro research](../ai/notes/2026-06-14_astro-framework-research.md)

---

## scripts/ — CLI entry points

`dev.sh` · `dev-legacy.sh` · `build.sh` · `lint.sh` — wrap npm commands (`dev:legacy` runs the preserved React/Vite app in `legacy/`).

---

## Tool config (gitignored, personal)

- `claude.md` — Claude Code config
- `.cursorrules` — Cursor config
