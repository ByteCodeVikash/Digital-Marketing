import React from 'react';

export default function PricingSection() {
  const plans = [
    {
      name: 'Basic',
      price: '$500',
      period: '/month',
      features: [
        '10 Keywords',
        '5 Pages Optimized',
        'Monthly Reports',
        'Basic Link Building',
        'Email Support'
      ]
    },
    {
      name: 'Professional',
      price: '$800',
      period: '/month',
      popular: true,
      features: [
        '25 Keywords',
        '15 Pages Optimized',
        'Bi-weekly Reports',
        'Advanced Link Building',
        'Priority Support',
        'Content Strategy'
      ]
    },
    {
      name: 'Pro',
      price: '$1,000',
      period: '/month',
      features: [
        '50 Keywords',
        '30 Pages Optimized',
        'Weekly Reports',
        'Premium Link Building',
        '24/7 Support',
        'Content Creation',
        'Technical SEO'
      ]
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-blue-900/30 to-purple-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-6 fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Simple, Transparent Pricing
        </h2>
        <p className="text-xl text-center text-gray-400 mb-16 fade-in-up">
          Choose the perfect plan for your business needs
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i}
              className={`fade-in-up relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border transition-all duration-500 transform hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-400/60 shadow-[0_0_50px_rgba(6,182,212,0.7)] scale-105' 
                  : 'border-purple-500/20 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <span className="text-cyan-400 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.8)]'
                  : 'bg-white/10 border border-purple-500/30 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}