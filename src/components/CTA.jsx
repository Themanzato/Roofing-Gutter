import { motion } from 'framer-motion';

const CTA = () => {
    return (
        <section id="quote" className="py-16 md:py-24 relative overflow-hidden flex items-center justify-center min-h-[350px]">
            {/* Parallax Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed filter brightness-75"
                style={{
                    backgroundImage: "url('/images/new images/CallUs.webp')"
                }}
            ></div>
            
            {/* Green Tint Overlay */}
            {/* Using a rich green overlay to match the reference image exactly */}
            <div className="absolute inset-0 z-0 bg-green-800/60 mix-blend-multiply"></div>
            <div className="absolute inset-0 z-0 bg-green-600/40"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex justify-center items-center"
                >
                    <motion.a
                        href="https://wa.me/19257686272?text=Hello%2C%20I%20would%20like%20to%20receive%20information%20about%20your%20services.%20Thank%20you"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary hover:bg-primary-dark text-gray-900 px-8 py-4 rounded-md font-bold text-lg transition-colors shadow-2xl flex items-center justify-center"
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
