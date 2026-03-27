/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import SupportForm from './components/SupportForm';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      {/* Global Banner */}
      <div className="bg-blue-600 text-white px-4 py-2.5 text-center text-sm font-medium flex justify-center items-center">
        <span className="mr-2 text-lg">🚀</span>
        Exciting news! Our 24/7 Live Chat feature is coming soon to better assist you.
      </div>
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-grow lg:w-2/3">
              <SupportForm />
            </div>
            <div className="lg:w-1/3">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      <button 
        id="scrollToTopBtn" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-6 right-6 z-50 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
}
