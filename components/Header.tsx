import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onBookCall: () => void;
}

const Header: React.FC<HeaderProps> = ({ onBookCall }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-bold text-lg">B</div>
          <span className="font-bold text-xl tracking-tight text-slate-900">Break Into Data</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={onBookCall}
            className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-slate-800 transition-transform transform hover:scale-105"
          >
            Book a Call
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden border-t">
          <button 
            onClick={() => {
              setMobileMenuOpen(false);
              onBookCall();
            }}
            className="bg-slate-900 text-white w-full py-3 rounded-lg font-bold"
          >
            Book a Call
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;