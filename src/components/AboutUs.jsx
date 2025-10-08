import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  const timeline = [
    { year: '2018', title: 'The Beginning', description: 'Founded with a vision to revolutionize digital marketing', icon: '🚀' },
    { year: '2019', title: 'First 100 Clients', description: 'Reached milestone of serving 100+ happy clients', icon: '🎯' },
    { year: '2020', title: 'Team Expansion', description: 'Grew to 50+ talented professionals', icon: '👥' },
    { year: '2021', title: 'Award Winning', description: 'Won Best Digital Agency Award', icon: '🏆' },
    { year: '2022', title: 'Global Reach', description: 'Expanded operations to 15+ countries', icon: '🌍' },
    { year: '2023', title: 'Innovation Hub', description: 'Launched AI-powered marketing solutions', icon: '🤖' },
    { year: '2024', title: 'Industry Leader', description: '500+ clients, $50M+ revenue generated', icon: '💎' }
  ];

  const values = [
    {
      icon: '💡',
      title: 'Innovation First',
      description: 'We stay ahead of trends and pioneer new marketing strategies',
      color: '#00F0FF'
    },
    {
      icon: '🎯',
      title: 'Results Driven',
      description: 'Every campaign is measured by tangible business outcomes',
      color: '#7B2CBF'
    },
    {
      icon: '🤝',
      title: 'Client Partnership',
      description: 'Your success is our success - we grow together',
      color: '#FF006E'
    },
    {
      icon: '⚡',
      title: 'Agile Execution',
      description: 'Fast, flexible, and focused on what matters most',
      color: '#00F0FF'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients', icon: '😊' },
    { number: '1000+', label: 'Projects Delivered', icon: '🚀' },
    { number: '50+', label: 'Team Members', icon: '👥' },
    { number: '15+', label: 'Countries Served', icon: '🌍' }
  ];

  const whyChoose = [
    {
      title: 'Data-Driven Approach',
      description: 'Every decision backed by analytics and market research',
      icon: '📊',
      color: '#00F0FF'
    },
    {
      title: 'Transparent Reporting',
      description: 'Real-time dashboards showing exactly where your money goes',
      icon: '📈',
      color: '#7B2CBF'
    },
    {
      title: 'Dedicated Account Manager',
      description: 'Your personal point of contact for all communications',
      icon: '🎯',
      color: '#FF006E'
    },
    {
      title: 'Proven Track Record',
      description: 'Average ROI of 300%+ across all client campaigns',
      icon: '💰',
      color: '#00F0FF'
    },
    {
      title: 'Cutting-Edge Tech',
      description: 'AI, automation, and the latest marketing tools',
      icon: '🤖',
      color: '#7B2CBF'
    },
    {
      title: 'No Long-Term Contracts',
      description: 'Month-to-month flexibility - we earn your business daily',
      icon: '📝',
      color: '#FF006E'
    }
  ];

  return (
    <section 
      id="about" 
      className="relative py-20 md:py-32 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A0A0A 0%, #141414 50%, #0A0A0A 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-admark-purple rounded-full opacity-5 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-admark-cyan rounded-full opacity-5 blur-3xl" style={{ animation: 'float 14s ease-in-out infinite', animationDelay: '4s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 gradient-text-admark neon-glow-cyan">
            About AdMark
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            We're not just another agency - we're your growth partners. Since 2018, we've been magnetizing customers to brands through innovative, data-driven digital marketing strategies.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl glassmorphism-strong"
              style={{
                border: '2px solid rgba(0, 240, 255, 0.2)',
              }}
            >
              <div className="text-5xl mb-4">{stat.icon}</div>
              <div className="text-4xl font-black mb-2 gradient-text-cyan-pink">
                {stat.number}
              </div>
              <div className="text-sm font-semibold" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-4xl font-bold text-center mb-16 gradient-text-purple-cyan">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1" style={{ background: 'linear-gradient(180deg, #00F0FF 0%, #7B2CBF 50%, #FF006E 100%)' }} />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="p-6 rounded-2xl glassmorphism-strong inline-block">
                      <div className="text-sm font-bold mb-2" style={{ color: '#00F0FF' }}>
                        {item.year}
                      </div>
                      <h4 className="text-xl font-bold mb-2" style={{ color: 'white' }}>
                        {item.title}
                      </h4>
                      <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl glassmorphism-strong z-10 relative"
                    style={{
                      border: '3px solid #00F0FF',
                      boxShadow: '0 0 30px rgba(0, 240, 255, 0.5)',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-10 rounded-2xl glassmorphism-strong"
            style={{
              border: '2px solid rgba(0, 240, 255, 0.3)',
              boxShadow: '0 0 40px rgba(0, 240, 255, 0.2)',
            }}
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text-cyan-pink">
              🎯 Our Mission
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              To magnetize growth for businesses worldwide by delivering innovative, data-driven digital marketing solutions that generate measurable results and exceed expectations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-10 rounded-2xl glassmorphism-strong"
            style={{
              border: '2px solid rgba(255, 0, 110, 0.3)',
              boxShadow: '0 0 40px rgba(255, 0, 110, 0.2)',
            }}
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text-purple-cyan">
              🚀 Our Vision
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              To become the world's most trusted digital marketing partner, empowering businesses of all sizes to achieve exponential growth through cutting-edge technology and creative excellence.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-4xl font-bold text-center mb-12 gradient-text-admark">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl glassmorphism-strong text-center card-hover-effect"
                style={{
                  border: `2px solid ${value.color}30`,
                }}
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold mb-3" style={{ color: value.color }}>
                  {value.title}
                </h4>
                <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose AdMark */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-4xl font-bold text-center mb-12 gradient-text-cyan-pink">
            Why Choose AdMark?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl glassmorphism-strong card-hover-effect"
                style={{
                  border: `2px solid ${item.color}20`,
                }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="text-3xl w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: `${item.color}20`,
                      border: `2px solid ${item.color}50`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2" style={{ color: item.color }}>
                      {item.title}
                    </h4>
                    <p className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <h3 className="text-3xl font-bold mb-6" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Ready to Experience the AdMark Difference?
          </h3>
          <button
            className="px-10 py-5 rounded-full font-bold text-lg transition-all duration-300"
            style={{
              background: 'linear-gradient(90deg, #00F0FF 0%, #FF006E 100%)',
              boxShadow: '0 0 30px rgba(0, 240, 255, 0.4)',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 0 50px rgba(255, 0, 110, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 0 30px rgba(0, 240, 255, 0.4)';
            }}
          >
            Let's Talk About Your Growth 💬
          </button>
        </motion.div>
      </div>
    </section>
  );
}