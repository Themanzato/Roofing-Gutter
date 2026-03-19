import { motion } from 'framer-motion';

const ContactSection = () => {
    return (
        <div id="contact" className="bg-white py-12 border-t border-gray-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">

                    {/* Business Hours */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center pb-8 md:pb-0"
                    >
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md">
                            <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 tracking-wide">BUSINESS HOURS</h3>
                        <div className="space-y-2 text-gray-600 font-medium text-sm md:text-base">
                            <p>Monday – Friday: 8:00 AM – 6:00 PM</p>
                            <p>Saturday: 9:00 AM – 2:00 PM</p>
                            <p>Sunday: Closed</p>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center pt-8 md:pt-0"
                    >
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md">
                            <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 tracking-wide">CONTACT US</h3>
                        <div className="space-y-2 text-gray-600 font-medium text-sm md:text-base">
                            <p>Phone: <a href="tel:+19253819162" className="hover:text-primary transition-colors">(925) 381-9162</a></p>
                            <p>Email: <a href="mailto:info@techinnovationroofing.com" className="hover:text-primary transition-colors">info@techinnovationroofing.com</a></p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default ContactSection;
