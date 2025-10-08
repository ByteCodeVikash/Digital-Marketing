import React from 'react';

export default function TeamSection() {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      icon: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Head of SEO',
      icon: '👨‍💼'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Creative Director',
      icon: '👩‍💼'
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-purple-900/30 to-blue-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-6 fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Meet Our Team
        </h2>
        <p className="text-xl text-center text-gray-400 mb-16 fade-in-up">
          Expert professionals dedicated to your success
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div 
              key={i}
              className="fade-in-up group p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-purple-500/20 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-500 transform hover:scale-105 text-center"
            >
              {/* Profile Image Placeholder */}
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-cyan-600/30 to-purple-600/30 rounded-2xl flex items-center justify-center text-7xl border border-purple-500/30 group-hover:scale-110 transition-transform">
                {member.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {member.name}
              </h3>
              <p className="text-cyan-400 font-semibold">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}