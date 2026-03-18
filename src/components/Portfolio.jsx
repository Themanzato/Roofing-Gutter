import { motion } from 'framer-motion';

const carouselImages = [
    "/images/carrusel/1366 (11).webp",
    "/images/carrusel/1366 (14).webp",
    "/images/carrusel/1366 (2).webp",
    "/images/carrusel/1366 (4).webp",
    "/images/carrusel/1366.webp",
    "/images/carrusel/3183.jpg",
    "/images/carrusel/Commercial Landscaping.jpg",
    "/images/carrusel/Hardscape Services.jpg",
    "/images/carrusel/Tree Services.jpg",
];

// Duplicate for seamless infinite scrolling
const duplicatedImages = [...carouselImages, ...carouselImages];

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 drop-shadow-sm"
                    >
                        Portfolio
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "80px" }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="h-1.5 bg-primary mx-auto rounded-full"
                    />
                </div>
            </div>

            {/* Scrolling Carousel wrapper */}
            <div className="relative w-full flex overflow-hidden">
                {/* 
                  Animate from -50% to 0% to create a seamless left-to-right loop.
                  Since we duplicated the array, 50% covers one full set of images.
                */}
                <motion.div
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{
                        ease: "linear",
                        duration: 35, // Adjust this value to change speed
                        repeat: Infinity,
                    }}
                    className="flex gap-6 px-3 w-max"
                >
                    {duplicatedImages.map((src, index) => (
                        <div
                            key={index}
                            className="w-[300px] sm:w-[400px] h-[250px] sm:h-[350px] relative rounded-2xl overflow-hidden shadow-md flex-shrink-0"
                        >
                            <img
                                src={src}
                                alt={`Portfolio project ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110 cursor-pointer"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
