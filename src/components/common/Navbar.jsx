import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from '../layout/Container';
import menuBg from '../../assets/services/service-3.png'; // Using an abstract service image for the menu background

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
                        <Link to="/" className="text-3xl font-bold italic text-color-primary flex-shrink-0 z-50 relative">
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
                            className={`md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1 focus:outline-none z-50 p-1 relative transition-colors duration-300 ${isOpen ? 'bg-transparent' : 'bg-white'}`}
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className={`block w-6 h-[3px] transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-[7px] rotate-45 bg-color-primary' : 'bg-color-primary'}`}></span>
                            <span className={`block w-6 h-[3px] transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0 bg-color-primary' : 'opacity-100 bg-color-primary'}`}></span>
                            <span className={`block w-6 h-[3px] transition-all duration-300 ease-in-out ${isOpen ? '-translate-y-[7px] -rotate-45 bg-color-primary' : 'bg-color-primary'}`}></span>
                        </button>
                    </div>
                </Container>
            </nav>

            {/* Mobile Menu Dropdown */}
            <div
                className={`fixed inset-0 bg-black transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-y-0' : '-translate-y-full'
                    } md:hidden flex flex-col justify-center items-center z-40`}
            >
                {/* Background Image with Dark Overlay */}
                <div
                    className="absolute inset-0 opacity-40 z-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${menuBg})` }}
                ></div>

                <div className="flex flex-col gap-8 text-center mt-16 z-10 w-full px-6">
                    {navLinks.map((link, index) => (
                        <div
                            key={link.name}
                            className={`border-b border-white/20 pb-4 w-full transform transition-all duration-500 delay-${index * 100} ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                        >
                            <Link
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-4xl font-bold transition-colors block ${isActive(link.path) ? 'text-color-primary italic' : 'text-white hover:text-color-primary'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;
