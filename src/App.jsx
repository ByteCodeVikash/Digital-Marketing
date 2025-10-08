import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudy from './components/CaseStudy';
import StatsSection from './components/StatsSection';
import TeamSection from './components/TeamSection';
import PricingSection from './components/PricingSection';
import Testimonials from './components/Testimonials';
import BlogSection from './components/BlogSection';
import FAQSection from './components/FAQSection';
import BrainPulse from './components/BrainPulse';
import Tornado from './components/Tornado';
import MirrorRoom from './components/MirrorRoom';
import WaveSurface from './components/WaveSurface';
import CTA from './components/CTA';
import Footer from './components/Footer';
import useMousePosition from './hooks/useMousePosition';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const mousePos = useMousePosition();

  useEffect(() => {
    gsap.fromTo('.fade-in-up', 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.fade-in-up',
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
      {/* Cursor Trail */}
      <div 
        className="fixed w-4 h-4 bg-cyan-400 rounded-full pointer-events-none blur-sm opacity-50 transition-all duration-75 z-50"
        style={{ left: mousePos.x - 8, top: mousePos.y - 8 }}
      />

      <Navbar /> {/* Yahan Navbar add kiya */}
      <Hero />
      <Services />
      <CaseStudy />
      <StatsSection />
      <BrainPulse />
      <Tornado />
      <MirrorRoom />
      <TeamSection />
      <PricingSection />
      <Testimonials />
      <WaveSurface />
      <BlogSection />
      <FAQSection />
      <CTA />
      <Footer />
    </div>
  );
}