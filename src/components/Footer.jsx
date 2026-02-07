import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer id="contact">
            {/* Top Section: Business Hours & Contact (Light Background) */}
            <div className="bg-white text-gray-800 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">

                        {/* Business Hours */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 text-white shadow-lg">
                                {/* Clock Icon */}
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wide">Business Hours</h3>
                            <ul className="space-y-2 text-gray-600 font-medium">
                                <li>Monday – Friday: 8:00 AM – 6:00 PM</li>
                                <li>Saturday: 9:00 AM – 2:00 PM</li>
                                <li>Sunday: Closed</li>
                            </ul>
                        </motion.div>

                        {/* Contact Us */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 text-white shadow-lg">
                                {/* Phone Icon */}
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4 uppercase tracking-wide">Contact Us</h3>
                            <ul className="space-y-2 text-gray-600 font-medium">
                                <li>
                                    <span className="font-bold text-gray-800">Phone:</span> (925) 381-9162
                                </li>
                                <li>
                                    <span className="font-bold text-gray-800">Email:</span> info@techinnovationroofing.com
                                </li>
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* Bottom Section: Mission, Vision, Copyright (Dark Background) */}
            <div className="bg-black text-white pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-16 border-b border-gray-800 pb-12">

                        {/* Logo Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center justify-center h-full"
                        >
                            <div className="w-32 h-32 rounded-full border-2 border-secondary flex items-center justify-center text-center p-4">
                                <span className="text-secondary font-bold text-xl leading-tight">LOGO</span>
                            </div>
                        </motion.div>

                        {/* Mission Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h3 className="text-xl font-bold text-white mb-4">Mission</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Our mission is to provide high-quality residential roofing services in Pennsylvania, delivering durable solutions, honest communication, and exceptional customer care on every project.
                            </p>
                        </motion.div>

                        {/* Vision Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-xl font-bold text-white mb-4">Vision</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                To become a trusted leader in residential roofing, known for innovation, reliability, and long-term protection for homeowners.
                            </p>
                        </motion.div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center text-gray-500 text-sm">
                        &copy; 2026 <span className="text-white font-semibold">Affordable Roofing Systems</span> . All Rights Reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
