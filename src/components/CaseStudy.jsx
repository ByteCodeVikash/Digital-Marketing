import React from 'react';
import { motion } from 'framer-motion';

export default function CaseStudy() {
  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Revolution',
      client: 'TechStore Inc.',
      industry: 'Electronics Retail',
      challenge: 'Struggling with 78% cart abandonment and declining online sales',
      solution: 'Comprehensive UX redesign, SEO optimization, and intelligent retargeting',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=1920&q=80',
      results: [
        { metric: 'Revenue', before: '$50K/mo', after: '$200K/mo', increase: '+300%' },
        { metric: 'Traffic', before: '10K visits', after: '45K visits', increase: '+350%' },
        { metric: 'Conversion', before: '1.2%', after: '4.8%', increase: '+300%' },
        { metric: 'ROI', before: '—', after: '450%', increase: '450%' }
      ],
      testimonial: {
        quote: 'AdMark didn\'t just improve our metrics — they transformed our entire business model. We went from struggling to thriving in 6 months.',
        author: 'Sarah Johnson',
        position: 'CEO, TechStore Inc.',
        avatar: '👩‍💼'
      },
      color: '#FFC107'
    },
    {
      id: 2,
      title: 'SaaS Growth Explosion',
      client: 'CloudFlow Solutions',
      industry: 'B2B SaaS',
      challenge: 'Low brand awareness and difficulty generating qualified B2B leads',
      solution: 'Strategic content marketing, LinkedIn advertising, and marketing automation',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80',
      results: [
        { metric: 'Leads', before: '50/mo', after: '300/mo', increase: '+500%' },
        { metric: 'MRR', before: '$25K', after: '$120K', increase: '+380%' },
        { metric: 'Signups', before: '15', after: '90', increase: '+500%' },
        { metric: 'CAC', before: '$450', after: '$247', increase: '-45%' }
      ],
      testimonial: {
        quote: 'The ROI we achieved with AdMark exceeded all expectations. They understand B2B SaaS like no other agency.',
        author: 'Michael Chen',
        position: 'Founder, CloudFlow',
        avatar: '👨‍💼'
      },
      color: '#FF9800'
    },
    {
      id: 3,
      title: 'Local Business Domination',
      client: 'Urban Fitness Centers',
      industry: 'Health & Wellness',
      challenge: 'Competing with large gym chains on a limited marketing budget',
      solution: 'Hyperlocal SEO, Google My Business optimization, and community engagement',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80',
      results: [
        { metric: 'Members', before: '200', after: '850', increase: '+325%' },
        { metric: 'Revenue', before: '$30K/mo', after: '$140K/mo', increase: '+367%' },
        { metric: 'Locations', before: '2', after: '5', increase: '+150%' },
        { metric: 'Ranking', before: '#8', after: '#1', increase: 'Top' }
      ],
      testimonial: {
        quote: 'From 2 struggling locations to 5 thriving centers. AdMark made the impossible happen.',
        author: 'David Martinez',
        position: 'Owner, Urban Fitness',
        avatar: '👨‍⚕️'
      },
      color: '#FFC107'
    }
  ];

  return (
    <section id="case-studies" className="relative">
      {/* Header Section */}
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#0A0A0A' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black mb-6" style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FFC107 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Success Stories
            </h2>
            <p className="text-2xl md:text-3xl mb-8" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Real Results • Real Growth • Real Impact
            </p>
            <div className="flex flex-col items-center gap-2 animate-bounce mt-12">
              <span className="text-sm font-medium" style={{ color: '#FFC107' }}>Scroll to explore</span>
              <svg className="w-6 h-6" style={{ color: '#FFC107' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Case Study Sections - Full Screen Each */}
      {caseStudies.map((study, index) => (
        <div
          key={study.id}
          className="min-h-screen relative flex items-center"
          style={{
            background: index % 2 === 0 
              ? 'linear-gradient(135deg, #0A0A0A 0%, #1a1a1a 100%)'
              : 'linear-gradient(135deg, #1a1a1a 0%, #0A0A0A 100%)'
          }}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={study.image}
              alt={study.title}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0" style={{
              background: `linear-gradient(135deg, rgba(10,10,10,0.9) 0%, rgba(10,10,10,0.7) 100%)`
            }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="inline-block px-4 py-2 rounded-full mb-6" style={{
                  background: `rgba(255, 193, 7, 0.1)`,
                  border: `1px solid rgba(255, 193, 7, 0.3)`
                }}>
                  <span style={{ color: study.color }} className="text-sm font-semibold">
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-5xl md:text-6xl font-black mb-4" style={{ color: study.color }}>
                  {study.title}
                </h3>

                <p className="text-2xl font-bold mb-8" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  {study.client}
                </p>

                <div className="space-y-6 mb-8">
                  <div className="p-6 rounded-2xl" style={{
                    background: 'rgba(255, 193, 7, 0.05)',
                    border: '2px solid rgba(255, 193, 7, 0.2)'
                  }}>
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: study.color }}>
                      🎯 Challenge
                    </h4>
                    <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      {study.challenge}
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl" style={{
                    background: 'rgba(255, 193, 7, 0.05)',
                    border: '2px solid rgba(255, 193, 7, 0.2)'
                  }}>
                    <h4 className="text-xl font-bold mb-3 flex items-center gap-2" style={{ color: study.color }}>
                      💡 Solution
                    </h4>
                    <p className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                      {study.solution}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Results */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8"
              >
                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-6">
                  {study.results.map((result, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="p-6 rounded-2xl text-center"
                      style={{
                        background: 'rgba(255, 193, 7, 0.05)',
                        border: '2px solid rgba(255, 193, 7, 0.2)',
                      }}
                    >
                      <div className="text-sm font-semibold mb-2 uppercase tracking-wider" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                        {result.metric}
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="text-lg" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                          {result.before}
                        </span>
                        <span style={{ color: study.color }}>→</span>
                        <span className="text-lg font-bold" style={{ color: study.color }}>
                          {result.after}
                        </span>
                      </div>
                      <div className="text-3xl font-black" style={{ color: study.color }}>
                        {result.increase}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Testimonial */}
                <div className="p-8 rounded-2xl" style={{
                  background: 'rgba(255, 193, 7, 0.05)',
                  border: '2px solid rgba(255, 193, 7, 0.3)'
                }}>
                  <div className="text-5xl mb-4" style={{ color: study.color }}>❝</div>
                  <p className="text-xl mb-6 italic leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                    {study.testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-3xl" style={{
                      background: `rgba(255, 193, 7, 0.2)`,
                      border: `2px solid ${study.color}`
                    }}>
                      {study.testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-lg" style={{ color: study.color }}>
                        {study.testimonial.author}
                      </div>
                      <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                        {study.testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      ))}

      {/* Final CTA Section */}
      <div className="min-h-screen flex items-center justify-center" style={{ background: '#0A0A0A' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <h3 className="text-5xl md:text-6xl font-black mb-6" style={{
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FFC107 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Ready to Be Our Next Success Story?
          </h3>
          <p className="text-2xl mb-12" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
            Let's create a case study about your incredible growth
          </p>
          <a
            href="#get-quote"
            className="inline-block px-12 py-5 rounded-full font-bold text-xl transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
              boxShadow: '0 8px 30px rgba(255, 193, 7, 0.4)',
              color: '#000'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 12px 40px rgba(255, 193, 7, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = '0 8px 30px rgba(255, 193, 7, 0.4)';
            }}
          >
            Get Your Free Strategy Session 🚀
          </a>
        </motion.div>
      </div>
    </section>
  );
}