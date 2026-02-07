import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/certification/certification.png"
                                alt="Certification and Roofer working"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        {/* Experience Badge - Minimalist Circle */}
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, type: "spring" }}
                            className="absolute -bottom-6 -right-6 lg:bottom-10 lg:-right-10 bg-secondary text-white rounded-full shadow-lg hidden md:flex flex-col items-center justify-center w-28 h-28"
                        >
                            <div className="text-3xl font-bold leading-none">5+</div>
                            <div className="text-[10px] font-medium uppercase tracking-wider mt-1">Years Exp</div>
                        </motion.div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2"
                    >
                        <span className="text-secondary font-semibold uppercase tracking-wider text-sm">About Company</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">
                            About Affordable Roofing Systems
                        </h2>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                            We specialize in roof inspections, repairs, and replacements, technology to evaluate roofs safely and accurately. Our team is known for quality workmanship, excellent customer service, and a strong record of successful insurance claim assistance.
                        </p>
                        <p className="text-gray-600 mb-4">
                            Affordable Roofing Systems is a trusted residential roofing company in Bay Area with over 10 years of experience serving homeowners with reliable, high-quality roofing solutions.
                        </p>
                        <p className="text-gray-600 mb-8">
                            Homeowners across Bay Area trust us for honest recommendations, durable materials, and a stress-free roofing process.
                        </p>

                        {/* Call Now - Minimalist & Modern Button Style */}
                        <div className="mt-8">
                            <a
                                href="tel:+19253819162"
                                className="group inline-flex items-center gap-4 bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:border-secondary/30 transition-all duration-300"
                            >
                                <div className="bg-primary/5 p-2 rounded-full group-hover:bg-primary/10 transition-colors">
                                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Have questions?</span>
                                    <span className="text-sm font-bold text-primary group-hover:text-secondary transition-colors">Call Kelly for expert assistance</span>
                                </div>
                            </a>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
