import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import ContactSection from '../components/ContactSection';

const AboutUs = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Hero Section for About Us (Logo Only) */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed filter brightness-95"
                    style={{ backgroundImage: "url('/images/new images/portadaAbout.webp')" }}
                >
                    {/* Dark gradient overlay to ensure logo pops */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
                    <div className="absolute inset-0 bg-[#73EC8B]/20"></div>
                </div>

                {/* Content: Just the Large Logo */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 flex justify-center items-center">
                    <img
                        src="/images/logos/Logo.png"
                        alt="Rejoice Rios Landscape Logo"
                        className="w-[80%] max-w-[600px] object-contain drop-shadow-2xl opacity-90"
                    />
                </div>
            </section>

            {/* Main Content Sections */}
            <main className="flex-grow bg-white">
                {/* Section 1: About Us */}
                <section className="flex flex-col md:flex-row items-stretch">
                    {/* Visual side */}
                    <div className="w-full md:w-1/2 relative min-h-[500px] md:min-h-[600px]">
                        {/* Faded Background */}
                        <div 
                            className="absolute inset-0 bg-cover bg-left"
                            style={{ 
                                backgroundImage: "url('/images/aboutus/aboutusbg.jpg')",
                                WebkitMaskImage: "linear-gradient(to right, black 40%, transparent 100%)",
                                maskImage: "linear-gradient(to right, black 40%, transparent 100%)"
                            }}
                        ></div>
                        {/* Overlay Image */}
                        <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12 pl-0 md:pl-8">
                            <img 
                                src="/images/aboutus/aboutus1.png" 
                                alt="About our work" 
                                className="w-full h-auto max-w-[600px] object-contain relative z-10"
                                style={{ filter: "drop-shadow(0 20px 25px rgba(0,0,0,0.15))" }}
                            />
                        </div>
                    </div>
                    
                    {/* Text side */}
                    <div className="w-full md:w-1/2 flex items-center p-8 lg:p-16 xl:p-24 bg-white">
                        <div className="max-w-xl mx-auto md:ml-12 md:mr-auto text-left">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8 tracking-tight">About Us</h2>
                            <div className="space-y-6 text-gray-600 font-medium text-lg leading-relaxed">
                                <p>We are a faith-based landscaping company committed to serving our community with integrity, excellence, and dedication. Guided by Christian values, we believe in working with honesty, respect, and responsibility in every project.</p>
                                <p>Our goal is not only to create beautiful outdoor spaces, but also to build lasting relationships with our clients through trust, reliability, and hard work.</p>
                                <p>Our faith inspires us to work with integrity, provide honest pricing, and deliver quality results you can trust.</p>
                                <p>As a Christian-owned and operated company, we treat every property with care and every client with respect.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 2: Our Team */}
                <section className="flex flex-col-reverse md:flex-row items-stretch">
                    {/* Text side */}
                    <div className="w-full md:w-1/2 flex items-center p-8 lg:p-16 xl:p-24 bg-white relative z-10">
                        <div className="max-w-xl mx-auto md:mr-auto md:ml-12 text-left">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8 tracking-tight">Our Team</h2>
                            <div className="space-y-6 text-gray-600 font-medium text-lg leading-relaxed">
                                <p>Our team is made up of experienced and dedicated landscaping professionals who take pride in their work. With years of hands-on experience in residential and commercial landscaping, we handle everything from routine maintenance to complete landscape installations.</p>
                            </div>
                        </div>
                    </div>

                    {/* Visual side */}
                    <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px]">
                        <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ 
                                backgroundImage: "url('/images/new images/team.webp')",
                                WebkitMaskImage: "linear-gradient(to left, black 60%, transparent 100%)",
                                maskImage: "linear-gradient(to left, black 60%, transparent 100%)"
                            }}
                        ></div>
                    </div>
                </section>

                {/* Section 3: Experienced Professionals */}
                <section className="flex flex-col md:flex-row items-stretch">
                    {/* Visual side */}
                    <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[500px]">
                        <div 
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ 
                                backgroundImage: "url('/images/aboutus/aboutus3.webp')",
                                WebkitMaskImage: "linear-gradient(to right, black 60%, transparent 100%)",
                                maskImage: "linear-gradient(to right, black 60%, transparent 100%)"
                            }}
                        ></div>
                    </div>
                    
                    {/* Text side */}
                    <div className="w-full md:w-1/2 flex items-center p-8 lg:p-16 xl:p-24 bg-white relative z-10">
                        <div className="max-w-xl mx-auto md:ml-12 text-left">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-8 tracking-tight">Experienced Professionals</h2>
                            <div className="space-y-6 text-gray-600 font-medium text-lg leading-relaxed">
                                <p>Our staff brings extensive experience in lawn care, irrigation systems, tree services, hardscape installation, and property maintenance. We stay updated with industry best practices to ensure safe, efficient, and high-quality results.</p>
                                <p>We believe that a strong team is the foundation of excellent service, and we are proud of the professionalism and dedication our crew demonstrates every day.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center border-t border-gray-100 pt-16">
                            
                            {/* Value 1 */}
                            <div className="flex items-center justify-center space-x-4">
                                <div className="bg-primary p-2 rounded-sm transform -rotate-3">
                                    <svg className="w-8 h-8 text-black transform rotate-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight uppercase">Honesty</h3>
                            </div>

                            {/* Value 2 */}
                            <div className="flex items-center justify-center space-x-4">
                                <div className="bg-primary p-2 rounded-sm transform -rotate-3">
                                    <svg className="w-8 h-8 text-black transform rotate-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight uppercase">Integrity</h3>
                            </div>

                            {/* Value 3 */}
                            <div className="flex items-center justify-center space-x-4">
                                <div className="bg-primary p-2 rounded-sm transform -rotate-3">
                                    <svg className="w-8 h-8 text-black transform rotate-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight uppercase">Excellence</h3>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <CTA />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default AboutUs;
