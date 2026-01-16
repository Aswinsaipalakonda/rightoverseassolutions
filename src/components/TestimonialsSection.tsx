import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Quote, ArrowRight } from 'lucide-react';
import { CircularTestimonials } from '@/components/ui/circular-testimonials';

const testimonials = [
  {
    quote: 'Right Overseas Solutions made my dream of studying at Harvard a reality. Their guidance through the application process was invaluable, and they supported me every step of the way with visa documentation and university selection.',
    name: 'Priya Sharma',
    designation: 'Computer Science at Harvard University, USA',
    src: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    quote: 'The team helped me secure admission to Oxford with a scholarship. Their expertise in visa processing was exceptional, and the personalized counseling made all the difference in achieving my dreams.',
    name: 'Arjun Patel',
    designation: 'Engineering at Oxford University, UK',
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    quote: 'From university selection to accommodation, they handled everything professionally. I am now pursuing my MBA at one of the top universities in Canada, and it would not have been possible without their support.',
    name: 'Sneha Gupta',
    designation: 'MBA at University of Toronto, Canada',
    src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3'
  },
  {
    quote: 'Thanks to Right Overseas Solutions, I am now studying medicine in Australia. Their personalized counseling helped me choose the perfect program, and the entire visa process was seamless and stress-free.',
    name: 'Rajesh Kumar',
    designation: 'Medicine at University of Melbourne, Australia',
    src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1368&auto=format&fit=crop&ixlib=rb-4.0.3'
  }
];

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

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

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
              <Quote className="w-8 h-8 text-primary" />
           </div>
          <h2 className={`text-3xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Inspiring stories from our global alumni network who achieved their dreams with our guidance.
          </p>
        </div>

        <div className="flex items-center justify-center">
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: '#0a0a0a',
              designation: '#EAB308',
              testimony: '#171717',
              arrowBackground: '#EAB308',
              arrowForeground: '#000000',
              arrowHoverBackground: '#000000',
            }}
            fontSizes={{
              name: '28px',
              designation: '18px',
              quote: '18px',
            }}
          />
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => { navigate('/success-stories'); window.scrollTo(0, 0); }}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-primary text-white hover:text-black font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <span>View All Success Stories</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;