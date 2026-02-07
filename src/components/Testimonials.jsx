import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviewsData = [
    {
        name: "Alfreda P.",
        date: "Dec 17, 2025",
        text: "Pro impressed me first when they honed in on to explain our many drainage problems and second with their installation of a state of the art sprinkler system. (The new irrigation covers more with fewer valves and a sophisticated control system.) They offered plant watering and care suggestions, and even fixed an unrelated leak. I look forward to doing business with them again.",
        details: "Residential • Sprinkler and Irrigation System Repair and Maintenance"
    },
    {
        name: "Roshan P.",
        date: "Sep 12, 2025",
        text: "Eddy was such a professional, as was his team. Fixed a number of valves in our backyard and rerouted the irrigation system for our garden, doing a wonderful job well above any expectations I had. I would strongly recommend Eddy and his team, and am looking forward to working with them again!",
        details: "Residential • No sprinkler system maintenance needed • Sprinkler and Irrigation System Repair and Maintenance"
    },
    {
        name: "David P.",
        date: "Aug 13, 2025",
        text: "Really appreciate the transparency and attentive assessment as well as the nice install of a broken old sprinkler timer. Thanks!",
        details: "Residential • Timer does not work • Sprinkler and Irrigation System Repair and Maintenance"
    },
    {
        name: "Emily Y.",
        date: "Jul 2, 2025",
        text: "Eduardo came out to my house as I had questions regarding our existing irrigation system. Not only was he knowledgeable, but he took the time to identify this problem and steps to resolve the issue. I learned a lot in such a short time!",
        details: "Residential • No water to one area of sprinkler heads • Sprinkler direction or spread needs to be readjusted • Midsummer checkup - system checkup during harsh, dry season"
    },
    {
        name: "Shirley K.",
        date: "May 22, 2025",
        text: "Eduardo was very responsive and punctual. He dropped by in between jobs to diagnose the issue and then came back after and repaired it. He looked at the irrigation system and diagnosed the issue within seconds. I’m so glad to have a functioning system again.",
        details: "Residential • System won't turn on • No sprinkler system maintenance needed"
    },
    {
        name: "Sondra S.",
        date: "Apr 21, 2025",
        text: "Eduardo very quickly diagnosed our sprinkler problem that another gardener was unable to solve. He came back the next day with the necessary parts and made it work again! Eduardo communicated the issues perfectly and replaced our valves with better ones. Now my plants are well-watered an looking great! Highly recommended.",
        details: "Residential • Water runs continuously • Timer needs to be reprogrammed"
    },
    {
        name: "Christina S.",
        date: "Mar 25, 2025",
        text: "Rios Landscaping is my 3rd irrigation company. Third time is a charm. Edwardo the owner is passionate about irrigation and knows what to do and the five workers that help him all are hardworking and personable. Hugo is the foreman and he answers all my questions and concerns when Edwardo is somewhere else. I highly recommend this company and my only regret is that I didn't find him first. Thumbtack has a winner with Rios Landscaping.",
        details: "Residential • No repairs, only maintenance"
    },
    {
        name: "Tory H.",
        date: "Feb 10, 2025",
        text: "We were re-landscaping the front yard and broke the sprinkler irrigation system in 2 spots. As we had recently bought the house, we didn’t know much about the irrigation system. Eduardo did a full assessment of the system and repaired the 2 broken spots. It was so helpful to have an explanation of the whole system, and a relief to have it fixed quickly so we could continue with the landscaping project. A job well done!",
        details: "Residential • Spring activation - system needs to be reactivated"
    },
    {
        name: "Susan E.",
        date: "Jan 24, 2025",
        text: "Mr. Rios was prompt and professional. He isolated my water leak problem immediately, and gave me good advice about how to handle my sprinkler system going forward.",
        details: "Water runs continuously • Sprinkler head(s) need to be relocated"
    },
    {
        name: "Michael D.",
        date: "7 days ago",
        text: "They did not fully understand what I requested for a portion of the job, but I’m very pleased with the work done, quality, speed and cleanup after.",
        details: "Residential • Sprinkler head is broken • No sprinkler system maintenance needed"
    },
    {
        name: "Maria K.",
        date: "Dec 20, 2024",
        text: "Eddie and his crew were a pleasure to work with on our irrigation and landscaping project. The work was completed on schedule, and they always left the site immaculate. Highly recommended 👍",
        details: "I want to update or add to an existing system • 500-1000 sq. ft. • System recommended by professional • Residential"
    },
    {
        name: "Karen D.",
        date: "Dec 10, 2024",
        text: "Eduardo and his team installed a new drip system in our backyard. Eduardo also offered tips on taking care of our existing plants and what to add to our landscape. He and his team were on time and got the job done fast. Will definitely hire them again.",
        details: "Residential • Sprinkler head is broken • No water to a single sprinkler head • No water to one area of sprinkler heads"
    },
    {
        name: "Kathy J.",
        date: "Jul 14, 2025",
        text: "Repair of the broken sprinkler was completed the same day that I contacted Thumbtack.",
        details: "Residential • No water to a single sprinkler head • No sprinkler system maintenance needed"
    },
    {
        name: "Ruth P.",
        date: "Oct 16, 2024",
        text: "Responded very quickly and resolved our sprinkler problem immediately. I will absolutely be calling Rios landscaping when we need anything related to what this pro does!",
        details: "Water runs continuously"
    },
    {
        name: "Suse L.",
        date: "Sep 14, 2024",
        text: "Eduardo did a great job on my yard. He advised me that my irrigation plans would not supply enough water to my future gardens and added several valves to accommodate them. I wouldn’t hesitate to use him again. He doesn’t cut corners.",
        details: "I want to update or add to an existing system • 500-1000 sq. ft. • Timer-driven automatic system • Residential"
    }
];

const TypewriterText = ({ text }) => {
    // Split text into characters for granular control if needed, 
    // or just animate a clipping mask/width. 
    // For a true "typewriter" feel where letters appear one by one:
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const intervalId = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(index));
            index++;
            if (index === text.length) {
                clearInterval(intervalId);
            }
        }, 10); // Speed of typing

        return () => clearInterval(intervalId);
    }, [text]);

    return <>{displayedText}</>;
};

const ReviewCard = ({ review }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const maxLength = 150;
    const shouldTruncate = review.text.length > maxLength;

    // We only want the typewriter effect to run once when the component mounts/is viewed.
    // However, with the carousel, components might unmount/remount. 
    // The user said: "una vez escritas ya no se modifica" (once written, it doesn't change).
    // So we should probably store "hasAnimated" state or just let it run on mount (which happens when sliding).
    // Let's us a simple effect on mount. 

    const handleCardClick = (e) => {
        if (e.target.closest('button')) return;
        window.open("https://www.thumbtack.com/ca/walnut-creek/landscaping/rejoice-rios-landscape/service/316014599988764804", "_blank");
    };

    return (
        <div
            onClick={handleCardClick}
            className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-all h-full flex flex-col cursor-pointer relative group overflow-hidden"
        >
            {/* Helper text */}
            <div className="absolute top-4 right-4 text-xs text-gray-300 group-hover:text-secondary transition-colors">
                Click to view on Thumbtack ↗
            </div>

            <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-primary font-bold text-xl mr-4 shrink-0 shadow-inner">
                    {review.name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-primary">{review.name}</h4>
                    <span className="text-xs text-gray-500 block">{review.date} • Hired on Thumbtack</span>
                </div>
            </div>

            <div className="flex text-yellow-500 mb-3 space-x-0.5">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>

            <div className="mb-4 flex-grow relative">
                {/* 
                   Layout Shift Fix: 
                   Render the full text invisibly to reserve the correct height/width.
                   Then overlay the typewriter effect absolutely. 
                */}
                <p className="text-gray-600 italic text-sm leading-relaxed opacity-0 select-none">
                    "
                    {shouldTruncate && !isExpanded
                        ? `${review.text.substring(0, maxLength)}...`
                        : review.text}
                    "
                </p>

                <p className="text-gray-600 italic text-sm leading-relaxed absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
                    "
                    <TypewriterText text={shouldTruncate && !isExpanded
                        ? `${review.text.substring(0, maxLength)}...`
                        : review.text}
                    />
                    "
                </p>

                {/* Red line underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all duration-500 group-hover:w-full"></span>

                {shouldTruncate && (
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-secondary text-xs font-semibold mt-2 hover:underline focus:outline-none relative z-20"
                    >
                        {isExpanded ? "Read Less" : "Read More"}
                    </button>
                )}
            </div>

            <div className="pt-4 border-t border-gray-50 mt-auto">
                <p className="text-xs text-gray-400 font-medium line-clamp-1">{review.details}</p>
            </div>
        </div>
    );
};

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) setItemsPerPage(3);
            else if (window.innerWidth >= 768) setItemsPerPage(2);
            else setItemsPerPage(1);
        };

        handleResize(); // Init
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            (prev + itemsPerPage >= reviewsData.length) ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            (prev === 0) ? Math.max(0, reviewsData.length - itemsPerPage) : prev - 1
        );
    };

    // Determine which items to show
    const visibleReviews = reviewsData.slice(currentIndex, currentIndex + itemsPerPage);
    // Handle edge case at end of list for seamless loop look (optional) or just strict slicing
    // For simplicity and robustness with simple slicing above:
    // If we are at the end, we might show fewer items if we don't wrap logic intricately. 
    // Let's adjust logic to always show 'itemsPerPage' if possible by limiting max index.

    // Revised navigation logic helper for clearer UX (non-looping sets or sliding window)
    // Let's stick to sliding window 1 by 1.

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-secondary font-semibold uppercase tracking-wider text-sm"
                    >
                        Testimonials
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-4xl font-bold text-primary mt-2"
                    >
                        What Our Clients Say
                    </motion.h2>
                    <p className="mt-4 text-gray-500">Rated 5.0 stars on Thumbtack</p>
                </div>

                <div className="relative">
                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 md:-ml-12 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors"
                        aria-label="Previous reviews"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Carousel Container */}
                    <div className="overflow-hidden py-4 -mx-4 px-4"> {/* Negative margin to allow shadow overflow */}
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            initial={false}
                        >
                            <AnimatePresence mode='wait'>
                                {visibleReviews.map((review) => (
                                    <motion.div
                                        key={`${review.name}-${currentIndex}`} // Force re-render for clean animation on slide
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ReviewCard review={review} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 md:-mr-12 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-colors"
                        aria-label="Next reviews"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots/Indicators */}
                <div className="flex justify-center mt-8 space-x-2">
                    {[...Array(Math.ceil(reviewsData.length / itemsPerPage) + 1)].map((_, i) => (
                        // Simplified indicator logic for sliding window
                        // Just showing current relative progress
                        <div
                            key={i}
                            className={`h-2 rounded-full transition-all duration-300 ${Math.floor(currentIndex / itemsPerPage) === i ? 'w-8 bg-secondary' : 'w-2 bg-gray-300'
                                }`}
                        />
                    )).slice(0, Math.ceil(reviewsData.length / itemsPerPage))}
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
