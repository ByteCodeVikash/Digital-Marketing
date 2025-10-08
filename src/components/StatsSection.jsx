import React from 'react';

export default function StatsSection() {
  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '98%', label: 'Success Rate' },
    { number: '250%', label: 'Avg. Growth' }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-blue-900/30 to-purple-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/CEO Placeholder */}
          <div className="relative h-[500px] bg-gradient-to-br from-cyan-600/20 to-purple-600/20 rounded-3xl overflow-hidden border border-purple-500/30 fade-in-up">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-8xl mb-4">👨‍💼</div>
                <p className="text-gray-400">Professional CEO Portrait</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="inline-block px-6 py-3 bg-cyan-500/20 rounded-full text-cyan-400 text-lg font-bold">
              15+ Years of Excellence
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Driving Digital Success Since 2009
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              We're a team of passionate digital marketing experts dedicated to helping businesses thrive online. Through data-driven strategies and innovative solutions, we've helped hundreds of companies achieve remarkable growth.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              {stats.map((stat, i) => (
                <div 
                  key={i}
                  className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-purple-500/30 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 text-center"
                >
                  <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300">
                Learn More
              </button>
              <button className="px-8 py-4 bg-white/10 backdrop-blur-lg rounded-full font-bold border border-purple-500/30 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}