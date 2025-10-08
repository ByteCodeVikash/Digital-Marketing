import React from 'react';

export default function Services() {
  const services = [
    { 
      icon: '🔍',
      title: 'SEO Services', 
      desc: 'Improve your search engine rankings and drive organic traffic with our proven SEO strategies and technical optimization.'
    },
    { 
      icon: '📱',
      title: 'Social Media Marketing', 
      desc: 'Build brand awareness and engage your audience across all major social platforms with data-driven campaigns.'
    },
    { 
      icon: '💰',
      title: 'PPC Advertising', 
      desc: 'Maximize ROI with targeted pay-per-click campaigns on Google Ads, Facebook, and other platforms.'
    },
    { 
      icon: '💻',
      title: 'Web Development', 
      desc: 'Create stunning, high-converting websites that provide seamless user experiences across all devices.'
    },
    { 
      icon: '✍️',
      title: 'Content Marketing', 
      desc: 'Engage your audience with compelling content that drives traffic, builds authority, and generates leads.'
    },
    { 
      icon: '📊',
      title: 'Analytics & Reporting', 
      desc: 'Track performance with detailed analytics and transparent reporting that shows real, measurable results.'
    }
  ];

  return (
    <section id="services" className="relative py-20 md:py-32 px-4 bg-gradient-to-b from-transparent to-purple-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-6 fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Our Services
        </h2>
        <p className="text-xl text-center text-gray-400 mb-16 fade-in-up max-w-3xl mx-auto">
          Comprehensive digital marketing solutions to grow your business
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i}
              className="fade-in-up group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-purple-500/20 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}