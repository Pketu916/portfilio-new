import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../layout/Container';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    useEffect(() => {
        const controlNavbar = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY && window.scrollY > 80) { // if scroll down hide the navbar
                    setShowNavbar(false);
                    setIsOpen(false); // Close mobile menu if open
                } else { // if scroll up show the navbar
                    setShowNavbar(true);
                }
                setLastScrollY(window.scrollY);
            }
        };

        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Service', path: '/service' },
        { name: 'Work', path: '/work' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    const isActive = (path) => {
        return location.pathname === path;
    };

    return (
        <>
            <nav className={`fixed w-full top-0 left-0 bg-white border-b-2  z-50 transition-transform duration-300 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
                <Container>
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link to="/" className="text-3xl font-bold italic text-color-primary flex-shrink-0 z-50">
                            Ketu.
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-lg font-medium px-5 py-2.5 border-2 transition-all duration-300 ${isActive(link.path)
                                        ? 'bg-color-primary text-white card-shadow-sm'
                                        : 'bg-white text-color-dark hover:bg-color-primary hover:text-white hover:card-shadow-sm'
                                        } ${
                                        // Remove left border from subsequent items so borders don't double up when adjacent
                                        link.name !== 'Home' ? '-ml-[2px]' : ''
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Hamburger Icon */}
                        <button
                            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none z-50 bg-white p-1"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-6 h-[3px] bg-black transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-1.5 rotate-45' : ''}`}></span>
                            <span className={`block w-6 h-[3px] bg-black transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`block w-6 h-[3px] bg-black transition-transform duration-300 ease-in-out ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
                        </button>
                    </div>
                </Container>
            </nav>

            {/* Mobile Menu Dropdown */}
            <div
                className={`fixed inset-0 bg-white border-b-2 border-black transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-y-0' : '-translate-y-full'
                    } md:hidden flex flex-col justify-center items-center z-40`}
            >
                <div className="flex flex-col gap-8 text-center mt-16">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`text-4xl font-bold hover:text-color-primary transition-colors ${isActive(link.path) ? 'text-color-primary italic' : 'text-color-dark'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
