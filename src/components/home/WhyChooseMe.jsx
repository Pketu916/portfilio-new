import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Section from '../layout/Section';
import Container from '../layout/Container';

gsap.registerPlugin(ScrollTrigger);

const WhyChooseMe = () => {
    const cardsWrapperRef = useRef(null);
    const triggerRef = useRef(null);

    const reasons = [
        { title: "Webflow Specialist", desc: "Crafting custom Webflow solutions with a focus on speed, logic, and scalability." },
        { title: "Clean & Maintainable Structure", desc: "Using industry-standard (Client-First) naming and structure for easy handovers." },
        { title: "User-Friendly UI", desc: "Designing intuitive interfaces that prioritize user experience and conversion." },
        { title: "Smooth Animations", desc: "Purposeful interactions that delight users without sacrificing performance." },
        { title: "SEO Optimized", desc: "Technical SEO integration from the ground up to improve search visibility." },
        { title: "Fast Loading Performance", desc: "Optimizing assets and structure for lightning-fast load times." },
        { title: "Client-Focused Communication", desc: "Clear, transparent, and proactive communication throughout the project." }
    ];

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            let mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                const cardsWrapper = cardsWrapperRef.current;

                // Dynamically calculate the total scroll distance
                const getTranslateX = () => {
                    return -(cardsWrapper.scrollWidth - window.innerWidth);
                };

                const pin = gsap.fromTo(
                    cardsWrapper,
                    { x: 0 },
                    {
                        x: getTranslateX,
                        ease: "none",
                        scrollTrigger: {
                            trigger: triggerRef.current,
                            start: "top top",
                            end: () => `+=${cardsWrapper.scrollWidth}`, // Longer scroll for more cards
                            scrub: 1,
                            pin: true,
                            anticipatePin: 1,
                            invalidateOnRefresh: true
                        }
                    }
                );

                return () => {
                    pin.kill();
                };
            });
        }, triggerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={triggerRef} className="why-choose-me-container bg-white">
            <Section id="why-choose-me" className="min-h-screen flex flex-col justify-center">
                <Container className="mb-16">
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold">
                        Why I’m the <span className="text-color-primary italic"> Right Fit</span>
                    </h2>
                </Container>

                {/* Desktop Version: GSAP Horizontal Scroll */}
                <div className="hidden md:block w-full overflow-hidden">
                    <div ref={cardsWrapperRef} className="why-choose-card cards-wrapper !px-[5%] flex-nowrap">
                        {reasons.map((item, index) => (
                            <div
                                key={`desktop-${index}`}
                                className="card-item flex-shrink-0 w-[clamp(300px,40vw,450px)] h-[400px] p-8 flex flex-col justify-between bg-white card-shadow"
                            >
                                <div>
                                    <span className="text-xl font-bold text-color-primary block mb-4">0{index + 1}</span>
                                    <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold mb-4">{item.title}</h3>
                                </div>
                                <p className="opacity-80 text-lg leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Version: Swiper Slider */}
                <div className="block md:hidden w-full px-[5%] relative">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={1.1}
                        centeredSlides={true}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        className="w-full"
                    >
                        {reasons.map((item, index) => (
                            <SwiperSlide key={`mobile-${index}`} className="h-auto pb-4">
                                <div className="card-item w-full h-[380px] p-6 flex flex-col justify-between bg-white card-shadow mx-auto">
                                    <div>
                                        <span className="text-xl font-bold text-color-primary block mb-3">0{index + 1}</span>
                                        <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                                    </div>
                                    <p className="opacity-80 text-base leading-relaxed">{item.desc}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons (Centered below or on sides) */}
                    <div className="flex justify-center items-center gap-4 mt-8">
                        <button className="swiper-button-prev-custom w-12 h-12 flex items-center justify-center bg-white border-2 border-black button-shadow hover:bg-color-primary hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                        </button>
                        <button className="swiper-button-next-custom w-12 h-12 flex items-center justify-center bg-white border-2 border-black button-shadow hover:bg-color-primary hover:text-white transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default WhyChooseMe;
