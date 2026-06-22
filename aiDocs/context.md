# Project Context

Personal developer portfolio — recruiter-scannable and voice-first. One-line pitch: [description.md](./description.md)

**Status:** Initial refactor shipped (Astro site, case studies, GitHub Pages deploy). **Differentiation revision not started** — see [differentiation roadmap](../ai/roadmaps/2026-06-22_differentiation-revision_roadmap.md) (steps D0–D4). Legacy React app in `legacy/` runnable via `npm run dev:legacy` until legacy deletion in initial refactor roadmap.

**Product docs:** [prd.md](./prd.md) v3.0 · [mvp.md](./mvp.md) v2.0 · Content model: `src/data/profile.json` (planned single source of truth)

**Stack:** Astro · Tailwind v4 · React islands (sparingly) · GitHub Pages

---

## aiDocs/ — permanent knowledge (tracked)

| File                                 | What's in it                                                                 |
| ------------------------------------ | ---------------------------------------------------------------------------- |
| [prd.md](./prd.md)                   | Product requirements — features, users, success criteria (v3.0)              |
| [mvp.md](./mvp.md)                   | Minimum product for success — validation gates (v2.0)                        |
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
