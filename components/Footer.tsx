
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">R</div>
              <span className="text-white text-xl font-bold">Reuben's <span className="text-indigo-400">Odd Jobs</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Helping the Albury community with quality tasks big and small since day one. Dedicated, local, and reliable.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                <span className="sr-only">Facebook</span>
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
                <span className="sr-only">Instagram</span>
                IG
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-indigo-400 transition-colors">Services</a></li>
              <li><a href="#book" className="hover:text-indigo-400 transition-colors">Book a Service</a></li>
              <li><a href="#faq" className="hover:text-indigo-400 transition-colors">FAQ</a></li>
              <li><a href="#hours" className="hover:text-indigo-400 transition-colors">Opening Hours</a></li>
              <li><a href="#support" className="hover:text-indigo-400 transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <span>📍</span> Albury, NSW & Surrounding Areas
              </li>
              <li className="flex items-start gap-3">
                <span>📧</span> reubensoddjobsalbury@gmail.com
              </li>
              <li className="flex items-start gap-3">
                <span>📱</span> Available on Request
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Stay updated with our holiday schedules and special offers.</p>
            <form className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button className="bg-indigo-600 text-white text-sm font-bold py-2 rounded-lg hover:bg-indigo-700 transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {currentYear} Reuben's Odd Jobs. All rights reserved.
          </p>
          <p className="text-xs italic text-slate-500 max-w-md text-center md:text-right">
            Disclaimer: Prices listed are guide rates only and may vary depending on task complexity, travel distance, and equipment required.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
