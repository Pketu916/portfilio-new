import React from 'react';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import Button from '../components/common/Button';
import CTA from '../components/home/CTA';
import WebflowInfo from '../components/home/WebflowInfo';
import Technologies from '../components/service/Technologies';


const About = () => {
    return (
        <>
            <Section id="about-hero" className="bg-[#f0f0f0] border-b-2 min-h-[80vh] flex items-center">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

                        {/* Left Side: Intro */}
                        <div className="w-full lg:w-1/2">
                            <h1 className="text-[clamp(3.5rem,6vw,5.5rem)] leading-[1.1] mb-8 text-color-dark">
                                About <span className="text-color-primary italic">Me</span>
                            </h1>

                            <div className="space-y-6 text-lg md:text-xl opacity-90 leading-relaxed mb-10">
                                <p>
                                    Hi, I'm <strong className="text-color-dark text-xl md:text-2xl">Ketu</strong> - a Webflow-focused developer passionate about building clean, scalable, and high-performing digital experiences.
                                </p>
                                <div className="border-l-4 border-color-primary pl-6 py-2 my-8">
                                    <p className="font-semibold text-2xl mb-2">My goal is simple:</p>
                                    <p className="text-xl">Help brands grow online with powerful, pixel-perfect websites.</p>
                                </div>
                            </div>

                            <div className="flex gap-6">
                                <Button variant="primary" href="/contact">Work With Me</Button>
                                <Button variant="secondary" href="/work">View Projects</Button>
                            </div>
                        </div>

                        {/* Right Side: Image */}
                        <div className="w-full flex-1 lg:w-1/2 flex justify-center lg:justify-end relative z-0 mt-8 lg:mt-0">
                            <div className="relative w-full max-w-[400px]">
                                {/* Decorative rigid shadow frame */}
                                <div className="absolute inset-0 bg-color-primary translate-x-4 translate-y-4 border-2 border-black"></div>
                                <img
                                    src="/about-image.png"
                                    alt="About Ketu Patel"
                                    className="relative z-10 w-full h-auto object-cover border-2 border-black filter transition-all duration-500 max-h-[600px]"
                                />
                            </div>
                        </div>

                    </div>
                </Container>
            </Section>

            {/* Beliefs Section */}
            <Section id="beliefs" className="bg-white py-16 md:py-24 border-b-2">
                <Container>
                    <div className="max-w-3xl mx-auto">
                        <div className="bg-white border-2 border-black p-8 md:p-12 card-shadow relative">


                            <h2 className="text-[clamp(2rem,3vw,2.5rem)] font-bold mb-8 border-b-2 pb-4 inline-block">
                                I believe:
                            </h2>

                            <ul className="space-y-6">
                                {[
                                    "Great UI creates trust",
                                    "Clean code improves performance",
                                    "User-friendly design increases conversions",
                                    "Collaboration builds long-term success"
                                ].map((belief, index) => (
                                    <li key={index} className="flex items-center gap-4 text-lg md:text-xl font-medium">
                                        <div className="w-8 h-8 rounded-full bg-color-primary text-white flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span>{belief}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-10 pt-6 border-t-2 text-center">
                                <p className="uppercase text-3xl font-bold text-color-primary">
                                    We grow together
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
            <WebflowInfo />
            <Technologies />

            <CTA />
        </>
    );
};

export default About;
