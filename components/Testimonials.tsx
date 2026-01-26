import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    { name: 'Sarah L.', location: 'Albury East', text: 'Reuben was so helpful with my garden! He was on time, worked hard, and was very polite. Highly recommend.' },
    { name: 'Mark T.', location: 'Lavington', text: 'Helped me set up my new TV and smart home devices. Saved me hours of frustration. Fair pricing too!' },
    { name: 'Jenna W.', location: 'West Albury', text: 'Super reliable for pet sitting. My dogs loved him and I felt totally comfortable leaving them in his care.' },
  ];

  return (
    <div className="py-24 px-4 bg-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">Community Love</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">What Locals Are Saying</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2rem] shadow-sm border border-indigo-100 flex flex-col">
              <div className="flex gap-1 text-amber-400 mb-4">
                {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
              </div>
              <p className="text-slate-700 italic mb-8 flex-grow">"{rev.text}"</p>
              <div>
                <h4 className="font-bold text-slate-900">{rev.name}</h4>
                <p className="text-sm text-slate-500">{rev.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;