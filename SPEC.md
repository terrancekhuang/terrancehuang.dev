# Personal Portfolio Site (terrancehuang.dev)

## Context

This repo (`terrancehuang.dev`) is currently empty aside from a placeholder README. The user imported a design spec from Claude Design (`Portfolio.dc.html`) — a single-page portfolio mockup (hero, one featured-project case study, two-column experience/extracurriculars, contact) with placeholder content for a fictional "Alex Rivera." The goal is to implement this design as a real, working personal site for Terrance Huang, built on a real tech stack, populated with his real resume/project content, and deployable to his own Hetzner VPS via CI/CD.

Through interview, the following decisions were locked in:
- **Stack**: Vite + React (TypeScript).
- **Scope**: single page only, matching the design's structure exactly — no blog, no multi-project grid, no dark mode toggle.
- **Content**: real content, sourced from his resume (`~/Resume/Resume.pdf`) and follow-up answers, not placeholders.
- **Deploy**: static build (`vite build`) + nginx on his Hetzner VPS, automated via GitHub Actions (build + rsync/SSH deploy on push to `main`). Actual VPS nginx/SSH setup happens outside this session — this plan produces the workflow and a reference nginx config for him to apply.
- **Accent color**: blue, `oklch(0.55 0.18 250)` (the design's default).

## Content mapping (design slot → real content)

- **Hero**: "Terrance Huang" — bio reflects that he already graduated RIT (May 2026) and holds a full-time Junior Developer role at Citco Fund Services (starting Aug 2026), not a job-seeking framing.
- **Selected work**: "Bible Books Tracker" (replacing the placeholder "Pathfinder" project) — full description, tech stack, and impact as dictated by the user. Both links included: "Live demo" → `https://bible.terrancehuang.dev` and "GitHub" → `https://github.com/terrancekhuang/bible-books-tracker`. The diagram placeholder box from the design is kept as a generic visual placeholder (labeled for this project) since no screenshot was provided — easy to swap for a real screenshot later.
- **Experience** (chronological, most recent first):
  1. Junior Developer — Citco Fund Services (USA) Inc., August 2026–Present
  2. Software Engineering Intern — ElevatEd School, January 2025–August 2025
  3. Software Engineer Intern — Citco Fund Services (USA) Inc., June 2024–August 2024
- **Extracurriculars**: Cadet, Army ROTC @ RIT, August 2024–May 2026.
- **Contact**: `terrancehuang@proton.me`, `github.com/terrancekhuang`, `linkedin.com/in/terrancehuang`. No phone number (matches design, which only lists email/GitHub/LinkedIn).

## Implementation

### 1. Scaffold Vite + React + TS project at repo root
- `npm create vite@latest . -- --template react-ts` (into the existing repo root, alongside README.md).
- Add `.gitignore` (node_modules, dist, .env).

### 2. Component structure (mirrors the design's sections 1:1)
- `src/App.tsx` — composes the page: `<Hero />`, `<SelectedWork />`, `<Experience />`, `<Contact />` inside the shared `<main>` container.
- `src/components/Hero.tsx` — name, bio, "View work" / "Contact" actions.
- `src/components/SelectedWork.tsx` — the Bible Books Tracker case study card.
- `src/components/Experience.tsx` — two-column grid: Experience list + Extracurriculars list (collapses to one column on mobile, per the design's `.cols-row` rule).
- `src/components/Contact.tsx` — email + social links.
- `src/data/content.ts` — plain exported constants for all real copy above (name, bio, experience entries, project details, contact links) so content is separate from markup and easy to edit later.

### 3. Styling
- `src/index.css` — global styles ported from the design's `<style>` block: `Inter` font (Google Fonts, same `<link>` tags added to `index.html`), background `#fbfaf8`, base text color, link underline-on-hover, and the same responsive breakpoint (`max-width: 640px`) rules for hero title size, section padding, two-column collapse, and hero action stacking.
- Accent color as a CSS custom property (`--accent: oklch(0.55 0.18 250)`) applied to links in the project card and contact section, matching the design's `{{ accentColor }}` usage.
- Reuse the design's exact layout values (max-width 760px content column, spacing, font sizes) rather than inventing a new visual style.

### 4. Deployment
- `.github/workflows/deploy.yml`: on push to `main` — `npm ci`, `npm run build`, then rsync `dist/` to the VPS over SSH using repo secrets (`VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`, `VPS_DEPLOY_PATH`). Note in a comment which secrets need to be added under repo Settings → Secrets.
- `deploy/nginx.conf.example` — reference nginx server block (static file serving from the deploy path, gzip, SPA-not-needed single `index.html`, suggested TLS via certbot) for the user to adapt and install on the VPS themselves — this session cannot reach the VPS directly.

## Verification
- `npm run dev` — visually check the page against the design at desktop and mobile widths (resize below 640px to confirm the responsive rules from the original `.dc.html` still apply: stacked hero actions, single-column experience/extracurriculars, smaller hero title).
- `npm run build && npm run preview` — confirm the production build renders identically.
- `tsc --noEmit` (via `npm run build`, which Vite's TS template wires in) — confirm no type errors.
- Manually verify all links: mailto, GitHub, LinkedIn, and the Bible Books Tracker live demo link all point to the right destinations.
- GitHub Actions workflow: confirm it's syntactically valid (`act` not required); actual deploy run requires the user to add the VPS secrets and push to `main`.
