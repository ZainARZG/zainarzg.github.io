---
layout: default
title: Home
---
<section class="hero">
  <div class="hero-bg-image">
    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=960&q=80"
         srcset="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=480&q=80 480w,
                 https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=960&q=80 960w,
                 https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80 1920w"
         sizes="100vw"
         alt="Digital network" loading="lazy"/>
  </div>
  <div class="hero-left">
    <div class="hero-tag">{{ site.data.profile.education.degree }} · {{ site.data.profile.education.university }} · {{ site.data.profile.education.semester }}</div>
    <h1 class="hero-name"><span class="first-name">Syed</span>Muhammad <span class="last-name">Zain</span></h1>
    <p class="hero-desc">From <strong>{{ site.data.profile.location.city }}, {{ site.data.profile.location.district }}</strong> — a city I love for everything it is, not what it isn't.<br/>A night-owl engineer who doesn't stop until it's <strong>right</strong>, not just done.<br/>Building toward one place: <strong>{{ site.data.profile.tagline }}</strong> in AI &amp; ML.</p>
    <div class="hero-cta">
      <a href="{{ '/about' | relative_url }}" class="btn btn-primary">About Me</a>
      <a href="{{ '/project' | relative_url }}" class="btn btn-outline">View My Work</a>
      <a href="{{ '/blog' | relative_url }}" class="btn btn-outline">Read My Writing</a>
    </div>
  </div>
  <div class="hero-right">
    <div class="stat-row">
      <div class="stat-card"><div class="stat-label">CGPA</div><div class="stat-value big">{{ site.data.profile.education.cgpa }}</div><div class="stat-sub">{{ site.data.profile.education.rank }} · Semester 1</div></div>
      <div class="stat-card"><div class="stat-label">Semester</div><div class="stat-value">{{ site.data.profile.education.semester }}</div><div class="stat-sub">{{ site.data.profile.education.degree }}</div></div>
    </div>
    <div class="stat-card"><div class="stat-label">GitHub</div><div class="stat-value">@{{ site.data.profile.github }}</div><div class="stat-sub">{{ site.data.profile.github_url }}</div></div>
    <div class="stat-card"><div class="stat-label">University</div><div class="stat-value">{{ site.data.profile.education.university }}</div><div class="stat-sub">Hostel resident · Goes home every 2–3 weeks</div></div>
    <div class="stat-card"><div class="stat-label">End Goal</div><div class="stat-value">{{ site.data.profile.tagline }}</div><div class="stat-sub">AI / ML · Masters · Build what doesn't exist yet</div></div>
  </div>
</section>

<!-- Recent writing -->
<section class="section">
  <p class="section-tag rv" style="justify-content:center">Recent Writing</p>
  <h2 class="section-title rv" style="text-align:center">Thoughts I've <em>put down.</em></h2>
  <div class="blog-grid">
    {% assign recent_posts = site.posts | sort: 'date' | reverse | limit: 3 %}
    {% for post in recent_posts %}
    <a href="{{ post.url | relative_url }}" class="blog-card rv">
      {% if post.cover_image %}
      <div class="blog-card-img-wrap">
        <img src="{{ post.cover_image }}" alt="{{ post.cover_alt | default: post.title }}" class="blog-card-img" loading="lazy"/>
      </div>
      {% endif %}
      <div class="blog-card-body">
        {% if post.tags %}
        <div class="blog-card-tags">
          {% for tag in post.tags limit:3 %}
          <span class="blog-tag">{{ tag }}</span>
          {% endfor %}
        </div>
        {% endif %}
        <h3 class="blog-card-title">{{ post.title }}</h3>
        {% if post.excerpt %}
        <p class="blog-card-excerpt">{{ post.excerpt | strip_html | truncatewords: 25 }}</p>
        {% endif %}
      </div>
      <div class="blog-card-footer">
        <span class="blog-card-date">{{ post.date | date: "%B %d, %Y" }}</span>
        <span class="blog-card-arrow">→</span>
      </div>
    </a>
    {% endfor %}
  </div>
  <div style="text-align:center;margin-top:2rem">
    <a href="{{ '/blog' | relative_url }}" class="btn btn-outline">Read All Essays →</a>
  </div>
</section>

<!-- Quote -->
<div class="quote-section rv">
  <div class="quote-inner">
    <blockquote>{{ site.data.profile.quote.text }}</blockquote>
    <p class="quote-attr">— {{ site.data.profile.quote.attribution }}</p>
  </div>
</div>
