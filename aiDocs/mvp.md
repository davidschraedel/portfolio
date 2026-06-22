# Portfolio Website MVP

**Version:** 2.0  
**Last Updated:** June 22, 2026  
**Changelog:** v2.0 — Aligned with differentiation revision: voice-first story arc, timeline, trade-off cards, Presence links, `profile.json` maintenance, Handshake replaces “For Recruiters” block. Removed development phase references (those live in roadmaps).

**Implementation:** See [differentiation revision roadmap](../ai/roadmaps/2026-06-22_differentiation-revision_roadmap.md) (steps D0–D4).

---

## 1. The core problem

**A recruiter lands on your portfolio and can't answer "what does this person do and can they actually ship?" in 60 seconds — so they move on.**

The site also needs to sound like a real person, not a LinkedIn summary. Those goals are compatible: brief, scannable, genuine.

---

## 2. Minimum feature set

Everything required for a successful portfolio **after the differentiation revision**. Shipped case study pages from the initial refactor remain part of the product.

| # | What | Why it's minimum |
| - | ---- | ---------------- |
| **A** | **Hero** — contrast lead + professional sentence (Input → Output, still signals role/stack/domain) + primary CTAs (Resume, Email, LinkedIn) | First impression + contact path |
| **B** | **Timeline** — interleaved credentials and human details (`#experience`) | Replaces flat About; recruiter facts (location, timezone) visible |
| **C** | **2–3 project cards** — objective, stack tags, trade-off + live demo, GitHub, case study links | What recruiters evaluate in 60s |
| **D** | **Presence** — secondary links (GitHub, Substack, …) in “Where to find me” | Public presence without competing with primary CTAs |
| **E** | **Handshake footer** — specific “open to…” line + repeated primary links | Replaces standalone “For Recruiters” block |
| **F** | **Case study pages** — TL;DR (problem / decision / outcome) + deep-dive | Hiring manager depth (already shipped) |
| **G** | **`profile.json`** — single file you edit for all content | Maintenance without hunting multiple modules |

**Not required:** on-site blog, Substack post cards, RSS sync, analytics, chatbot, animations before hero content.

---

## 3. Link tiers

| Tier | Examples | Placement |
| ---- | -------- | --------- |
| Primary | Email, LinkedIn, Resume | Hero + Handshake |
| Secondary | GitHub, Substack | Presence (+ optional footer mention) |

---

## 4. Technical minimum

- **Astro** static output on GitHub Pages
- **Tailwind v4** — no React islands unless a task requires it
- **`profile.json`** → derived `site.ts`, `timeline.ts`, `projects.ts`
- **JSON-LD** on homepage (`@graph`, separated professional / interests / projects) and case studies
- **Technical SEO baseline:** sitemap, `robots.txt`, canonicals, OG tags

---

## 5. How to validate

Share the URL with 3 people (technical peer, hiring-adjacent contact, someone who doesn't know your work). No context, no pitch.

**Question:**

> _"Look at this for 60 seconds. What does this person do, and which project would you click first?"_

**Pass criteria — all 3 must:**

- Describe your **role and stack/domain** (not “some developer”)
- Name a **specific project**
- Find a **live demo or GitHub link** without being told

**Soft guidelines (spot-check, not hard fail):**

- Copy sounds human when read aloud
- Easy to read and navigate; no walls of text
- Avoid em-dashes

**Fail signals:**

| What they say | Fix |
| ------------- | --- |
| "Some kind of developer?" | Strengthen `professionalSentence` with role + stack/domain |
| Can't name a project | Rewrite objectives; check card scannability |
| Can't find demo/GitHub | Make links more prominent on cards |
| Don't know how to contact you | Strengthen Handshake + hero primary CTAs |

Don't send to real recruiters until all 3 pass the hard criteria.

---

## MVP in one sentence

**A deployed Astro site with a genuine hero, interleaved timeline, 2–3 project cards with demos, secondary presence links, a specific handshake footer, case study depth, and one `profile.json` to maintain — validated by a 3-person cold-read test.**
