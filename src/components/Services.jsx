import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
    {
        title: "1.- Landscape Design & Installation",
        image: "/images/services/1.jpg",
        items: [
            "Custom landscape design",
            "Sod and artificial turf installation",
            "Planting trees, shrubs, and flowers",
            "Irrigation system installation"
        ]
    },
    {
        title: "2.- Landscape Maintenance",
        image: "/images/services/2.jpg",
        items: [
            "Lawn mowing and edging",
            "Tree and shrub trimming",
            "Weed control",
            "Fertilization programs",
            "Seasonal clean-ups"
        ]
    },
    {
        title: "3.- Irrigation Services",
        image: "/images/services/3.jpg",
        items: [
            "Sprinkler system repair",
            "Drip irrigation installation",
            "Irrigation system maintenance",
            "Water-efficient upgrades"
        ]
    },
    {
        title: "4.- Hardscape Services",
        image: "/images/services/4.jpg",
        items: [
            "Pavers and patios",
            "Walkways and pathways",
            "Retaining walls",
            "Outdoor living areas"
        ]
    },
    {
        title: "5.- Tree Services",
        image: "/images/services/5.jpg",
        items: [
            "Tree trimming and pruning",
            "Tree removal",
            "Stump grinding"
        ]
    },
    {
        title: "6.- Commercial Landscaping",
        image: "/images/services/6.jpg",
        items: [
            "Property maintenance",
            "HOA landscape services",
            "Office and retail landscaping",
            "Scheduled maintenance programs"
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4 }
    }
};

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 drop-shadow-sm"
                    >
                        Services
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="h-1.5 bg-primary mx-auto rounded-full"
                    />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative aspect-square overflow-hidden rounded-[2rem] shadow-xl bg-gray-900"
                        >
                            {/* Background Image - Reduced zoom for performance */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105 opacity-80"
                                style={{ backgroundImage: `url('${service.image}')` }}
                            />

                            {/* Gradient Overlay - Lightened to show image better */}
                            <div className="absolute inset-0 bg-gray-950/40 transition-opacity duration-300 group-hover:bg-gray-950/20" />
                            
                            {/* Primary Tint on Hover - Simple Opacity */}
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Content - Just the title centered */}
                            <div className="relative h-full z-10 p-6 md:p-8 flex items-center justify-center">
                                <h3 className="text-xl md:text-2xl font-black text-white leading-tight uppercase drop-shadow-lg text-center">
                                    {service.title.split('.- ')[1]}
                                </h3>
                            </div>

                            {/* Bottom Accent Line - Simplified Width Transform */}
                            <div className="absolute bottom-0 left-0 w-0 h-2 bg-primary group-hover:w-full transition-all duration-500 ease-in-out" />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Read More Button */}
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block"
                    >
                        <Link
                            to="/services"
                            className="inline-block bg-primary hover:bg-primary-dark text-gray-900 px-8 py-4 rounded-full font-bold text-lg shadow-md border border-primary-dark/20 transition-all"
                        >
                            Read more
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Services;
