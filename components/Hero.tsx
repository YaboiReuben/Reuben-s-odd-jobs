
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
      {/* Abstract Background Patterns */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
      </div>

      {/* Decorative Image/Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <svg className="absolute w-full h-full opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-sm mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-green-400"></span>
          Available for bookings in Albury
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight">
          Reuben's <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
            Odd Jobs
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Helping you with tasks <span className="text-white font-medium italic">big and small</span>. Trusted local service for your home and lifestyle.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 shadow-xl shadow-indigo-500/30"
          >
            Book a Service
            <svg className="w-5 h-5 ml-2 -mr-1 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-white/5 border border-white/20 rounded-full hover:bg-white/10"
          >
            Explore Services
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-slate-400 text-sm font-medium border-t border-white/10 pt-10">
          <div className="flex flex-col items-center">
            <span className="text-white text-2xl mb-2">⚡</span>
            Quick Response
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-2xl mb-2">🤝</span>
            Trusted & Local
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-2xl mb-2">💰</span>
            Fair Pricing
          </div>
          <div className="flex flex-col items-center">
            <span className="text-white text-2xl mb-2">⭐</span>
            Task Focused
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
