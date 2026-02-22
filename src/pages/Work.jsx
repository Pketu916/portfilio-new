import React from 'react';
import Hero from '../components/home/Hero';
import Projects from '../components/home/Projects';
import Cta from '../components/home/CTA';
import ValueProposition from '../components/home/ValueProposition';

const Work = () => {
    return (
        <>
            <div className="pt-12">
                <Hero
                    title="Real Work. Real Results. "
                    highlightText="Real Growth."
                    titleSuffix=""
                    description="Explore my Webflow projects and custom web solutions built with clean structure, smooth UI, and performance-first development. Every project is crafted to strengthen brand identity and increase conversions."
                    primaryBtnText="View Services"
                    primaryBtnLink="/service"
                    secondaryBtnText="Work With Me"
                    secondaryBtnLink="/contact"
                    imageSrc="/work-image.png"
                    imageAlt="Webflow Development Projects"
                />
            </div>

            <Projects hideAllBtn={true} showAll={true} />
            <ValueProposition />
            <Cta />

        </>
    );
};

export default Work;
