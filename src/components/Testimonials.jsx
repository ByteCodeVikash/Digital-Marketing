import React, { useState } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "Working with DigitalPro transformed our online presence. Our organic traffic increased by 500% in just 6 months. Their team is professional, responsive, and truly understands SEO.",
      name: "David Martinez",
      role: "CEO, TechStart Inc.",
      icon: "👨‍💼",
      rating: 5
    },
    {
      text: "The local SEO results have been phenomenal. We're now ranking in the top 3 for all our target keywords, and our store visits have nearly tripled. Highly recommend!",
      name: "Lisa Thompson",
      role: "Marketing Director, Urban Fitness",
      icon: "👩‍💼",
      rating: 5
    },
    {
      text: "Their PPC management is outstanding. Our ROAS improved from 2.1x to 6.8x, and our conversion rate quadrupled. The ROI speaks for itself.",
      name: "James Wilson",
      role: "Founder, EcoShop Online",
      icon: "👨‍💼",
      rating: 5
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-purple-900/30 to-blue-900/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-6 fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          What Our Clients Say
        </h2>
        <p className="text-xl text-center text-gray-400 mb-16 fade-in-up">
          Don't just take our word for it
        </p>

        <div className="relative fade-in-up">
          <div className="p-10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-purple-500/30 hover:border-cyan-400/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] transition-all duration-500">
            {/* Rating Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <span key={i} className="text-3xl text-yellow-400">⭐</span>
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-xl md:text-2xl text-gray-200 text-center mb-8 leading-relaxed italic">
              "{testimonials[activeIndex].text}"
            </p>

            {/* Client Info */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-600/30 to-purple-600/30 rounded-full flex items-center justify-center text-3xl border border-purple-500/30">
                {testimonials[activeIndex].icon}
              </div>
              <div className="text-left">
                <div className="text-xl font-bold text-white">{testimonials[activeIndex].name}</div>
                <div className="text-cyan-400">{testimonials[activeIndex].role}</div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-12 bg-cyan-400' : 'w-3 bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}