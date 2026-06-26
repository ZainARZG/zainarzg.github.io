---
layout: page
title: Articles
permalink: /blog/
---
<div class="rv">
  <p class="section-tag">04 — Reflective Writing</p>
  <h1>My CE journey — <em>in my own words.</em></h1>
  <p style="color:var(--text-muted);max-width:560px;font-size:.95rem;margin-bottom:2.5rem;font-weight:300;">{{ site.posts | size }} reflective essays — organized into semester folders. Pick a folder to explore.</p>
</div>

<div class="folder-grid">

  {% assign sem1 = site.posts | where: "semester", 1 | sort: "article_num" %}
  <a href="/blog/semester-1/" class="folder-card" style="--folder-accent: var(--accent);">
    <div class="folder-icon">01</div>
    <div class="folder-body">
      <h3 class="folder-title">Semester 1</h3>
      <p class="folder-subtitle">Foundations — PF, Calculus &amp; Physics</p>
      <span class="folder-count">{{ sem1.size }} essays</span>
    </div>
    <span class="folder-arrow">→</span>
  </a>

  {% assign sem2 = site.posts | where: "semester", 2 | sort: "article_num" %}
  <a href="/blog/semester-2/" class="folder-card" style="--folder-accent: var(--accent2);">
    <div class="folder-icon">02</div>
    <div class="folder-body">
      <h3 class="folder-title">Semester 2</h3>
      <p class="folder-subtitle">Systems — DBS, OOP &amp; DLD</p>
      <span class="folder-count">{{ sem2.size }} essays</span>
    </div>
    <span class="folder-arrow">→</span>
  </a>

  {% assign hostel_posts = site.posts | where: "location", "hostel" | sort: "article_num" %}
  <a href="/blog/hostel/" class="folder-card" style="--folder-accent: var(--accent3);">
    <div class="folder-icon">BC</div>
    <div class="folder-body">
      <h3 class="folder-title">Beyond the Classroom</h3>
      <p class="folder-subtitle">Hostel life, sports, gym &amp; campus stories</p>
      <span class="folder-count">{{ hostel_posts.size }} stories</span>
    </div>
    <span class="folder-arrow">→</span>
  </a>
</div>
