
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Launch Your Career in <span className="text-blue-600">Data Science</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              We provide the tools, mentorship, and community you need to successfully transition into the most exciting roles in tech.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1">
                View Programs
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="w-full h-96 lg:h-[500px] bg-blue-100 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
              <span className="text-blue-300 text-9xl font-bold opacity-50">DATA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
