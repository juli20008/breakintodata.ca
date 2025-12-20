
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    { name: 'Sarah J.', role: 'Data Analyst at Fintech', quote: 'The mentorship program changed everything for me. I landed my first role within 3 months.' },
    { name: 'Michael R.', role: 'Senior ML Engineer', quote: 'Break Into Data focuses on the skills that actually get used in production environments.' },
    { name: 'Elena K.', role: 'Junior Data Scientist', quote: 'The community support is unmatched. I always had someone to help when I was stuck.' }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-full mb-6 flex items-center justify-center">
                 <span className="text-blue-600 text-3xl font-serif">"</span>
              </div>
              <p className="text-lg italic text-gray-700 mb-6">{t.quote}</p>
              <h4 className="font-bold text-gray-900">{t.name}</h4>
              <p className="text-sm text-blue-600">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
