import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone, Globe, GraduationCap } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Success Stories', path: '/success-stories' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Top Bar for Contact Info */}
      <div className={`bg-primary text-black transition-all duration-300 hidden md:block ${
        isScrolled ? 'py-1' : 'py-2'
      }`}>
         <div className="container mx-auto px-4 lg:px-16 flex justify-between items-center text-sm font-medium">
            <div className="flex items-center space-x-6">
               <span className="flex items-center gap-2"><Phone size={14} /> +91 7396620303</span>
               <span className="flex items-center gap-2"><Globe size={14} /> www.rightoverseassolutions.com</span>
            </div>
            <div className="flex items-center space-x-4">
               <span>Visakhapatnam, India</span>
            </div>
         </div>
      </div>

      <nav className={`w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white shadow-sm py-4'
      }`}>
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              <NavLink to="/" className="flex items-center gap-3 group">
                <img 
                  src="/icons/ms-icon-310x310.png" 
                  alt="Right Overseas Solutions" 
                  className={`transition-all duration-300 object-contain ${
                    isScrolled ? 'h-16' : 'h-20'
                  } group-hover:scale-105`}
                />
              </NavLink>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm uppercase tracking-wide font-bold transition-all duration-300 ${
                      isActive 
                        ? 'text-primary bg-black/5' 
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <NavLink 
                to="/contact" 
                className="ml-4 px-6 py-2.5 bg-primary text-black font-bold rounded-full hover:bg-primary-glow hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <GraduationCap size={18} />
                Get Started
              </NavLink>
            </div>

            {/* Hamburger for Mobile */}
            <div className="md:hidden flex items-center">
              <button
                className="text-black focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
              >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Nav Links */}
          {menuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col animate-fade-in-down z-50">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-8 py-4 text-sm font-bold border-b border-gray-50 hover:bg-gray-50 transition-colors ${
                      isActive ? 'text-primary bg-gray-50' : 'text-gray-700'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="p-6">
                <NavLink 
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-black font-bold rounded-lg"
                >
                   <GraduationCap size={18} />
                   Start Your Journey
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navigation;