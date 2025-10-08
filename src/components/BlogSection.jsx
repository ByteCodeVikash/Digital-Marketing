import React from 'react';

export default function BlogSection() {
  const posts = [
    {
      title: '10 SEO Trends to Watch in 2025',
      category: 'SEO',
      icon: '📊'
    },
    {
      title: 'How to Maximize Your PPC ROI',
      category: 'PPC',
      icon: '💰'
    },
    {
      title: 'The Power of Local SEO for Small Businesses',
      category: 'Local SEO',
      icon: '📍'
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-blue-900/30 to-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
              Latest Insights
            </h2>
            <p className="text-xl text-gray-400 mt-4 fade-in-up">
              Expert tips and industry trends to help you succeed
            </p>
          </div>
          <button className="hidden md:block px-8 py-4 bg-white/10 backdrop-blur-lg rounded-full font-bold border border-purple-500/30 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300">
            View All Posts →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <div 
              key={i}
              className="fade-in-up group cursor-pointer"
            >
              {/* Blog Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl overflow-hidden border border-purple-500/30 group-hover:border-cyan-400/50 transition-all duration-300 mb-6">
                <div className="absolute inset-0 flex items-center justify-center text-7xl">
                  {post.icon}
                </div>
              </div>

              {/* Blog Content */}
              <div className="inline-block px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-400 text-sm font-semibold mb-4">
                {post.category}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                {post.title}
              </h3>
              
              <button className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                Read More →
              </button>
            </div>
          ))}
        </div>

        <div className="md:hidden text-center mt-12">
          <button className="px-8 py-4 bg-white/10 backdrop-blur-lg rounded-full font-bold border border-purple-500/30 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300">
            View All Posts →
          </button>
        </div>
      </div>
    </section>
  );
}