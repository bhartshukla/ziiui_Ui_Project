
document.addEventListener("DOMContentLoaded", ()=>{
    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    const scrollContainer = document.querySelector('.scroll-container');
    const section = document.querySelector('.scroll-section');
    const progressAmount = document.querySelector('.progress-amount');

    function initHorizontalScroll() {
        function getScrollAmount() {
            const scrollWidth = scrollContainer.scrollWidth;
            const windowWidth = window.innerWidth;
            return -(scrollWidth - windowWidth);
        }

        gsap.to(scrollContainer, {
            x: getScrollAmount,
            ease: "none",
            scrollTrigger: {
                trigger: section,
                pin: true,
                start: "top top",
                end: () => `+=${-getScrollAmount()}`,
                scrub: true,
                invalidateOnRefresh: true,
                onUpdate: (self) => {
                    const percent = (self.progress * 100).toFixed(0).padStart(2, '0');
                    progressAmount.textContent = `(${percent}%)`;
                }
            }
        });
    }

    initHorizontalScroll();
});
