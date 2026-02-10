import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// First row destinations - scrolls left (Primary countries)
const destinationsRow1 = [
  { name: 'United Kingdom', flag: 'https://flagcdn.com/w40/gb.png', image: 'images/UK.png' },
  { name: 'Australia', flag: 'https://flagcdn.com/w40/au.png', image: 'images/Australia.png' },
  { name: 'United States', flag: 'https://flagcdn.com/w40/us.png', image: 'images/USA.png' },
  { name: 'Canada', flag: 'https://flagcdn.com/w40/ca.png', image: 'images/Canada.png' },
  { name: 'Germany', flag: 'https://flagcdn.com/w40/de.png', image: 'images/Germany.png' },
  { name: 'Ireland', flag: 'https://flagcdn.com/w40/ie.png', image: 'images/Ireland.png' },
  { name: 'New Zealand', flag: 'https://flagcdn.com/w40/nz.png', image: 'images/NewZealand.png' },
];

// Second row destinations - scrolls right
const destinationsRow2 = [
  { name: 'Poland', flag: 'https://flagcdn.com/w40/pl.png', image: 'images/Poland.webp' },
  { name: 'Norway', flag: 'https://flagcdn.com/w40/no.png', image: 'images/Norway.webp' },
  { name: 'Czech Republic', flag: 'https://flagcdn.com/w40/cz.png', image: 'images/CzechRepublic.webp' },
  { name: 'Netherlands', flag: 'https://flagcdn.com/w40/nl.png', image: 'images/Netherlands.webp' },
  { name: 'United States', flag: 'https://flagcdn.com/w40/us.png', image: 'images/USA.png' },
  { name: 'Canada', flag: 'https://flagcdn.com/w40/ca.png', image: 'images/Canada.png' },
  { name: 'Germany', flag: 'https://flagcdn.com/w40/de.png', image: 'images/Germany.png' },
];

const DestinationsSection = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Duplicate arrays for seamless infinite scroll
  const row1Items = [...destinationsRow1, ...destinationsRow1];
  const row2Items = [...destinationsRow2, ...destinationsRow2];

  return (
    <section ref={sectionRef} id="destinations" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <h2 className={`text-3xl md:text-5xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Explore <span className="text-primary">Global Destinations</span>
          </h2>
          <p className={`text-lg md:text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Discover world-renowned cities and universities that await your journey
          </p>
        </div>
      </div>

      {/* First Row - Scrolls Left */}
      <div className="relative mb-6 overflow-hidden">
        <div className="flex animate-scroll-left">
          {row1Items.map((dest, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 mx-2 md:mx-3 group cursor-pointer"
            >
              <div className="relative w-36 h-28 md:w-52 md:h-40 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-white font-semibold text-sm md:text-base flex items-center gap-1.5">
                  <img src={dest.flag} alt="" className="w-5 h-3.5 object-cover rounded-sm shadow-sm" loading="lazy" />
                  {dest.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Scrolls Right */}
      <div className="relative mb-12 overflow-hidden">
        <div className="flex animate-scroll-right">
          {row2Items.map((dest, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 mx-2 md:mx-3 group cursor-pointer"
            >
              <div className="relative w-36 h-28 md:w-52 md:h-40 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <span className="absolute bottom-3 left-3 text-white font-semibold text-sm md:text-base flex items-center gap-1.5">
                  <img src={dest.flag} alt="" className="w-5 h-3.5 object-cover rounded-sm shadow-sm" loading="lazy" />
                  {dest.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary via-amber-400 to-primary rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">Ready to Explore Your Dream Destination?</h3>
          <p className="text-black/80 mb-6 text-base md:text-lg max-w-2xl mx-auto">Connect with our expert counselors to find the perfect country and university for your study abroad journey.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => { navigate('/contact'); window.scrollTo(0, 0); }}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 bg-black text-white font-bold rounded-full hover:bg-gray-900 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <span>Book FREE Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => { navigate('/services'); window.scrollTo(0, 0); }}
              className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;