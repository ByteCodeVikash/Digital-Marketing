import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['all', 'web', 'app', 'branding', 'seo'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'web',
      client: 'TechStore',
      description: 'Full-stack e-commerce solution with 300% sales increase',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&q=80',
      metrics: { traffic: '+450%', revenue: '+300%', conversion: '+85%' },
      tags: ['React', 'Node.js', 'Stripe'],
      color: '#00F0FF'
    },
    {
      id: 2,
      title: 'Fitness Mobile App',
      category: 'app',
      client: 'FitLife',
      description: 'AI-powered fitness tracking app with 50K+ downloads',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      metrics: { downloads: '50K+', rating: '4.8★', retention: '75%' },
      tags: ['React Native', 'AI/ML', 'Firebase'],
      color: '#7B2CBF'
    },
    {
      id: 3,
      title: 'Brand Identity Redesign',
      category: 'branding',
      client: 'GreenLeaf Co.',
      description: 'Complete brand overhaul resulting in 200% brand recognition',
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?w=800&q=80',
      metrics: { recognition: '+200%', engagement: '+160%', reach: '2M+' },
      tags: ['Brand Strategy', 'UI/UX', 'Social Media'],
      color: '#FF006E'
    },
    {
      id: 4,
      title: 'SEO Campaign',
      category: 'seo',
      client: 'LegalEase',
      description: 'Achieved #1 ranking for 50+ keywords in 6 months',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      metrics: { ranking: '#1', keywords: '50+', traffic: '+380%' },
      tags: ['Technical SEO', 'Content', 'Link Building'],
      color: '#00F0FF'
    },
    {
      id: 5,
      title: 'SaaS Dashboard',
      category: 'web',
      client: 'DataFlow',
      description: 'Analytics dashboard serving 10K+ daily active users',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      metrics: { users: '10K+', uptime: '99.9%', satisfaction: '95%' },
      tags: ['Vue.js', 'D3.js', 'Real-time'],
      color: '#7B2CBF'
    },
    {
      id: 6,
      title: 'Restaurant Booking App',
      category: 'app',
      client: 'Dine&Wine',
      description: 'Reservation system processing 1000+ bookings daily',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      metrics: { bookings: '1K+/day', growth: '+220%', revenue: '+180%' },
      tags: ['Flutter', 'Payment Gateway', 'GPS'],
      color: '#FF006E'
    }
  ];

  const clientLogos = [
    { name: 'Google', logo: '🔵' },
    { name: 'Amazon', logo: '🟠' },
    { name: 'Microsoft', logo: '🟦' },
    { name: 'Apple', logo: '🍎' },
    { name: 'Meta', logo: '🔷' },
    { name: 'Netflix', logo: '🔴' },
    { name: 'Tesla', logo: '⚡' },
    { name: 'Spotify', logo: '🟢' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section 
      id="portfolio" 
      className="relative py-20 md:py-32 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A0A0A 0%, #141414 50%, #0A0A0A 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-admark-purple rounded-full opacity-5 blur-3xl animate-float" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-admark-cyan rounded-full opacity-5 blur-3xl" style={{ animation: 'float 12s ease-in-out infinite', animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6 gradient-text-admark neon-glow-cyan">
            Our Portfolio
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Success stories that speak louder than words
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300 capitalize"
              style={{
                background: activeFilter === category 
                  ? 'linear-gradient(90deg, #00F0FF 0%, #FF006E 100%)'
                  : 'rgba(26, 26, 26, 0.8)',
                border: activeFilter === category 
                  ? '2px solid transparent'
                  : '2px solid rgba(0, 240, 255, 0.3)',
                boxShadow: activeFilter === category 
                  ? '0 0 30px rgba(0, 240, 255, 0.5)'
                  : 'none',
                transform: activeFilter === category ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative rounded-2xl overflow-hidden glassmorphism-strong"
              style={{
                border: hoveredProject === project.id 
                  ? `2px solid ${project.color}`
                  : '2px solid rgba(255, 255, 255, 0.1)',
                boxShadow: hoveredProject === project.id 
                  ? `0 20px 60px ${project.color}40`
                  : '0 10px 30px rgba(0, 0, 0, 0.5)',
                transform: hoveredProject === project.id ? 'translateY(-10px)' : 'translateY(0)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredProject === project.id ? 'scale(1.1)' : 'scale(1)',
                  }}
                />
                <div 
                  className="absolute inset-0 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(180deg, transparent 0%, ${project.color}20 100%)`,
                    opacity: hoveredProject === project.id ? 1 : 0,
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span 
                    className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full"
                    style={{
                      background: `${project.color}20`,
                      color: project.color,
                      border: `1px solid ${project.color}50`
                    }}
                  >
                    {project.category}
                  </span>
                  <span className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    {project.client}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3" style={{ color: project.color }}>
                  {project.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-2 rounded-lg" style={{ background: 'rgba(0, 0, 0, 0.3)' }}>
                      <div className="text-lg font-bold" style={{ color: project.color }}>{value}</div>
                      <div className="text-xs capitalize" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>{key}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="text-xs px-2 py-1 rounded"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: 'rgba(255, 255, 255, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Case Study Button */}
                <button 
                  className="w-full py-3 rounded-full font-semibold transition-all duration-300"
                  style={{
                    background: hoveredProject === project.id 
                      ? project.color
                      : 'rgba(26, 26, 26, 0.8)',
                    border: `2px solid ${project.color}`,
                    color: hoveredProject === project.id ? '#000' : project.color,
                  }}
                >
                  View Case Study →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-12 gradient-text-cyan-pink">
            Trusted by Industry Leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {clientLogos.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center p-6 rounded-xl glassmorphism hover:scale-110 transition-all duration-300"
                style={{
                  border: '1px solid rgba(0, 240, 255, 0.2)',
                }}
              >
                <span className="text-4xl mb-2">{client.logo}</span>
                <span className="text-xs font-semibold" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                  {client.name}
                </span>
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
          className="text-center mt-16"
        >
          <p className="text-xl mb-6" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Ready to be our next success story?
          </p>
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
            Start Your Project →
          </button>
        </motion.div>
      </div>
    </section>
  );
}