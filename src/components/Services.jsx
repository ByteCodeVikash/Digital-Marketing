import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    { 
      title: 'SEO Services',
      description: 'Boost your search rankings and drive organic traffic with proven SEO strategies.'
    },
    { 
      title: 'Social Media Marketing',
      description: 'Build your brand presence and engage audiences across all social platforms.'
    },
    { 
      title: 'PPC Advertising',
      description: 'Maximize ROI with targeted pay-per-click campaigns and data-driven strategies.'
    },
    { 
      title: 'Web Development',
      description: 'Create stunning, high-performance websites that convert visitors into customers.'
    },
    { 
      title: 'Content Marketing',
      description: 'Engage your audience with compelling content that drives traffic and builds authority.'
    },
    { 
      title: 'Brand Strategy & Design',
      description: 'Build a memorable brand identity that resonates with your target audience.'
    }
  ];

  return (
    <section 
      id="services" 
      className="relative py-20 md:py-32 px-4"
      style={{
        background: 'linear-gradient(180deg, #D4B896 0%, #E6D5B8 50%, #D4B896 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 
            className="text-8xl md:text-[10rem] font-black uppercase"
            style={{
              color: '#1a1a1a',
              fontFamily: "'Anton', 'Bebas Neue', 'Oswald', 'Impact', sans-serif",
              letterSpacing: '0.08em',
              fontWeight: '900',
              lineHeight: '1',
              margin: '0',
              padding: '0',
              transform: 'scaleX(0.85) scaleY(1.3)',
              display: 'inline-block'
            }}
          >
            SERVICES
          </h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.slice(0, 3).map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-none transition-all duration-300"
              style={{
                background: '#1a1a1a',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '40px 30px'
              }}
            >
              <div>
                <h3 
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{
                    color: '#D4B896',
                    fontFamily: "'Arial Black', 'Impact', sans-serif",
                    fontWeight: '900',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-base mb-6"
                  style={{
                    color: 'rgba(212, 184, 150, 0.8)',
                    lineHeight: '1.6'
                  }}
                >
                  {service.description}
                </p>
              </div>

              <a
                href="#get-quote"
                className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300"
                style={{
                  color: '#D4B896',
                }}
                onMouseEnter={(e) => {
                  e.target.style.gap = '12px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.gap = '8px';
                }}
              >
                Learn more <span className="text-xl">»</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom Row - 2 Cards Centered */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.slice(3, 5).map((service, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-none transition-all duration-300"
              style={{
                background: '#1a1a1a',
                minHeight: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '40px 30px'
              }}
            >
              <div>
                <h3 
                  className="text-2xl md:text-3xl font-bold mb-4"
                  style={{
                    color: '#D4B896',
                    fontFamily: "'Arial Black', 'Impact', sans-serif",
                    fontWeight: '900',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em'
                  }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-base mb-6"
                  style={{
                    color: 'rgba(212, 184, 150, 0.8)',
                    lineHeight: '1.6',
                    fontFamily: "'Arial', sans-serif"
                  }}
                >
                  {service.description}
                </p>
              </div>

              <a
                href="#get-quote"
                className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300"
                style={{
                  color: '#D4B896',
                  fontFamily: "'Arial', sans-serif"
                }}
                onMouseEnter={(e) => {
                  e.target.style.gap = '12px';
                }}
                onMouseLeave={(e) => {
                  e.target.style.gap = '8px';
                }}
              >
                Learn more <span className="text-xl">»</span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Last Card - Brand Strategy - Centered */}
        <div className="max-w-2xl mx-auto mt-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-none transition-all duration-300"
            style={{
              background: '#1a1a1a',
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '40px 30px'
            }}
          >
            <div>
              <h3 
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{
                  color: '#D4B896',
                  fontFamily: "'Arial Black', 'Impact', sans-serif",
                  fontWeight: '900',
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em'
                }}
              >
                {services[5].title}
              </h3>
              <p 
                className="text-base mb-6"
                style={{
                  color: 'rgba(212, 184, 150, 0.8)',
                  lineHeight: '1.6',
                  fontFamily: "'Arial', sans-serif"
                }}
              >
                {services[5].description}
              </p>
            </div>

            <a
              href="#get-quote"
              className="inline-flex items-center gap-2 font-semibold text-sm transition-all duration-300"
              style={{
                color: '#D4B896',
                fontFamily: "'Arial', sans-serif"
              }}
              onMouseEnter={(e) => {
                e.target.style.gap = '12px';
              }}
              onMouseLeave={(e) => {
                e.target.style.gap = '8px';
              }}
            >
              Learn more <span className="text-xl">»</span>
            </a>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#get-quote"
            className="inline-block px-10 py-4 rounded-full font-bold text-lg transition-all duration-300"
            style={{
              background: '#1a1a1a',
              color: '#D4B896',
              border: '2px solid #1a1a1a'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#D4B896';
              e.target.style.color = '#1a1a1a';
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#1a1a1a';
              e.target.style.color = '#D4B896';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            View All Services →
          </a>
        </motion.div>
      </div>
    </section>
  );
}