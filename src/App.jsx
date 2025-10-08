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

// 🔹 New imports added here:
import GetQuote from './components/GetQuote';
import Portfolio from './components/Portfolio';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const mousePos = useMousePosition();

  useEffect(() => {
    gsap.fromTo(
      '.fade-in-up',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.fade-in-up',
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Simple Cursor */}
      <div
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50"
        style={{
          left: mousePos.x - 12,
          top: mousePos.y - 12,
          background:
            'radial-gradient(circle, rgba(0,240,255,0.8) 0%, transparent 70%)',
          boxShadow: '0 0 20px rgba(0,240,255,0.6)',
        }}
      />

      <Navbar />
      <Hero />
      <Services />
      <CaseStudy /> {/* Already improved */}
      <Portfolio /> {/* NEW */}
      <GetQuote />  {/* NEW */}
      <AboutUs />   {/* NEW */}
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
      <ContactUs /> {/* NEW (Contact ke jagah) */}
      <Footer />
    </div>
  );
}
