import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function PricingSection() {
  const [activeService, setActiveService] = useState('seo');

  const services = [
    { 
      id: 'seo', 
      name: 'SEO', 
      icon: '🔍',
      color: '#FF4081',
      description: 'Search Engine Optimization'
    },
    { 
      id: 'smo', 
      name: 'SMO', 
      icon: '📱',
      color: '#00E676',
      description: 'Social Media Optimization'
    },
    { 
      id: 'ppc', 
      name: 'PPC', 
      icon: '💰',
      color: '#E040FB',
      description: 'Pay Per Click Advertising'
    },
    { 
      id: 'web', 
      name: 'Web Dev', 
      icon: '💻',
      color: '#40C4FF',
      description: 'Website Development'
    },
    { 
      id: 'content', 
      name: 'Content', 
      icon: '✍️',
      color: '#B388FF',
      description: 'Content Marketing'
    },
    { 
      id: 'branding', 
      name: 'Branding', 
      icon: '🎨',
      color: '#FFEB3B',
      description: 'Brand Strategy & Design'
    }
  ];

  const pricingPlans = {
    seo: [
      {
        name: 'Basic',
        price: '$299',
        features: [
          'Keyword Research',
          'On-Page SEO',
          'Technical Audit',
          'Monthly Reports',
          '10 Keywords Tracking'
        ]
      },
      {
        name: 'Standard',
        price: '$599',
        features: [
          'Everything in Basic',
          'Link Building',
          'Content Optimization',
          'Competitor Analysis',
          '25 Keywords Tracking'
        ]
      },
      {
        name: 'Premium',
        price: '$999',
        features: [
          'Everything in Standard',
          'Advanced Technical SEO',
          'Local SEO',
          'Priority Support',
          'Unlimited Keywords'
        ]
      }
    ],
    smo: [
      {
        name: 'Basic',
        price: '$199',
        features: [
          'Facebook & Instagram',
          '10 Posts/Month',
          'Basic Analytics',
          'Community Management',
          'Content Calendar'
        ]
      },
      {
        name: 'Standard',
        price: '$399',
        features: [
          'All Social Platforms',
          '20 Posts/Month',
          'Advanced Analytics',
          'Paid Ad Management',
          'Influencer Outreach'
        ]
      },
      {
        name: 'Premium',
        price: '$699',
        features: [
          'Everything in Standard',
          '30+ Posts/Month',
          'Video Content',
          'Dedicated Manager',
          'Growth Strategy'
        ]
      }
    ],
    ppc: [
      {
        name: 'Basic',
        price: '$499',
        features: [
          'Google Ads Setup',
          '$1000 Ad Budget',
          'Keyword Research',
          'Campaign Optimization',
          'Monthly Reports'
        ]
      },
      {
        name: 'Standard',
        price: '$899',
        features: [
          'Multi-Platform Ads',
          '$2500 Ad Budget',
          'A/B Testing',
          'Landing Page Optimization',
          'Bi-weekly Reports'
        ]
      },
      {
        name: 'Premium',
        price: '$1499',
        features: [
          'Everything in Standard',
          '$5000+ Ad Budget',
          'Remarketing Campaigns',
          'Dedicated PPC Specialist',
          'Weekly Reports'
        ]
      }
    ],
    web: [
      {
        name: 'Basic',
        price: '$999',
        features: [
          'Up to 5 Pages',
          'Responsive Design',
          'SEO Friendly',
          'Contact Form',
          '30 Days Support'
        ]
      },
      {
        name: 'Standard',
        price: '$1999',
        features: [
          'Up to 10 Pages',
          'Custom Design',
          'CMS Integration',
          'E-commerce Ready',
          '60 Days Support'
        ]
      },
      {
        name: 'Premium',
        price: '$3999',
        features: [
          'Unlimited Pages',
          'Advanced Features',
          'Custom Development',
          'API Integration',
          '90 Days Support'
        ]
      }
    ],
    content: [
      {
        name: 'Basic',
        price: '$299',
        features: [
          '4 Blog Posts/Month',
          'SEO Optimization',
          'Keyword Research',
          'Topic Research',
          'Basic Editing'
        ]
      },
      {
        name: 'Standard',
        price: '$599',
        features: [
          '8 Blog Posts/Month',
          'Advanced SEO',
          'Content Strategy',
          'Social Media Posts',
          'Professional Editing'
        ]
      },
      {
        name: 'Premium',
        price: '$999',
        features: [
          '12+ Blog Posts/Month',
          'Video Scripts',
          'Email Campaigns',
          'Content Calendar',
          'Dedicated Writer'
        ]
      }
    ],
    branding: [
      {
        name: 'Basic',
        price: '$799',
        features: [
          'Logo Design',
          'Brand Colors',
          'Typography Guide',
          'Social Media Kit',
          '2 Revisions'
        ]
      },
      {
        name: 'Standard',
        price: '$1499',
        features: [
          'Everything in Basic',
          'Brand Guidelines',
          'Business Cards',
          'Letterhead Design',
          '5 Revisions'
        ]
      },
      {
        name: 'Premium',
        price: '$2999',
        features: [
          'Everything in Standard',
          'Brand Strategy',
          'Marketing Collateral',
          'Website Design',
          'Unlimited Revisions'
        ]
      }
    ]
  };

  const currentPlans = pricingPlans[activeService];

  return (
    <section 
      id="pricing" 
      className="relative py-20 md:py-32 px-4"
      style={{ background: '#f5f5f5' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-lg font-semibold mb-2" style={{ color: '#999', letterSpacing: '0.1em' }}>
            PRICING
          </p>
          <h2 className="text-5xl md:text-6xl font-black mb-4" style={{ color: '#333' }}>
            CHOOSE PLAN
          </h2>
          <div className="w-24 h-1 mx-auto" style={{ background: '#9C27B0' }} />
        </motion.div>

        {/* Service Icons */}
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {services.map((service, index) => (
            <motion.button
              key={service.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveService(service.id)}
              className="flex flex-col items-center gap-3 transition-all duration-300 group"
              style={{
                opacity: activeService === service.id ? 1 : 0.6,
                transform: activeService === service.id ? 'scale(1.1)' : 'scale(1)',
              }}
            >
              <div
                className="w-24 h-24 rounded-full flex items-center justify-center text-4xl transition-all duration-300"
                style={{
                  background: activeService === service.id 
                    ? service.color 
                    : `${service.color}40`,
                  boxShadow: activeService === service.id 
                    ? `0 10px 30px ${service.color}50` 
                    : 'none',
                }}
              >
                {service.icon}
              </div>
              <div className="text-center">
                <div className="font-bold text-lg" style={{ color: '#333' }}>
                  {service.name}
                </div>
                <div className="text-xs" style={{ color: '#999' }}>
                  {service.description}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Pricing Cards */}
        <motion.div
          key={activeService}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {currentPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl p-8 transition-all duration-300 hover:scale-105"
              style={{
                background: index === 1 
                  ? 'linear-gradient(135deg, #E1BEE7 0%, #F8BBD0 100%)'
                  : '#FFE0E5',
                boxShadow: index === 1 
                  ? '0 10px 40px rgba(156, 39, 176, 0.3)'
                  : '0 5px 20px rgba(0, 0, 0, 0.1)',
              }}
            >
              <h3 className="text-3xl font-black mb-4" style={{ color: '#333' }}>
                {plan.name}
              </h3>
              
              <div className="mb-6">
                <span className="text-5xl font-black" style={{ color: '#E91E63' }}>
                  {plan.price}
                </span>
                <span className="text-xl" style={{ color: '#666' }}>/month</span>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span style={{ color: '#4CAF50' }}>✓</span>
                    <span style={{ color: '#555' }}>{feature}</span>
                  </div>
                ))}
              </div>

              <button
                className="w-full py-3 rounded-full font-bold transition-all duration-300"
                style={{
                  background: index === 1 ? '#9C27B0' : '#333',
                  color: 'white',
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-3px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg mb-4" style={{ color: '#666' }}>
            Need a custom plan? Let's discuss your requirements
          </p>
          <a
            href="#get-quote"
            className="inline-block px-10 py-4 rounded-full font-bold text-lg transition-all duration-300"
            style={{
              background: '#9C27B0',
              color: 'white',
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 10px 30px rgba(156, 39, 176, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Contact Us for Custom Plan
          </a>
        </motion.div>
      </div>
    </section>
  );
}