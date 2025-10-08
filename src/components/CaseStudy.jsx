import React from 'react';

export default function CaseStudy() {
  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-purple-900/30 to-blue-900/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-6 fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Proven Results That Speak
        </h2>
        <p className="text-xl text-center text-gray-400 mb-16 fade-in-up">
          Real case studies from businesses we've helped grow
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center fade-in-up">
          {/* Image Placeholder */}
          <div className="relative h-96 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-3xl overflow-hidden border border-purple-500/30">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">🏢</div>
                <p className="text-gray-400">Modern Tech Startup Office</p>
              </div>
            </div>
          </div>

          {/* Case Study Details */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-400 text-sm font-semibold mb-4">
              SaaS • SEO & Content Marketing
            </div>
            
            <h3 className="text-4xl font-bold text-white mb-6">TechStart Inc.</h3>
            
            <div className="grid grid-cols-3 gap-6">
              <div className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-purple-500/30">
                <div className="text-sm text-gray-400 mb-2">Organic Traffic</div>
                <div className="text-2xl font-bold text-cyan-400">2.5K → 15.2K</div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-purple-500/30">
                <div className="text-sm text-gray-400 mb-2">Keywords in Top 10</div>
                <div className="text-2xl font-bold text-cyan-400">12 → 147</div>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-purple-500/30">
                <div className="text-sm text-gray-400 mb-2">Monthly Leads</div>
                <div className="text-2xl font-bold text-cyan-400">45 → 312</div>
              </div>
            </div>

            <div className="text-gray-400 mt-6">
              <span className="font-semibold">Timeframe:</span> 6 months
            </div>

            <button className="mt-8 px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-bold hover:scale-105 hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300">
              View Full Case Study →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}