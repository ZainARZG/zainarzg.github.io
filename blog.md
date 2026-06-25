---
layout: page
title: Articles
permalink: /blog/
---
<div class="rv">
  <p class="section-tag">04 — Reflective Writing</p>
  <h1>My CE journey — <em>in my own words.</em></h1>
  <p style="color:var(--text-muted);max-width:560px;font-size:.95rem;margin-bottom:2.5rem;font-weight:300;">{{ site.posts | size }} reflective essays about my first year in Computer Engineering — organized by semester.</p>
</div>

<div class="tag-filters" id="tag-filters"></div>

{% assign sem1 = site.posts | where: "semester", 1 | sort: "article_num" %}
{% assign sem2 = site.posts | where: "semester", 2 | sort: "article_num" %}
{% assign sem3 = site.posts | where: "semester", 3 | sort: "article_num" %}
{% assign sem4 = site.posts | where: "semester", 4 | sort: "article_num" %}
{% assign sem5 = site.posts | where: "semester", 5 | sort: "article_num" %}
{% assign sem6 = site.posts | where: "semester", 6 | sort: "article_num" %}
{% assign sem7 = site.posts | where: "semester", 7 | sort: "article_num" %}
{% assign sem8 = site.posts | where: "semester", 8 | sort: "article_num" %}
{% assign sem9 = site.posts | where: "semester", 9 | sort: "article_num" %}

<!-- SEMESTER 1 -->
{% if sem1.size > 0 %}
<div class="semester-section" data-semester="1">
  <div class="semester-heading">
    <div class="semester-heading-line"></div>
    <span class="semester-label">Semester 1</span>
    <span class="semester-subtitle">Foundations — Programming Fundamentals, Calculus &amp; Physics</span>
  </div>
  <div class="blog-grid">
  {% for post in sem1 %}
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
</div>
{% endif %}

<!-- SEMESTER 2 -->
{% if sem2.size > 0 %}
<div class="semester-section" data-semester="2">
  <div class="semester-heading">
    <div class="semester-heading-line"></div>
    <span class="semester-label">Semester 2</span>
    <span class="semester-subtitle">Systems — Database Systems, OOP &amp; Digital Logic Design</span>
  </div>
  <div class="blog-grid">
  {% for post in sem2 %}
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
</div>
{% endif %}

<!-- SEMESTERS 3-8 (placeholder for future semesters) -->
{% if sem3.size > 0 %}
<div class="semester-section" data-semester="3">
  <div class="semester-heading">
    <div class="semester-heading-line"></div>
    <span class="semester-label">Semester 3</span>
  </div>
  <div class="blog-grid">
  {% for post in sem3 %}
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
</div>
{% endif %}

{% if sem4.size > 0 %}
<div class="semester-section" data-semester="4">
  <div class="semester-heading">
    <div class="semester-heading-line"></div>
    <span class="semester-label">Semester 4</span>
  </div>
  <div class="blog-grid">
  {% for post in sem4 %}
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
</div>
{% endif %}

{% if sem5.size > 0 %}
<div class="semester-section" data-semester="5">
  <div class="semester-heading">
    <div class="semester-heading-line"></div>
    <span class="semester-label">Semester 5</span>
  </div>
  <div class="blog-grid">
  {% for post in sem5 %}
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
</div>
{% endif %}

{% if sem6.size > 0 %}
<div class="semester-section" data-semester="6">
  <div class="semester-heading">
    <div class="semester-heading-line"></div>
    <span class="semester-label">Semester 6</span>
  </div>
  <div class="blog-grid">
  {% for post in sem6 %}
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
</div>
{% endif %}

{% if sem7.size > 0 %}
<div class="semester-section" data-semester="7">
  <div class="semester-heading">
    <div class="semester-heading-line"></div>
    <span class="semester-label">Semester 7</span>
  </div>
  <div class="blog-grid">
  {% for post in sem7 %}
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
</div>
{% endif %}

{% if sem8.size > 0 %}
<div class="semester-section" data-semester="8">
  <div class="semester-heading">
    <div class="semester-heading-line"></div>
    <span class="semester-label">Semester 8</span>
  </div>
  <div class="blog-grid">
  {% for post in sem8 %}
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
</div>
{% endif %}

<!-- SEMESTER 9 — Beyond the Classroom -->
{% if sem9.size > 0 %}
<div class="semester-section" data-semester="9">
  <div class="semester-heading">
    <div class="semester-heading-line"></div>
    <span class="semester-label">Semester 9 — Beyond the Classroom</span>
    <span class="semester-subtitle">Hostel life, sports, gym, movie nights &amp; everything in between</span>
  </div>
  <div class="blog-grid">
  {% for post in sem9 %}
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
</div>
{% endif %}
