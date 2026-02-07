import { motion } from 'framer-motion';

const ServiceAreas = () => {
    const locations = [
        "Martinez, CA",
        "Concord, CA",
        "Pleasant Hill, CA",
        "Denville, CA",
        "Clayton, CA"
    ];

    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 flex flex-col justify-center"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                            Serving Martinez, CA & <br />
                            <span className="text-secondary">Surrounding Areas</span>
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We proudly serve homeowners in Martinez, CA (94553) and nearby communities.
                            <span className="inline-block ml-2 text-secondary font-semibold">📍 Visit us:</span>
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                            {/* List rendering */}
                            <ul className="space-y-3">
                                {locations.map((loc, index) => (
                                    <li key={index} className="flex items-center text-gray-700 font-medium text-lg">
                                        <span className="bg-red-50 p-2 rounded-full mr-3 text-secondary">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                            </svg>
                                        </span>
                                        {loc}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="text-gray-500 mt-8 italic border-l-4 border-gray-200 pl-4 py-2">
                            If you’re located nearby, feel free to contact us — we’re happy to help.
                        </p>
                    </motion.div>

                    {/* Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 h-[400px] rounded-2xl overflow-hidden shadow-lg border border-gray-200"
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
                        ></iframe>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ServiceAreas;
