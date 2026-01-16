import Navigation from '@/components/Navigation';
import DestinationsSection from '@/components/DestinationsSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SEO from '@/components/SEO';

const Destinations = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
       <SEO title="Destinations" description="Explore study and work opportunities in USA, UK, Canada, Australia, New Zealand, Germany, and Ireland." />
      <Navigation />
      
      <div className="bg-gray-900 py-24 text-center text-white relative">
         <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Choose Your Destination</h1>
            <p className="text-xl text-gray-400">Where do you want to go?</p>
         </div>
      </div>

      <main className="flex-grow container mx-auto px-4 -mt-10 pb-20 relative z-10">
         <div className="bg-white rounded-3xl shadow-xl p-8">
            <DestinationsSection />
         </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Destinations;
