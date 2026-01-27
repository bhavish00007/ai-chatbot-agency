import Navbar from '../components/Navbar';
import { Hero } from '../components/Hero';
import Features from '../components/Features';
import ChatDemo from '../components/ChatDemo';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <ChatDemo />
        <Pricing />
        <Testimonials />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;