(() => {
  const btn = document.getElementById("nav-toggle");
  const drawer = document.getElementById("nav-drawer");
  const overlay = document.getElementById("nav-overlay");
  if (!btn || !drawer || !overlay) return;

  const homeTop = document.querySelector(".home-top");
  const siteHeader = document.querySelector(".site-header");

  const focusables = () =>
    [...drawer.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])')];

  const setNavOffset = () => {
    const bar = homeTop || siteHeader;
    if (!bar) return;
    const height = Math.ceil(bar.getBoundingClientRect().height);
    document.documentElement.style.setProperty("--nav-drawer-top", `${height}px`);
    return height;
  };

  const open = () => {
    const height = setNavOffset() || 0;

    if (homeTop || siteHeader) {
      document.body.style.setProperty("--nav-lock-height", `${height}px`);
    }

    document.body.classList.add("nav-open");
    btn.setAttribute("aria-expanded", "true");
    drawer.removeAttribute("hidden");
    overlay.removeAttribute("hidden");
    (focusables()[0] || drawer).focus();
  };

  const close = () => {
    document.body.classList.remove("nav-open");
    document.body.style.removeProperty("--nav-lock-height");
    btn.setAttribute("aria-expanded", "false");
    drawer.setAttribute("hidden", "");
    overlay.setAttribute("hidden", "");
    btn.focus();
  };

  btn.addEventListener("click", () =>
    btn.getAttribute("aria-expanded") === "true" ? close() : open()
  );
  overlay.addEventListener("click", close);

  window.addEventListener("resize", () => {
    if (btn.getAttribute("aria-expanded") === "true") {
      setNavOffset();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (btn.getAttribute("aria-expanded") !== "true") return;
    if (e.key === "Escape") {
      e.preventDefault();
      close();
      return;
    }
    if (e.key !== "Tab") return;
    const f = focusables();
    if (!f.length) return;
    const first = f[0];
    const last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  setNavOffset();
})();
