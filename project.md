---
layout: page
title: Project
permalink: /project/
---
<div class="rv"><p class="section-tag">03 — Featured Project</p><h1>Born from a<br/><em>random conversation.</em></h1></div>

{% for project in site.data.projects %}
<div class="project-card rv">
  <div class="project-cover"><img src="{{ project.cover_image }}" alt="{{ project.cover_alt | default: project.title }}" loading="lazy"/></div>
  <div class="project-body">
    <span class="project-type">{{ project.type }} · {{ project.semester }}</span>
    <h3 class="project-title">{{ project.title }}</h3>
    <p class="project-story">{{ project.story | strip | replace: "clicked", "<strong>clicked</strong>" }}</p>
    <p class="project-desc">{{ project.description }}</p>
  </div>
  <div class="project-meta">{% for detail in project.details %}<div class="project-meta-item"><div class="project-meta-label">{{ detail.label }}</div><div class="project-meta-value">{{ detail.value }}</div></div>{% endfor %}</div>
  <div class="project-footer">
    <div class="project-collab">Built with {% for collab in project.collaborators %}<span>{{ collab.name }}</span>{% if forloop.last == false %}, {% endif %}{% endfor %} — {% for collab in project.collaborators %}{{ collab.role }}{% if forloop.last == false %}, {% endif %}{% endfor %}.</div>
    <div style="display:flex;gap:1rem;flex-wrap:wrap">
      {% if project.report %}<a class="project-link" href="{{ project.report.url }}" target="_blank">{{ project.report.text }} →</a>{% endif %}
      {% if project.repo %}<a class="project-link" href="{{ project.repo.url }}" target="_blank">{{ project.repo.text }} →</a>{% endif %}
      {% if project.link %}<a class="project-link" href="{{ project.link.url }}" target="_blank">{{ project.link.text }} →</a>{% endif %}
    </div>
  </div>
</div>
{% endfor %}
