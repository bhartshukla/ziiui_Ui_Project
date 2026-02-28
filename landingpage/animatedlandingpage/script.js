
        gsap.registerPlugin(ScrollTrigger);

        const lenis = new Lenis();
        lenis.on('scroll', ScrollTrigger.update);
        gsap.ticker.add((time) => lenis.raf(time * 1000));
        gsap.ticker.lagSmoothing(0);

        const sections = gsap.utils.toArray('section');

        sections.forEach((section, i) => {
            const container = section.querySelector('.container');

            if (i > 0) {
                gsap.set(container, { rotation: 30 });
                gsap.to(container, {
                    rotation: 0,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top bottom',
                        end: 'top 25%',
                        scrub: true,
                    }
                });
            }

            if (i < sections.length - 1) {
                ScrollTrigger.create({
                    trigger: section,
                    start: 'bottom bottom',
                    end: 'bottom top',
                    pin: true,
                    pinSpacing: false,
                });
            }
        });
  