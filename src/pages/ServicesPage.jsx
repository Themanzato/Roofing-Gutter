import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import ContactSection from '../components/ContactSection';
import { motion } from 'framer-motion';

const checkItems = [
    "Custom landscape design",
    "Sod and artificial turf installation",
    "Planting trees, shrubs, and flowers",
    "Irrigation system installation",
];

const galleryImages = [
    "/images/services/1.jpg",
    "/images/services/2.jpg",
    "/images/services/3.jpg",
    "/images/services/4.jpg",
];

const ServicesPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Hero Section — parallax + title */}
            <section
                className="relative h-[55vh] min-h-[380px] flex items-center overflow-hidden bg-cover bg-center bg-fixed"
                style={{ backgroundImage: "url('/images/backgrounds/Header2.jpg')" }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/45" />

                <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]"
                    >
                        SERVICES
                    </motion.h1>

                    <motion.a
                        href="#contact"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block bg-primary text-gray-900 font-bold text-lg px-8 py-3 rounded-full shadow-lg transition-all"
                    >
                        Work With Us
                    </motion.a>
                </div>
            </section>

            {/* What's Included Section */}
            <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    {/* Left: checklist + description */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">What´s Included?</h2>

                        <ul className="space-y-4 mb-8">
                            {checkItems.map((item, i) => (
                                <li key={i} className="flex items-center gap-4 text-lg text-gray-800 font-medium">
                                    <div className="bg-primary p-1.5 rounded-sm shrink-0 transform -rotate-3">
                                        <svg className="w-5 h-5 text-gray-900 transform rotate-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <p className="text-gray-500 text-base leading-relaxed">
                            We design and install beautiful outdoor spaces tailored to your property.
                        </p>
                    </div>

                    {/* Right: service image */}
                    <div className="w-full md:w-1/2">
                        <img
                            src="/images/services/1.jpg"
                            alt="Landscape Design & Installation"
                            className="w-full h-[380px] object-cover rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Full Services List */}
            <section className="bg-white py-16" id="services-list">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3 uppercase tracking-tight">Services</h2>
                        <div className="h-1.5 w-20 bg-primary mx-auto rounded-full" />
                    </div>

                    {/* Service rows */}
                    {[
                        {
                            title: "Landscape Design & Installation",
                            image: "/images/services/1.jpg",
                            items: ["Custom landscape design", "Sod and artificial turf installation", "Planting trees, shrubs, and flowers", "Irrigation system installation"],
                            reverse: false,
                        },
                        {
                            title: "Landscape Maintenance",
                            image: "/images/services/2.jpg",
                            items: ["Lawn mowing and edging", "Tree and shrub trimming", "Weed control", "Fertilization programs", "Seasonal clean-ups"],
                            reverse: true,
                        },
                        {
                            title: "Irrigation Services",
                            image: "/images/services/3.jpg",
                            items: ["Sprinkler system repair", "Drip irrigation installation", "Irrigation system maintenance", "Water-efficient upgrades"],
                            reverse: false,
                        },
                        {
                            title: "Hardscape Services",
                            image: "/images/services/4.jpg",
                            items: ["Pavers and patios", "Walkways and pathways", "Retaining walls", "Outdoor living areas"],
                            reverse: true,
                        },
                        {
                            title: "Tree Services",
                            image: "/images/services/5.jpg",
                            items: ["Tree trimming and pruning", "Tree removal", "Stump grinding"],
                            reverse: false,
                        },
                        {
                            title: "Commercial Landscaping",
                            image: "/images/services/6.jpg",
                            items: ["Property maintenance", "HOA landscape services", "Office and retail landscaping", "Scheduled maintenance programs"],
                            reverse: true,
                        },
                    ].map((svc, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.05 }}
                            className={`flex flex-col ${svc.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-stretch mb-2 border-b border-gray-100 last:border-0`}
                        >
                            {/* Image side with fade */}
                            <div className="w-full md:w-1/2 relative min-h-[300px]">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{
                                        backgroundImage: `url('${svc.image}')`,
                                        WebkitMaskImage: svc.reverse
                                            ? 'linear-gradient(to left, black 55%, transparent 100%)'
                                            : 'linear-gradient(to right, black 55%, transparent 100%)',
                                        maskImage: svc.reverse
                                            ? 'linear-gradient(to left, black 55%, transparent 100%)'
                                            : 'linear-gradient(to right, black 55%, transparent 100%)',
                                    }}
                                />
                            </div>

                            {/* Text side */}
                            <div className={`w-full md:w-1/2 flex items-center py-10 px-8 lg:px-14 ${svc.reverse ? 'md:pr-16' : 'md:pl-16'}`}>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-5">{svc.title}</h3>
                                    <ul className="space-y-3">
                                        {svc.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-600 text-base font-medium">
                                                <div className="bg-primary p-1 rounded-sm shrink-0 mt-0.5 transform -rotate-3">
                                                    <svg className="w-4 h-4 text-gray-900 transform rotate-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <CTA />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default ServicesPage;
