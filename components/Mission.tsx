
import React from 'react';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-blue-600 font-bold tracking-widest uppercase mb-4 text-sm">Our Mission</h2>
        <p className="text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
          "Bridging the gap between theory and industry reality to empower the next generation of data professionals."
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-800">Practical Skills</h3>
            <p className="text-gray-600 text-sm">Focus on what actually matters in the job market, from SQL to advanced ML orchestration.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-800">Accessibility</h3>
            <p className="text-gray-600 text-sm">Making high-quality data education available to anyone with the drive to learn.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-blue-800">Community</h3>
            <p className="text-gray-600 text-sm">Join a thriving network of peers and professionals helping each other grow.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
