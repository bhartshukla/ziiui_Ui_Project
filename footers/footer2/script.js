gsap.registerPlugin(ScrollTrigger);

/* ===== LENIS SMOOTH SCROLL ===== */
const lenis = new Lenis({
  smooth: true,
  lerp: 0.08,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

/* ===== FOOTER ANIMATIONS ===== */
gsap.from(".footer-col", {
  scrollTrigger:{
    trigger:".footer",
    start:"top 80%",
  },
  y:60,
  opacity:0,
  duration:1,
  ease:"power4.out",
  stagger:0.15
});

gsap.from(".footer-bottom", {
  scrollTrigger:{
    trigger:".footer",
    start:"top 70%",
  },
  y:30,
  opacity:0,
  duration:0.8,
  ease:"power3.out",
  delay:0.2
});
