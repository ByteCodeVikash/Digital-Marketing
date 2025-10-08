import React from 'react';

export default function WhyChoose() {
  const reasons = [
    { 
      title: 'Proven Results', 
      desc: 'Track record of delivering measurable ROI for clients across industries with data-backed success stories'
    },
    { 
      title: 'Expert Team', 
      desc: 'Award-winning strategists, designers, and data scientists dedicated to your growth'
    },
    { 
      title: 'Transparent Reporting', 
      desc: 'Real-time dashboards and detailed monthly analytics that keep you informed every step'
    },
    { 
      title: 'Custom Solutions', 
      desc: 'Tailored strategies designed specifically for your unique business needs and market position'
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-gray-900/50 to-purple-900/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-6 fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Why Choose AdMark
        </h2>
        <p className="text-xl text-center text-gray-400 mb-16 fade-in-up max-w-3xl mx-auto">
          Partner with a team that's committed to your success
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <div 
              key={i}
              className="fade-in-up group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-purple-500/20 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] transition-all duration-500 text-center transform hover:scale-105"
            >
              <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6 group-hover:scale-110 transition-transform">
                {i + 1}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}