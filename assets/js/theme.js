(() => {
  const KEY = "theme";

  const stored = () => {
    try {
      return localStorage.getItem(KEY);
    } catch {
      return null;
    }
  };

  const resolve = () => {
    const value = stored();
    if (value === "light" || value === "dark") return value;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const themeColor = () => {
    const value = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim();
    return value || "#f4f3ee";
  };

  const apply = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    const bg = themeColor();
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.content = bg;
      meta.removeAttribute("media");
    });
    document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
      const toDark = theme !== "dark";
      btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      btn.setAttribute("aria-label", toDark ? "Switch to dark theme" : "Switch to light theme");
    });
  };

  apply(resolve());

  document.querySelectorAll("[data-theme-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(KEY, next);
      } catch {
        /* ignore */
      }
      apply(next);
    });
  });

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    const value = stored();
    if (value === "light" || value === "dark") return;
    apply(event.matches ? "dark" : "light");
  });
})();
