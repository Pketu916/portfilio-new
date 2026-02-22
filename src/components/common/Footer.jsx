import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../layout/Container';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16 border-t-2 border-black mt-auto z-50 relative">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
                    {/* Logo & Tagline */}
                    <div className="flex flex-col gap-4">
                        <Link to="/" className="text-5xl font-bold italic text-color-primary">
                            Ketu.
                        </Link>
                        <p className="max-w-xs text-gray-400 mt-2">
                            Pixel-Perfect Webflow Development That Grows Your Brand. Let's build something powerful together.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col md:flex-row gap-12 md:gap-24">
                        <div className="flex flex-col gap-3">
                            <h4 className="text-2xl font-bold mb-2 text-white">Pages</h4>
                            <Link to="/" className="text-lg text-gray-400 hover:text-color-primary transition-colors">Home</Link>
                            <Link to="/service" className="text-lg text-gray-400 hover:text-color-primary transition-colors">Service</Link>
                            <Link to="/work" className="text-lg text-gray-400 hover:text-color-primary transition-colors">Work</Link>
                            <Link to="/about" className="text-lg text-gray-400 hover:text-color-primary transition-colors">About</Link>
                            <Link to="/contact" className="text-lg text-gray-400 hover:text-color-primary transition-colors">Contact</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h4 className="text-2xl font-bold mb-2 text-white">Connect</h4>
                            <a href="https://www.linkedin.com/in/ketu-patel-b9a104232/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-color-primary transition-colors">LinkedIn</a>
                            <a href="https://wa.me/919265650606" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-color-primary transition-colors">WhatsApp</a>
                            <a href="https://www.instagram.com/k2__patel_/" target="_blank" rel="noopener noreferrer" className="text-lg text-gray-400 hover:text-color-primary transition-colors">Instagram</a>
                            <a href="mailto:pketu916@gmail.com" className="text-lg text-gray-400 hover:text-color-primary transition-colors">Email Me</a>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[2px] bg-gray-800 my-10"></div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500">
                    <p className="text-lg">&copy; {new Date().getFullYear()} Ketu. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
