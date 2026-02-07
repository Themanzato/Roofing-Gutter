import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section id="quote" className="py-20 relative overflow-hidden bg-primary">
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30 mix-blend-overlay"
                style={{
                    backgroundImage: "url('/images/parallax/House2.jpg')"
                }}
            ></div>
            {/* Abstract Background Element */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-5 z-0"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-5 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-5xl font-bold text-white mb-6"
                >
                    Ready to Work With Us?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
                >
                    Get a free consultation and quote for your next roofing project.
                    We are ready to build the roof you need.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-secondary hover:bg-secondary-hover text-white px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg"
                    >
                        Get a Free Quote
                    </motion.a>
                    <motion.a
                        href="tel:+1234567890"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-lg flex items-center justify-center"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Us Now
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
