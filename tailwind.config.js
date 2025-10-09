/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // AdMark Golden Theme Colors
        'admark': {
          'bg-primary': '#0A0A0A',      // Almost Black Background
          'bg-secondary': '#141414',    // Slightly lighter black
          'bg-card': '#1A1A1A',         // Card background
          'gold': '#FFC107',            // Primary Golden
          'orange': '#FF9800',          // Secondary Orange
          'white': '#FFFFFF',           // Pure White
          'gold-glow': 'rgba(255, 193, 7, 0.5)',
          'orange-glow': 'rgba(255, 152, 0, 0.5)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-admark': 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0A0A 0%, #141414 100%)',
      },
      boxShadow: {
        'neon-gold': '0 0 20px rgba(255, 193, 7, 0.5), 0 0 40px rgba(255, 193, 7, 0.3)',
        'neon-orange': '0 0 20px rgba(255, 152, 0, 0.5), 0 0 40px rgba(255, 152, 0, 0.3)',
        'card-hover': '0 10px 40px rgba(255, 193, 7, 0.2), 0 0 20px rgba(255, 152, 0, 0.1)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '1', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.2)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}