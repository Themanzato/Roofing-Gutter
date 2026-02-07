import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const projects = [
    { title: "Residential Project 1", image: "/images/projects/Projecto1.png" },
    { title: "Residential Project 2", image: "/images/projects/Projecto2.png" },
    { title: "Residential Project 3", image: "/images/projects/Projecto3.png" },
    { title: "Residential Project 4", image: "/images/projects/Projecto1.png" },
    { title: "Commercial Project 1", image: "/images/projects/Projecto2.png" },
    { title: "Commercial Project 2", image: "/images/projects/Projecto3.png" },
];

const Portfolio = () => {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef();

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

    return (
        <section id="portfolio" className="py-20 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-secondary font-semibold uppercase tracking-wider text-sm">Our Work</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-primary mt-2 mb-4">
                        Recent Projects
                    </h2>
                    <div className="h-1 w-24 bg-secondary mx-auto rounded-full"></div>
                </div>

                <motion.div
                    ref={carouselRef}
                    className="cursor-grab overflow-hidden"
                    whileTap={{ cursor: "grabbing" }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-6"
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="min-w-[300px] md:min-w-[400px] h-[300px] md:h-[400px] relative rounded-2xl overflow-hidden shadow-lg group"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover pointer-events-none transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                    <h3 className="text-white text-xl font-bold">{project.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                <div className="text-center mt-8 text-gray-400 text-sm">
                    <p>Drag to explore our latest work</p>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
