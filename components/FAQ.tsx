import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">Questions?</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 font-display">Frequently Asked Questions</h3>
          <p className="text-slate-600 text-lg">
            Everything you need to know about booking Reuben for your next task.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`group border rounded-3xl transition-all duration-300 ${
                  isOpen 
                  ? 'border-indigo-200 bg-indigo-50/30 shadow-sm' 
                  : 'border-slate-200 bg-white hover:border-indigo-200'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-indigo-700' : 'text-slate-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-100 text-slate-400 group-hover:bg-indigo-100 group-hover:text-indigo-600'}`}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center p-8 rounded-3xl bg-slate-50 border border-slate-100">
          <p className="text-slate-500 mb-2">Still have questions?</p>
          <a href="#support" className="text-indigo-600 font-bold hover:text-indigo-700 transition-colors">
            Contact support directly →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;