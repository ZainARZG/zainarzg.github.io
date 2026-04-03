# Syed Muhammad Zain

This repository powers a personal site built with Jekyll. The site is structured around a short homepage, a posts index, stable profile pages, and reusable post layouts so new writing can be added without editing multiple pages.

## Site Structure

- `index.html` contains the homepage.
- `blog.html` lists all posts automatically.
- `about.html` and `contact.html` are the stable profile pages.
- `resume.html` is the browser-friendly resume page.
- `_posts/` contains all published posts.
- `_data/profile.yml` stores the stable profile information.
- `_data/projects.yml` stores featured project information.
- `posts/` keeps lightweight redirects for older article URLs.
- `_layouts/` contains the shared page and post templates.
- `_includes/post-card.html` and `_includes/project-card.html` render reusable cards.
- `assets/css/portfolio.css` contains the theme system and site styling.
- `assets/js/site.js` handles theme switching, mobile navigation, and tag filtering.
- `templates/post-template.md` is the reusable template for new posts.

## Adding a New Post

1. Copy `templates/post-template.md`.
2. Paste it into `_posts/`.
3. Rename the file using the format `YYYY-MM-DD-your-post-slug.md`.
4. Replace the front matter fields, including the optional `image` path if you want a custom cover.
5. Write the post content and keep it at 400 to 500 words or more.
5. Commit and push.

The new post will appear automatically on the posts page and in the recent posts section on the homepage.

## Theme

The site supports light and dark themes.

- On first visit, it follows the system color preference.
- The theme button in the header switches between light and dark.
- The chosen theme is saved in `localStorage`.
