import Navigation from '@/components/Navigation';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SEO from '@/components/SEO';

const SuccessStories = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
       <SEO title="Success Stories" description="Read inspiring success stories from students and professionals we have helped settle abroad." />
      <Navigation />
      
      <div className="bg-gray-900 pt-32 pb-24 md:pt-40 text-center text-white relative">
         <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Success Stories</h1>
            <p className="text-xl text-gray-400">Real people. Real dreams achieved.</p>
         </div>
      </div>

      <main className="flex-grow container mx-auto px-4 -mt-10 pb-20 relative z-10">
         <div className="bg-white rounded-3xl shadow-xl p-8">
            <TestimonialsSection />
         </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default SuccessStories;
