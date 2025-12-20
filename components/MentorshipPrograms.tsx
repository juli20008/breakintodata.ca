
import React from 'react';

const MentorshipPrograms: React.FC = () => {
  const programs = [
    { name: 'Data Foundations', duration: '8 Weeks', price: '$499', level: 'Beginner' },
    { name: 'Career Accelerator', duration: '12 Weeks', price: '$1299', level: 'Intermediate' },
    { name: 'Elite Mentorship', duration: 'Ongoing', price: '$299/mo', level: 'Advanced' }
  ];

  return (
    <section id="programs" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Mentorship Programs</h2>
          <p className="mt-4 text-blue-200 text-lg">Pick the path that fits your current level and goals.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <div key={i} className="bg-blue-800/50 p-10 rounded-3xl border border-blue-700 hover:border-blue-500 transition-colors">
              <span className="text-blue-300 font-semibold">{p.level}</span>
              <h3 className="text-2xl font-bold mt-2 mb-6">{p.name}</h3>
              <div className="flex items-baseline mb-8">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="ml-2 text-blue-300">/ {p.duration}</span>
              </div>
              <ul className="space-y-4 mb-10 text-blue-100">
                <li>✓ Weekly 1-on-1 calls</li>
                <li>✓ Private Slack access</li>
                <li>✓ Interview prep</li>
                <li>✓ Portfolio reviews</li>
              </ul>
              <button className="w-full bg-blue-500 hover:bg-blue-600 py-4 rounded-xl font-bold transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorshipPrograms;
