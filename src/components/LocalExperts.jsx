import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LocalExperts = () => {
    return (
        <section className="relative bg-white overflow-hidden">
            {/* Green accent line at top */}
            <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left - Text Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight"
                        >
                            Complete Outdoor Design,<br />
                            Build & Maintenance
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-600 space-y-6 text-base md:text-lg leading-relaxed"
                        >
                            <p>
                                We design, build, and maintain beautiful, functional, and sustainable outdoor spaces for residential and commercial properties, delivering high-quality workmanship, reliable service, and exceptional attention to detail.
                            </p>
                            <p>
                                From landscape design and installation to ongoing maintenance, we provide efficient, long-term solutions that keep outdoor spaces clean, attractive, and thriving year-round.
                            </p>
                        </motion.div>

                        {/* Icon Badges */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-10 flex items-center gap-6"
                        >
                            {/* Experienced Professional */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md">
                                    <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="leading-tight">
                                    <span className="text-sm font-bold text-gray-900 block">Experienced</span>
                                    <span className="text-sm font-bold text-gray-900 block">Professional</span>
                                </div>
                            </div>

                            {/* Separator */}
                            <div className="h-10 w-px bg-gray-300"></div>

                            {/* Satisfaction Guaranteed */}
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md">
                                    <svg className="w-5 h-5 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                    </svg>
                                </div>
                                <div className="leading-tight">
                                    <span className="text-sm font-bold text-gray-900 block">Satisfaction</span>
                                    <span className="text-sm font-bold text-gray-900 block">Guaranteed</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-10"
                        >
                            <Link
                                to="/about"
                                className="inline-block bg-primary hover:bg-primary-dark text-gray-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                            >
                                Get to Know Us
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="w-full lg:w-1/2 flex justify-center lg:justify-end"
                    >
                        <img
                            src="/images/new images/Chico.png"
                            alt="Landscape professional working outdoors"
                            className="max-w-full h-auto object-contain"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default LocalExperts;
