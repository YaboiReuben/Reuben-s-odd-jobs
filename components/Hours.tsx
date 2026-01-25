
import React from 'react';
import { HOURS } from '../constants';

const Hours: React.FC = () => {
  return (
    <div className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center flex items-center justify-center gap-3">
          Opening Hours 🕒
        </h2>
        <p className="text-slate-600">When we're available to help you with your tasks.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Regular Term Hours */}
        <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-indigo-600">
            <span className="text-2xl">🎒</span> School Term (Typical Week)
          </h3>
          <ul className="space-y-4">
            {HOURS.schoolTerm.map((item, idx) => (
              <li key={idx} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-none">
                <span className="font-medium text-slate-700">{item.day}</span>
                <span className={`px-4 py-1 rounded-full text-sm font-semibold ${item.hours === 'Closed' ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                  {item.hours}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Holiday Hours */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-blue-600">
              <span className="text-2xl">🏖️</span> Holidays & Public Holidays
            </h3>
            <ul className="space-y-4">
              {HOURS.holidays.map((item, idx) => (
                <li key={idx} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-none">
                  <span className="font-medium text-slate-700">{item.day}</span>
                  <span className="bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-indigo-50 p-8 rounded-[2rem] border border-indigo-100">
            <h3 className="text-lg font-bold mb-4 text-indigo-900">Special Closures ⛔</h3>
            <div className="flex flex-wrap gap-3">
              {HOURS.closures.map((closure, idx) => (
                <div key={idx} className="bg-white px-4 py-2 rounded-xl text-sm border border-indigo-100 flex items-center gap-2 shadow-sm">
                  <span>{closure.icon}</span>
                  <span className="font-medium text-slate-700">{closure.event}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-indigo-500 italic">
              * Bookings are generally not available on these public holiday dates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hours;
