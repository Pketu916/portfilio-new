import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
    const cursorDotRef = useRef(null);

    useEffect(() => {
        // Only run on desktop devices
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const cursorDot = cursorDotRef.current;

        // Set initial position
        gsap.set(cursorDot, { x: window.innerWidth / 2, y: window.innerHeight / 2, xPercent: -50, yPercent: -50 });

        // Mouse move event
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let posX = mouseX;
        let posY = mouseY;

        // Track mouse position
        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        // Smooth follow effect
        gsap.ticker.add(() => {
            posX += (mouseX - posX) * 0.06; // smaller = more delay
            posY += (mouseY - posY) * 0.06;

            gsap.set(cursorDot, {
                x: posX,
                y: posY,
            });
        });

        // Hover effects on links and buttons
        const handleHoverEnter = () => {
            gsap.to(cursorDot, {
                opacity: 0,
                duration: 0.3
            });
        };

        const handleHoverLeave = () => {
            gsap.to(cursorDot, {
                opacity: 1,
                duration: 0.3
            });
        };

        const addHoverListeners = () => {
            const interactables = document.querySelectorAll('a, button, input, textarea, select, .swiper-button-prev-custom, .swiper-button-next-custom');
            interactables.forEach(el => {
                el.addEventListener('mouseenter', handleHoverEnter);
                el.addEventListener('mouseleave', handleHoverLeave);
            });
        };

        // Initial listener setup
        window.addEventListener('mousemove', onMouseMove);

        // Timeout to allow DOM to render before attaching listeners
        setTimeout(addHoverListeners, 500);

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            const interactables = document.querySelectorAll('a, button, input, textarea, select, .swiper-button-prev-custom, .swiper-button-next-custom');
            interactables.forEach(el => {
                el.removeEventListener('mouseenter', handleHoverEnter);
                el.removeEventListener('mouseleave', handleHoverLeave);
            });
        };
    }, []);

    // Also hide default cursor when component mounts
    useEffect(() => {
        if (!window.matchMedia("(pointer: coarse)").matches) {
            document.body.style.cursor = 'none';
        }
        return () => {
            document.body.style.cursor = 'auto';
        };
    }, []);

    return (
        <div
            ref={cursorDotRef}
            className="hidden md:block fixed top-0 left-0 w-3 h-3 bg-color-primary pointer-events-none z-[99999] shadow-sm shadow-black/20"
        ></div>
    );
};

export default CustomCursor;
