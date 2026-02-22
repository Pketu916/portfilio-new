import React from 'react';
import Section from '../layout/Section';
import Container from '../layout/Container';

const benefits = [
    { title: "Lightning Fast", desc: "Optimized for lightning-fast loading performance." },
    { title: "SEO-Friendly", desc: "Clean semantic markup and built-in SEO tools." },
    { title: "No Design Limits", desc: "100% custom designs without rigid templates." },
    { title: "Easy CMS", desc: "Manage and update your content effortlessly." },
    { title: "Secure Hosting", desc: "Enterprise-grade hosting that scales with you." },
    { title: "Start Your Project", desc: "Let's build something amazing together.", isCta: true, link: "https://wa.me/9265650606?text=Hi%20Ketu%2C%20I%E2%80%99d%20like%20to%20discuss%20a%20website%20project%20with%20you." }
];

const WebflowInfo = () => {
    return (
        <Section id="webflow-info" className="bg-white border-b-2 ">
            <Container>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">

                    {/* Left: What is Webflow? */}
                    <div className="w-full lg:w-5/12 lg:sticky top-24">
                        <div className="w-16 h-16 bg-black flex items-center justify-center mb-8 card-shadow">
                            <svg className='w-10 h-10 text-white' viewBox="0 0 512 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_20_211)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M512 0L348.627 319.382H195.172L263.547 187.018H260.476C204.072 260.235 119.911 308.437 0 319.382V188.849C0 188.849 76.71 184.316 121.808 136.904H0V0.007H136.897V112.601L139.968 112.588L195.91 0.007H299.445V111.89L302.516 111.884L360.557 0H512Z" fill="currentColor" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_20_211">
                                        <rect width="512" height="319.382" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <h2 className="text-[clamp(2.5rem,4vw,3.5rem)] font-bold mb-6 leading-tight">
                            What is <span className="text-color-primary italic">Webflow?</span>
                        </h2>
                        <div className="space-y-6 text-lg opacity-90 leading-relaxed border-l-4 border-color-primary pl-6">
                            <p>
                                <strong>Webflow</strong> is a visual web development platform that empowers designers and developers to build fully responsive, custom websites with clean code, a robust built-in CMS, and secure enterprise-grade hosting—all in one place.
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
                        <div className="bg-[#f0f0f0] border-2 border-black p-8 md:p-12 card-shadow">
                            <h3 className="text-[clamp(2rem,3vw,2.5rem)] font-bold mb-4">
                                Why <span className="italic">Choose Webflow?</span>
                            </h3>
                            <p className="text-xl font-medium mb-10 border-b-2 pb-4 inline-block">
                                Because your business needs:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {benefits.map((benefit, index) => (
                                    benefit.isCta ? (
                                        <a
                                            key={index}
                                            href={benefit.link}
                                            className="bg-color-primary border-2 border-black p-6 flex flex-col justify-center items-center text-center"
                                        >
                                            <h4 className="text-xl font-bold mb-2 text-white">
                                                {benefit.title}
                                            </h4>
                                            <p className="opacity-90 text-white text-base">{benefit.desc}</p>
                                        </a>
                                    ) : (
                                        <div key={index} className="bg-white border-2 border-black p-6 flex flex-col justify-center">
                                            <div className="w-8 h-8 rounded-full bg-color-primary text-white flex items-center justify-center font-bold mb-4 text-sm">
                                                {index + 1}
                                            </div>
                                            <h4 className="text-lg font-bold mb-2">{benefit.title}</h4>
                                            <p className="opacity-80 text-base">{benefit.desc}</p>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default WebflowInfo;
