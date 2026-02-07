import { motion } from 'framer-motion';

const LocalExperts = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Text Content */}
                    <div className="w-full lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight"
                        >
                            Your Local Roofing Experts in <span className="text-secondary">Martinez, CA</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-gray-600 space-y-6 text-lg leading-relaxed"
                        >
                            <p>
                                Affordable Roofing Systems is a locally owned roofing company committed to delivering durable, long-lasting, and cost-effective solutions. Led by Kelly B., Business Owner, our team brings hands-on experience, attention to detail, and honest pricing to every project.
                            </p>
                            <p>
                                Whether you need a full roof replacement, re-roofing, or new gutter installation, we work with quality materials and proven methods to protect your home and investment.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6"
                        >
                            <button
                                className="bg-secondary hover:bg-secondary-hover text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl"
                                onClick={() => document.getElementById('quote').scrollIntoView({ behavior: 'smooth' })}
                            >
                                Get a Free Estimate
                            </button>

                            <div className="flex items-center space-x-2 text-primary font-semibold">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-secondary">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </span>
                                <span>We work with all insurers</span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="w-full lg:w-1/2"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                            <img
                                src="/images/parallax/House3.png"
                                alt="Modern roofing on a house"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            {/* Optional subtle gradient overlay for depth */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default LocalExperts;
