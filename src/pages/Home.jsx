import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import ServiceAreas from '../components/ServiceAreas'
import Footer from '../components/Footer'
import LocalExperts from '../components/LocalExperts'

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <Hero />
            <LocalExperts />
            <Services />
            <Portfolio />
            <CTA />
            <Testimonials />
            <ServiceAreas />
            <Footer />
        </div>
    );
};

export default Home;
