import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';
import Button from '../common/Button';

const WEBFLOW_BLUE = '#146EF5';

const benefits = [
    { title: "Lightning Fast", desc: "Optimized for lightning-fast loading performance." },
    { title: "SEO-Friendly", desc: "Clean semantic markup and built-in SEO tools." },
    { title: "No Design Limits", desc: "100% custom designs without rigid templates." },
    { title: "Easy CMS", desc: "Manage and update your content effortlessly." },
    { title: "Secure Hosting", desc: "Enterprise-grade hosting that scales with you." },
];

const WebflowLogo = ({ className = 'w-12 h-12' }) => (
    <svg className={className} viewBox="0 0 512 320" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M512 0L348.627 319.382H195.172L263.547 187.018H260.476C204.072 260.235 119.911 308.437 0 319.382V188.849C0 188.849 76.71 184.316 121.808 136.904H0V0.007H136.897V112.601L139.968 112.588L195.91 0.007H299.445V111.89L302.516 111.884L360.557 0H512Z"
            fill={WEBFLOW_BLUE}
        />
    </svg>
);

const WebflowInfo = () => {
    return (
        <Section id="webflow-info" className="bg-white border-b-2">
            <Container>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

                    {/* Left: What is Webflow? */}
                    <div className="w-full lg:w-5/12 lg:sticky top-24">
                        <div className="w-20 h-20 bg-white border-2 border-black flex items-center justify-center mb-8 card-shadow">
                            <WebflowLogo className="w-12 h-12" />
                        </div>
                        <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold mb-6 leading-tight">
                            What is <span className="text-color-primary italic">Webflow?</span>
                        </h2>
                        <div className="space-y-6 text-lg opacity-90 leading-relaxed border-l-4 border-color-primary pl-6">
                            <p>
                                <strong>Webflow</strong> is a visual web development platform that empowers designers and developers to build fully responsive, custom websites with clean code, a robust built-in CMS, and secure enterprise-grade hosting-all in one place.
                            </p>
                            <p>
                                It combines absolute design freedom with high-end development power.
                            </p>
                            <p className="font-bold">
                                Webflow helps brands launch faster and grow smarter.
                            </p>
                        </div>
                    </div>

                    {/* Right: Why Choose Webflow? */}
                    <div className="w-full lg:w-7/12">
                        <div className="border-2 border-black bg-white card-shadow">
                            <div className="p-8 md:p-10 border-b-2 border-black">
                                <h3 className="text-[clamp(2rem,3vw,2.5rem)] font-bold mb-3">
                                    Why <span className="italic">Choose Webflow?</span>
                                </h3>
                                <p className="text-lg opacity-80">
                                    Because your business needs a platform built for speed, scale, and creative freedom.
                                </p>
                            </div>

                            <ul className="divide-y-2 divide-black">
                                {benefits.map((benefit, index) => (
                                    <li
                                        key={benefit.title}
                                        className="flex gap-6 md:gap-8 p-6 md:p-8 transition-colors duration-300 hover:bg-[#f0f0f0]"
                                    >
                                        <span className="text-2xl md:text-3xl font-bold leading-none flex-shrink-0 w-10 text-color-primary">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <div className="flex-1 min-w-0">
                                            <h4 className="text-xl md:text-2xl font-bold mb-2">
                                                {benefit.title}
                                            </h4>
                                            <p className="opacity-80 text-base md:text-lg leading-relaxed">
                                                {benefit.desc}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            <div className="p-8 md:p-10 border-t-2 border-black bg-[#f0f0f0]">
                                <p className="text-lg font-medium mb-6 opacity-90">
                                    Ready to build on Webflow? Let&apos;s turn your idea into a high-performing website.
                                </p>
                                <Button
                                    variant="primary"
                                    href="https://wa.me/9265650606?text=Hi%20Ketu%2C%20I%E2%80%99d%20like%20to%20discuss%20a%20website%20project%20with%20you."
                                    className="w-full md:w-auto px-10 py-4 text-lg"
                                >
                                    Start Your Project
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default WebflowInfo;
