# Syed Muhammad Zain

This repository powers a simple personal site built with Jekyll. The site is structured around a short homepage, a posts index, and reusable post layouts so new writing can be added without editing multiple pages.

## Site Structure

- `index.html` contains the homepage.
- `blog.html` lists all posts automatically.
- `about.html` and `contact.html` are kept short and stable.
- `_posts/` contains all published posts.
- `posts/` keeps lightweight redirects for older article URLs.
- `_layouts/` contains the shared page and post templates.
- `_includes/post-card.html` renders each post preview.
- `assets/css/portfolio.css` contains the theme system and site styling.
- `assets/js/site.js` handles theme switching and tag filtering.
- `templates/post-template.md` is the reusable template for new posts.

## Adding a New Post

1. Copy `templates/post-template.md`.
2. Paste it into `_posts/`.
3. Rename the file using the format `YYYY-MM-DD-your-post-slug.md`.
4. Replace the front matter fields and write the post content.
5. Commit and push.

The new post will appear automatically on the posts page and in the recent posts section on the homepage.

## Theme

The site supports light and dark themes.

- On first visit, it follows the system color preference.
- The theme button in the header switches between light and dark.
- The chosen theme is saved in `localStorage`.
