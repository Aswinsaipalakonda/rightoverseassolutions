import Navigation from '@/components/Navigation';
import HeroSection, { CountryFlagsSection } from '@/components/HeroSection';
import DestinationsSection from '@/components/DestinationsSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import InquiryPopup from '@/components/InquiryPopup';
import SEO from '@/components/SEO';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO title="Home" />
      <Navigation />
      <InquiryPopup />
      <main className="flex-grow">
        <HeroSection />
        <CountryFlagsSection />
        <AboutSection />
        <DestinationsSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Home;
