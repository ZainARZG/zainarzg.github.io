---
layout: page
title: Project
permalink: /project/
---
<div class="rv"><p class="section-tag">03 — Featured Project</p><h1>Born from a<br/><em>random conversation.</em></h1></div>

{% assign project_pages = "/project/weather-ml/|/project/leukemia-survival/|/project/admission-system/" | split: "|" %}

{% for project in site.data.projects %}
{% assign page_url = project_pages[forloop.index0] %}
<div class="project-card rv" data-href="{{ page_url }}" style="cursor:pointer">
  <div class="project-cover"><img src="{{ project.cover_image }}" alt="{{ project.cover_alt | default: project.title }}" loading="lazy"/></div>
  <div class="project-body">
    <span class="project-type">{{ project.type }} · {{ project.semester }}</span>
    <h3 class="project-title">{{ project.title }}</h3>
    <p class="project-story">{{ project.story | strip | replace: "clicked", "<strong>clicked</strong>" }}</p>
    <p class="project-desc">{{ project.description }}</p>
  </div>
  <div class="project-meta">{% for detail in project.details %}<div class="project-meta-item"><div class="project-meta-label">{{ detail.label }}</div><div class="project-meta-value">{{ detail.value }}</div></div>{% endfor %}</div>
  {% if project.report or project.repo or project.link %}
  <div class="project-footer">
    <div class="project-collab">Built with {% for collab in project.collaborators %}<span>{{ collab.name }}</span>{% if forloop.last == false %}, {% endif %}{% endfor %} — {% for collab in project.collaborators %}{{ collab.role }}{% if forloop.last == false %}, {% endif %}{% endfor %}.</div>
    <div style="display:flex;gap:1rem;flex-wrap:wrap">
      {% if project.report %}<a class="project-link" href="{{ project.report.url }}" target="_blank">{{ project.report.text }} →</a>{% endif %}
      {% if project.repo %}<a class="project-link" href="{{ project.repo.url }}" target="_blank">{{ project.repo.text }} →</a>{% endif %}
      {% if project.link %}<a class="project-link" href="{{ project.link.url }}" target="_blank">{{ project.link.text }} →</a>{% endif %}
    </div>
  </div>
  {% endif %}
</div>
{% endfor %}

<script>
(function(){
  document.querySelectorAll('.project-card[data-href]').forEach(function(card){
    card.addEventListener('click', function(e){
      if(e.target.closest('a, button, .project-link')) return;
      window.location.href = card.getAttribute('data-href');
    });
  });
})();
</script>
