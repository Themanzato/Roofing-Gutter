import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ServicesPage from './pages/ServicesPage';
import PageTransition from './components/PageTransition';

const visualAssets = [
    '/videos/video.mp4',
    '/images/logos/Logo.png',
    '/images/backgrounds/hero.png',
    '/images/backgrounds/callus.png',
    '/images/backgrounds/Header.jpg',
    '/images/backgrounds/Header2.jpg',
    '/images/carrusel/1366 (11).webp',
    '/images/carrusel/1366 (14).webp',
    '/images/carrusel/1366 (2).webp',
    '/images/carrusel/1366 (4).webp',
    '/images/carrusel/1366.webp',
    '/images/carrusel/3183.jpg',
    '/images/carrusel/Commercial Landscaping.jpg',
    '/images/carrusel/Hardscape Services.jpg',
    '/images/carrusel/Tree Services.jpg',
    '/images/services/1.jpg',
    '/images/services/2.jpg',
    '/images/services/3.jpg',
    '/images/services/4.jpg',
    '/images/services/5.jpg',
    '/images/services/6.jpg',
    '/images/aboutus/aboutusbg.jpg',
    '/images/aboutus/aboutus1.png',
    '/images/aboutus/aboutus2.png',
    '/images/aboutus/aboutus3.webp',
];

function VisualLoader({ children }) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        let loadedAssets = 0;
        let isMounted = true;

        const markAsLoaded = () => {
            loadedAssets += 1;
            if (isMounted && loadedAssets === visualAssets.length) {
                setIsReady(true);
            }
        };

        const preloaders = visualAssets.map((asset) => {
            if (asset.endsWith('.mp4')) {
                const video = document.createElement('video');
                video.preload = 'auto';
                video.onloadeddata = markAsLoaded;
                video.onerror = markAsLoaded;
                video.src = asset;
                return video;
            }

            const image = new Image();
            image.onload = markAsLoaded;
            image.onerror = markAsLoaded;
            image.src = asset;
            return image;
        });

        return () => {
            isMounted = false;
            preloaders.forEach((asset) => {
                asset.onload = null;
                asset.onerror = null;
                asset.onloadeddata = null;
            });
        };
    }, []);

    if (isReady) {
        return children;
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white" role="status" aria-label="Loading">
            <div className="h-14 w-14 animate-spin rounded-full border-4 border-[#73EC8B]/30 border-t-[#D2FF72]" />
        </div>
    );
}

function AppContent() {
    const location = useLocation();
    
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
            <VisualLoader>
                <AppContent />
            </VisualLoader>
        </Router>
    );
}

export default App;
