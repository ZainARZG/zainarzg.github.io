---
layout: page
title: Articles
permalink: /blog/
---
<div class="rv">
  <p class="section-tag">04 — Reflective Writing</p>
  <h1>My CE journey — <em>in my own words.</em></h1>
  <p style="color:var(--text-muted);max-width:560px;font-size:.95rem;margin-bottom:2.5rem;font-weight:300;">{{ site.posts | size }} reflective essays — organized into semester folders. Pick a semester to explore.</p>
</div>

<div class="folder-grid">
  {% for i in (1..9) %}
    {% assign sem_posts = site.posts | where: "semester", i | sort: "article_num" %}
    {% capture sem_label %}Semester {{ i }}{% endcapture %}
    {% capture sem_subtitle %}{% endcapture %}
    {% capture sem_icon %}{% endcapture %}
    {% capture sem_color %}{% endcapture %}

    {% if i == 1 %}
      {% assign sem_subtitle = "Foundations — PF, Calculus & Physics" %}
      {% assign sem_icon = "01" %}
      {% assign sem_color = "var(--accent)" %}
    {% elsif i == 2 %}
      {% assign sem_subtitle = "Systems — DBS, OOP & DLD" %}
      {% assign sem_icon = "02" %}
      {% assign sem_color = "var(--accent2)" %}
    {% elsif i == 9 %}
      {% assign sem_label = "Semester 9 — Beyond the Classroom" %}
      {% assign sem_subtitle = "Hostel, sports, gym & campus life" %}
      {% assign sem_icon = "09" %}
      {% assign sem_color = "var(--accent3)" %}
    {% else %}
      {% assign sem_icon = i | prepend: '0' | slice: -2, 2 %}
      {% assign sem_color = "var(--text-muted)" %}
    {% endif %}

    <a href="/blog/semester-{{ i }}/" class="folder-card" style="--folder-accent: {{ sem_color }};">
      <div class="folder-icon">{{ sem_icon }}</div>
      <div class="folder-body">
        <h3 class="folder-title">{{ sem_label }}</h3>
        {% if sem_subtitle != "" %}
          <p class="folder-subtitle">{{ sem_subtitle }}</p>
        {% endif %}
        <span class="folder-count">
          {% if sem_posts.size > 0 %}
            {{ sem_posts.size }} {% if sem_posts.size == 1 %}essay{% else %}essays{% endif %}
          {% else %}
            Coming soon
          {% endif %}
        </span>
      </div>
      <span class="folder-arrow">→</span>
    </a>
  {% endfor %}
</div>

{% comment %}
Tag filters remain for the individual semester pages.
{% endcomment %}
