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
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' }
  ];

  const handleSmoothScroll = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]' 
          : 'backdrop-blur-md'
      }`}
      style={{ 
        background: isScrolled 
          ? 'rgba(10, 10, 10, 0.98)' 
          : 'rgba(10, 10, 10, 0.9)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ minHeight: '80px' }}>
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <a href="#home" className="block group">
              <img 
                src="/src/assets/comp-logo.png"
                alt="AdMark Digital Media"
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
                style={{
                  filter: 'brightness(1.1) contrast(1.1) drop-shadow(0 0 10px rgba(255, 193, 7, 0.3))',
                  mixBlendMode: 'lighten',
                }}
              />
            </a>
          </div>

          {/* Center Navigation - Desktop */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="relative font-semibold text-base py-2 transition-all duration-300 group"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: "'Inter', 'Poppins', sans-serif",
                  letterSpacing: '0.02em'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FFC107';
                  e.target.style.textShadow = '0 0 10px rgba(255, 193, 7, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.textShadow = 'none';
                }}
              >
                {link.name}
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{
                    background: 'linear-gradient(90deg, #FFC107 0%, #FF9800 100%)',
                    boxShadow: '0 0 10px rgba(255, 193, 7, 0.8)'
                  }}
                />
              </a>
            ))}
          </div>

          {/* Right Side CTAs - Desktop */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <a
              href="#pricing"
              onClick={(e) => handleSmoothScroll(e, '#pricing')}
              className="px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              style={{
                background: 'rgba(26, 26, 26, 0.8)',
                border: '2px solid rgba(255, 193, 7, 0.4)',
                color: '#FFC107',
                fontFamily: "'Inter', sans-serif"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 5px 20px rgba(255, 193, 7, 0.4)';
                e.target.style.borderColor = '#FFC107';
                e.target.style.background = 'rgba(255, 193, 7, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
                e.target.style.borderColor = 'rgba(255, 193, 7, 0.4)';
                e.target.style.background = 'rgba(26, 26, 26, 0.8)';
              }}
            >
              💎 Pricing Plan
            </a>

            <a
              href="#get-quote"
              onClick={(e) => handleSmoothScroll(e, '#get-quote')}
              className="px-6 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
                boxShadow: '0 4px 20px rgba(255, 193, 7, 0.4)',
                fontFamily: "'Inter', sans-serif",
                color: '#000'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px) scale(1.05)';
                e.target.style.boxShadow = '0 8px 30px rgba(255, 193, 7, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 4px 20px rgba(255, 193, 7, 0.4)';
              }}
            >
              🎯 Free Audit
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
              style={{
                color: '#FFC107',
                background: isMobileMenuOpen ? 'rgba(255, 193, 7, 0.1)' : 'transparent'
              }}
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
        <div 
          className="lg:hidden shadow-2xl"
          style={{
            background: 'rgba(10, 10, 10, 0.98)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid rgba(255, 193, 7, 0.2)',
          }}
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => {
                  handleSmoothScroll(e, link.href);
                  setIsMobileMenuOpen(false);
                }}
                className="block px-4 py-3 rounded-lg font-semibold transition-all duration-300"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: "'Inter', sans-serif",
                  background: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#FFC107';
                  e.target.style.background = 'rgba(255, 193, 7, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.background = 'transparent';
                }}
              >
                {link.name}
              </a>
            ))}
            
            <div className="pt-4 space-y-3">
              <a
                href="#pricing"
                onClick={(e) => {
                  handleSmoothScroll(e, '#pricing');
                  setIsMobileMenuOpen(false);
                }}
                className="block px-4 py-3 rounded-full font-semibold text-center transition-all duration-300"
                style={{
                  background: 'rgba(26, 26, 26, 0.8)',
                  border: '2px solid rgba(255, 193, 7, 0.4)',
                  color: '#FFC107'
                }}
              >
                💎 Pricing Plan
              </a>

              <a
                href="#get-quote"
                onClick={(e) => {
                  handleSmoothScroll(e, '#get-quote');
                  setIsMobileMenuOpen(false);
                }}
                className="block px-4 py-3 rounded-full font-bold text-center transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
                  color: '#000'
                }}
              >
                🎯 Free Audit
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}