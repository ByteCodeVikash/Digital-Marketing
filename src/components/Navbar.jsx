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
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-xl shadow-[0_8px_32px_rgba(0,240,255,0.2)]' 
          : 'backdrop-blur-md'
      }`}
      style={{ 
        minHeight: '80px',
        background: isScrolled 
          ? 'rgba(10, 10, 10, 0.95)' 
          : 'rgba(10, 10, 10, 0.8)',
        borderBottom: isScrolled 
          ? '1px solid rgba(0, 240, 255, 0.2)' 
          : '1px solid rgba(0, 240, 255, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo - AdMark Branding */}
          <div className="flex-shrink-0 z-50">
            <a href="#home" className="flex flex-col group">
              <span 
                className="text-3xl md:text-4xl font-black tracking-tight transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #00F0FF 0%, #7B2CBF 50%, #FF006E 100%)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 30px rgba(0, 240, 255, 0.5)',
                  filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.3))',
                }}
              >
                AdMark
              </span>
              <span 
                className="text-xs md:text-sm font-medium tracking-wider mt-0.5 transition-all duration-300"
                style={{
                  color: 'rgba(0, 240, 255, 0.8)',
                  textShadow: '0 0 10px rgba(0, 240, 255, 0.3)',
                  letterSpacing: '0.15em'
                }}
              >
                MAGNETIZE GROWTH
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="relative font-semibold text-sm xl:text-base py-2 transition-all duration-300 group"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: "'Inter', 'Poppins', sans-serif",
                  letterSpacing: '0.02em'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#00F0FF';
                  e.target.style.textShadow = '0 0 10px rgba(0, 240, 255, 0.5)';
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
                    background: 'linear-gradient(90deg, #00F0FF 0%, #FF006E 100%)',
                    boxShadow: '0 0 10px rgba(0, 240, 255, 0.8)'
                  }}
                ></span>
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-3 rounded-full font-bold text-sm xl:text-base whitespace-nowrap transition-all duration-300 relative overflow-hidden group"
              style={{
                background: 'rgba(26, 26, 26, 0.8)',
                backdropFilter: 'blur(10px)',
                border: '2px solid rgba(0, 240, 255, 0.4)',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
                fontFamily: "'Inter', sans-serif"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 0 30px rgba(255, 0, 110, 0.6)';
                e.target.style.borderColor = 'rgba(255, 0, 110, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.3)';
                e.target.style.borderColor = 'rgba(0, 240, 255, 0.4)';
              }}
            >
              <span
                style={{
                  background: 'linear-gradient(90deg, #00F0FF, #FF006E)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Get Started
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg transition-all duration-300"
              aria-label="Toggle menu"
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                background: isMobileMenuOpen ? 'rgba(0, 240, 255, 0.1)' : 'transparent'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#00F0FF';
                e.target.style.background = 'rgba(0, 240, 255, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                if (!isMobileMenuOpen) e.target.style.background = 'transparent';
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
            borderTop: '1px solid rgba(0, 240, 255, 0.2)',
          }}
        >
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg font-semibold transition-all duration-300"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontFamily: "'Inter', sans-serif",
                  background: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#00F0FF';
                  e.target.style.background = 'rgba(0, 240, 255, 0.1)';
                  e.target.style.textShadow = '0 0 10px rgba(0, 240, 255, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = 'rgba(255, 255, 255, 0.9)';
                  e.target.style.background = 'transparent';
                  e.target.style.textShadow = 'none';
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-full font-bold text-center transition-all duration-300 mt-4"
              style={{
                background: 'linear-gradient(90deg, #00F0FF 0%, #FF006E 100%)',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
                fontFamily: "'Inter', sans-serif"
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.03)';
                e.target.style.boxShadow = '0 0 30px rgba(255, 0, 110, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.4)';
              }}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}