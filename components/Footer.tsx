import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-900 border-t border-white/10 py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-blue-300 text-sm">
        <div className="mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Break Into Data. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">BreakIntoData.ca</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Legal</a>
          <a href="#" className="hover:text-white transition-colors">Terms and conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;