import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Briefcase, GraduationCap, Globe, ArrowRight } from 'lucide-react';
import teamPhoto from '@/assets/team-photo.jpg';

const AboutSection = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const [studentsCount, setStudentsCount] = useState(0);
  const [universitiesCount, setUniversitiesCount] = useState(0);
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

  // Counter animation
  useEffect(() => {
    if (isVisible) {
      let studentsTarget = 1000;
      let universitiesTarget = 50;
      let studentsCurrent = 0;
      let universitiesCurrent = 0;
      const studentsStep = Math.ceil(studentsTarget / 60);
      const universitiesStep = Math.ceil(universitiesTarget / 60);
      const interval = setInterval(() => {
        studentsCurrent += studentsStep;
        universitiesCurrent += universitiesStep;
        if (studentsCurrent >= studentsTarget) studentsCurrent = studentsTarget;
        if (universitiesCurrent >= universitiesTarget) universitiesCurrent = universitiesTarget;
        setStudentsCount(studentsCurrent);
        setUniversitiesCount(universitiesCurrent);
        if (studentsCurrent === studentsTarget && universitiesCurrent === universitiesTarget) {
          clearInterval(interval);
        }
      }, 16);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
             <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6 text-primary font-semibold">
               <Globe className="w-4 h-4" /> Global Education Experts
             </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              About <span className="text-primary">Right Overseas Solutions</span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
              <p>
                With over a decade of experience in international education consulting, 
                Right Overseas Solutions has been the bridge between ambitious students 
                and world-class universities across the globe.
              </p>
              
              <p>
                Our mission is simple yet profound: to make quality education accessible 
                to every student, regardless of their background. We believe that education 
                is the most powerful tool for personal and professional transformation.
              </p>
            </div>

            {/* CTA Button */}
            <div className="mb-10">
              <button
                onClick={() => { navigate('/about'); window.scrollTo(0, 0); }}
                className="group inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-gray-900 text-black hover:text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
                 <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    <GraduationCap className="w-6 h-6" />
                 </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{studentsCount}+</div>
                <div className="text-gray-500 font-medium">Students Placed</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 text-center hover:shadow-lg transition-shadow">
                 <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    <Briefcase className="w-6 h-6" />
                 </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{universitiesCount}+</div>
                <div className="text-gray-500 font-medium">Partner Universities</div>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="relative group">
               <div className="absolute inset-0 bg-primary rounded-2xl rotate-3 scale-95 opacity-20 group-hover:rotate-6 transition-transform"></div>
              <img 
                src={teamPhoto} 
                alt="Right Overseas Solutions Team" 
                className="relative rounded-2xl shadow-xl w-full h-auto z-10 bg-gray-200"
                onError={(e) => {
                   // Fallback if image missing
                   e.currentTarget.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;