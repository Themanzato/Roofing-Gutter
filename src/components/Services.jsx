import { motion } from 'framer-motion';

const services = [
    {
        title: "New Roof Installation",
        description: "Perfect for new construction or major upgrades, built to last and enhance your home’s value."
    },
    {
        title: "Roof Replacement",
        description: "Remove old or damaged roofing and install a strong, modern roofing system."
    },
    {
        title: "Re-Roofing",
        description: "A cost-effective solution to extend the life of your existing roof without a full tear-off."
    },
    {
        title: "Gutter Installation",
        description: "Properly installed gutters to protect your home from water damage."
    },
    {
        title: "Gutter Replacement",
        description: "Upgrade old or damaged gutters for better drainage and performance."
    },
    {
        title: "Gutter Addition",
        description: "Add new gutter sections to improve water flow and foundation protection."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

const Services = () => {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-primary mb-4"
                    >
                        Professional Roofing & Gutter Services
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        viewport={{ once: true }}
                        className="h-1 bg-secondary mx-auto"
                    />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="group relative h-[350px] overflow-hidden rounded-2xl shadow-lg border border-gray-100"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: "url('/images/parallax/Work1.png')" }}
                            />

                            {/* Overlay - Lighter for visibility (User request: "no hagas tan obscura") */}
                            {/* Using a gradient vs solid color can visually help text reading without killing the image */}
                            <div className="absolute inset-0 bg-primary/60 transition-opacity duration-300 group-hover:bg-primary/70" />

                            {/* Content - Always Visible */}
                            <div className="relative h-full z-10 p-8 flex flex-col items-start justify-center text-left">
                                <h3 className="text-2xl font-bold text-white mb-4 drop-shadow-md">{service.title}</h3>
                                <p className="text-white mb-8 leading-relaxed font-medium drop-shadow-sm">
                                    {service.description}
                                </p>
                                <a
                                    href="#"
                                    className="inline-block bg-white/20 hover:bg-secondary text-white px-6 py-2 rounded-full text-sm font-bold transition-all border border-white/30 backdrop-blur-sm shadow-sm"
                                >
                                    Read more...
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
