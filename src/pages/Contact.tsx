import Navigation from '@/components/Navigation';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SEO from '@/components/SEO';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
       <SEO title="Contact Us" description="Book Your Free Consultation with Right Overseas Solutions." />
      <Navigation />
      
      <div className="bg-primary pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-40 md:pb-24 text-center">
         <div className="container mx-auto px-4">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-black mb-2 md:mb-4">Let's Talk</h1>
            <p className="text-base sm:text-lg md:text-xl text-black/70">Start your journey today.</p>
         </div>
      </div>

      <main className="flex-grow -mt-10 sm:-mt-14 md:-mt-20 container mx-auto px-3 sm:px-4 relative z-10 pb-10 md:pb-20">
        <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl overflow-hidden">
           <ContactSection />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contact;
