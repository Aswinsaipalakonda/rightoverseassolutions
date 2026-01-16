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
      
      <div className="bg-primary py-24 text-center">
         <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">Let's Talk</h1>
            <p className="text-xl text-black/70">Start your journey today.</p>
         </div>
      </div>

      <main className="flex-grow -mt-20 container mx-auto px-4 relative z-10 pb-20">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
           <ContactSection />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contact;
