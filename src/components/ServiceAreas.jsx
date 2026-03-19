import { motion } from 'framer-motion';

const ServiceAreas = () => {
    const locations = [
        "Martinez, CA",
        "Concord, CA",
        "Pleasant Hill, CA",
        "Danville, CA",
        "Clayton, CA"
    ];

    return (
        <section className="relative">
            {/* Top Section with Background Image */}
            <div className="relative py-12 lg:py-20">
                {/* Background Image */}
                <div 
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/backgrounds/Header.jpg')" }}
                >
                    {/* Optional overlay for better contrast if needed, keeping it light per reference */}
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Control height on desktop to keep everything square/compact */}
                    <div className="flex flex-col lg:flex-row gap-6 lg:h-[450px]">
                        
                        {/* Left Column: White Text Box */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white p-6 md:p-8 lg:p-10 rounded-sm shadow-xl flex-1 flex flex-col justify-center h-full"
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-900 mb-4 leading-tight">
                                Serving California & <br /> Surrounding Areas
                            </h2>
                            <p className="text-gray-600 mb-6 text-sm md:text-base">
                                At <strong className="text-gray-900 font-bold">Rejoice Rios Landscape</strong>, we are dedicated to<br className="hidden md:block"/>
                                serving homeowners throughout California and<br className="hidden md:block"/>
                                surrounding areas.
                            </p>

                            <div className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6">
                                {locations.map((loc, index) => (
                                    <div key={index} className="flex items-center text-gray-900 font-bold text-sm md:text-base">
                                        <span className="bg-primary flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full mr-3 text-gray-900 shrink-0">
                                            <svg className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                        {loc}
                                    </div>
                                ))}
                            </div>

                            <div className="border-l-4 border-gray-400 pl-4 py-1 mt-auto">
                                <p className="text-gray-600 text-xs md:text-sm">
                                    If you’re located nearby, feel free to contact us — we’re happy to help.
                                </p>
                            </div>
                        </motion.div>

                        {/* Right Column: Map */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex-1 h-[350px] lg:h-full shadow-xl bg-gray-200 border-[6px] border-white rounded-sm overflow-hidden"
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50325.86729579693!2d-122.16947623126937!3d37.999684347716584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80856711722e0309%3A0xe214227914092440!2sMartinez%2C%20CA%2094553!5e0!3m2!1sen!2sus!4v1707338765432!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Service Area Map"
                                className="w-full h-full object-cover"
                            ></iframe>
                        </motion.div>

                    </div>
                </div>
            </div>

            {/* Bottom Section: Business Hours & Contact Info */}
            <div id="contact" className="bg-white py-12 border-t border-gray-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center divider-x divide-gray-200">
                        
                        {/* Business Hours */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md">
                                <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 tracking-wide">BUSINESS HOURS</h3>
                            <div className="space-y-1 md:space-y-2 text-gray-600 font-medium text-sm md:text-base">
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
                            className="flex flex-col items-center relative"
                        >
                            {/* Desktop Divider Line */}
                            <div className="hidden md:block absolute left-[-2rem] top-[10%] bottom-[10%] w-px bg-gray-200"></div>

                            <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-full flex items-center justify-center mb-4 md:mb-6 shadow-md">
                                <svg className="w-6 h-6 md:w-8 md:h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 tracking-wide">CONTACT US</h3>
                            <div className="space-y-1 md:space-y-2 text-gray-600 font-medium text-sm md:text-base">
                                <p><strong className="text-gray-900">Phone:</strong> (925) 381-9162</p>
                                <p><strong className="text-gray-900">Email:</strong> info@techinnovationroofing.com</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceAreas;
