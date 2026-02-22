import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../common/Button';

const Hero = ({
    title = "Pixel-Perfect ",
    highlightText = "Webflow Development",
    titleSuffix = " That Grows Your Brand",
    description = "I help businesses scale with clean, user-friendly, high-performance Webflow websites designed to convert and impress.",
    primaryBtnText = "Start Your Project",
    primaryBtnLink = "https://wa.me/9265650606",
    secondaryBtnText = "View My Work",
    secondaryBtnLink = "/work",
    imageSrc = "/hero-image.png",
    imageAlt = "Ketu Patel - Web Developer"
}) => {
    return (
        <Section id="hero" className="relative overflow-hidden pt-12 md:pt-24 pb-16">
            <Container>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
                    {/* Left Column - Text Content */}
                    <div className="flex-1 w-full max-w-[800px] z-10 relative">
                        <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] mb-6 text-color-dark leading-[1.1] font-bold">
                            {title}
                            {highlightText && <span className="text-color-primary italic">{highlightText}</span>}
                            {titleSuffix}
                        </h1>
                        <p className="text-[clamp(1.1rem,2vw,1.25rem)] mb-10 opacity-90 max-w-xl font-medium">
                            {description}
                        </p>
                        <div className="flex gap-6 flex-wrap">
                            {primaryBtnText && (
                                <Button variant="primary" href={primaryBtnLink}>
                                    {primaryBtnText}
                                </Button>
                            )}
                            {secondaryBtnText && (
                                <Button variant="secondary" href={secondaryBtnLink}>
                                    {secondaryBtnText}
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Static Image */}
                    <div className="flex-1 max-w-[400px] relative z-0 flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-[400px]">
                            {/* Decorative rigid shadow frame */}
                            <div className="absolute inset-0 bg-color-primary translate-x-4 translate-y-4 border-2 border-black"></div>
                            <img
                                src={imageSrc}
                                alt={imageAlt}
                                className="relative z-10 w-full h-auto object-cover bg-white border-2 border-black max-h-[600px]"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Hero;
