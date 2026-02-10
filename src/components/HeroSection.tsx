import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Phone, Star, Users, TrendingUp, MapPin, Globe, CheckCircle2, Award, GraduationCap, Briefcase, Plane } from 'lucide-react';

// Services Highlight Section - replaces old country flags
const studentCountries = [
  { name: 'USA', flag: 'https://flagcdn.com/w40/us.png' },
  { name: 'UK', flag: 'https://flagcdn.com/w40/gb.png' },
  { name: 'Canada', flag: 'https://flagcdn.com/w40/ca.png' },
  { name: 'Netherlands', flag: 'https://flagcdn.com/w40/nl.png' },
  { name: 'New Zealand', flag: 'https://flagcdn.com/w40/nz.png' },
  { name: 'Germany', flag: 'https://flagcdn.com/w40/de.png' },
  { name: 'Europe', flag: 'https://flagcdn.com/w40/eu.png' },
];

const workCountries = [
  { name: 'Poland', flag: 'https://flagcdn.com/w40/pl.png' },
  { name: 'Germany', flag: 'https://flagcdn.com/w40/de.png' },
  { name: 'Norway', flag: 'https://flagcdn.com/w40/no.png' },
  { name: 'Czech Republic', flag: 'https://flagcdn.com/w40/cz.png' },
  { name: 'Netherlands', flag: 'https://flagcdn.com/w40/nl.png' },
  { name: 'New Zealand', flag: 'https://flagcdn.com/w40/nz.png' },
  { name: 'Europe', flag: 'https://flagcdn.com/w40/eu.png' },
];

export const CountryFlagsSection = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 border-t border-gray-100 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full mb-4">
            <Globe className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold text-primary uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 mb-3">
            The <span className="text-primary">RIGHT</span> Visa Services for You
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
            Whether you want to study, work, or travel abroad — we provide end-to-end visa assistance tailored to your goals
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">

          {/* Student Visa Card */}
          <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary/30 hover:-translate-y-1">
            {/* Top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-primary via-amber-400 to-primary" />
            <div className="p-6 md:p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-primary/20 to-amber-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Student Visa</h3>
              <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                Your gateway to world-class education at top global universities
              </p>
              {/* Country tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {studentCountries.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-primary/10 rounded-full text-xs font-semibold text-gray-700 transition-colors border border-gray-100 hover:border-primary/30"
                  >
                    <img src={c.flag} alt={c.name} className="w-4 h-3 object-cover rounded-sm" loading="lazy" />
                    <span>{c.name}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => { navigate('/services'); window.scrollTo(0, 0); }}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-amber-600 transition-colors group/btn"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Work Visa Card */}
          <div className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-700 hover:border-primary/50 hover:-translate-y-1">
            {/* Top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-primary via-amber-300 to-primary" />
            <div className="p-6 md:p-8">
              <div className="w-14 h-14 bg-primary/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Briefcase className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Work Visa</h3>
              <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                Build your international career across Europe & beyond
              </p>
              <div className="inline-block px-2.5 py-1 bg-primary/20 rounded-md text-[10px] font-bold text-primary uppercase tracking-wider mb-4">
                Special: Europe Focus
              </div>
              {/* Country tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {workCountries.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-primary/20 rounded-full text-xs font-semibold text-gray-200 transition-colors border border-white/10 hover:border-primary/40"
                  >
                    <img src={c.flag} alt={c.name} className="w-4 h-3 object-cover rounded-sm" loading="lazy" />
                    <span>{c.name}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => { navigate('/services'); window.scrollTo(0, 0); }}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-amber-300 transition-colors group/btn"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Travel Visa Card */}
          <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary/30 hover:-translate-y-1">
            {/* Top accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-amber-400 via-primary to-amber-400" />
            <div className="p-6 md:p-8">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-primary/20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <Plane className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Travel & Visit Visa</h3>
              <p className="text-sm text-gray-500 mb-5 leading-relaxed">
                Seamless travel experiences for leisure and business worldwide
              </p>
              {/* Service highlights */}
              <div className="space-y-2.5 mb-6">
                {['Flight Tickets & Bookings', 'Currency Exchange & Forex', 'Hotel & Accommodation', 'SIM Cards & Essentials'].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => { navigate('/services'); window.scrollTo(0, 0); }}
                className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-amber-600 transition-colors group/btn"
              >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10 md:mt-14">
          <button
            onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-primary to-amber-500 hover:from-amber-500 hover:to-primary text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
          >
            Book FREE Consultation
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

// Counter animation hook
const useCounter = (end: number, duration: number = 2000, startOnVisible: boolean = true) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnVisible) {
      setHasStarted(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted, startOnVisible]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return { count, ref };
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  
  const yearsCounter = useCounter(15, 2000);
  const studentsCounter = useCounter(10000, 2500);
  const countriesCounter = useCounter(120, 2000);
  const successCounter = useCounter(98, 2000);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-amber-50/30 pt-32 pb-8 md:pt-40 md:pb-12">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute top-10 left-1/4 w-2 h-2 bg-primary rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 right-1/3 w-3 h-3 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-primary rounded-full animate-bounce" style={{animationDelay: '0.7s'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 xl:px-16 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-12 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-gray-200 rounded-full mb-3 md:mb-4 shadow-sm">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold text-gray-800 uppercase tracking-wider">Right Overseas Solutions</span>
            </div>

            {/* Main Headline - Smaller text */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 md:mb-4 leading-[1.15] tracking-tight">
              Take the{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">
                  RIGHT STEP
                </span>
              </span>
              <br />
              Make the{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">
                  RIGHT CHOICE
                </span>
              </span>
            </h1>

            <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-4 md:mb-6 leading-relaxed max-w-xl font-normal">
              Your trusted partner for <span className="font-semibold text-gray-900">Study Abroad</span>, <span className="font-semibold text-gray-900">Work Abroad</span>, and <span className="font-semibold text-gray-900">Travel services</span> with over 15 years of excellence
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 md:gap-3 mb-4 md:mb-6">
              <button 
                onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
                className="group px-5 md:px-6 py-2.5 md:py-3 bg-gradient-to-r from-primary to-amber-500 hover:from-amber-500 hover:to-primary text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <span className="tracking-wide">RIGHT CONSULTATION</span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => window.open('https://wa.me/917396620303', '_blank')}
                className="group px-5 md:px-6 py-2.5 md:py-3 bg-white border-2 border-gray-200 hover:border-primary text-gray-900 font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm md:text-base"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                <span>WhatsApp Us</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <img src="https://i.pravatar.cc/40?img=11" alt="Student" className="w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-white shadow-sm object-cover" loading="lazy" />
                  <img src="https://i.pravatar.cc/40?img=12" alt="Student" className="w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-white shadow-sm object-cover" loading="lazy" />
                  <img src="https://i.pravatar.cc/40?img=13" alt="Student" className="w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-white shadow-sm object-cover" loading="lazy" />
                  <img src="https://i.pravatar.cc/40?img=14" alt="Student" className="w-7 h-7 md:w-9 md:h-9 rounded-full border-2 border-white shadow-sm object-cover" loading="lazy" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-0.5">
                    {[1,2,3,4,5].map(i => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-600">
                    <span className="font-bold text-gray-900">10,000+</span> Students Served
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual - Enhanced with better mobile responsiveness */}
          <div className={`relative transition-all duration-1000 delay-300 hidden lg:block ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* Main Visual Container */}
            <div className="relative w-full max-w-lg mx-auto">
              {/* Decorative Background Elements */}
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-gradient-to-br from-primary/20 to-orange-300/20 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-orange-200/30 to-primary/20 rounded-full blur-3xl -z-10"></div>
              
              {/* Main Image Grid */}
              <div className="relative grid grid-cols-2 gap-4">
                {/* Top Left - Main Featured Image */}
                <div className="col-span-2 rounded-2xl overflow-hidden shadow-2xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop" 
                    alt="Students celebrating graduation"
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                </div>
                
                {/* Bottom Left - Secondary Image */}
                <div className="rounded-xl overflow-hidden shadow-xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop" 
                    alt="International students studying"
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                
                {/* Bottom Right - Tertiary Image */}
                <div className="rounded-xl overflow-hidden shadow-xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&h=300&fit=crop" 
                    alt="Students at university campus"
                    className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Floating Success Card - Bottom Left */}
              <div className="absolute -bottom-3 -left-3 bg-white rounded-xl shadow-2xl p-3 transform hover:scale-105 transition-transform border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-xl font-extrabold text-gray-900">98%</div>
                    <div className="text-[10px] text-gray-500 font-medium">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Card - Top Right */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-primary to-amber-500 rounded-xl shadow-2xl p-3 transform hover:scale-105 transition-transform">
                <div className="flex items-center gap-2 text-white">
                  <Users className="w-5 h-5" />
                  <div>
                    <div className="text-lg font-bold">10K+</div>
                    <div className="text-[10px] opacity-90">Students</div>
                  </div>
                </div>
              </div>

              {/* Services Quick Links - Middle Right */}
              <div className="absolute top-1/2 -right-5 transform -translate-y-1/2 bg-white rounded-lg shadow-xl p-2.5 border border-gray-100">
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5 text-gray-700 text-xs font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                    <span>Study Abroad</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-700 text-xs font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                    <span>Work Abroad</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-700 text-xs font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                    <span>Visa Assistance</span>
                  </div>
                </div>
              </div>

              {/* Globe Icon Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-white/95 backdrop-blur-sm rounded-full shadow-2xl flex items-center justify-center border-4 border-primary/20">
                <Globe className="w-7 h-7 text-primary animate-pulse" />
              </div>

              {/* Location Badge - Bottom Right */}
              <div className="absolute -bottom-2 right-6 bg-gray-900 text-white rounded-full px-2.5 py-1 flex items-center gap-1.5 shadow-lg">
                <MapPin className="w-3 h-3 text-primary" />
                <span className="text-xs font-medium">Visakhapatnam</span>
              </div>
            </div>
          </div>

          {/* Mobile Right Visual - Simplified and improved */}
          <div className={`lg:hidden relative transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl mx-auto max-w-md">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop" 
                alt="Students celebrating graduation"
                className="w-full h-64 sm:h-72 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              
              {/* Mobile Success Badge */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm rounded-xl p-2 sm:p-2.5 flex items-center gap-2 shadow-lg">
                <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-base font-bold text-gray-900">98%</div>
                  <div className="text-[10px] text-gray-500">Success</div>
                </div>
              </div>
              
              {/* Mobile Students Badge */}
              <div className="absolute bottom-3 right-3 bg-gradient-to-br from-primary to-amber-500 rounded-xl p-2 sm:p-2.5 flex items-center gap-2 shadow-lg">
                <Users className="w-5 h-5 text-white" />
                <div className="text-white">
                  <div className="text-base font-bold">10K+</div>
                </div>
              </div>

              {/* Mobile Services */}
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-gray-700 text-[10px] font-medium">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    <span>Study Abroad</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-700 text-[10px] font-medium">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    <span>Work Abroad</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-700 text-[10px] font-medium">
                    <CheckCircle2 className="w-3 h-3 text-green-500" />
                    <span>Visa Assistance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar with Counter Animation */}
        <div className={`mt-8 md:mt-12 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 bg-white rounded-xl md:rounded-2xl shadow-xl p-4 md:p-6 border border-gray-100">
            <div ref={yearsCounter.ref} className="text-center group cursor-pointer">
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                {yearsCounter.count}+
              </div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Years Experience</div>
            </div>
            <div ref={studentsCounter.ref} className="text-center group cursor-pointer">
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                {studentsCounter.count >= 1000 ? `${(studentsCounter.count / 1000).toFixed(0)}K+` : `${studentsCounter.count}+`}
              </div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Happy Students</div>
            </div>
            <div ref={countriesCounter.ref} className="text-center group cursor-pointer">
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                {countriesCounter.count}+
              </div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Countries</div>
            </div>
            <div ref={successCounter.ref} className="text-center group cursor-pointer">
              <div className="text-xl sm:text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform">
                {successCounter.count}%
              </div>
              <div className="text-xs md:text-sm text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;