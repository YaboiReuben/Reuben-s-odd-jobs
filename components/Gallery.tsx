import React from 'react';

const Gallery: React.FC = () => {
  const tasks = [
    { title: 'Garden Maintenance', image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=800', category: 'Gardening' },
    { title: 'Device Setup', image: 'https://images.unsplash.com/photo-1587614382346-4ec7063f9b28?auto=format&fit=crop&q=80&w=800', category: 'Technology' },
    { title: 'Home Cleaning', image: 'https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=800', category: 'Cleaning' },
    { title: 'Small Repairs', image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&q=80&w=800', category: 'Labor' },
    { title: 'Pet Care', image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&q=80&w=800', category: 'Pets' },
    { title: 'Errand Running', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800', category: 'Errands' },
  ];

  return (
    <div className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Work</h2>
        <h3 className="text-4xl font-bold text-slate-900 mb-6">Task Portfolio</h3>
        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
          Take a look at some of the tasks Reuben has helped with across Albury.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tasks.map((task, idx) => (
          <div key={idx} className="group relative overflow-hidden rounded-3xl shadow-lg aspect-video bg-slate-200">
            <img 
              src={task.image} 
              alt={task.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <span className="text-indigo-400 text-xs font-bold uppercase tracking-wider mb-1">{task.category}</span>
              <h4 className="text-white text-xl font-bold">{task.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;