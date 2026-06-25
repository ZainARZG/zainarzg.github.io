---
layout: page
title: Project
permalink: /project/
---
<div class="rv"><p class="section-tag">03 — Featured Project</p><h1>Born from a<br/><em>random conversation.</em></h1></div>


{% for project in site.data.projects %}
{% assign page_url = "/project/" | append: project.slug | append: "/" %}
<div class="project-card rv" data-href="{{ page_url }}" style="cursor:pointer">
  <div class="project-cover"><img src="{{ project.cover_image }}" alt="{{ project.cover_alt | default: project.title }}" loading="lazy"/></div>
  <div class="project-body">
    <span class="project-type">{{ project.type }} · {{ project.semester }}</span>
    <h3 class="project-title">{{ project.title }}</h3>
    <p class="project-story">{{ project.story | strip | replace: "clicked", "<strong>clicked</strong>" }}</p>
  </div>
  <div class="project-meta">{% for detail in project.details %}<div class="project-meta-item"><div class="project-meta-label">{{ detail.label }}</div><div class="project-meta-value">{{ detail.value }}</div></div>{% endfor %}</div>
  <div class="project-footer">
    <div class="project-collab">Built with {% for collab in project.collaborators %}<span>{{ collab.name }}</span>{% if forloop.last == false %}, {% endif %}{% endfor %} — {% for collab in project.collaborators %}{{ collab.role }}{% if forloop.last == false %}, {% endif %}{% endfor %}.</div>
    <span class="project-link" style="font-size:.75rem;font-weight:700;color:var(--accent);letter-spacing:.1em;text-transform:uppercase;display:flex;align-items:center;gap:4px;text-shadow:var(--glow-accent)">Read full story →</span>
  </div>
</div>
{% endfor %}

<script>
(function(){
  document.querySelectorAll('.project-card[data-href]').forEach(function(card){
    card.addEventListener('click', function(e){
      if(e.target.closest('a, button')) return;
      window.location.href = card.getAttribute('data-href');
    });
  });
})();
</script>
