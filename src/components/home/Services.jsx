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
                    start: "top top",
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
            <Section id="services" className="min-h-[100vh] md:h-screen flex items-center !py-0">
                <Container className="h-[85vh] md:h-[80vh] flex flex-col md:flex-row gap-8 lg:gap-16">
                    {/* Left Side: Sticky Image Stack */}
                    <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-start md:justify-center gap-4 md:gap-8 relative z-20">
                        <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold mt-4 md:mt-0">
                            My <span className="text-color-primary italic">Services</span>
                        </h2>
                        <div className="hidden md:block w-full h-[60vh] border-2 border-black bg-white overflow-hidden card-shadow relative">
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
                    <div className="w-full md:w-1/2 flex-1 md:h-full relative mt-4 md:mt-0" ref={containerRef}>
                        <div className="absolute top-0 left-0 z-0 opacity-10 pointer-events-none pt-24">
                            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.1] mb-8">
                                Expertise that <span className="text-color-primary italic whitespace-nowrap">scales.</span>
                            </h2>
                        </div>
                        {services.map((service, index) => (
                            <div
                                key={service.id}
                                className="service-card absolute inset-0 bg-white border-2 border-black p-6 md:p-8 lg:p-12 flex flex-col justify-center card-shadow overflow-y-auto no-scrollbar"
                                style={{ zIndex: index + 10 }}
                            >
                                <div className="h-full flex flex-col justify-center my-auto">
                                    <span className="text-color-primary font-bold text-xl mb-2 md:mb-4 block">0{index + 1}</span>
                                    <h3 className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold mb-2 md:mb-4 leading-tight">{service.title}</h3>
                                    <p className="text-base md:text-lg opacity-80 mb-4 md:mb-6 lg:mb-8 border-b-2 border-black pb-4">{service.subtitle}</p>
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
                </Container>
            </Section>
        </div>
    );

};

export default Services;
