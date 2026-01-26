import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img src="https://scontent.fsyd13-1.fna.fbcdn.net/v/t39.30808-1/494791355_122112763328840965_2229762770843612086_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=101&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=0o1oiE6mSJcQ7kNvwFfERAE&_nc_oc=Adljx0XpZhwXpc_Yd1sYc6QQTqq1XPf_NRzxXBhBbVrMpoaC1yXegFfjpuVm9eGjToL8TU1elHmMzUK_StRsZG9e&_nc_zt=24&_nc_ht=scontent.fsyd13-1.fna&_nc_gid=XNCX8r_gvhpar8mzI10gnQ&oh=00_AfoHYHqCgNwLdhyHj32N5ytzjVP7RPs0lFx4d-yBvvooiw&oe=697B8588" alt="Reuben's Odd Jobs Logo" className="w-10 h-10 object-cover rounded-lg" />
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
              <li className="flex items-start gap-3 text-indigo-400 font-semibold">
                <span>💵</span> Cash Only Accepted
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">
            © {currentYear} Reuben's Odd Jobs. All rights reserved.
          </p>
          <p className="text-xs italic text-slate-500 max-w-md text-center md:text-right">
            Disclaimer: Prices listed are guide rates only. We are strictly a <strong>cash-only</strong> service.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;