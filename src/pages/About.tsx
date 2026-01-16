import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import SEO from '@/components/SEO';
import { Target, Eye, Heart, Award, Globe, CheckCircle2, GraduationCap, Building, Clock, Star, ArrowRight, Sparkles, Users, Handshake, ShieldCheck, BookOpen, Compass } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const About = () => {
  const navigate = useNavigate();
  const [countersStarted, setCountersStarted] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  const achievements = [
    { number: 15, suffix: '+', label: 'Years of Experience', icon: Clock },
    { number: 10000, suffix: '+', label: 'Students Placed', icon: GraduationCap },
    { number: 500, suffix: '+', label: 'Partner Universities', icon: Building },
    { number: 98, suffix: '%', label: 'Success Rate', icon: Star },
  ];

  // Counter animation
  const [counts, setCounts] = useState(achievements.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersStarted) {
          setCountersStarted(true);
          
          achievements.forEach((achievement, index) => {
            const duration = 2000;
            const steps = 60;
            const increment = achievement.number / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= achievement.number) {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = achievement.number;
                  return newCounts;
                });
                clearInterval(timer);
              } else {
                setCounts(prev => {
                  const newCounts = [...prev];
                  newCounts[index] = Math.floor(current);
                  return newCounts;
                });
              }
            }, duration / steps);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [countersStarted]);

  const whyChooseUs = [
    { icon: Users, title: 'Expert Counselors', desc: 'Certified education consultants with international experience and deep knowledge of global education systems.', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop' },
    { icon: Compass, title: 'Personalized Guidance', desc: 'Customized roadmaps tailored to your unique profile, career goals, and budget.', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop' },
    { icon: Handshake, title: 'End-to-End Support', desc: 'From shortlisting universities to post-arrival assistance, we handle everything.', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop' },
    { icon: ShieldCheck, title: 'Transparent Process', desc: 'No hidden fees, no false promises – just honest and ethical guidance every step of the way.', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop' },
    { icon: Globe, title: 'Global Network', desc: 'Direct tie-ups with 500+ universities across UK, USA, Canada, Australia, Germany & more.', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop' },
    { icon: BookOpen, title: 'Post-Landing Care', desc: 'Our relationship continues even after you land – accommodation, banking, and settling-in support.', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=300&fit=crop' },
  ];

  const journey = [
    { step: '01', title: 'Free Consultation', desc: 'Share your dreams and goals with our experts' },
    { step: '02', title: 'Profile Evaluation', desc: 'We assess your academic and professional background' },
    { step: '03', title: 'University Shortlisting', desc: 'Get personalized university recommendations' },
    { step: '04', title: 'Application Support', desc: 'We handle documentation and applications' },
    { step: '05', title: 'Visa Assistance', desc: 'Complete visa guidance and interview prep' },
    { step: '06', title: 'Pre-Departure Briefing', desc: 'Everything you need to know before you fly' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO title="About Us" description="Learn about Right Overseas Solutions - 15+ years of helping students achieve their international education dreams." />
      <Navigation />
      
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 text-sm font-medium">
              <Sparkles className="w-4 h-4 text-primary" />
              <span>Trusted by 10,000+ Students</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your <span className="text-primary">RIGHT</span> Partner for<br className="hidden md:block" /> Global Education
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Since 2009, we've been transforming dreams into reality – one student at a time. Discover why thousands trust us with their overseas education journey.
            </p>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        
        {/* Stats Section - Overlapping */}
        <section ref={statsRef} className="container mx-auto px-4 -mt-12 md:-mt-16 relative z-20 mb-16 md:mb-24">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {achievements.map((item, index) => (
                <div key={index} className="text-center p-4 md:p-6 rounded-xl bg-gray-50 hover:bg-primary/5 transition-colors">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <div className="text-2xl md:text-4xl font-bold text-gray-900 mb-1">
                    {countersStarted ? (
                      counts[index] >= 1000 ? counts[index].toLocaleString() : counts[index]
                    ) : 0}{item.suffix}
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 font-medium">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="container mx-auto px-4 mb-16 md:mb-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 text-primary font-semibold text-sm">
                <Globe className="w-4 h-4" /> Our Story
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Transforming Dreams into <span className="text-primary">Reality</span>
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009 in Visakhapatnam, <strong className="text-gray-800">Right Overseas Solutions</strong> began with a simple mission: 
                  to provide honest, transparent, and accurate guidance to students aspiring to study abroad.
                </p>
                <p>
                  Over the past 15+ years, we have grown from a small consultancy to one of the most trusted names 
                  in overseas education consulting. Our journey has been marked by <strong className="text-gray-800">thousands of success stories</strong>, 
                  strong university partnerships, and an unwavering commitment to student success.
                </p>
                <p>
                  What sets us apart is our personalized approach. We don't believe in one-size-fits-all solutions. 
                  Every student who walks through our doors receives customized guidance tailored to their unique 
                  academic profile, career aspirations, and financial situation.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-4 -right-4 w-48 md:w-72 h-48 md:h-72 bg-primary/20 rounded-full blur-3xl -z-10" />
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop" 
                  alt="Team collaboration" 
                  className="rounded-2xl shadow-2xl w-full"
                />
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-3 md:p-5 rounded-xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 md:w-14 md:h-14 bg-primary rounded-full flex items-center justify-center">
                      <Award className="w-5 h-5 md:w-7 md:h-7 text-black" />
                    </div>
                    <div>
                      <div className="text-xl md:text-3xl font-bold text-gray-900">15+</div>
                      <div className="text-xs md:text-sm text-gray-500">Years Excellence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gray-50 py-16 md:py-24 mb-16 md:mb-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10 md:mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4 text-primary font-semibold text-sm">
                <CheckCircle2 className="w-4 h-4" /> Why Right Overseas
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Why <span className="text-primary">10,000+ Students</span> Trust Us
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're not just consultants – we're your partners in achieving your international dreams
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/30 overflow-hidden"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 left-3 w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-black" />
                    </div>
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Journey Section */}
        <section className="container mx-auto px-4 mb-16 md:mb-24">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Your Journey With <span className="text-primary">Us</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A simple 6-step process to turn your overseas dreams into reality
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {journey.map((item, index) => (
              <div key={index} className="relative p-6 md:p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all group">
                <div className="text-5xl md:text-6xl font-bold text-primary/10 absolute top-4 right-4 group-hover:text-primary/20 transition-colors">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <div className="w-10 h-10 bg-primary text-black rounded-lg flex items-center justify-center font-bold text-sm mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section className="container mx-auto px-4 mb-16 md:mb-24">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our <span className="text-primary">Foundation</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 md:p-8 bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl text-center hover:shadow-xl transition-all border border-blue-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-5 md:mb-6 shadow-lg shadow-blue-500/30">
                <Target size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">To provide honest, transparent, and accurate guidance to every student aspiring to study, work, or travel abroad.</p>
            </div>
            
            <div className="p-6 md:p-8 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl text-center hover:shadow-xl transition-all border border-purple-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-5 md:mb-6 shadow-lg shadow-purple-500/30">
                <Eye size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">To be the most trusted and preferred overseas education consultancy in India and beyond.</p>
            </div>

            <div className="p-6 md:p-8 bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl text-center hover:shadow-xl transition-all border border-green-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-5 md:mb-6 shadow-lg shadow-green-500/30">
                <Heart size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gray-900">Our Values</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">Integrity, Student-Centricity, Transparency, and Excellence in every service we provide.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&h=600&fit=crop')] bg-cover bg-center opacity-10" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Ready to Start Your <span className="text-primary">Journey?</span>
              </h2>
              <p className="text-gray-300 text-lg md:text-xl mb-8 md:mb-10 leading-relaxed">
                Take the first step towards your international dream. Explore our services or book a free consultation with our experts today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => { navigate('/services'); window.scrollTo(0, 0); }}
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-xl"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                  className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-bold rounded-full hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-xl shadow-primary/30"
                >
                  <span>Book FREE Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default About;
