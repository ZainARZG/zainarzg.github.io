---
layout: default
title: Home
---
<section class="hero">
  <div class="hero-bg-image">
    <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" alt="Digital network" loading="lazy"/>
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

<!-- Quick links section -->
<section class="section" style="text-align:center">
  <p class="section-tag rv" style="justify-content:center">Explore</p>
  <h2 class="section-title rv">What you'll find <em>here.</em></h2>
  <div class="skills-grid rv" style="max-width:900px;margin:0 auto">
    <a href="{{ '/about' | relative_url }}" class="skill-card" style="text-decoration:none;color:inherit;display:block">
      <div class="skill-label">01 — About</div>
      <p style="font-size:.95rem;color:var(--text-secondary);line-height:1.7">My story, academic path, grades, and the journey from Bhalwal to UET.</p>
    </a>
    <a href="{{ '/skills' | relative_url }}" class="skill-card" style="text-decoration:none;color:inherit;display:block">
      <div class="skill-label">02 — Skills</div>
      <p style="font-size:.95rem;color:var(--text-secondary);line-height:1.7">Programming languages, IDEs, databases, and domains I work with.</p>
    </a>
    <a href="{{ '/project' | relative_url }}" class="skill-card" style="text-decoration:none;color:inherit;display:block">
      <div class="skill-label">03 — Project</div>
      <p style="font-size:.95rem;color:var(--text-secondary);line-height:1.7">ML weather prediction model built with Python and scikit-learn.</p>
    </a>
    <a href="{{ '/blog' | relative_url }}" class="skill-card" style="text-decoration:none;color:inherit;display:block">
      <div class="skill-label">04 — Writing</div>
      <p style="font-size:.95rem;color:var(--text-secondary);line-height:1.7">{{ site.posts | size }} reflective essays about my first year in Computer Engineering.</p>
    </a>
    <a href="{{ '/identity' | relative_url }}" class="skill-card" style="text-decoration:none;color:inherit;display:block">
      <div class="skill-label">05 — Identity</div>
      <p style="font-size:.95rem;color:var(--text-secondary);line-height:1.7">Beyond the résumé — anime, games, peak hours, and the real goal.</p>
    </a>
    <a href="{{ '/contact' | relative_url }}" class="skill-card" style="text-decoration:none;color:inherit;display:block">
      <div class="skill-label">06 — Contact</div>
      <p style="font-size:.95rem;color:var(--text-secondary);line-height:1.7">Get in touch for collaboration, AI/ML talks, or just connecting.</p>
    </a>
  </div>
</section>

<!-- Quote -->
<div class="quote-section rv">
  <div class="quote-inner">
    <blockquote>{{ site.data.profile.quote.text }}</blockquote>
    <p class="quote-attr">— {{ site.data.profile.quote.attribution }}</p>
  </div>
</div>
