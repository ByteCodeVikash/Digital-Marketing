import React, { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy. Typically, you can start seeing initial improvements in 3-4 months, with significant results in 6-12 months. However, this varies based on competition, current site status, and industry."
    },
    {
      question: "What's included in your digital marketing services?",
      answer: "Our comprehensive services include SEO optimization, content marketing, PPC advertising, social media management, web development, email marketing, and detailed analytics and reporting."
    },
    {
      question: "Do you work with businesses in my industry?",
      answer: "We have experience across various industries including SaaS, e-commerce, healthcare, finance, real estate, and more. Our strategies are customized to fit your specific industry needs and target audience."
    },
    {
      question: "How do you measure success?",
      answer: "We track key performance indicators (KPIs) such as organic traffic, keyword rankings, conversion rates, ROI, and lead generation. You'll receive detailed monthly reports showing progress and insights."
    },
    {
      question: "What makes your agency different?",
      answer: "Our data-driven approach, transparent reporting, dedicated account management, and proven track record set us apart. We focus on delivering measurable results and building long-term partnerships."
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-gray-900/50 to-purple-900/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-6 fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Frequently Asked Questions
        </h2>
        <p className="text-xl text-center text-gray-400 mb-16 fade-in-up">
          Got questions? We've got answers
        </p>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="fade-in-up p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl border border-purple-500/20 hover:border-cyan-400/50 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-xl font-bold text-white pr-8">{faq.question}</h3>
                <span className={`text-3xl text-cyan-400 transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96 mt-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up">
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}