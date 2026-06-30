# Architecture

How this site is structured — data flow, file responsibilities, and notable design decisions.

**Last updated:** June 29, 2026

---

## Data layer

Three files handle all data. Only one is hand-edited.

```
profile.json          ← the only file a human edits
    ↓
site.ts               ← typed adapter; re-exports profile.json as SiteConfig
projects.ts           ← runtime data (image imports) + Project interface
    ↓
components / pages    ← import from site.ts and projects.ts, never from profile.json directly
```

### `profile.json` — single source of truth

The only hand-edited content file. Contains:

| Key | What it holds |
| --- | --- |
| `person` | Name, email, location, timezone, `openToWork`, resume filename |
| `hero` | `contrastLead` and `professionalSentence` strings |
| `handshakeLine` | The footer CTA sentence |
| `presence` | GitHub, LinkedIn, Substack URLs |
| `about` | `heading`, `paragraphs[]`, `images` placeholder |
| `timeline` | Array of `{ start, end?, label }` entries with ISO-date `start` |
| `projects` | Array with `objective` and `tradeOff` per project (content fields) |

`profile.json` is reusable across projects as a starting template — copy and refine per site.

### `site.ts` — typed adapter

Reads `profile.json` and re-exports values as the `SiteConfig` interface. Handles the `BASE_URL` prefix for `resumePath`. Components always import from `site.ts`, not directly from `profile.json`. This keeps `profile.json` format-agnostic and centralizes any derivation logic.

### `projects.ts` — runtime data

Holds everything that cannot live in plain JSON:

- `ImageMetadata` imports (Astro's `<Image />` requires imported assets, not string paths)
- The typed `Project` interface
- `problem`, `keyDecision`, `outcome` — the display fields used by `ProjectShowcase`
- `getProjectBySlug()` helper

**Note on divergence:** `profile.json` also has a `projects` array with `objective`/`tradeOff` fields. These are D0 content drafts and are not yet consumed by any component. The roadmap goal is for `projects.ts` to become a derived re-export of `profile.json` (with image imports appended), eliminating the duplicate. Until that migration is complete, `projects.ts` is the authoritative runtime source.

---

## Layout shell

`BaseLayout.astro` wraps every page. It owns the full HTML document, the rounded container shell, and the persistent header (Hero + Nav) and Footer. Pages only control the `<main>` slot.

```
BaseLayout
├── <head>   title, description, ViewTransitions
├── <header> Hero + Nav  (always present, not per-page)
├── <main>   <slot />    (per-page content goes here)
└── Footer
```

`Hero` renders the name/tagline banner. `Nav` renders page links with `aria-current="page"` on the active route. Both are layout-level — they are not imported by individual pages.

---

## Pages

Pages are thin: frontmatter prepares data, template composes components.

| Page | What it renders |
| --- | --- |
| `index.astro` | Featured projects grid via `ProjectShowcase` |
| `about.astro` | About paragraphs + Timeline from `profile.json` |
| `projects/[slug].astro` | Case study from Astro content collection |
| `404.astro` | Fallback using `BaseLayout` |

---

## Content collections

Long-form case study content lives in `src/content/projects/` as MDX files with typed frontmatter validated by `content.config.ts`. The `[slug].astro` page fetches and renders them. New projects get a corresponding MDX file; no page file changes needed.

---

## Styling — dim mode

This site does not use a true dark mode. The `dark:` Tailwind variant activates a **dim mode**: a warm parchment palette where backgrounds step down slightly in brightness but remain light-on-light. The `--color-dim-page` token is `#e9e6df` (warm off-white), not a dark background. Do not "fix" this into a true dark theme — the choice is intentional.

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
- GitHub Pages deploy via `.github/workflows/deploy.yml` targeting the `staging` branch
- `BASE_URL` is set by the Astro config; use `import.meta.env.BASE_URL` for all internal asset paths (see `resumePath` in `site.ts`)
