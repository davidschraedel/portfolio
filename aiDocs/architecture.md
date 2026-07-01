# Architecture

How this site is structured — data flow, file responsibilities, and notable design decisions.

**Last updated:** July 1, 2026

---

## Site map

Information architecture follows the PRD story beats (layout is split across routes):

| Beat     | Route / location              | Source                                      |
| -------- | ----------------------------- | ------------------------------------------- |
| Hook     | Hero in layout (every page)   | `site.ts` → `profile.json` `hero`, `person` |
| Story    | `/about`                      | `profile.json` `about`, `timeline`          |
| Projects | `/` (home)                    | `projects.ts` → featured entries            |
| Contact  | Footer in layout (every page) | `site.ts` → `person`, `presence`            |

Nav links: **Featured Projects** (home) · **Story** (`/about`).

---

## Data layer

Three files handle runtime data. Only one is hand-edited.

```
profile.json          ← the only file a human edits
    ↓
site.ts               ← typed adapter; SiteConfig for person, hero, presence, links
projects.ts           ← maps profile projects + build-time image imports → Project[]
    ↓
components / pages    ← import from site.ts and projects.ts (see exception below)
```

### `profile.json` — single source of truth

The only hand-edited content file. Agents must not edit it. Contains:

| Key | What it holds |
| --- | --- |
| `person` | Name, email, location, timezone, `openToWork`, resume filename |
| `hero` | `contrastLead` and `professionalSentence` strings |
| `handshakeLine` | Optional CTA copy (loaded in `site.ts`; not yet rendered on the site) |
| `presence` | GitHub, LinkedIn, Substack URLs |
| `about` | `heading`, `paragraphs[]`, `images` placeholder |
| `timeline` | Array of `{ start, end?, label }` entries with ISO-date `start` |
| `projects` | Array with `objective`, `tradeOff`, stack, URLs, `featured`, `previewImageKey`, etc. |

`profile.json` is reusable across projects as a starting template — copy and refine per site.

### `site.ts` — typed adapter

Reads `profile.json` and re-exports values as the `SiteConfig` interface. Handles the `BASE_URL` prefix for `resumePath`. Most components import from `site.ts`, not directly from `profile.json`.

### `projects.ts` — derived runtime data

Maps `profile.json` projects to typed `Project[]` at build time. Appends what JSON cannot hold:

- `ImageMetadata` via `import.meta.glob("../assets/portfolio/*.png")` — keyed by `previewImageKey`
- The typed `Project` interface and `getProjectBySlug()` helper

**Adding a project:** one `profile.json` entry + a matching `.png` in `src/assets/portfolio/`.

**Display mapping:** `objective` → “Problem ·”, `tradeOff` → “Solution ·” in `ProjectShowcase`.

### Import convention exception

`about.astro` imports `profile.json` directly for `about` and `timeline` (not yet exposed through `site.ts`). Prefer `site.ts` / `projects.ts` for new work.

---

## Layout shell

`BaseLayout.astro` wraps every page. It owns the full HTML document, the rounded container shell, and the persistent Hero, Nav, and Footer. Pages only control the `<main>` slot.

```
BaseLayout
├── <head>   title, description, favicon, ViewTransitions
├── <header> Hero only (rounded top)
├── Nav      sticky; outside header
├── <main>   <slot />
└── Footer   contact links (rounded bottom)
```

`Hero` renders name and hero copy. `Nav` renders route links with `aria-current="page"`. Neither is imported by individual pages.

---

## Pages and components

Pages are thin: frontmatter prepares data, template composes components.

| Page | What it renders |
| --- | --- |
| `index.astro` | Featured projects grid (`featured: true`) via `ProjectShowcase` |
| `about.astro` | About paragraphs + timeline from `profile.json` |
| `projects/[slug].astro` | Per-project stub (“coming soon”) with preview image and outbound links |
| `404.astro` | Fallback using `BaseLayout` |

**Active components:** `Hero`, `Nav`, `Footer`, `SectionHeading`, `ProjectShowcase`.

**Reserved for future case studies (unused):** `CaseStudyTldr`, `MyRole`, `ProductionThinking`.

---

## Case studies (future)

`content.config.ts` defines a typed Astro content collection schema for long-form project MDX. **`src/content/projects/` is empty** — prior placeholder MDX was removed. `[slug].astro` reads from `projects.ts` and shows a stub card. “Read more…” links on project cards are commented out until real case study content exists.

---

## Styling — dim mode

This site does not use a true dark mode. The `dark:` Tailwind variant activates a **dim mode**: a warm parchment palette where backgrounds step down slightly in brightness but remain light-on-light. The `--color-dim-page` token is `#e9e6df` (warm off-white), not a dark background. Do not “fix” this into a true dark theme — the choice is intentional.

Token prefixes:

- `off-white`, `dark-moss`, `interior-designer`, `sepia`, `skin` — base light mode
- `dim-page`, `dim-surface`, `dim-elevated`, `dim-muted`, `dim-text-muted`, `dim-highlight`, `dim-gradient-*` — dim mode overrides

---

## Button system

Buttons use a composable class system defined in `@layer components` in `global.css`. Combine classes rather than writing one-off Tailwind strings for interactive elements.

| Class | Role |
| --- | --- |
| `btn` | Base: sizing, flex centering, border-radius, focus ring |
| `btn-soft` | Text color + focus color for light-surface buttons |
| `btn-soft-default` | Hover: sepia fill + white text |
| `btn-footer` | White text with `mix-blend-soft-light`; hover drops blend |
| `btn-linkedin` / `btn-github` / `btn-substack` / `btn-gmail` | Brand hover colors |

---

## Build and deploy

- Static output via `astro build` — no server runtime
- Site URL: `https://davidschraedel.github.io/portfolio/` (`base: "/portfolio/"` in `astro.config.mjs`)
- GitHub Pages deploy via `.github/workflows/deploy.yml` on push to `staging`
- `BASE_URL` comes from Astro config; use `import.meta.env.BASE_URL` for internal asset paths (see `resumePath` in `site.ts`)
- Resume PDF lives in `public/resume.pdf`
