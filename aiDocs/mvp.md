# Portfolio Website MVP

## 1. The ONE Core Problem

**A recruiter lands on your portfolio and can't answer "what does this person do and can they actually ship?" in 60 seconds — so they move on.**

Everything else (animations, chatbot, blog, SEO) is downstream of this. If you can't pass the 60-second scan, none of it matters.

---

## 2. Minimum Feature Set

Three things only. Everything the PRD calls P0 collapses into this:

| #     | What                                                                                                   | Why It's Minimum                                   |
| ----- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------- |
| **A** | **Hero block** — specific role headline + one-sentence outcome + two links (featured projects, resume) | Fails the cold-read test without it                |
| **B** | **3 project cards** — problem, stack tags, outcome, live demo link, GitHub link                        | The only thing recruiters actually evaluate in 60s |
| **C** | **"For Recruiters" contact block** — roles sought, time zone, email, resume PDF                        | Without this, interest has nowhere to go           |

That's it. No case study pages, no About section, no mobile polish pass, no analytics — **for the first deployed version**. A single `index.astro` file with three sections.

---

## 3. What to Cut That _Feels_ Important But Isn't

These all feel load-bearing. They aren't — at MVP stage:

**Case study pages** — Feels critical. Actually, the TL;DR block on the project card itself carries 80% of the signal. Full case study pages are a P1 feature for hiring managers who've already decided to advance you. Recruiters doing first-pass screening never read them.

**About section** — Feels personal and humanizing. Actually, your role headline and outcome statement in the hero already do this job. An About page is empty calories at MVP.

**Mobile optimization pass** — Feels like table stakes. Actually, the cold-read test (your primary validator) will be done on desktop by technical peers. Mobile matters for launch — not for MVP validation.

**GitHub README cleanup** — Feels like it's tied to the portfolio. Actually it's a separate workstream on your repos, not the portfolio site itself. Do it in parallel, not as a blocker.

**Visual polish / animations** — Feels like it signals craft. Actually the research was explicit: hiring managers specifically flag over-engineered portfolio sites as a red flag. Plain and clear beats clever and slow.

**Analytics setup** — Feels like you need data from day one. Actually your validator at MVP is the cold-read test (qualitative), not click-through rates. Add analytics at Phase 3.

---

## 4. Simplest Technical Approach

**One static Astro page. No router. No CMS. No database.**

```
portfolio/
├── src/
│   └── pages/
│       └── index.astro      ← entire MVP lives here
├── public/
│   └── resume.pdf
└── astro.config.mjs
```

- **Astro** static output — you already know it, zero JS shipped by default [perplexity](https://www.perplexity.ai/search/fb0e4f06-b978-4995-a3e7-e9648c07d8a3)
- **Tailwind v4** inline — you already have it set up [perplexity](https://www.perplexity.ai/search/b0584c27-d985-4547-9d9f-2339e991b6cc)
- **No React islands** at MVP — nothing on this page needs interactivity. Pure `.astro` components only.
- **Vercel** deploy — one `git push`, done
- **No headless CMS, no content collections** — hardcode the 3 project cards directly in the template. You have 3 projects, not 300.

When you're ready to add case study pages (P1), that's when you introduce Astro content collections and dynamic routes. Not now.

---

## 5. How to Validate with Users

Directly from the PRD's US-08 cold-read test — but simplified for MVP:

**The test:**
Share the URL (no context, no pitch) with exactly 3 people: one technical peer, one person adjacent to hiring (recruiter, eng manager, or someone who's hired before), one person who doesn't know your work well.

**The question:**

> _"Look at this for 60 seconds. What does this person do, and which project would you click first?"_

**Pass criteria — all 3 must:**

- Correctly describe your role/stack
- Name a specific project (not "some projects")
- Identify a live demo or GitHub link without being told it exists

**Fail signals and what they mean:**

| What They Say                              | What It Means                                                | Fix                                                       |
| ------------------------------------------ | ------------------------------------------------------------ | --------------------------------------------------------- |
| "Some kind of developer?"                  | Hero headline is too generic                                 | Rewrite headline with specific stack + domain             |
| "I'm not sure what problem they solve"     | Outcome statement is missing or vague                        | Add one-sentence business-value statement                 |
| "I didn't see a project I wanted to click" | Project cards aren't scannable or problems aren't compelling | Rewrite problem statements, make demo link more prominent |
| "I didn't know where to contact them"      | "For Recruiters" block isn't visible or clear                | Move it above the fold or into the nav                    |

**The rule:** Don't send this to a single real recruiter until all 3 cold-read testers pass. One failed cold-read = rewrite + retest. This costs you 30 minutes. A failed recruiter impression costs you an opportunity.

---

## MVP in One Sentence

**A single deployed Astro page with a specific hero, 3 real project cards with live demos, and a "For Recruiters" block — validated by a 3-person cold-read test before any recruiter sees it.**
