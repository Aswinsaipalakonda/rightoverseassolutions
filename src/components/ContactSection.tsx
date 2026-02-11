import { useEffect, useState, useRef } from 'react';
import { Send, Phone, Mail, MapPin, CheckCircle, Loader2 } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'Study Abroad'
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Google Sheets Web App URL - Replace with your deployed script URL
    const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbwGlEtdSySsdYQNYSZsWGJd5W8wQpm0lOw7EXX9QIdzu0Bx25j1lGxO0C8EGClCTTyR/exec';

    try {
      // Submit to Google Sheets
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'contact'
        }),
      });

      // Since no-cors mode doesn't return response, we assume success
      setSubmitStatus('success');
      
      // Reset form
      setFormData({ name: '', email: '', phone: '', interest: 'Study Abroad' });
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="px-3 py-8 sm:px-4 sm:py-10 md:section-padding relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-16">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Book <span className="text-secondary">THE RIGHT</span> consultation
          </h2>
          <p className={`text-sm sm:text-base md:text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Connect with our experts today. Fill out the form below or reach us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-5 md:mb-8">Contact Information</h3>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                <div className="p-2.5 md:p-3 bg-primary rounded-lg shrink-0">
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">Phone</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">+91 7396620303 </p>
                  <p className="text-muted-foreground text-xs md:text-sm">+91 9059232695</p>
                  <p className="text-muted-foreground text-xs md:text-sm">+91 9866204413</p>
                </div>
              </div>
              
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                <div className="p-2.5 md:p-3 bg-primary rounded-lg shrink-0">
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">Email</h4>
                  <p className="text-muted-foreground text-xs md:text-sm break-all">info.rightoverseassolutions@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                <div className="p-2.5 md:p-3 bg-primary rounded-lg shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground text-sm md:text-base">Our Offices</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">Visakhapatnam, AP (Main Branch)</p>
                  <p className="text-muted-foreground text-xs md:text-sm">Vijayawada, AP</p>
                  <p className="text-muted-foreground text-xs md:text-sm">Narasapuram, AP</p>
                </div>
              </div>
            </div>

            {/* Map or Image */}
            <div className="mt-6 md:mt-10 rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop" 
                alt="Team Discussion" 
                className="w-full h-40 md:h-64 object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <form onSubmit={handleSubmit} className="bg-card rounded-xl md:rounded-2xl p-5 sm:p-6 md:p-8 shadow-elegant">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">Quick Inquiry</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <p className="text-green-700 font-medium">Thank you! We'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 font-medium">Something went wrong. Please try again or contact us directly.</p>
                </div>
              )}
              
              <div className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                   <label htmlFor="interest" className="block text-xs md:text-sm font-medium text-foreground mb-1.5 md:mb-2">
                      I'm interested in *
                   </label>
                   <select 
                     name="interest" 
                     id="interest"
                     value={formData.interest}
                     onChange={handleInputChange}
                     className="w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300"
                   >
                     <option value="Study Abroad">Study Abroad</option>
                     <option value="Work Abroad">Work Abroad</option>
                     <option value="Travel / Visit">Travel / Visit</option>
                   </select>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-primary-glow transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 shadow-gold disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;