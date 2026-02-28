import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../layout/Section';
import Container from '../layout/Container';
import { services } from '../../data/services';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const triggerRef = useRef(null);
    const containerRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const cards = gsap.utils.toArray(".service-card");
            const images = gsap.utils.toArray(".service-image");

            // Create a master timeline
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top 0", // Offset by the 80px height of the navbar
                    end: () => `+=${window.innerHeight * cards.length}`,
                    pin: true,
                    pinSpacing: true,
                    scrub: 1,
                }
            });

            // Set initial states
            gsap.set(images, { autoAlpha: 0 });
            gsap.set(images[0], { autoAlpha: 1 });

            // Animate each card and image
            cards.forEach((card, i) => {
                if (i === 0) return;

                const label = `step-${i}`;

                // Image transitions
                tl.to(images[i - 1], { autoAlpha: 0, duration: 1, ease: "power2.inOut" }, label);
                tl.to(images[i], { autoAlpha: 1, duration: 1, ease: "power2.inOut" }, label);

                // Card entry
                tl.fromTo(card,
                    { y: "100%", opacity: 0 },
                    {
                        y: "0%",
                        opacity: 1,
                        duration: 1,
                        ease: "power2.inOut"
                    },
                    label
                );

                // Pause for content reading
                tl.to({}, { duration: 0.5 });
            });
        }, triggerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={triggerRef} className="bg-[#f0f0f0] overflow-hidden">
            <Section id="services" className="h-[100vh] flex items-center !py-0">
                <Container className="h-full w-full flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
                    {/* Left Side: Sticky Image Stack */}
                    <div className="w-full md:w-1/2 flex flex-col justify-start md:justify-center gap-4 md:gap-8 relative z-20">
                        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold mt-4 md:mt-0">
                            How I Can<span className="text-color-primary italic"> Help</span>
                        </h2>
                        <div className="hidden md:block w-full h-[500px] border-2 bg-white overflow-hidden card-shadow relative">
                            {services.map((service, index) => (
                                <React.Fragment key={`media-${service.id}`}>
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="service-image absolute inset-0 w-full h-full object-cover"
                                        style={{ zIndex: index }}
                                    />
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Stacking Cards */}
                    <div className="w-full md:w-1/2 flex flex-col justify-start md:justify-center gap-4 md:gap-8 relative mt-4 md:mt-0 z-10" ref={containerRef}>
                        {/* Invisible placeholder to perfectly align with the left-side header */}
                        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold mt-4 md:mt-0 opacity-0 pointer-events-none hidden md:block select-none" aria-hidden="true">
                            How I Can<span className="italic"> Help</span>
                        </h2>

                        <div className="relative w-full h-[500px]">
                            {services.map((service, index) => (
                                <div
                                    key={service.id}
                                    className="service-card absolute inset-0 bg-white border-2 border-black p-6 md:p-8 lg:p-12 card-shadow overflow-y-auto no-scrollbar grid"
                                    style={{ zIndex: index + 10 }}
                                >
                                    <div className="w-full self-center">
                                        <span className="text-color-primary font-bold text-xl md:mb-2 block">0{index + 1}</span>
                                        <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-2 md:mb-4 leading-tight">{service.title}</h3>
                                        <p className="text-base md:text-lg opacity-80 mb-4 md:mb-6 border-b-2 pb-4">{service.subtitle}</p>
                                        <ul className="space-y-2 md:space-y-3">
                                            {service.features.map((feature, fIndex) => (
                                                <li key={fIndex} className="flex items-start gap-3 text-sm md:text-base lg:text-lg font-medium">
                                                    <span className="w-2 h-2 mt-1.5 md:mt-2 bg-color-primary flex-shrink-0"></span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );

};

export default Services;
