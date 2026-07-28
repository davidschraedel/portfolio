# Portfolio Website MVP

**Version:** 2.4  
**Last Updated:** July 27, 2026

---

## 1. The core problem

**A recruiter lands on your portfolio and can't answer "what does this person do and can they actually ship?" in 60 seconds — so they move on.**

The site also needs to sound like a real person, not a LinkedIn summary. Those goals are compatible: brief, scannable, genuine.

---

## 2. Minimum feature set

The minimum set required for a successful portfolio launch:

| #     | What                                                                                                                                     | Why it's minimum                                              |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **A** | **Hook** — `hero.contrastLead` in layout hero + `home.tldr` and `home.skills` on home                                                    | First impression; domain tags + intro carry role/stack signal |
| **B** | **Story** — `about` paragraphs + `timeline`                                                                                              | Voice and background beyond a headline                        |
| **C** | **Featured projects** — all `featured: true` on home; `objective` paragraph + bulleted `impact` (no labels), stack, demo/GitHub when set | What recruiters evaluate in 60s                               |
| **D** | **Contact** — footer (resume, email, LinkedIn, GitHub, Substack) + home `#connect` (`handshakeLine`, `connect.*`, Email/LinkedIn CTAs)   | Reachable without hunting                                     |
| **E** | **`profile.json`** — single content source; agents do not edit it                                                                        | One place for all copy and facts                              |

**Also shipped (beyond minimum):** `/projects` lists all entries; home links via "All projects →".

**Not required for launch:** dedicated case study depth, JSON-LD, on-site blog, Substack post cards, RSS sync, analytics, chatbot.

---

## 3. Link tiers

Which URLs matter most — not where they appear on the page:

| Tier      | Examples                | Source in `profile.json`                             |
| --------- | ----------------------- | ---------------------------------------------------- |
| Primary   | Email, LinkedIn, Resume | `person.email`, `presence.linkedin`, `person.resume` |
| Secondary | GitHub, Substack        | `presence.github`, `presence.substack`               |

---

## 4. Technical minimum

- **Astro** static output on GitHub Pages
- **Tailwind v4** — no React islands unless a task requires it
- **`profile.json`** as the single content source, with derived code adapters where the stack requires them (e.g. image imports, typed exports)
- Basic page metadata (`<title>`, `<meta description>`)

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

| What they say                 | Fix                                                                          |
| ----------------------------- | ---------------------------------------------------------------------------- |
| "Some kind of developer?"     | Strengthen `home.tldr` and/or `contrastLead`; check project `objective` copy |
| Can't name a project          | Strengthen `objective` / `impact` on cards; check scannability               |
| Can't find demo/GitHub        | Make links more prominent on cards                                           |
| Don't know how to contact you | Make resume, email, and LinkedIn easier to find                              |

Don't send to real recruiters until all 3 pass the hard criteria.

---

## MVP in one sentence

**A deployed Astro site driven by `profile.json` — hero tags + home intro, about + timeline, featured projects with `objective` + bulleted `impact` and stack, contact via footer + home Connect, and a professional unique design.**
