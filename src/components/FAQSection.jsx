import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQSection() {
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState(null);

  const categories = [
    { id: 'general', label: 'General Related Questions', icon: '❓' },
    { id: 'pricing', label: 'Pricing Related Questions', icon: '💰' },
    { id: 'services', label: 'Services Related Questions', icon: '🛠️' },
    { id: 'technical', label: 'Technical Related Questions', icon: '⚙️' },
    { id: 'support', label: 'Support Related Questions', icon: '💬' }
  ];

  const faqData = {
    general: [
      {
        question: 'What is AdMark Digital Media?',
        answer: 'AdMark Digital Media is a full-service digital marketing agency specializing in SEO, social media marketing, PPC advertising, web development, and content marketing. We help businesses grow their online presence and achieve measurable results.'
      },
      {
        question: 'How long have you been in business?',
        answer: 'We have been providing digital marketing services since 2018, serving over 500+ clients across 15+ countries with proven track record of success.'
      },
      {
        question: 'What industries do you work with?',
        answer: 'We work with businesses across various industries including e-commerce, healthcare, technology, real estate, hospitality, education, and B2B services.'
      },
      {
        question: 'How do I get started?',
        answer: 'Simply click on the "Schedule Meeting" button on our homepage or contact us through the "Get Quote" form. We\'ll schedule a free consultation to discuss your needs and create a custom strategy.'
      }
    ],
    pricing: [
      {
        question: 'What are your pricing plans?',
        answer: 'We offer flexible pricing based on services - Basic, Standard, and Premium plans for SEO, SMO, PPC, Web Development, Content Marketing, and Branding. Prices start from $199/month depending on the service.'
      },
      {
        question: 'Do you offer custom packages?',
        answer: 'Yes! We understand every business is unique. We can create custom packages tailored to your specific needs and budget. Contact us to discuss your requirements.'
      },
      {
        question: 'Is there a setup fee?',
        answer: 'Setup fees vary by service. Most digital marketing services have no setup fee, while web development projects may include an initial setup cost depending on complexity.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, PayPal, bank transfers, and for long-term contracts, we also offer flexible payment terms.'
      },
      {
        question: 'Can I cancel my subscription anytime?',
        answer: 'Yes, we offer month-to-month flexibility. You can cancel or pause your subscription with 30 days notice. No long-term contracts required.'
      }
    ],
    services: [
      {
        question: 'What SEO services do you provide?',
        answer: 'Our SEO services include keyword research, on-page optimization, technical SEO, link building, content optimization, competitor analysis, and monthly reporting with guaranteed rankings improvement.'
      },
      {
        question: 'How does your social media marketing work?',
        answer: 'We create and manage your social media presence across all major platforms, including content creation, posting schedule, community management, paid advertising, and analytics tracking.'
      },
      {
        question: 'Do you build custom websites?',
        answer: 'Yes! We build fully custom, responsive websites tailored to your brand. This includes design, development, CMS integration, e-commerce functionality, and ongoing maintenance.'
      },
      {
        question: 'What is included in PPC advertising?',
        answer: 'Our PPC services include campaign setup, keyword research, ad creation, landing page optimization, A/B testing, budget management, and detailed ROI reporting across Google Ads, Facebook Ads, and other platforms.'
      }
    ],
    technical: [
      {
        question: 'What technologies do you use?',
        answer: 'We use modern technologies including React, Node.js, WordPress, Shopify, Google Analytics, SEMrush, Ahrefs, and various marketing automation tools to deliver the best results.'
      },
      {
        question: 'Will my website be mobile-friendly?',
        answer: 'Absolutely! All websites we develop are fully responsive and optimized for mobile, tablet, and desktop devices, ensuring perfect user experience across all screen sizes.'
      },
      {
        question: 'Do you provide website hosting?',
        answer: 'Yes, we offer reliable hosting solutions with 99.9% uptime guarantee, SSL certificates, daily backups, and 24/7 monitoring as part of our web development packages.'
      },
      {
        question: 'How do you ensure website security?',
        answer: 'We implement SSL certificates, regular security updates, malware scanning, firewall protection, and follow best practices to keep your website secure from threats.'
      }
    ],
    support: [
      {
        question: 'What kind of support do you provide?',
        answer: 'We offer email support, live chat, phone support, and dedicated account managers for premium clients. Support hours are Monday-Friday 9 AM - 6 PM, with emergency support available 24/7.'
      },
      {
        question: 'How quickly do you respond to queries?',
        answer: 'We typically respond within 1-2 business hours for email queries and immediately for live chat during business hours. Emergency issues are addressed within 30 minutes.'
      },
      {
        question: 'Do you provide training?',
        answer: 'Yes! We provide comprehensive training sessions for your team on how to use your website, manage content, understand analytics, and make the most of our services.'
      },
      {
        question: 'What if I need changes after project completion?',
        answer: 'All projects come with a warranty period. Minor changes are included, and we offer ongoing maintenance packages for continuous support and updates.'
      }
    ]
  };

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section 
      id="faq" 
      className="relative py-20 md:py-32 px-4"
      style={{ background: '#0A0A0A' }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-4" style={{ color: '#FFC107' }}>
            Frequently Asked Questions
          </h2>
          <p className="text-xl" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Find answers to common questions about our services
          </p>
        </motion.div>

        {/* Category Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <label className="block text-lg font-semibold mb-3" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Select Category:
          </label>
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setOpenFAQ(null);
              }}
              className="w-full px-6 py-4 rounded-xl text-lg font-semibold appearance-none cursor-pointer transition-all duration-300"
              style={{
                background: 'rgba(255, 193, 7, 0.1)',
                border: '2px solid rgba(255, 193, 7, 0.3)',
                color: '#FFC107',
                paddingRight: '50px'
              }}
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id} style={{ background: '#1a1a1a', color: '#FFC107' }}>
                  {cat.icon} {cat.label}
                </option>
              ))}
            </select>
            {/* Dropdown Arrow */}
            <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-6 h-6" style={{ color: '#FFC107' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* FAQ Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {faqData[selectedCategory].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  background: 'rgba(255, 193, 7, 0.05)',
                  border: '1px solid rgba(255, 193, 7, 0.2)',
                  boxShadow: openFAQ === index ? '0 8px 25px rgba(255, 193, 7, 0.2)' : 'none'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-all duration-300"
                  style={{
                    background: openFAQ === index ? 'rgba(255, 193, 7, 0.1)' : 'transparent'
                  }}
                >
                  <span className="text-lg font-bold pr-4" style={{ color: '#FFC107' }}>
                    {faq.question}
                  </span>
                  <svg
                    className="w-6 h-6 flex-shrink-0 transition-transform duration-300"
                    style={{
                      color: '#FFC107',
                      transform: openFAQ === index ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5">
                        <p className="text-base leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 rounded-2xl"
          style={{
            background: 'rgba(255, 193, 7, 0.1)',
            border: '2px solid rgba(255, 193, 7, 0.3)'
          }}
        >
          <h3 className="text-2xl font-bold mb-3" style={{ color: '#FFC107' }}>
            Still Have Questions?
          </h3>
          <p className="text-lg mb-6" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
            Can't find the answer you're looking for? Our team is here to help!
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #FFC107 0%, #FF9800 100%)',
              color: '#000'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'scale(1.05)';
              e.target.style.boxShadow = '0 10px 30px rgba(255, 193, 7, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'scale(1)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Contact Us Now
          </a>
        </motion.div>
      </div>
    </section>
  );
}