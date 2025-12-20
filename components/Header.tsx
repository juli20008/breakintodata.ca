
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-extrabold text-blue-600">Break Into Data</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#mission" className="text-gray-600 hover:text-blue-600 font-medium">Mission</a>
          <a href="#features" className="text-gray-600 hover:text-blue-600 font-medium">Features</a>
          <a href="#programs" className="text-gray-600 hover:text-blue-600 font-medium">Programs</a>
          <a href="#testimonials" className="text-gray-600 hover:text-blue-600 font-medium">Testimonials</a>
        </nav>
        <div>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
