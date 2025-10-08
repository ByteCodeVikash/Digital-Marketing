import React from 'react';

export default function CTA() {
  return (
    <section className="relative py-32 px-4 bg-gradient-to-b from-blue-900/50 to-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
          Ready to Transform Your Brand?
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 fade-in-up max-w-3xl mx-auto leading-relaxed">
          Let's create something extraordinary together. Book a free consultation today and discover how we can elevate your digital presence.
        </p>
        <button className="fade-in-up px-12 py-6 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-2xl font-bold hover:scale-110 hover:shadow-[0_0_50px_rgba(6,182,212,0.9)] transition-all duration-300 animate-pulse">
          Get Started Now 🚀
        </button>
      </div>
    </section>
  );
}