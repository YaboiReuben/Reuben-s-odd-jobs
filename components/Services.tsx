
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">What we do</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h3>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Prices listed are a guide and <span className="font-semibold text-indigo-600">negotiable</span> based on task complexity. 
          Don't see what you need? Just ask!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((service) => (
          <div 
            key={service.id}
            className="group p-8 rounded-3xl border border-slate-200 bg-white hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col"
          >
            <div className="text-4xl mb-6 bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:scale-110 group-hover:bg-indigo-50 transition-transform duration-300">
              {service.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-2">{service.name}</h4>
            <div className="text-indigo-600 font-bold text-lg mb-3">{service.priceRange}</div>
            <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-grow">
              {service.details}
            </p>
            {service.notes && (
              <div className="mt-auto pt-4 border-t border-slate-100 flex items-start gap-2 text-xs text-amber-600 italic">
                <span>⚠️</span>
                <span>{service.notes}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-16 p-8 bg-slate-900 rounded-[2rem] text-white flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h4 className="text-2xl font-bold mb-2">Special Request?</h4>
          <p className="text-slate-400">If you have a unique task, Reuben is always happy to discuss how he can help.</p>
        </div>
        <a 
          href="#book" 
          className="whitespace-nowrap bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg"
        >
          Inquire Now
        </a>
      </div>
    </div>
  );
};

export default Services;
