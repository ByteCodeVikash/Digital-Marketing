import React from 'react';

export default function Footer() {
  return (
    <footer className="relative py-16 border-t border-purple-500/30 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse">
                AdMark
              </span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Engineering Marketing Universes. Transforming brands through intelligent digital strategies and measurable results.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">SEO & Content</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Social Media</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">PPC Advertising</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Web Design</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Brand Strategy</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Analytics</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Case Studies</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Careers</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Contact</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-cyan-400">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-cyan-300 transition-colors">
                <span className="font-semibold">Email:</span> hello@admark.com
              </li>
              <li className="hover:text-cyan-300 transition-colors">
                <span className="font-semibold">Phone:</span> +1 (555) 123-4567
              </li>
              <li className="hover:text-cyan-300 transition-colors">
                <span className="font-semibold">Address:</span> 123 Digital Ave, Tech City, TC 12345
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-500/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 AdMark. Engineering Marketing Universes. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Twitter', 'LinkedIn', 'Instagram', 'Facebook'].map((social, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="px-5 py-2 bg-white/10 backdrop-blur-lg rounded-full hover:bg-cyan-500/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.8)] transition-all duration-300 text-sm font-medium"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}