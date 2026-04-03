function safeGetTheme() {
  try {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
  } catch (error) {
    return null;
  }

  return null;
}

function getPreferredTheme() {
  const storedTheme = safeGetTheme();
  if (storedTheme) {
    return storedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function updateThemeToggle(theme) {
  const toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle) {
    return;
  }

  const isDark = theme === "dark";
  const label = toggle.querySelector(".theme-toggle-label");

  toggle.setAttribute("aria-pressed", String(isDark));
  toggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");

  if (label) {
    label.textContent = isDark ? "Light mode" : "Dark mode";
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  if (themeMeta) {
    themeMeta.setAttribute("content", theme === "dark" ? "#0a1220" : "#f3f6fb");
  }
  updateThemeToggle(theme);
}

function persistTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch (error) {
    return;
  }
}

function setupThemeToggle() {
  const toggle = document.querySelector("[data-theme-toggle]");
  if (!toggle) {
    return;
  }

  applyTheme(getPreferredTheme());

  toggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    persistTheme(nextTheme);
    applyTheme(nextTheme);
  });

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", (event) => {
      if (!safeGetTheme()) {
        applyTheme(event.matches ? "dark" : "light");
      }
    });
  } else if (typeof media.addListener === "function") {
    media.addListener((event) => {
      if (!safeGetTheme()) {
        applyTheme(event.matches ? "dark" : "light");
      }
    });
  }
}

function setupMenuToggle() {
  const button = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-site-nav]");

  if (!button || !nav) {
    return;
  }

  const closeMenu = () => {
    nav.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
  };

  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });
}

function setupTagFilter() {
  const filterBar = document.querySelector("[data-filter-bar]");
  const cards = Array.from(document.querySelectorAll("[data-post-card]"));

  if (!filterBar || cards.length === 0) {
    return;
  }

  filterBar.addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) {
      return;
    }

    const selected = button.dataset.filter;

    filterBar.querySelectorAll("[data-filter]").forEach((chip) => {
      const isActive = chip === button;
      chip.classList.toggle("is-active", isActive);
      chip.setAttribute("aria-pressed", String(isActive));
    });

    cards.forEach((card) => {
      const tags = (card.dataset.tags || "").trim().split(/\s+/).filter(Boolean);
      const shouldShow = selected === "all" || tags.includes(selected);
      card.hidden = !shouldShow;
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTheme(getPreferredTheme());
  setupThemeToggle();
  setupMenuToggle();
  setupTagFilter();
});
