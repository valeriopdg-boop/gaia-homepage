/**
 * Parallax sfere SVG — velocità diverse in base a data-parallax (0 = lontano, alto = vicino).
 */
(function () {
  const scene = document.getElementById("bg-scene");
  if (!scene) return;

  const spheres = scene.querySelectorAll("[data-parallax]");
  if (!spheres.length) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  let scrollY = 0;
  let ticking = false;

  function applyParallax() {
    spheres.forEach((el) => {
      const speed = parseFloat(el.dataset.parallax) || 0.1;
      const offset = scrollY * speed;
      el.style.setProperty("--parallax-y", `${offset}px`);
    });
    ticking = false;
  }

  function onScroll() {
    scrollY = window.scrollY;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(applyParallax);
    }
  }

  applyParallax();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
})();
