import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
    { name: 'About', href: '#about' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.8)] border-b border-purple-500/30' 
          : 'bg-gray-900/90 backdrop-blur-md border-b border-purple-500/10'
      }`}
      style={{ minHeight: '80px' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div className="flex-shrink-0 z-50">
            <a href="#home" className="flex items-center">
              <span className="text-2xl md:text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-300 hover:to-purple-300 transition-all">
                DigitalPro
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-sm relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-bold text-sm hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.9)] transition-all duration-300 whitespace-nowrap"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-white/5"
              aria-label="Toggle menu"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-900/98 backdrop-blur-xl border-t border-purple-500/20 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-all duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-bold text-center hover:scale-105 transition-all duration-300 mt-4"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}