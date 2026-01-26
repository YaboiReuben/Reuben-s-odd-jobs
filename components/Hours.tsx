import React from 'react';
import { HOURS } from '../constants';

const Hours: React.FC = () => {
  return (
    <div className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">Availability</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 font-display">Opening Hours 🕒</h3>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Reuben is available most afternoons and weekends. Holiday hours may vary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Regular Term Hours */}
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm transition-transform hover:shadow-md">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-2xl">🎒</div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">School Term</h3>
                <p className="text-sm text-slate-500">Regular weekly availability</p>
              </div>
            </div>
            <ul className="space-y-2">
              {HOURS.schoolTerm.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center py-4 border-b border-slate-50 last:border-none group">
                  <span className="font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors">{item.day}</span>
                  <span className={`px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${
                    item.hours === 'Closed' 
                    ? 'bg-rose-50 text-rose-600 border border-rose-100' 
                    : 'bg-emerald-50 text-emerald-600 border border-emerald-100'
                  }`}>
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8">
            {/* Holiday Hours */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm transition-transform hover:shadow-md">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-2xl">🏖️</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Holidays</h3>
                  <p className="text-sm text-slate-500">During school break periods</p>
                </div>
              </div>
              <ul className="space-y-2">
                {HOURS.holidays.map((item, idx) => (
                  <li key={idx} className="flex justify-between items-center py-4 border-b border-slate-50 last:border-none group">
                    <span className="font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">{item.day}</span>
                    <span className="bg-blue-50 text-blue-600 px-5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-100">
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Special Closures */}
            <div className="bg-slate-900 p-10 rounded-[2.5rem] text-white">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="text-rose-500">⛔</span> Special Closures
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {HOURS.closures.map((closure, idx) => (
                  <div key={idx} className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl text-sm flex items-center gap-3 hover:bg-white/10 transition-colors">
                    <span className="text-xl">{closure.icon}</span>
                    <span className="font-medium opacity-90">{closure.event}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-xs italic opacity-70">
                Note: No bookings are available during these public holiday dates.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hours;