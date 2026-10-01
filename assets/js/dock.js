(() => {
  const dock = document.querySelector("[data-profile-dock]");
  if (!dock) return;

  const mq = window.matchMedia("(max-width: 899px)");
  const COMPACT_AT = 56;
  const EXPAND_AT = 32;
  let compact = false;
  let ticking = false;

  const apply = (next) => {
    if (compact === next) return;
    compact = next;
    dock.classList.toggle("is-compact", compact);
    dock.setAttribute("data-compact", compact ? "true" : "false");
  };

  const measure = () => {
    ticking = false;
    if (!mq.matches) {
      apply(false);
      return;
    }
    apply(window.scrollY > (compact ? EXPAND_AT : COMPACT_AT));
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(measure);
  };

  mq.addEventListener("change", measure);
  window.addEventListener("scroll", onScroll, { passive: true });
  measure();
})();
