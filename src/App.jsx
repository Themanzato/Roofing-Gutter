import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ServicesPage from './pages/ServicesPage';
import PageTransition from './components/PageTransition';

function AppContent() {
    const location = useLocation();

    useEffect(() => {
        const scrollToTarget = () => {
            if (location.hash) {
                const target = document.getElementById(location.hash.slice(1));
                if (target) {
                    target.scrollIntoView({ behavior: 'auto', block: 'start' });
                    return;
                }
            }

            window.scrollTo(0, 0);
        };

        const timeout = window.setTimeout(scrollToTarget, 450);
        return () => window.clearTimeout(timeout);
    }, [location.pathname, location.hash]);
    
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home /></PageTransition>} />
                <Route path="/about" element={<PageTransition><AboutUs /></PageTransition>} />
                <Route path="/services" element={<PageTransition><ServicesPage /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
