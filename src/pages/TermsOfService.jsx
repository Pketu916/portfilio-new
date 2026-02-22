import React from 'react';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';

const TermsOfService = () => {
    return (
        <Section className="py-24">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">
                        Terms of <span className="text-color-primary italic">Service</span>
                    </h1>
                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <p>
                            <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
                        </p>
                        <p>
                            By accessing or using the website and services offered by Ketu Patel ("we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                        </p>

                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Scope of Services</h2>
                        <p>
                            We provide freelance Webflow development, web design, and digital consulting services. The specific scope, timelines, deliverables, and fees for any project will be agreed upon in a separate written contract or proposal prior to the commencement of work.
                        </p>

                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. Client Responsibilities</h2>
                        <p>
                            To ensure successful project delivery, you agree to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Provide accurate, complete, and timely information, assets (text, images, branding), and feedback required for the project.</li>
                            <li>Ensure you hold the appropriate licenses and copyrights for any materials you provide for use in your project.</li>
                            <li>Communicate promptly to avoid project delays.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Intellectual Property</h2>
                        <p>
                            Upon full payment for our services, you will be granted the agreed-upon rights (often full ownership or an exclusive license) to the final, delivered web properties (e.g., the Webflow site). However, we reserve the right to display the completed project in our portfolio, case studies, and marketing materials unless a specific Non-Disclosure Agreement (NDA) is executed prior to the project.
                        </p>

                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Limitation of Liability</h2>
                        <p>
                            In no event shall we be liable for any indirect, incidental, consequential, special, or exemplary damages arising out of or in connection with your use of our website or services. Our maximum liability shall not exceed the total fees paid by you for the specific project in question.
                        </p>

                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with standard international business practices. Any disputes shall be subject to the exclusive jurisdiction of the competent courts in the jurisdiction where we primarily operate.
                        </p>

                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">6. Contact Information</h2>
                        <p>
                            If you have any questions or concerns regarding these Terms of Service, please contact us at: <a href="mailto:pketu916@gmail.com" className="text-color-primary hover:underline">pketu916@gmail.com</a>.
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default TermsOfService;
