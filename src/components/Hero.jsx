import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 flex items-center min-h-screen md:min-h-[800px]">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: "url('/images/new images/portadaAbout.webp')"
                }}
            >
                {/* Green-tinted overlay for brand consistency */}
                <div className="absolute inset-0 bg-[#73EC8B]/20"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">

                    {/* Left Side - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="w-full md:w-1/2 text-left"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)]">
                            Transforming Outdoor <br />
                            Spaces with Quality <br />
                            and Care
                        </h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex justify-start"
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block"
                            >
                                <Link
                                    to="/services"
                                    className="inline-block bg-primary hover:bg-primary-dark text-gray-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl border border-primary-dark/20"
                                >
                                    Explore Our Services
                                </Link>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Large Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.7, type: "spring" }}
                        className="w-full md:w-1/2 flex justify-center md:justify-end"
                    >
                        <img
                            src="/images/logos/Logo.png"
                            alt="Rejoice Rios Landscape"
                            className="w-[280px] md:w-[400px] lg:w-[480px] h-auto drop-shadow-2xl"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
