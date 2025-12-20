
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-white text-2xl font-bold mb-6 italic">Break Into Data</h3>
            <p className="max-w-md mb-6 leading-relaxed">
              Empowering aspiring data professionals through mentorship, high-quality resources, and a community-driven approach to career growth.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#mission" className="hover:text-white">Our Mission</a></li>
              <li><a href="#programs" className="hover:text-white">Programs</a></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><a href="https://www.breakintodata.ca" className="hover:text-white">Website</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© 2025 Break Into Data. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Made with Passion for Data • <a href="https://www.breakintodata.ca" className="underline">www.breakintodata.ca</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
