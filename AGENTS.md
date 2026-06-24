# Repository Guidelines

## Project Overview

Personal portfolio website for **Syed Muhammad Zain** — BS Computer Engineering student at UET Lahore Campus Faisalabad (CGPA 3.91, 2nd highest in class, Honahaar Scholar). Built with **Jekyll** (static site generator), hosted on GitHub Pages at `zainarzg.github.io`.

The site functions as a living résumé: biography, skills inventory, academic project showcase (weather ML model), personal blog (11 reflective essays about first-year CE), identity page, and contact page.

Design is a dark-first cyberpunk/neon theme with light-mode alternative — all custom CSS, no UI framework.

---

## Architecture & Data Flow

```
_config.yml                ← Jekyll config (collections, defaults, permalinks, excludes)
_data/
  profile.yml              ← Personal info, education, quotes, goals
  projects.yml             ← Project entries (1 entry: weather ML forecasting)
_layouts/
  default.html             ← Base shell: header + content + footer + JS
  page.html                ← Extends default (standalone pages)
  post.html                ← Extends default (blog articles)
_includes/
  header.html              ← Nav bar, theme toggle, mobile menu
  footer.html              ← Footer credit line
  svg/*.svg                ← Cover illustrations for blog posts
_posts/*.md                ← Blog posts (15 essays, 2024-12 to 2025-03)
assets/
  css/style.css            ← All styles (249 lines), dark/light theme via CSS vars
  js/main.js               ← All JS (vanilla, ~150 lines, IIFE pattern)
  docs/project-report-pf-zain.pdf
```

**Data flow**: `_data/*.yml` → Liquid templates via `site.data.*` → rendered HTML in `_site/`. Editing `_data/profile.yml` propagates site-wide (name, CGPA, tagline, quotes, education all from data files).

---

## Key Directories

| Path | Purpose |
|------|---------|
| `_data/` | YAML data files driving site content |
| `_layouts/` | Jekyll layout templates (inheritance: default → page/post) |
| `_includes/` | Reusable partials: header, footer, SVG illustrations |
| `_includes/svg/` | 9 SVG illustrations referenced by blog posts via `cover_svg` frontmatter |
| `_posts/` | Blog post collection (15 posts, tagged, dated, ordered by `article_num`) |
| `assets/css/` | Single stylesheet with dark/light theme |
| `assets/js/` | Single vanilla JS file |
| `assets/images/` | Static images |
| `_site/` | Jekyll build output (generated, excluded from source) |

---

## Development Commands

```bash
# Serve locally with live reload (default: http://localhost:4000)
jekyll serve --livereload

# Build site
jekyll build

# Build with drafts visible
jekyll build --drafts

# Clean generated site
jekyll clean
```

**Runtime**: Requires Ruby + Jekyll + Bundler. No Node.js dependency — the JS is vanilla, no bundler.

---

## Code Conventions & Common Patterns

### Liquid Templating

- **Data references**: `site.data.profile.name`, `site.data.profile.education.cgpa`, `site.posts`
- **Relative URLs**: all internal links use `{% link … %}` or `| relative_url` filter
- **Theme toggle**: `data-theme` attribute on `<html>`, persisted in `localStorage`
- **SVG includes**: `{% include svg/home-train.svg %}` — each blog post sets `cover_svg` in frontmatter, matched to a file in `_includes/svg/`
- **Blog sorting**: Posts sorted by `article_num` (custom order, not reverse-chronological by date). `blog.md` uses `{% assign posts_sorted = site.posts | sort: "article_num" %}` then iterates `posts_sorted`.

### Frontmatter Conventions

**Pages**:
```yaml
---
layout: page
title: About
permalink: /about/
---
```

**Posts**:
```yaml
---
layout: post
title: "Title in Quotes"
date: 2025-02-15
article_num: 7            # custom sort key — determines blog display order
tags: [Tag1, Tag2, Tag3, DrBilalAhmad, MLwithDrBilalAhmad, MLProject]
cover_svg: reflection     # matches _includes/svg/reflection.svg
cover_image: "https://..." # Unsplash fallback image
cover_alt: "Alt text"
excerpt: "Short summary"
---
```

### CSS Architecture

- **CSS custom properties** for theming: `--bg`, `--text`, `--accent`, `--accent2`, `--accent3` (neon cyan, magenta, green)
- **Dark theme** is default (`[data-theme="dark"]`); light switched via `[data-theme="light"]`
- **Glow effects**: CSS shadow variables (`--glow-accent`, `--glow-accent2`, etc.)
- **Scanline overlay**: `--scanline` variable → `body::before` for CRT effect
- **Responsive**: mobile breakpoints with hamburger menu, grid layouts adapt

### JavaScript Patterns

- **Vanilla JS, no dependencies** — all code in a single IIFE per feature
- **Theme toggle**: reads/writes `data-theme` on `<html>`, persists to `localStorage`
- **Mobile menu**: toggle `active` class on menu + button
- **Scroll reveal**: `IntersectionObserver` on `.rv` elements, adds `.in` class
- **Blog tag filters**: dynamically creates tag buttons from `data-tags` attributes, filters `.blog-card` visibility
- **Cursor glow**: `mousemove` listener on `#cursor-glow`, hidden on touch devices
- **Smooth scroll**: intercepts `a[href^="#"]` anchors

### Error Handling / Edge Cases

- JS guards every DOM lookup with `if(!el)return` — no errors when element absent
- Theme toggle degrades gracefully if `#themeToggle` missing
- Cursor glow hidden on touch/pen devices (`pointer: coarse`)
- Blog tag filter section not rendered if no `.blog-card` elements

---

## Deployment

- **Hosting**: GitHub Pages on `zainarzg.github.io`
- **Build source**: `master` branch (Pages configured to build from `master`)
- **Workflow**: commit to `main`, then `git push origin main:master` to trigger Pages build
- **Build type**: legacy (no custom Actions workflow)

---

## Important Files

| File | What it controls |
|------|-----------------|
| `_config.yml` | Site title, URL, collections, defaults, exclude patterns (excludes `AGENTS.md`, `teachers-instructions.md`) |
| `_data/profile.yml` | All personal info — name, education, CGPA, location, quotes, goals |
| `_data/projects.yml` | Project showcase entries (add new projects here) |
| `assets/css/style.css` | Complete visual identity — colors, layout, responsive rules |
| `assets/js/main.js` | All interactive behavior — theme, menus, filters, animations |
| `index.md` | Homepage with hero section and quick-link cards |
| `blog.md` | Blog index with dynamic tag filtering, sorted by `article_num` |
| `_posts/` | Add new blog posts here with correct `article_num` to place in order |
| `AGENTS.md` | This file — repo guidelines (excluded from Jekyll build) |
| `teachers-instructions.md` | Teacher requirements & planning notes (excluded from Jekyll build) |
