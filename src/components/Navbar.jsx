import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', href: '#' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'About Us', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    // Navbar Background: Transparent at top, White on scroll
    const navbarClasses = scrolled
        ? "bg-white shadow-md py-4"
        : "bg-transparent py-6";

    // Text Color: White at top, Gray/Primary on scroll
    const textColor = scrolled ? "text-primary" : "text-white";
    const hoverColor = "hover:text-secondary";

    // Logo: White at top, Primary on scroll
    const logoColor = scrolled ? "text-primary" : "text-white";

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${navbarClasses}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-full">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <a href="#" className="flex items-center group">
                            <span className={`text-2xl font-bold transition-colors duration-300 ${logoColor} group-hover:text-secondary`}>LOGO</span>
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-base font-medium transition-colors duration-300 ${textColor} ${hoverColor}`}
                            >
                                {link.name}
                            </a>
                        ))}
                        <motion.a
                            href="#quote"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-secondary hover:bg-secondary-hover text-white px-6 py-2.5 rounded-full font-semibold transition-colors shadow-md border border-transparent"
                        >
                            Get a Quote
                        </motion.a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${textColor} hover:text-secondary`}
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
                    >
                        <div className="px-4 pt-4 pb-6 space-y-2">
                            {links.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-secondary hover:bg-gray-50 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#quote"
                                onClick={() => setIsOpen(false)}
                                className="block w-full text-center mt-4 bg-secondary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary-hover transition-colors"
                            >
                                Get a Quote
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
