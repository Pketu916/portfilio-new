import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Technologies from '../components/service/Technologies';
import ValueProposition from '../components/home/ValueProposition';
import Cta from '../components/home/CTA';

const Service = () => {
    return (
        <>
            <div className="pt-12">
                <Hero
                    title="Build a Website That "
                    highlightText="Works for Your Business"
                    titleSuffix=""
                    description="From Webflow development to full-stack applications, I create user-friendly, high-performance websites designed to convert, scale, and strengthen your brand."
                    primaryBtnText="Let’s Build Together"
                    primaryBtnLink="/contact"
                    secondaryBtnText="View My Work"
                    secondaryBtnLink="/work"
                    imageSrc="/services-image.png"
                    imageAlt="Web Development Services"
                />
            </div>
            <Services />
            <Technologies />
            <ValueProposition />
            <Cta />

        </>
    );
};

export default Service;
