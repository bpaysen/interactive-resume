# Ben Paysen — Interactive Resume

A single-page interactive résumé built from scratch as an early React portfolio and
modernized as V2 while preserving its original interaction and design language.

The approved product, content, and design decisions live in
[docs/INTERACTIVE_RESUME_V2.md](docs/INTERACTIVE_RESUME_V2.md), which is the source
of truth for this project.

## Stack

- React 18
- Vite 8 (Rolldown build, oxc transform, Lightning CSS minification)
- Hand-written modern CSS — grid, flexbox, `clamp()`, `svh` units
- No UI framework, no CSS-in-JS, no routing library, no scroll library

Navigation uses native anchor links and CSS `scroll-behavior`. All motion is gated
behind `prefers-reduced-motion`.

## Local development

Install dependencies (the repository ships a Yarn lockfile):

```bash
yarn install
```

Start the dev server:

```bash
yarn dev
```

Produce and inspect a production build:

```bash
yarn build && yarn preview
```

The production build is written to `dist/`, which is git-ignored.

## Deployment

Deployed to Vercel from the default branch. Vercel auto-detects Vite, so no
`vercel.json` is required.

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Install command | `yarn install` |
| Build command | `yarn build` |
| Output directory | `dist` |
| Node version | 20.x or 22.x |

The site is fully static, has no environment variables, and needs no rewrite rules
because it does not use client-side routing.

## Project layout

```
index.html               Vite entry document
src/index.jsx            React root
src/App.jsx              Page shell, hero, section composition
src/Components/          Section, Navbar, JumpButton, ContactLinks
src/Profile.jsx          Profile section
src/ProfileSub.jsx       Animated identity interstitial
src/Experience.jsx       Career timeline and education
src/Abilities.jsx        Capabilities and selected technologies
src/Gallery.jsx          Current and earlier project cards
src/App.css              All layout and section styling
src/index.css            Document-level base styles
public/                  Static assets served from the site root
```

## Content changes

Section copy is stored as plain data at the top of each section component. Update
those arrays rather than editing markup, and keep changes aligned with the approved
decisions in `docs/INTERACTIVE_RESUME_V2.md`.
