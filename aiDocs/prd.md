# Portfolio Website PRD

**Product:** Personal Developer Portfolio Site  
**Author:** David Schraedel  
**Version:** 3.1  
**Status:** Active  
**Last Updated:** June 30, 2026

---

## Problem statement

Tech recruiters and engineering hiring managers screening developer candidates in 2026 face near-identical portfolios — GitHub dumps, tutorial clones, and flashy sites that say nothing useful about how a developer thinks or delivers. Recruiters spend 60 seconds or less before moving on; most portfolios impress peers, not screeners.

This portfolio answers three questions in under a minute: _Can this person ship? Can they think? Can they communicate?_ — while sounding like a real person, not a LinkedIn summary.

---

## Product strategy

**Dual audience, one visit:**

| Audience                        | Needs                                    | How the site delivers                                                                                                  |
| ------------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Recruiters (primary)**        | Role, stack, demos, GitHub, fast contact | Scannable project cards, professional sentence with domain/stack signal, primary CTAs, timeline with location/timezone |
| **Hiring managers (secondary)** | Depth, trade-offs, case studies          | Trade-off/solution on cards, dedicated case study pages with TL;DR + deep-dive                                         |
| **Anyone reading for you**      | Genuine voice, memorable background      | Contrast hero, interleaved timeline                                                                                    |

**Link tiers:**

- **Primary (hire/collaborate):** Email, LinkedIn, Resume — Hook and Handshake close
- **Secondary (public presence):** GitHub, Substack — Presence section; not hero CTAs

Long-form writing stays on Substack (link out only). No on-site blog or post mirroring.

**Content maintenance:** All copy and facts live in **`profile.json`**. The site may use derived code modules at build time to type and expose that data to components — those modules are not hand-edited content sources.

---

## Target users

### Primary: Tech recruiter (screener)

- Spends 30–90 seconds; checks headline clarity, projects, demos, GitHub
- **Success:** Reaches out or passes profile to a hiring manager with confidence

### Secondary: Engineering hiring manager

- Spends 3–10 minutes; reads case studies, skims repos, looks for production thinking
- **Success:** Enough signal for an interview decision without a take-home

### Not for

- Freelance client acquisition, passive content marketing, portfolio design awards

---

## Goals and success metrics

### Primary goal

Convert recruiter visits into first-round interview requests — with copy that also reads as genuinely human.

### Hard validation — cold-read test

Before sharing with recruiters:

- Share URL with 3 contacts without context
- Ask: _"After 60 seconds, what do I do and which project stood out?"_
- **Pass:** All 3 describe **role/stack/domain**, name **one project**, find **demo or GitHub** without prompting
- **Fail:** Generic description or no project named → revise hero or project framing and retest

### Soft guidelines (spot-check, not pass/fail)

- Copy sounds human when read aloud
- Site is easy to read and navigate
- No large walls of text
- Avoid em-dashes

### Quantitative metrics (optional — when analytics added)

| Metric             | Target              | Notes            |
| ------------------ | ------------------- | ---------------- |
| Scroll past hero   | ≥ 70%               | Plausible/Fathom |
| Demo click-through | ≥ 50% of card views | Link events      |
| GitHub engagement  | ≥ 30% of sessions   | Outbound clicks  |
| LCP (mobile)       | < 1.5s              | PageSpeed        |
| Mobile usability   | No issues at 375px  | Manual QA        |

Not required for launch. Track after deploy if useful.

---

## Anti-pattern guardrails

Hard disqualifiers — fix before public recruiter sharing:

| Anti-pattern                       | Launch gate                                               |
| ---------------------------------- | --------------------------------------------------------- |
| Tutorial/clone featured projects   | Zero in featured set                                      |
| Broken demo links                  | Every demo resolves in < 3s; no unhandled errors          |
| Single "initial commit" repo dumps | ≥ 15 commits, ≥ 3 named commits in top 10, ≥ 2 weeks span |
| Portfolio site as featured project | Not in project section                                    |
| Unclear individual contribution    | Explicit on collaborative projects                        |
| Technology tourism                 | ≥ 2 of 3 projects share a primary stack                   |
| Abandoned public GitHub repos      | Archive/delete repos with < 5 commits or no README        |

---

## Site story architecture

The site tells one story in five beats. **Layout is flexible** — single scroll, multiple pages, or a mix — as long as every beat is easy to find and the story reads in order. The site should be simple, and match the styling of the original template.

**Hook → Track → Proof → Presence → Handshake**

| Beat      | Purpose          | Contents                                                                |
| --------- | ---------------- | ----------------------------------------------------------------------- |
| Hook      | First impression | Contrast lead, professional sentence, primary CTAs, photo               |
| Track     | Story arc        | Interleaved timeline — credentials + human details                      |
| Proof     | Evidence         | 2–3 project cards: objective, stack, trade-off + demo/GitHub/case study |
| Presence  | Secondary reach  | GitHub, Substack, and other public profiles                             |
| Handshake | Close            | Specific invitation + primary CTAs repeated                             |

**Nav:** Clear paths to story, projects, and contact — labels and routes may vary by design.

---

## Key features

### Must have

**1. Hero**

- Contrast lead (what makes you unusual) + one **Input → Output** professional sentence
- Professional sentence must still signal **role, domain, and stack** — not generic

**2. Timeline**

- The Track beat — credentials interleaved with human details, not a generic bio wall
- Single chronological list
- Location and timezone visible (in timeline or person facts)
- Semantic markup where possible (`<ol>`, `<li>`, `<time datetime="...">`)

**3. Featured project cards (2–3)**

The Proof beat shows:

- Objective (one-sentence problem)
- Stack tags (scannable without hover)
- Trade-off (what you gave up and why)

Also on each card (recruiter actions preserved):

- Live demo link (when available)
- GitHub link (when available)
- Case study link

Outcome stays on case study pages only — not homepage cards.

Content-driven card layout.

**4. Presence (“Where to find me”)**

- Secondary links: GitHub, Substack, future profiles
- No post list, no RSS sync, no on-site writing section

**5. Handshake (close)**

- One specific sentence about conversations you're open to (role types, domains)
- Repeats primary links: Email, LinkedIn, Resume
- Integrates recruiter-relevant facts into the story arc — no standalone “For Recruiters” block

**6. Case study pages**

Each featured project gets a dedicated case study page, if there is enough information to give the project one.

_Skim layer (top):_

- Problem / Key decision / Outcome — one sentence each; fully informative alone

_Deep-dive layer:_

- Context, your role, technical decisions with rationale, outcome and learning

**7. Live, stable deployments**

- Working demos where applicable; portfolio on GitHub Pages
- Uptime monitoring on demo links before broad recruiter sharing

**8. Resume download**

- PDF linked from and Handshake close

**9. Mobile-first**

- Usable at 375px; touch targets ≥ 44px; body text ≥ 16px; no horizontal scroll

**10. Structured data and technical SEO**

- JSON-LD only (no microdata)
- Site homepage: `@graph` with separated Person, professional experience list, interests list, projects list
- Case studies: `Article` or `CreativeWork` + author → Person
- Sitemap, `robots.txt`, canonicals, OG/Twitter meta, alt text on project images
- Optional `llms.txt`

Crawlability choices favor structured HTML and JSON-LD over gimmicks — not prescriptive content shape. Audit if visibility issues appear.

---

### Nice to have (after launch validation)

- Privacy-friendly analytics (Plausible/Fathom)
- One technical blog post on Substack (not mirrored on-site)
- Scroll-based interactivity (one moment max — must not overshadow projects)
- AI “ask my portfolio” chatbot (only if outreach is healthy but depth conversations are rare)
- Hidden creative easter-egg page (`noindex`, excluded from sitemap and professional schema)

---

## User stories

**US-01 — First-pass recruiter scan**  
_As a recruiter with 60 seconds, I want role, stack, and real projects immediately, so I can decide whether to advance this profile._

- Professional sentence signals role/domain/stack without reading paragraphs
- 2–3 project cards visible in first scroll with stack tags and demo/GitHub links
- No tutorial clones in featured set

**US-02 — Hiring manager deep dive**  
_As a hiring manager, I want a structured case study with TL;DR and depth, so I can assess judgment without a take-home._

- TL;DR: problem / decision / outcome
- Deep-dive includes at least one “chose X over Y because Z” rationale
- GitHub link on case study where applicable

**US-03 — Live demo verification**  
_As a hiring manager, I want working demos, so I can assess deployment ability._

- Demo links resolve in < 3s where provided

**US-04 — Contact action**  
_As a recruiter ready to reach out, I want role preferences and contact in under 5 seconds._

- Handshake close states what you're open to
- Email, LinkedIn, Resume reachable in one click
- Location/timezone visible on page (timeline or person facts)

**US-05 — Mobile screening**  
_As a recruiter on my phone, I want fast load and readable layout._

- LCP < 1.5s target; no overflow at 375px

**US-06 — GitHub credibility**  
_As a hiring manager, I want clean repos with meaningful history._

- Featured repos meet anti-pattern commit thresholds
- GitHub accessible from Presence and project cards

**US-07 — Stack relevance**  
_As a recruiter matching stack, I want to scan tags on cards without opening case studies._

- Stack tags visible on each card
- ≥ 2 of 3 projects share a primary technology

**US-08 — Cold-read validation**  
_As the site owner, I want peers to describe my role and name a project after 60 seconds before I share with recruiters._

- 3-person test; all pass hard criteria (see Goals)

---

## Out of scope

- On-site blog, RSS sync, post cards, `posts.json`
- Client/freelance positioning
- CMS or WYSIWYG editor (use `profile.json`)
- Contact forms, testimonials, skill bars
- Multi-language, auth, e-commerce
- Portfolio codebase as a featured project
- Q&A-style visible headings for SEO

---

## Risks and mitigations

| Risk                                    | Mitigation                                             |
| --------------------------------------- | ------------------------------------------------------ |
| Live demos go down                      | UptimeRobot; monthly link audit                        |
| Looks like every other portfolio        | Voice-first copy + trade-offs; not visual gimmicks     |
| Tutorial projects featured              | Hard gate — zero clones                                |
| Differentiation buries recruiter signal | Professional sentence + stack on cards; cold-read test |
| Content drift across files              | Single `profile.json` source of truth                  |
| Over-engineered portfolio site          | No featured self-link; plain Astro                     |
| AI-sounding copy                        | Read-aloud test; specific first-person voice           |
| Broken GitHub links                     | Full link audit before sharing                         |
| JSON-LD misleading agents               | Separated `@graph` lists; match visible HTML           |

---

## Related documents

| Doc                                  | Role                            |
| ------------------------------------ | ------------------------------- |
| [mvp.md](./mvp.md)                   | Minimum feature set for success |
| [coding-style.md](./coding-style.md) | Code conventions                |

---

_This PRD is a living document. Update when product strategy changes; implementation order lives in created roadmaps, only._
