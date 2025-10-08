import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function CaseStudy() {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Revolution',
      client: 'TechStore Inc.',
      industry: 'Electronics Retail',
      challenge: 'Struggling with low online sales and high cart abandonment rate of 78%',
      solution: 'Implemented comprehensive SEO, UX redesign, and retargeting campaigns',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1200&q=80',
      metrics: {
        before: { sales: '$50K/mo', conversion: '1.2%', traffic: '10K' },
        after: { sales: '$200K/mo', conversion: '4.8%', traffic: '45K' }
      },
      results: [
        { label: 'Revenue Increase', value: '+300%', icon: '💰' },
        { label: 'Traffic Growth', value: '+350%', icon: '📈' },
        { label: 'Conversion Rate', value: '+300%', icon: '🎯' },
        { label: 'ROI', value: '450%', icon: '✨' }
      ],
      testimonial: {
        quote: 'AdMark transformed our business. We went from struggling to thriving in just 6 months.',
        author: 'Sarah Johnson',
        position: 'CEO, TechStore Inc.'
      },
      color: '#00F0FF'
    },
    {
      id: 2,
      title: 'SaaS Growth Explosion',
      client: 'CloudFlow Solutions',
      industry: 'B2B SaaS',
      challenge: 'Low brand awareness and difficulty generating qualified leads',
      solution: 'Strategic content marketing, LinkedIn ads, and lead nurturing automation',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
      metrics: {
        before: { leads: '50/mo', mrr: '$25K', signups: '15' },
        after: { leads: '300/mo', mrr: '$120K', signups: '90' }
      },
      results: [
        { label: 'Lead Generation', value: '+500%', icon: '🎯' },
        { label: 'MRR Growth', value: '+380%', icon: '💸' },
        { label: 'Qualified Signups', value: '+500%', icon: '✅' },
        { label: 'CAC Reduction', value: '-45%', icon: '📉' }
      ],
      testimonial: {
        quote: 'The ROI we achieved with AdMark exceeded all our expectations. Best investment we made.',
        author: 'Michael Chen',
        position: 'Founder, CloudFlow Solutions'
      },
      color: '#7B2CBF'
    },
    {
      id: 3,
      title: 'Local Business Domination',
      client: 'Urban Fitness Centers',
      industry: 'Health & Wellness',
      challenge: 'Competing with large gym chains with limited marketing budget',
      solution: 'Hyperlocal SEO, Google My Business optimization, and social media campaigns',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&q=80',
      metrics: {
        before: { members: '200', revenue: '$30K/mo', locations: '2' },
        after: { members: '850', revenue: '$140K/mo', locations: '5' }
      },
      results: [
        { label: 'New Members', value: '+325%', icon: '👥' },
        { label: 'Revenue Growth', value: '+367%', icon: '💰' },
        { label: 'Location Expansion', value: '+150%', icon: '📍' },
        { label: 'Local Rankings', value: '#1', icon: '🏆' }
      ],
      testimonial: {
        quote: 'From 2 struggling locations to 5 thriving centers. AdMark made it happen.',
        author: 'David Martinez',
        position: 'Owner, Urban Fitness Centers'
      },
      color: '#FF006E'
    }
  ];

  const currentCase = caseStudies[activeCase];

  return (
    <section 
      id="case-studies" 
      className="relative py-20 md:py-32 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A0A0A 0%, #141414 50%, #0A0A0A 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full opacity-5 blur-3xl animate-float" style={{ background: currentCase.color }} />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-admark-pink rounded-full opacity-5 blur-3xl" style={{ animation: 'float 13s ease-in-out infinite', animationDelay: '3s' }} />

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
            Success Stories
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Real results from real clients - see how we've transformed businesses
          </p>
        </motion.div>

        {/* Case Study Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setActiveCase(index)}
              className="px-6 py-3 rounded-full font-semibold transition-all duration-300"
              style={{
                background: activeCase === index 
                  ? study.color
                  : 'rgba(26, 26, 26, 0.8)',
                border: `2px solid ${study.color}`,
                color: activeCase === index ? '#000' : study.color,
                transform: activeCase === index ? 'scale(1.05)' : 'scale(1)',
                boxShadow: activeCase === index ? `0 0 30px ${study.color}80` : 'none'
              }}
            >
              {study.client}
            </button>
          ))}
        </div>

        {/* Main Case Study Display */}
        <motion.div
          key={currentCase.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Left - Image & Info */}
          <div className="space-y-8">
            {/* Full Width Image */}
            <div className="relative rounded-2xl overflow-hidden" style={{ height: '400px' }}>
              <img 
                src={currentCase.image} 
                alt={currentCase.title}
                className="w-full h-full object-cover"
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(180deg, transparent 0%, ${currentCase.color}40 100%)`
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-3xl font-black mb-2" style={{ color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                  {currentCase.title}
                </h3>
                <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.9)', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                  {currentCase.client} • {currentCase.industry}
                </p>
              </div>
            </div>

            {/* Challenge & Solution */}
            <div className="space-y-4">
              <div className="p-6 rounded-2xl glassmorphism-strong" style={{ border: `2px solid ${currentCase.color}30` }}>
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: currentCase.color }}>
                  🎯 Challenge
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  {currentCase.challenge}
                </p>
              </div>

              <div className="p-6 rounded-2xl glassmorphism-strong" style={{ border: `2px solid ${currentCase.color}30` }}>
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: currentCase.color }}>
                  💡 Solution
                </h4>
                <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  {currentCase.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Right - Results & Metrics */}
          <div className="space-y-8">
            {/* Before/After Comparison */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl glassmorphism-strong text-center" style={{ border: '2px solid rgba(255, 255, 255, 0.1)' }}>
                <h4 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Before
                </h4>
                <div className="space-y-3">
                  {Object.entries(currentCase.metrics.before).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-2xl font-bold" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                        {value}
                      </div>
                      <div className="text-xs uppercase" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl glassmorphism-strong text-center" style={{ border: `2px solid ${currentCase.color}50`, boxShadow: `0 0 30px ${currentCase.color}30` }}>
                <h4 className="text-sm font-bold mb-4 uppercase tracking-wider" style={{ color: currentCase.color }}>
                  After ✨
                </h4>
                <div className="space-y-3">
                  {Object.entries(currentCase.metrics.after).map(([key, value]) => (
                    <div key={key}>
                      <div className="text-2xl font-bold" style={{ color: currentCase.color }}>
                        {value}
                      </div>
                      <div className="text-xs uppercase" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Key Results Grid */}
            <div className="grid grid-cols-2 gap-4">
              {currentCase.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-2xl glassmorphism-strong text-center"
                  style={{ border: `2px solid ${currentCase.color}30` }}
                >
                  <div className="text-4xl mb-3">{result.icon}</div>
                  <div className="text-3xl font-black mb-2" style={{ color: currentCase.color }}>
                    {result.value}
                  </div>
                  <div className="text-sm font-semibold" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
                    {result.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <div className="p-8 rounded-2xl glassmorphism-strong" style={{ border: `2px solid ${currentCase.color}30` }}>
              <div className="text-5xl mb-4" style={{ color: currentCase.color }}>❝</div>
              <p className="text-lg mb-6 italic" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                {currentCase.testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-2xl" style={{ background: `${currentCase.color}30` }}>
                  👤
                </div>
                <div>
                  <div className="font-bold" style={{ color: currentCase.color }}>
                    {currentCase.testimonial.author}
                  </div>
                  <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    {currentCase.testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl mb-6" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Want similar results for your business?
          </p>
          <button
            className="px-10 py-5 rounded-full font-bold text-lg transition-all duration-300"
            style={{
              background: `linear-gradient(90deg, ${currentCase.color} 0%, #FF006E 100%)`,
              boxShadow: `0 0 30px ${currentCase.color}60`,
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = `0 0 50px ${currentCase.color}90`;
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = `0 0 30px ${currentCase.color}60`;
            }}
          >
            Get Your Free Strategy Session →
          </button>
        </motion.div>
      </div>
    </section>
  );
}