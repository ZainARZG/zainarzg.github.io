---
layout: page
title: Articles
permalink: /blog/
---
<div class="rv">
  <p class="section-tag">04 — Reflective Writing</p>
  <h1>My CE journey — <em>in my own words.</em></h1>
  <p style="color:var(--text-muted);max-width:560px;font-size:.95rem;margin-bottom:2.5rem;font-weight:300;">{{ site.posts | size }} reflective essays about my first year in Computer Engineering — from late-night debugging to the trips that shaped me.</p>
</div>

<div class="tag-filters" id="tag-filters"></div>

<div class="blog-grid" id="blog-grid">
  {% assign posts_sorted = site.posts | sort: "article_num" %}
  {% for post in posts_sorted %}
  <a href="{{ post.url | relative_url }}" class="blog-card rv" data-tags="{{ post.tags | join: ',' }}" style="transition-delay:{{ forloop.index0 | times: 0.06 }}s">
    {% if post.cover_image %}
    <div class="blog-card-img-wrap">
      <img class="blog-card-img" src="{{ post.cover_image }}" alt="{{ post.cover_alt | default: post.title }}" loading="lazy"/>
    </div>
    {% endif %}
    <div class="blog-card-body">
      <div class="blog-card-tags">
        {% for tag in post.tags %}<span class="blog-tag">{{ tag }}</span>{% endfor %}
      </div>
      <h3 class="blog-card-title">{{ post.title }}</h3>
      <p class="blog-card-excerpt">{{ post.excerpt | strip_html | truncatewords: 30 }}</p>
    </div>
    <div class="blog-card-footer">
      <span class="blog-card-date">{{ post.date | date: "%B %Y" }}</span>
      <span class="blog-card-arrow">→</span>
    </div>
  </a>
  {% endfor %}
</div>
