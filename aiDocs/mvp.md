# Portfolio Website MVP

**Version:** 2.1  
**Last Updated:** June 30, 2026

---

## 1. The core problem

**A recruiter lands on your portfolio and can't answer "what does this person do and can they actually ship?" in 60 seconds — so they move on.**

The site also needs to sound like a real person, not a LinkedIn summary. Those goals are compatible: brief, scannable, genuine.

---

## 2. Minimum feature set

The minimum set required for a successful portfolio launch:

| #     | What                                                                                                                                        | Why it's minimum                                                  |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| **A** | **Hero** — contrast lead + professional sentence (Input → Output, still signals role/stack/domain) + primary CTAs (Resume, Email, LinkedIn) | First impression + contact path                                   |
| **B** | **Timeline** — interleaved credentials and human details                                                                                    | Story arc visible; recruiter facts (location, timezone) reachable |
| **C** | **2–3 project cards** — objective, stack tags, trade-off + live demo, GitHub, case study links                                              | What recruiters evaluate in 60s                                   |
| **D** | **Presence** — secondary links (GitHub, Substack, …) in “Where to find me”                                                                  | Public presence without competing with primary CTAs               |
| **E** | **Handshake (close)** — specific “open to…” line + repeated primary links                                                                   | Integrates recruiter-relevant facts into the story arc            |
| **F** | **Case study pages** — TL;DR (problem / solution) + deep-dive (only if you have the necessary information and can avaoid hallucination)     | Hiring manager depth                                              |
| **G** | **`profile.json`** — single file you edit for all content                                                                                   | Maintenance without hunting multiple modules                      |

**Not required:** on-site blog, Substack post cards, RSS sync, analytics, chatbot, animations before hero content.

---

## 3. Link tiers

| Tier      | Examples                | Placement                              |
| --------- | ----------------------- | -------------------------------------- |
| Primary   | Email, LinkedIn, Resume | Hook + Handshake close                 |
| Secondary | GitHub, Substack        | Presence (+ optional mention at close) |

---

## 4. Technical minimum

- **Astro** static output on GitHub Pages
- **Tailwind v4** — no React islands unless a task requires it
- **`profile.json`** as the single content source, with derived code adapters where the stack requires them (e.g. image imports, typed exports)
- **JSON-LD** on the main entry page (`@graph`, separated professional / interests / projects) and case studies
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

| What they say                 | Fix                                                        |
| ----------------------------- | ---------------------------------------------------------- |
| "Some kind of developer?"     | Strengthen `professionalSentence` with role + stack/domain |
| Can't name a project          | Rewrite objectives; check card scannability                |
| Can't find demo/GitHub        | Make links more prominent on cards                         |
| Don't know how to contact you | Strengthen Handshake + hero primary CTAs                   |

Don't send to real recruiters until all 3 pass the hard criteria.

---

## MVP in one sentence

**A deployed Astro site with a genuine Hook, interleaved timeline, 2–3 project cards with demos, secondary presence links, a specific Handshake close, case study depth, and one `profile.json` to easily maintain and update content.**
