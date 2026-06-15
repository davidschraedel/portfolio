# Portfolio Website PRD

**Product:** Personal Developer Portfolio Site
**Author:** [Your Name]
**Version:** 2.0
**Status:** Draft
**Last Updated:** June 14, 2026
**Changelog:** v2.0 — Added anti-pattern guardrails, skim-layer requirements, GitHub quality standards, style-over-substance enforcement, individual contribution callouts, technology coherence gates, abandoned repo audit, promoted "For Recruiters" to P1, and added qualitative validation to success metrics.

---

## Problem Statement

Tech recruiters and engineering hiring managers screening developer candidates in 2026 face an overwhelming volume of near-identical portfolios — GitHub dumps, tutorial clone projects, and flashy sites that say nothing useful about how a developer actually thinks or delivers. Studies show recruiters spend 60 seconds or less on a portfolio before moving on, yet most portfolios are designed to impress peers, not to serve the recruiter's actual workflow. The result: candidates who can ship real software get filtered out alongside candidates who can't, because neither portfolio communicates signal fast enough to matter.

The most common failure modes — verified across recruiter and hiring manager research — are: tutorial-only projects that demonstrate no original problem-solving, broken or never-deployed demos, messy GitHub histories that obscure authorship and thinking, case studies with no skim layer for time-constrained reviewers, and over-engineered portfolio sites that are more impressive than the projects behind them.

This portfolio is engineered around those constraints. Every element — the hero headline, the featured projects, the case study structure — is designed to answer the three questions a hiring manager needs answered in under a minute: _Can this person ship? Can they think? Can they communicate?_

---

## Target Users

### Primary: Tech Recruiter (Screener)

- **Who:** In-house technical recruiter or sourcer at a product-focused software company, reviewing 20–50+ profiles per day
- **Goal:** Filter candidates quickly and confidently — identify who to advance to a technical screen
- **Behavior:** Spends 30–90 seconds on a portfolio. Checks: headline clarity, featured projects, live demo link, GitHub credibility. Does not read long paragraphs.
- **Pain:** Most portfolios don't tell them what stack the dev knows, what kind of problems they've worked on, or whether the work is original vs. copied tutorial projects
- **Success:** Reaches out or passes the profile to a hiring manager with confidence

### Secondary: Engineering Hiring Manager

- **Who:** Engineering manager, tech lead, or senior IC participating in hiring decisions at a product-focused software company
- **Goal:** Evaluate technical depth, judgment, and communication before scheduling a technical interview
- **Behavior:** Spends 3–10 minutes. Digs into at least one project case study, skims the GitHub repo or live demo, looks for evidence of production thinking (error handling, architecture decisions, tests, deployment). Actively looks for red flags.
- **Pain:** Portfolios with pretty UIs and shallow projects, or raw GitHub profiles with no context. Wants to see _how_ a developer thinks, not just what they've built. Specifically flags: tutorial clones, unclear individual contribution, technology tourism, and abandoned repos.
- **Success:** Has enough signal to make a confident interview decision without a take-home assignment

### Not For

- **Passive visitors / general public:** Not optimized for marketing or content discovery
- **Non-technical decision makers:** HR generalists without technical screening roles
- **Peer developers or recruiters evaluating for cultural portfolio design trends:** This site optimizes for signal, not awards
- **Clients looking to hire freelancers:** Positioning, copy, and case study framing are aimed at employment, not project-based work

---

## Goals and Success Metrics

### Primary Goal

Convert recruiter visits into first-round interview requests at a higher rate than the industry baseline for unsolicited portfolio submissions.

### Quantitative Success Metrics

| Metric                     | Target                                                               | Measurement Method                                                   |
| -------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Recruiter-to-outreach rate | ≥ 15% of unique sessions result in direct contact or referral        | Contact form submissions + recruiter messages tied to portfolio link |
| 60-second scan completion  | ≥ 70% of visitors scroll past the hero to the first featured project | Scroll-depth analytics (e.g., Plausible, Fathom)                     |
| Live demo click-through    | ≥ 50% of project card views result in a live demo click              | Link click events on project cards                                   |
| GitHub link engagement     | ≥ 30% of visitors click at least one GitHub link                     | Outbound click tracking                                              |
| Case study TL;DR read      | ≥ 60% of case study page visits reach the end of the TL;DR block     | Scroll-depth on case study pages                                     |
| Case study deep-read       | ≥ 40% of case study page visits read to the "Outcome" section        | Scroll-depth on case study pages                                     |
| Page load (LCP)            | < 1.5s on mobile 4G                                                  | Core Web Vitals via PageSpeed Insights                               |
| Mobile usability           | Zero layout or usability issues on 375px viewport                    | Manual QA + Lighthouse mobile audit                                  |

### Qualitative Validation (Phase 3 Gate — New in v2.0)

Before declaring Phase 3 complete, conduct a cold-read test:

- Share the portfolio URL with 2–3 technical contacts (peers, former colleagues, or LinkedIn connections in engineering) without any context
- Ask each: "After 60 seconds on this page, what do I do and which project stood out?"
- **Pass criteria:** All 3 contacts can accurately describe your role and name at least one featured project with its problem or tech
- **Fail criteria:** Any contact describes you generically ("some developer") or cannot name a project — signals the hero copy or project framing needs revision before sharing with recruiters

---

## Anti-Pattern Guardrails (New in v2.0)

Research on recruiter and hiring manager behavior identifies the following as hard disqualifiers. These are enforced as **launch gates** — the site cannot move to Phase 3 (public sharing) if any of these are present.

| Anti-Pattern                                         | Why It Fails                                                       | Launch Gate                                                                                                                                                |
| ---------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Tutorial or clone projects in the featured set       | Signals no original problem-solving ability                        | Zero tutorial/clone projects. Each featured project must solve a real, self-identified problem — not a course assignment or spec copy                      |
| Broken or unresponsive live demo links               | Signals inability to deploy and maintain software                  | Every demo link must resolve in < 3s with no unhandled errors. Verified manually on launch day and monthly thereafter                                      |
| Single "initial commit" repo history                 | Signals code was dumped, not developed; raises plagiarism concern  | Each featured repo must have ≥ 15 commits, with ≥ 3 meaningfully named commits visible in the top 10, spanning at least 2 weeks of activity                |
| Portfolio site itself is the most impressive project | Signals style over substance; hiring managers explicitly flag this | The portfolio site's own code is not a featured project and is not linked from the main project section                                                    |
| Unclear individual contribution on team projects     | Signals inflated credit; red flag for hiring managers              | Any collaborative project must explicitly call out your specific contributions — not team output attributed to you                                         |
| Technology tourism across unrelated stacks           | Signals breadth-chasing with no depth                              | Featured projects collectively demonstrate depth in at least one core stack. At minimum 2 of 3–4 projects share a primary technology                       |
| Abandoned repos visible on GitHub profile            | Undermines credibility even if featured repos are clean            | All public GitHub repos with < 5 commits or no README must be archived or deleted before launch. GitHub activity must show commits within the last 90 days |

---

## Key Features

### P0 — Must Have at Launch (Core Recruiter Experience)

**1. Recruiter-Optimized Hero**
A single-screen opening that communicates identity, role, and fit in under 5 seconds. Contains:

- Specific role headline (e.g., "Full-stack engineer · TypeScript, React, Node · building data-heavy apps and AI integrations")
- One-sentence outcome statement tied to business value
- Immediate navigation to featured projects or a downloadable resume
- No splash animations, no loading screens, no auto-playing video

**2. Featured Project Cards (3–4 Projects)**
A curated set of 3–4 flagship projects displayed above the fold or within the first scroll. Each card contains:

- Project name
- One-line problem statement (real problem, not a course spec)
- Tech stack tags (3–5 max)
- One-line outcome (with a metric where possible)
- Live demo link (always active, always stable)
- GitHub repository link
- Tech stack tags must be scannable without hover or click interactions

**3. Per-Project Case Study Pages — Dual-Layer Structure**
Each featured project has a dedicated case study page or expandable section with **two explicit reading modes**:

_Skim layer (required, appears first):_

- 3-line TL;DR block: Problem in one sentence / Key decision in one sentence / Outcome in one sentence
- Placed at the top of the case study, visually distinct (e.g., highlighted card or callout)
- Must be fully informative on its own — not a teaser requiring further reading

_Deep-dive layer (required, appears below the TL;DR):_

- **Context & Problem:** Who had what pain, why it mattered
- **Your Role & Constraints:** What you personally did, team size if applicable, your specific contributions (especially on collaborative work), constraints
- **Technical Decisions:** Architecture, stack choices, tradeoffs made — explained with rationale ("chose X over Y because Z"), not just what was chosen
- **Outcome & Learning:** Measurable result + honest reflection on what you'd do differently

**4. Live, Stable Deployments**
Every featured project must link to a working, production-like deployment at all times. Project demos may be hosted on Vercel, Netlify, or Render free tiers. **The portfolio site itself deploys to GitHub Pages** (GitHub Actions, static `dist/` output). UptimeRobot or equivalent monitoring configured before launch.

**5. Contact / Recruiter Action Path**
A clear, frictionless contact mechanism. See "For Recruiters" section in P1 — promoted from optional to required.

---

### P1 — High Priority (Depth and Credibility)

**6. "For Recruiters" Section (Promoted from Optional in v2.0)**
A dedicated, scannable block — in the nav or hero area — that answers the questions recruiters most need answered without hunting:

- What roles/types of work you're open to (e.g., "Full-stack or backend roles, preferably at product-focused companies building data or AI tools")
- Your location and time zone
- Your preferred contact method and expected response time
- A direct link to resume PDF and LinkedIn

This is required content, not optional copy. Recruiter research shows this is the single highest-leverage time-saver for screening workflows.

**7. GitHub Integration / Repo Signals**
Links to repos with clean READMEs — each featuring a quickstart, tech stack, and a short "Architecture & Decisions" section. Commit history verified against anti-pattern guardrails above.

**8. "About" Section**
A short, specific self-introduction connecting interests and technical background to the kind of work sought. 3–5 sentences. Avoids generic language ("passionate about," "love building things," "all-in-one"). Written in specific, first-person voice grounded in actual experience.

**9. Resume Download**
A one-click downloadable PDF resume available from the hero or nav. Kept in sync with the site's project and skills content.

**10. Tech Stack / Skills Signal**
A compact representation of core technologies — presented as "tools I've shipped with" rather than a flat badge list. Each technology ideally links to the project that uses it. Must demonstrate stack coherence (see anti-pattern guardrail #6).

**11. Mobile-First Responsive Design**
Full usability at 375px and above. Touch targets ≥ 44px. No hover-only interactions. Sub-1.5s LCP on mobile. Body text ≥ 16px.

---

### P2 — Nice to Have (Differentiation and Future — Build Only After P0/P1 Metrics Are Healthy)

> **Note:** P2 features are gated on Phase 3 qualitative and quantitative validation passing. Do not build P2 before confirming P0/P1 are converting. The portfolio site itself must not become the most impressive project.

**12. One Technical Blog Post / Note**
A single, well-crafted post about a debugging challenge or architectural decision — demonstrating communication depth and domain knowledge. Seeded at launch, expanded over time.

**13. AI-Powered "Ask My Portfolio" Chatbot**
An embedded chat interface powered by an LLM (leveraging existing AI/Bedrock skills) that answers recruiter questions about experience, stack, availability, and projects. Differentiating signal for AI-oriented roles. Build only if interview rate is healthy but depth conversations are rare.

**14. Scroll-Based Interactivity**
One high-impact interactive moment — a scroll-driven project timeline, bento-grid hover reveals, or subtle scroll-triggered entrance animations — that demonstrates front-end craft without distracting from content. Must not become the most visually impressive element on the page.

**15. SEO and Discoverability**
Open Graph metadata, descriptive `<title>` and `<meta description>` per page, semantic HTML, alt text, structured data for person/portfolio schema.

**16. Analytics Dashboard (Personal)**
Private, lightweight analytics (Plausible or Fathom) to track recruiter-relevant engagement metrics defined in the success metrics table above.

---

## User Stories

**US-01 — First-Pass Recruiter Scan**
_As a technical recruiter with 60 seconds on this page, I want to immediately understand who this developer is, what they specialize in, and whether they've built real projects, so I can confidently decide whether to send this profile to a hiring manager._

Acceptance criteria:

- Role, stack, and outcome are visible without scrolling on a desktop viewport
- At least 3 featured projects with live demo links are visible in the first scroll
- Tech stack tags are visible on each card without hovering or clicking
- No interactions required to see core information
- None of the featured projects are tutorial clones or course assignments (anti-pattern gate #1)

---

**US-02 — Hiring Manager Deep Dive**
_As an engineering hiring manager evaluating a candidate before a technical screen, I want to read a structured case study that explains a real problem the developer solved, the technical decisions they made, and the result, so I can infer their depth of thinking without scheduling a take-home._

Acceptance criteria:

- Each featured project links to a dedicated case study with a required TL;DR block at the top (problem / decision / outcome in 3 lines, visually distinct)
- TL;DR block is fully informative on its own — not a teaser
- Deep-dive section below includes at least one architectural decision with explicit rationale ("chose X over Y because Z")
- If project involved collaborators, specific individual contributions are explicitly called out
- A GitHub link is present on each case study page

---

**US-03 — Live Demo Verification**
_As a hiring manager who wants to evaluate production readiness, I want to click a live demo link and interact with a working, deployed application, so I can assess whether this developer can deploy and maintain software beyond the local environment._

Acceptance criteria:

- Every featured project has a live demo link that resolves in < 3 seconds
- No 404s, 502s, or unhandled errors visible on first load
- Mobile layout is functional on the demo itself
- Uptime monitoring is active (UptimeRobot or equivalent) before launch

---

**US-04 — Recruiter Contact Action**
_As a recruiter who has decided I want to reach out, I want to find clear role preferences, contact method, and location/time zone in under 5 seconds, so I can take action immediately while I still have this page open._

Acceptance criteria:

- A "For Recruiters" block is accessible from the nav or hero without scrolling
- Block explicitly states: role types sought, location/time zone, preferred contact method, and resume link
- A LinkedIn URL is included as a fallback
- Contact email or form is reachable in one click from the "For Recruiters" block

---

**US-05 — Mobile Screening**
_As a recruiter reviewing candidates on my phone between meetings, I want the portfolio to load fast and be easy to navigate on a small screen, so I can make a screening decision without having to switch to a desktop._

Acceptance criteria:

- LCP < 1.5s on mobile 4G (Lighthouse / PageSpeed)
- All project cards and nav elements are touch-friendly (≥ 44px touch targets)
- No horizontal scroll or layout overflow at 375px

---

**US-06 — GitHub Credibility Check**
_As a technical hiring manager who clones and reads source code before advancing candidates, I want to find clean, well-structured repos with informative READMEs and meaningful commit histories, so I can quickly assess code quality and ownership._

Acceptance criteria:

- Each featured project GitHub link resolves to a public repo
- README contains: project description, setup instructions, and a short architecture/decisions section
- Commit history shows ≥ 15 commits, with ≥ 3 meaningfully named commits visible in the top 10, spanning at least 2 weeks of activity (no single "initial commit" dumps)
- No copy-paste code patterns or unexplained large code blocks without prior commit context
- GitHub profile has no public repos with < 5 commits or no README (archived or deleted)

---

**US-07 — Stack Relevance Filter**
_As a recruiter searching for a specific stack (e.g., React + Node + AI integrations), I want to quickly scan the portfolio and confirm the developer has shipped projects using those technologies, so I can match them to an open role without reading every case study._

Acceptance criteria:

- Technology tags are visible on each project card without hovering or clicking
- A skills/tech section (or tag system) on the homepage allows instant stack scanning
- Each tag ideally links to a project that uses that technology
- At minimum 2 of 3–4 featured projects share a primary technology, demonstrating depth rather than breadth-chasing

---

**US-08 — Cold-Read Validation (New in v2.0)**
_As the portfolio owner preparing to share my site with recruiters, I want to verify that a technical peer can accurately describe my role and name a featured project after 60 seconds, so I know the recruiter-facing signal is clear before I start sending the link._

Acceptance criteria:

- Portfolio URL shared with 2–3 technical contacts without context
- Each contact asked: "After 60 seconds, what do I do and which project stood out?"
- All contacts accurately describe the developer's role and name at least one project with its problem or tech
- Any failure triggers a revision of hero copy or project framing before proceeding to Phase 3

---

## Out of Scope

The following are explicitly excluded from the current version to maintain focus and avoid scope creep:

- **Client / freelance positioning:** Copy, structure, and pricing sections optimized for attracting freelance project clients
- **Blog or content marketing engine:** Multi-post editorial blog, RSS feed, content calendar, or SEO-driven publishing strategy
- **Social / community features:** Comments, likes, follower count, sharing widgets
- **Multi-language support:** Internationalization (i18n) or translated content
- **Authentication / protected pages:** Login-gated portfolio sections, client portals
- **E-commerce or service purchasing:** Booking flows, invoicing, Stripe integration
- **Admin CMS or content editor:** WYSIWYG back-end for editing projects without code changes
- **Portfolio-as-a-platform features:** User accounts, multi-user portfolios, template marketplace
- **Video production:** Recorded showreel, YouTube-style case study walkthroughs
- **Accessibility beyond WCAG AA:** WCAG AAA certification, assistive technology testing beyond keyboard nav
- **The portfolio site's own codebase as a featured project:** Building an impressive portfolio site is not a substitute for impressive projects behind it

---

## Risks and Mitigations

| Risk                                                         | Likelihood | Impact | Mitigation                                                                                                                                                                                  |
| ------------------------------------------------------------ | ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Live demos go down between recruiter visits                  | High       | High   | UptimeRobot monitoring required before Phase 3; stable hosting for project demos (Vercel/Netlify/Render); portfolio site on GitHub Pages; "last verified" date badge on project cards       |
| Portfolio looks like every other developer portfolio         | High       | Medium | Differentiate through specific, outcome-driven copy and case study depth — not visual flourishes; avoid icon-in-circle patterns and 3-column feature grids; enforce anti-pattern guardrails |
| Tutorial or clone projects in the featured set               | High       | High   | Hard launch gate — zero tutorial/clone projects permitted. Enforced in Phase 1 review before any public sharing                                                                             |
| Case studies too long for recruiter time budget              | Medium     | High   | Dual-layer structure (TL;DR + deep-dive) required by US-02 AC; TL;DR block must be fully informative on its own                                                                             |
| Projects show technology tourism (too many unrelated stacks) | Medium     | High   | Phase 1 gate: at least 2 of 3–4 projects share a primary technology. Stack coherence check before launch                                                                                    |
| Unclear individual contribution on team projects             | Medium     | High   | Case study AC requires explicit callout of personal contributions on any collaborative project                                                                                              |
| Abandoned or low-commit repos visible on GitHub profile      | Medium     | High   | GitHub audit in Phase 1: archive/delete all repos with < 5 commits or no README before launch                                                                                               |
| Portfolio site itself becomes the most impressive project    | High       | Medium | P0 rule: portfolio site code not linked from project section; P2 features gated until P0/P1 metrics validate                                                                                |
| AI-generated-looking copy undercuts credibility              | Medium     | Medium | Write all copy in specific, first-person voice grounded in actual experience; avoid: "passionate about," "empowering," "all-in-one," "unlock the power of"                                  |
| Broken GitHub links or private repos                         | Medium     | High   | Full link audit in Phase 2 QA; all featured repos must be public before launch                                                                                                              |
| Overbuilding P2 features before P0/P1 are validated          | High       | Medium | P2 is explicitly gated on Phase 3 qualitative + quantitative metrics passing                                                                                                                |
| Qualitative cold-read test fails before recruiter sharing    | Low        | High   | Build cold-read test into Phase 3 as a hard gate; if any contact can't name a project, revise hero and project framing before sharing publicly                                              |

---

## Timeline and Milestones

### Phase 1 — Foundation and Anti-Pattern Audit (Week 1–2)

> **Gate:** All anti-pattern guardrails must pass before moving to Phase 2.

- [ ] Audit all candidate projects — disqualify any tutorial clone or course assignment
- [ ] Finalize 3–4 featured projects; confirm each solves a real, self-identified problem
- [ ] Confirm all featured projects have live, stable deployments (or deploy them now)
- [ ] GitHub audit: archive/delete all repos with < 5 commits or no README; verify commit history on featured repos meets the ≥ 15 commits / 2+ weeks criteria
- [ ] Verify stack coherence: ≥ 2 featured projects share a primary technology
- [ ] Write hero headline and outcome statement (specific, first-person, no generic phrases)
- [ ] Set up Astro + Tailwind v4 project scaffold
- [ ] Configure GitHub Pages deploy (Actions workflow, `dist/` publish)
- [ ] Write and QA all project card content (name, problem, stack, outcome, demo link)
- [ ] ✅ Anti-pattern gate review before proceeding

### Phase 2 — Depth and QA (Week 3–4)

- [ ] Write TL;DR blocks for all featured projects (problem / decision / outcome in 3 lines)
- [ ] Write full case study pages for all featured projects (both layers: TL;DR + deep-dive)
- [ ] Ensure individual contributions are explicitly called out on any collaborative projects
- [ ] Ensure each case study includes at least one "chose X over Y because Z" rationale
- [ ] Clean up GitHub repos: README, commit history, architecture notes
- [ ] Add "For Recruiters" section: roles sought, location/time zone, contact method, resume link (P1, required)
- [ ] Add About section, resume PDF download, and tech stack section (P1)
- [ ] Configure UptimeRobot monitoring on all featured demo links
- [ ] Mobile QA pass: test at 375px, fix all overflow and touch issues
- [ ] Performance audit: Lighthouse run, fix LCP and accessibility issues
- [ ] Full link audit: all demo and GitHub links resolve correctly; all featured repos are public

### Phase 3 — Qualitative Validation and Launch (Week 5)

> **Gate:** Qualitative cold-read test must pass before public sharing.

- [ ] Cold-read test: share URL with 2–3 technical contacts, ask "what do I do and which project stood out after 60 seconds?" — all must answer correctly
- [ ] Revise hero copy or project framing if cold-read test fails; re-test
- [ ] Install Plausible or Fathom analytics (P2, feature #16)
- [ ] Add Open Graph metadata and per-page `<title>` / `<meta description>` tags (P2)
- [ ] ✅ Qualitative gate passes
- [ ] Share URL in LinkedIn bio, GitHub profile, and email signature
- [ ] Monitor quantitative success metrics for 2 weeks

### Phase 4 — Iteration and P2 (Week 6+)

> **Gate:** Only begin P2 features after Phase 3 metrics are healthy (≥ 15% recruiter-to-outreach rate or equivalent signal).

- [ ] Review analytics: where are recruiter sessions dropping off?
- [ ] Refine the lowest-converting project case study
- [ ] If interview rate is healthy but depth conversations are rare → evaluate AI chatbot (P2, feature #13)
- [ ] If front-end craft is undersignaled → add one scroll-based interactive moment (P2, feature #14)
- [ ] Consider adding the technical blog post (P2, feature #12) based on engagement data

---

_This PRD is a living document. Update success metrics and timelines as real recruiter engagement data becomes available._
