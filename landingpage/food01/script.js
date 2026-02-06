const menuIcon = document.querySelector(".menu-icon");
const mobileMenu = document.querySelector(".mobilemenu");
const closeBtn = document.querySelector(".close");

menuIcon.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});


const arc = document.getElementById("dotsArc");

const pizzaNames = [
  "THE BLANCO",
  "TUSCANY",
  "BIG CHEESY",
  "THE JERK",
  "OLD SMOKEY",
  "MR POTATO",
  "THE VEGGIE",
  "CLASSIC",
  "SPICY"
];

function renderDots() {
  arc.innerHTML = ""; // reset dots

  const totalDots = pizzaNames.length;

  // 🔥 GET REAL SIZE FROM CSS
  const arcSize = arc.offsetWidth;
  const arcBorder = 2;

  const radius = arcSize / 2 - arcBorder / 2;
  const centerX = arcSize / 2;
  const centerY = arcSize / 2;

  // 📱 Mobile = full circle | 💻 Desktop = half circle
  const isMobile = window.innerWidth <= 768;

  const startAngle = isMobile ? 0 : Math.PI + 0.12;
  const endAngle   = isMobile ? 2 * Math.PI : 2 * Math.PI - 0.12;

  pizzaNames.forEach((name, i) => {
    const angle =
      startAngle +
      (i / totalDots) * (endAngle - startAngle);

    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    const dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = `${x - 5}px`;
    dot.style.top  = `${y - 5}px`;

    const text = document.createElement("span");
    text.innerText = name;

    dot.appendChild(text);
    arc.appendChild(dot);
  });
}

// first load
renderDots();

// 🔁 re-render on resize
window.addEventListener("resize", renderDots);



const page2Dots = document.querySelectorAll(".page2-dot");
const nextBtn = document.getElementById("nextFeature");

let activeIndex = 0;

nextBtn.addEventListener("click", () => {
  page2Dots[activeIndex].classList.remove("active");
  activeIndex = (activeIndex + 1) % page2Dots.length;
  page2Dots[activeIndex].classList.add("active");
});


const tabs = document.querySelectorAll(".menu-tabs .tab");

tabs.forEach(tab=>{
  tab.addEventListener("click",()=>{
    tabs.forEach(t=>t.classList.remove("active"));
    tab.classList.add("active");
  });
});
