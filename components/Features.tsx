
import React from 'react';

const Features: React.FC = () => {
  const features = [
    { title: 'Project-Based Learning', description: 'Build a portfolio with real-world datasets and problems.' },
    { title: 'Expert Instruction', description: 'Learn from practitioners currently working at top tech firms.' },
    { title: 'Job Search Support', description: 'Resume reviews, interview prep, and networking strategy.' },
    { title: 'Flexible Schedule', description: 'Designed for working professionals and full-time students.' }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Break Into Data?</h2>
          <p className="mt-4 text-gray-600">Everything you need to go from beginner to hired.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600 font-bold text-xl">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold mb-4">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
