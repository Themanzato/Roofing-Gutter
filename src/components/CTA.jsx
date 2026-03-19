import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section id="quote" className="py-16 md:py-24 relative overflow-hidden flex items-center justify-center min-h-[350px]">
            {/* Parallax Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed filter brightness-75"
                style={{
                    backgroundImage: "url('/images/backgrounds/callus.png')"
                }}
            ></div>
            
            {/* Green Tint Overlay */}
            {/* Using a rich green overlay to match the reference image exactly */}
            <div className="absolute inset-0 z-0 bg-green-800/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 z-0 bg-green-600/40"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 drop-shadow-xl tracking-tight"
                >
                    Call Us to Discuss Your Project
                </motion.h2>
                
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-xl md:text-2xl text-white mb-10 font-medium drop-shadow-md leading-relaxed"
                >
                    We offer phone consultations and free on-site estimates<br className="hidden md:block" />
                    at no cost. We’re ready to work with you
                </motion.p>
                
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-4"
                >
                    <motion.a
                        href="#contact"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary hover:bg-primary-dark text-gray-900 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-2xl"
                    >
                        Get a Free Quote
                    </motion.a>
                    
                    <motion.a
                        href="https://wa.me/19257686272?text=Hello%2C%20I%20would%20like%20to%20receive%20information%20about%20your%20services.%20Thank%20you"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-2xl flex items-center justify-center"
                    >
                        <svg className="w-5 h-5 mr-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
