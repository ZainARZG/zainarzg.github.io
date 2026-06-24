# Repository Guidelines

## Project Overview

Personal portfolio website for **Syed Muhammad Zain** — BS Computer Engineering student at UET Lahore Campus Faisalabad (CGPA 3.91, 2nd highest in class, Honahaar Scholar). Built with **Jekyll** (static site generator), hosted on GitHub Pages at `zainarzg.github.io`.

The site functions as a living résumé: biography, skills inventory, academic project showcase (weather ML model), personal blog (11 reflective essays about first-year CE), identity page, and contact page.

Design is a dark-first cyberpunk/neon theme with light-mode alternative — all custom CSS, no UI framework.

---

## Architecture & Data Flow

```
_config.yml                ← Jekyll config (collections, defaults, permalinks)
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
_posts/*.md                ← Blog posts (11 essays, 2024-12 to 2025-02)
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
| `_posts/` | Blog post collection (11 posts, tagged, dated) |
| `assets/css/` | Single stylesheet with dark/light theme |
| `assets/js/` | Single vanilla JS file |
| `assets/images/` | Static images (currently 1: `a.jpg`) |
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
- **Post listing**: `blog.md` iterates `{% for post in site.posts %}` with tag-filtering via JS

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
date: 2025-02-10
article_num: 8
tags: [Tag1, Tag2, Tag3]
cover_svg: home-train          # matches _includes/svg/home-train.svg
cover_image: "https://..."      # Unsplash fallback image
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

## Runtime/Tooling Preferences

- **Ruby + Jekyll**: static site generation, no Node.js build step
- **Hosting**: GitHub Pages (push to `main` auto-deploys)
- **Markdown**: kramdown with GFM input
- **No package manager** (no `package.json`, no `Gemfile` in source — Jekyll manages gems via system/gemfile at the Ruby level)
- **No CI config** — GitHub Actions not configured (Pages uses standard build)

---

## Testing & QA

- No automated test framework — this is a static site
- Verify locally: `jekyll build` completes without Liquid errors
- Check all `site.data.*` references resolve (typos in YAML keys produce silent empty outputs in Liquid)
- Verify blog tag taxonomy is consistent across posts
- Validate HTML output after build for broken relative links

---

## Important Files

| File | What it controls |
|------|-----------------|
| `_config.yml` | Site title, URL, collections, defaults, exclude patterns |
| `_data/profile.yml` | All personal info — name, education, CGPA, location, quotes, goals |
| `_data/projects.yml` | Project showcase entries (add new projects here) |
| `assets/css/style.css` | Complete visual identity — colors, layout, responsive rules |
| `assets/js/main.js` | All interactive behavior — theme, menus, filters, animations |
| `index.md` | Homepage with hero section and quick-link cards |
| `blog.md` | Blog index with dynamic tag filtering |
| `_posts/` | Add new blog posts here with correct date-based filename convention |
