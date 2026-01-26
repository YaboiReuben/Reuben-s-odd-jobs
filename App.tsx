import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import BookingForm from './components/BookingForm';
import FAQ from './components/FAQ';
import Hours from './components/Hours';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        <section id="services" className="bg-white">
          <Services />
        </section>

        <section id="book" className="bg-slate-50">
          <BookingForm />
        </section>

        <section id="faq" className="bg-white">
          <FAQ />
        </section>

        <section id="hours" className="bg-slate-50">
          <Hours />
        </section>

        <section id="support" className="bg-indigo-600 text-white py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Support 💁</h2>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <p className="text-xl mb-4">Coming Soon!</p>
              <p className="mb-6 opacity-90">For now, if you need help or have questions, contact us directly:</p>
              <a 
                href="mailto:reubensoddjobsalbury@gmail.com" 
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-full font-semibold hover:bg-slate-100 transition-colors shadow-lg"
              >
                <span>📧</span> reubensoddjobsalbury@gmail.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;