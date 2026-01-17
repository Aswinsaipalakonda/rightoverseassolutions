import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SEO from '@/components/SEO';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, Briefcase, Plane, FileSearch, University, Banknote, ShieldCheck, 
  CheckCircle2, ArrowRight, Users, FileText, Home, Smartphone, CreditCard, 
  Building, Heart, MapPin, Car, Clock
} from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();

  const studentVisaServices = [
    { icon: FileSearch, title: "Personalised Profile Assessment", desc: "Detailed analysis of your academic background and career goals" },
    { icon: University, title: "University Applications", desc: "Expert assistance with shortlisting and applying to top universities" },
    { icon: FileText, title: "University Admission Letter", desc: "Securing offer letters from your chosen institutions" },
    { icon: Banknote, title: "Education Loan", desc: "Guidance on education loans and financial documentation" },
    { icon: Heart, title: "Health Cover", desc: "Arranging OSHC/Medical insurance for your study destination" },
    { icon: ShieldCheck, title: "Visa Assistance", desc: "Complete visa application support and documentation" },
    { icon: Plane, title: "Pre-Departure Guidance", desc: "Comprehensive briefing on life abroad and travel preparation" },
  ];

  const workVisaServices = [
    { icon: FileSearch, title: "Document Validation", desc: "Thorough verification of all your documents" },
    { icon: Users, title: "Personalised Counselling", desc: "One-on-one career guidance sessions" },
    { icon: Briefcase, title: "The RIGHT Career Options", desc: "Matching your skills with global opportunities" },
    { icon: FileText, title: "Work Permit Letter", desc: "Assistance with work permit applications" },
    { icon: ShieldCheck, title: "Workplace Insurance", desc: "Setting up workplace insurance coverage" },
    { icon: CheckCircle2, title: "Visa Application", desc: "End-to-end visa application support" },
    { icon: Clock, title: "Pre-Departure Briefing", desc: "Comprehensive orientation before departure" },
    { icon: Home, title: "Accommodation Support", desc: "Help finding suitable accommodation" },
    { icon: Car, title: "Airport Pickup", desc: "Arranging airport pickup services" },
  ];

  const travelVisaServices = [
    { icon: FileSearch, title: "Document Validation", desc: "Complete document verification" },
    { icon: Plane, title: "Flight Tickets", desc: "Best deals on flight bookings" },
    { icon: CreditCard, title: "Currency Exchange", desc: "Forex services at competitive rates" },
    { icon: Building, title: "Bank Accounts", desc: "International bank account setup" },
    { icon: Smartphone, title: "SIM Cards", desc: "International SIM card arrangements" },
    { icon: MapPin, title: "Hotel Bookings", desc: "Accommodation reservations worldwide" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
       <SEO title="Our Services" description="Complete visa services for Students, Working professionals and Travelers - Study Abroad, Work Abroad, Travel Services." />
      <Navigation />
      
      {/* Header */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20 md:pt-40 md:pb-28 text-center overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-20" />
         <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
         <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
         <div className="container mx-auto relative z-10 px-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 text-sm font-medium text-white">
              <GraduationCap className="w-4 h-4 text-primary" />
              <span>Comprehensive Solutions</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">The <span className="text-primary">RIGHT</span> Services</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">Your trusted partner for Study Abroad, Work Permits, and Travel Visas</p>
         </div>
      </div>

      <main className="flex-grow py-16 px-4 md:px-8 lg:px-16 container mx-auto -mt-12">
        
        {/* Student Visa Section */}
        <section className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 border-2 border-transparent hover:border-primary/20 transition-all">
          <div className="relative bg-gradient-to-r from-primary via-amber-400 to-primary p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=400&fit=crop')] bg-cover bg-center opacity-10" />
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div className="p-6 bg-black/10 backdrop-blur-sm rounded-2xl shadow-lg">
                 <GraduationCap className="h-14 w-14 md:h-16 md:w-16 text-black" />
              </div>
              <div className="text-center md:text-left flex-1">
                 <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">Student Visa Services</h2>
                 <p className="text-black/80 text-base md:text-lg font-medium">Your gateway to world-class education at top global universities</p>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-12 bg-gradient-to-br from-white to-amber-50/30">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
               {studentVisaServices.map((item, index) => (
                  <div key={index} className="group p-6 bg-white hover:bg-gradient-to-br hover:from-primary/5 hover:to-amber-50 rounded-2xl transition-all duration-300 hover:shadow-xl border-2 border-gray-100 hover:border-primary/30">
                    <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center mb-4 transition-colors">
                      <item.icon className="h-6 w-6 text-primary group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
               ))}
            </div>
          </div>
        </section>

        {/* Work Visa Section */}
        <section className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 border-2 border-transparent hover:border-primary/20 transition-all">
          <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&h=400&fit=crop')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-primary/10" />
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div className="p-6 bg-primary/20 backdrop-blur-sm rounded-2xl shadow-lg">
                 <Briefcase className="h-14 w-14 md:h-16 md:w-16 text-primary" />
              </div>
              <div className="text-center md:text-left flex-1">
                 <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">Work Visa Services</h2>
                 <p className="text-gray-300 text-base md:text-lg font-medium">Build your international career on a global stage</p>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {workVisaServices.map((item, index) => (
                  <div key={index} className="group flex items-start gap-4 p-5 rounded-xl hover:bg-primary/5 transition-all duration-300 border border-transparent hover:border-primary/20">
                     <div className="p-3 bg-primary/10 group-hover:bg-primary rounded-lg text-primary group-hover:text-black transition-colors shrink-0">
                        <item.icon className="h-5 w-5" />
                     </div>
                     <div>
                        <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
          </div>
        </section>

        {/* Travel Visa Section */}
        <section className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 border-2 border-transparent hover:border-primary/20 transition-all">
          <div className="relative bg-gradient-to-r from-primary via-amber-300 to-amber-400 p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=400&fit=crop')] bg-cover bg-center opacity-10" />
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <div className="p-6 bg-black/10 backdrop-blur-sm rounded-2xl shadow-lg">
                 <Plane className="h-14 w-14 md:h-16 md:w-16 text-black" />
              </div>
              <div className="text-center md:text-left flex-1">
                 <h2 className="text-3xl md:text-5xl font-bold text-black mb-2">Travel & Visit Visa</h2>
                 <p className="text-black/80 text-base md:text-lg font-medium">Seamless travel experiences for leisure and business worldwide</p>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-12 bg-gradient-to-br from-white to-amber-50/30">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {travelVisaServices.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 p-6 bg-white hover:bg-gradient-to-br hover:from-primary/5 hover:to-amber-50 rounded-xl transition-all duration-300 border-2 border-gray-100 hover:border-primary/30 hover:shadow-lg">
                     <div className="p-3 bg-primary/10 rounded-xl text-primary shrink-0">
                        <item.icon size={24} />
                     </div>
                     <div>
                        <h3 className="font-bold text-gray-900">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                     </div>
                  </div>
               ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-8 md:p-16 text-center overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-10" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">Book a free consultation with our experts and take the first step towards your dream destination.</p>
            <button
              onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-amber-400 text-black font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-xl shadow-primary/30"
            >
              <span>Book FREE Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Services;
