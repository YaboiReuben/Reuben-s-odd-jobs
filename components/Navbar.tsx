
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Book', href: '#book' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Hours', href: '#hours' },
    { name: 'Support', href: '#support' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white text-xl font-bold shadow-indigo-200 shadow-lg">
            R
          </div>
          <span className={`text-xl font-bold tracking-tight transition-colors ${isScrolled ? 'text-slate-900' : 'text-slate-900 md:text-white'}`}>
            Reuben's <span className="text-indigo-600">Odd Jobs</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-indigo-600 ${
                isScrolled ? 'text-slate-600' : 'text-slate-700 md:text-white/90'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#book"
            className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all shadow-md active:scale-95"
          >
            Book Now
          </a>
        </div>

        {/* Mobile menu could be added here, but for a simple SPA, anchor links work well */}
      </div>
    </nav>
  );
};

export default Navbar;
