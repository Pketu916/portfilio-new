import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Section from '../layout/Section';
import Container from '../layout/Container';

const ValueProposition = () => {
    const listRefs = useRef([]);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            listRefs.current.forEach((li) => {
                if (!li) return;
                const marqueeInner = li.querySelector('.marquee-inner');
                if (marqueeInner) {
                    const tween = gsap.to(marqueeInner, {
                        xPercent: -50,
                        repeat: -1,
                        duration: 15,
                        ease: "none",
                    }).pause();

                    li.addEventListener('mouseover', () => tween.play());
                    li.addEventListener('mouseleave', () => tween.pause());
                }
            });
        });
        return () => ctx.revert();
    }, []);

    const items = [
        "Pixel-perfect layouts",
        "Smooth UI experiences",
        "Clean and scalable structure",
        "High-performing Webflow builds",
        "Conversion-focused websites"
    ];

    return (
        <Section id="value-proposition" className="bg-white" size="large">
            <Container>
                <div className="w-full">
                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] mb-12 font-bold leading-[1.1] max-w-[1000px]">
                        Your website is more than design - <br />
                        <span className="text-color-primary italic">It’s your brand’s digital identity.</span>
                    </h2>
                </div>
            </Container>

            <div className="mb-16 w-full">
                <Container>
                    <h3 className="text-xl mb-6 opacity-80 uppercase tracking-widest font-bold max-w-[1000px]">
                        I create:
                    </h3>
                </Container>
                <ul className="list-none p-0 w-full border-t">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            ref={el => listRefs.current[index] = el}
                            className="group relative overflow-hidden text-[clamp(1.25rem,3vw,1.75rem)] border-b cursor-pointer hover:bg-color-primary hover:text-white transition-all duration-300 w-full"
                        >
                            <Container>
                                <div className="py-6 flex items-center gap-4 group-hover:opacity-0 transition-opacity duration-300 w-full">
                                    <span className="w-3 h-3 bg-color-primary flex-shrink-0"></span>
                                    {item}
                                </div>
                            </Container>
                            <div className="absolute inset-0 flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden pointer-events-none">
                                <div className="marquee-inner flex whitespace-nowrap w-max">
                                    {[...Array(12)].map((_, i) => (
                                        <div key={i} className="flex items-center gap-8 px-8">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M19 12H5" /><path d="m12 19-7-7 7-7" />
                                            </svg>
                                            <span className="font-normal">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <Container>
                <div className="w-full">
                    <div className="mt-12 max-w-[1000px] border-l-4 border-color-primary pl-6 py-2">
                        <p className="text-[clamp(1.1rem,2vw,1.5rem)] opacity-80 mb-6 leading-relaxed">
                            If you're looking for pixel-perfect Webflow development, smooth UI, and scalable performance - you're in the right place.
                        </p>
                        <p className="text-[clamp(1.5rem,3.5vw,2rem)] font-bold">
                            We don’t just build websites - <br />
                            <span className="text-color-primary italic">We grow together.</span>
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default ValueProposition;
