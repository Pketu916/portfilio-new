import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../common/Button';

const CTA = () => {
    return (
        <Section id="cta" className="bg-white">
            <Container>
                <div className="bg-white border-2 border-black p-10 lg:p-20 card-shadow flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-2/3">
                        <h2 className="text-[clamp(1.75rem,4vw,3.5rem)] font-bold leading-[1.1] mb-6">
                            Let’s turn your vision into a <span className="text-color-primary italic">high-converting</span> digital experience.
                        </h2>
                        <p className="text-lg lg:text-xl opacity-80 leading-relaxed max-w-[700px]">
                            If you're looking for pixel-perfect Webflow development, smooth UI, and scalable performance - you're in the right place.
                        </p>
                    </div>
                    <div className="lg:w-1/3 flex flex-col items-center lg:items-end gap-6 w-full">
                        <Button variant="primary" href="https://wa.me/9265650606?text=Hi%20Ketu%2C%20I%E2%80%99d%20like%20to%20discuss%20a%20website%20project%20with%20you." className="px-10 py-5 text-xl w-full lg:w-auto">
                            Start Your Project
                        </Button>
                        <Button variant="secondary" href="/work" className="px-10 py-5 text-xl w-full lg:w-auto">
                            View My Work
                        </Button>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default CTA;
