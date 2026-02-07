import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 flex items-center bg-accent min-h-screen md:min-h-[800px]">
            {/* Background Image Overlay */}
            {/* Background Image with Dark Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: "url('/images/parallax/House1.jpg')"
                }}
            >
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
                <div className="max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg"
                    >
                        Reliable <br />
                        Roofing & Gutter Solutions <br />
                        You Can Trust
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-lg md:text-2xl text-gray-100 mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-md"
                    >
                        Quality roofing solutions that protect your home and investment
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="flex justify-center"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-secondary hover:bg-secondary-hover text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl"
                            onClick={() => document.getElementById('quote').scrollIntoView({ behavior: 'smooth' })}
                        >
                            Get a Free Estimate
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
