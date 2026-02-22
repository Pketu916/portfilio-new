import React from 'react';
import Section from '../components/layout/Section';
import Container from '../components/layout/Container';

const PrivacyPolicy = () => {
    return (
        <Section className="py-24">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8">
                        Privacy <span className="text-color-primary italic">Policy</span>
                    </h1>
                    <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                        <p>
                            <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
                        </p>
                        <p>
                            Welcome to the digital portfolio of Ketu Patel ("we," "us," or "our"). We are committed to protecting your personal data and respecting your privacy. This Privacy Policy informs you how we look after your personal data when you visit our website entirely, and tells you about your privacy rights.
                        </p>

                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">1. Information We Collect</h2>
                        <p>
                            We only collect information about you if we have a reason to do so—for example, to provide our services, to communicate with you, or to make our services better. This may include:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Contact Information:</strong> Name, email address, phone number (e.g., if you contact via WhatsApp or Email).</li>
                            <li><strong>Communication Data:</strong> Any messages or inquiries you send us through contact links.</li>
                            <li><strong>Usage Data:</strong> We may collect non-identifiable usage statistics to improve website performance (e.g., via basic analytics).</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">2. How We Use Information</h2>
                        <p>
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Respond to your inquiries and requests for Webflow development services.</li>
                            <li>Communicate project updates and provide professional services.</li>
                            <li>Improve our website, services, and overall user experience.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">3. Data Security and Sharing</h2>
                        <p>
                            We do not sell, trade, or rent your personal identification information to others. We implement a variety of security measures to maintain the safety of your personal information when you submit a request or enter, submit, or access your personal information.
                        </p>

                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">4. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party websites (such as LinkedIn, Instagram, or WhatsApp). We have no control over the privacy practices or content of these third-party websites and assume no responsibility for them. We encourage you to review their privacy policies before sharing any personal data.
                        </p>

                        <h2 className="text-2xl font-bold text-black mt-8 mb-4">5. Contact Us</h2>
                        <p>
                            If you have questions about this Privacy Policy, please contact us at: <a href="mailto:pketu916@gmail.com" className="text-color-primary hover:underline">pketu916@gmail.com</a>.
                        </p>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default PrivacyPolicy;
