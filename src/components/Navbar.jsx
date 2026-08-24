import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // Check if we are on the home page
    const isHome = location.pathname === '/';

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
        { name: 'Home', href: '/', isHash: false },
        { name: 'Services', href: '/services', isHash: false },
        { name: 'About Us', href: '/about', isHash: false },
        { name: 'Contact', href: '#contact', isHash: true },
    ];

    const handleNavClick = (e, href, isHash) => {
        setIsOpen(false);
        if (isHash) {
            if (!isHome) {
                e.preventDefault();
                navigate(`/${href}`);
            }
            // If on home, default anchor behavior works fine for hash links
        }
    };

    // Navbar Background: Transparent at top, White on scroll
    // Always white if not on home page or about page (since both have dark hero images)
    const isHeroPage = isHome || location.pathname === '/about' || location.pathname === '/services';
    const isAlwaysScrolled = !isHeroPage;
    const isNavScrolled = scrolled || isAlwaysScrolled;

    const navbarClasses = isNavScrolled
        ? "bg-white shadow-md py-2"
        : "bg-transparent py-4";

    // Text Color: White at top (over hero image), Black on scroll
    const textColor = isNavScrolled ? "text-gray-800" : "text-white";
    const hoverColor = isNavScrolled ? "hover:text-dark" : "hover:text-primary";

    const renderLink = (link, className) => {
        if (link.isHash) {
            return (
                <a
                    key={link.name}
                    href={isHome ? link.href : `/${link.href}`}
                    onClick={(e) => handleNavClick(e, link.href, true)}
                    className={className}
                >
                    {link.name}
                </a>
            );
        }
        return (
            <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={className}
            >
                {link.name}
            </Link>
        );
    };

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
                        <Link to="/" className="flex items-center group">
                            <img
                                src="/images/logos/Logo.png"
                                alt="Rejoice Rios Landscape"
                                className={`transition-all duration-300 ${isNavScrolled ? 'h-10' : 'h-14'}`}
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => renderLink(link, `text-base font-medium transition-colors duration-300 ${textColor} ${hoverColor}`))}
                        
                        {isHome ? (
                            <motion.a
                                href="#quote"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-primary hover:bg-primary-dark text-gray-900 px-6 py-2.5 rounded-full font-semibold transition-colors shadow-md border border-primary-dark/20"
                            >
                                Get a Quote
                            </motion.a>
                        ) : (
                            <Link
                                to="/#quote"
                                className="bg-primary hover:bg-primary-dark text-gray-900 px-6 py-2.5 rounded-full font-semibold transition-colors shadow-md border border-primary-dark/20 transform hover:scale-105 transition-transform"
                            >
                                Get a Quote
                            </Link>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors ${textColor} hover:text-primary`}
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
                            {links.map((link) => renderLink(link, "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-dark hover:bg-primary/10 transition-colors"))}
                            
                            {isHome ? (
                                <a
                                    href="#quote"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center mt-4 bg-primary text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
                                >
                                    Get a Quote
                                </a>
                            ) : (
                                <Link
                                    to="/#quote"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center mt-4 bg-primary text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
                                >
                                    Get a Quote
                                </Link>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
