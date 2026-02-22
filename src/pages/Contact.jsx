import React from 'react';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';
import Button from '../components/common/Button';

const Contact = () => {
    return (
        <>
            <Section id="contact-hero" className="bg-[#f0f0f0] border-b-2 min-h-[80vh] flex items-center">
                <Container>
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                        <div className="w-full lg:w-3/5">
                            <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] leading-[1.1] mb-8 text-color-dark font-bold">
                                Let’s Build Something <span className="text-color-primary italic block md:inline">Powerful Together</span>
                            </h1>

                            <div className="space-y-6 text-xl md:text-2xl opacity-90 leading-relaxed mb-12">
                                <p>
                                    Looking to scale your brand with a professional <strong className="text-color-dark">Webflow website?</strong>
                                </p>
                                <p className="font-bold text-2xl md:text-3xl text-color-primary">
                                    Let’s talk.
                                </p>
                            </div>

                            <p className="text-xl md:text-2xl font-bold mb-8 italic text-color-dark border-l-4 border-color-primary pl-4">
                                Start your project today
                            </p>

                            <div className="flex flex-wrap gap-4 md:gap-6">
                                <Button href="https://wa.me/9265650606" variant="secondary" className="!px-8 !py-4 text-lg">
                                    WhatsApp
                                </Button>
                                <Button href="mailto:pketu916@gmail.com" variant="secondary" className="!px-8 !py-4 text-lg">
                                    Email Me
                                </Button>
                                <Button href="https://www.linkedin.com/in/ketu-patel-b9a104232/" variant="secondary" className="!px-8 !py-4 text-lg">
                                    LinkedIn
                                </Button>
                            </div>
                        </div>

                        {/* Right side visual element */}
                        <div className="flex-1 w-full lg:w-2/5 hidden md:flex justify-center lg:justify-end relative z-0">
                            <div className="relative w-full max-w-[400px]">
                                {/* Decorative rigid shadow frame */}
                                <div className="absolute inset-0 bg-color-primary translate-x-4 translate-y-4 border-2 border-black"></div>
                                <img
                                    src="/contact-image.png"
                                    alt="Contact Me Graphic"
                                    className="relative z-10 w-full h-auto object-cover border-2 border-black filter transition-all duration-500 max-h-[600px]"
                                />
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
};

export default Contact;
