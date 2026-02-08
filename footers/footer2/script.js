
/* LENIS */
const lenis = new Lenis({ lerp:0.08, smoothWheel:true });
function raf(t){ lenis.raf(t); requestAnimationFrame(raf); }
requestAnimationFrame(raf);

/* GSAP */
gsap.registerPlugin(ScrollTrigger);

/* REVEAL */
gsap.from(".footer-col",{
  scrollTrigger:{ trigger:".footer", start:"top 80%" },
  y:40,
  opacity:0,
  filter:"blur(10px)",
  duration:1.4,
  ease:"expo.out",
  stagger:.15
});

/* CURSOR GLOW (FIXED) */
const footer = document.querySelector(".footer");
const glow = document.querySelector(".cursor-glow");

footer.addEventListener("mousemove",e=>{
  const r = footer.getBoundingClientRect();
  gsap.to(glow,{
    x:e.clientX - r.left,
    y:e.clientY - r.top,
    duration:.3,
    ease:"power3.out"
  });
});

/* MAGNETIC (SMOOTH + TOUCH SAFE) */
function magnetic(selector, strength){
  document.querySelectorAll(selector).forEach(el=>{
    let bounds;
    const move = e=>{
      bounds = bounds || el.getBoundingClientRect();
      const x = (e.clientX - bounds.left - bounds.width/2) * strength;
      const y = (e.clientY - bounds.top - bounds.height/2) * strength;
      gsap.to(el,{ x, y, duration:.4, ease:"power3.out" });
    };
    el.addEventListener("mouseenter",()=>bounds=null);
    el.addEventListener("mousemove",move);
    el.addEventListener("mouseleave",()=>{
      gsap.to(el,{ x:0, y:0, duration:.6, ease:"expo.out" });
    });
  });
}

magnetic(".magnetic",0.25);
magnetic(".magnetic-box",0.12);

