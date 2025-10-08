import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextureLoader } from 'three';

gsap.registerPlugin(ScrollTrigger);

function Globe() {
  const globeRef = useRef();
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001; // Slow rotation
    }
  });

  return (
    <mesh ref={globeRef}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshBasicMaterial color="#6366f1" wireframe opacity={0.5} transparent />
    </mesh>
  );
}

function FloatingIcon({ position, logoUrl, speed, distance }) {
  const ref = useRef();
  const [texture, setTexture] = useState(null);

  useEffect(() => {
    const loader = new TextureLoader();
    loader.load(
      logoUrl,
      (loadedTexture) => {
        setTexture(loadedTexture);
      },
      undefined,
      (error) => {
        console.error('Error loading texture:', error);
      }
    );
  }, [logoUrl]);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime();
      ref.current.position.x = Math.cos(t * speed) * distance;
      ref.current.position.z = Math.sin(t * speed) * distance;
      ref.current.position.y = position[1] + Math.sin(t) * 0.2; // Float up-down
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <group position={position} ref={ref}>
      {texture && (
        <>
          <Sphere args={[0.6, 16, 16]} />
          <meshStandardMaterial map={texture} emissive="#ffffff" emissiveIntensity={1} />
        </>
      )}
    </group>
  );
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const canvasRef = useRef();

  const slides = [
    {
      title: "Transform Your Digital Presence",
      subtitle: "Data-driven marketing strategies that deliver measurable results"
    },
    {
      title: "Dominate Search Rankings",
      subtitle: "Expert SEO services that put your business on the first page"
    },
    {
      title: "Scale Your Business Online",
      subtitle: "Comprehensive digital marketing solutions tailored to your goals"
    }
  ];

  const icons = [
    { pos: [6, 0, 0], logoUrl: 'src/assets/hero/seo-logo.png', speed: 0.5, distance: 6 },
    { pos: [-6, 0, 0], logoUrl: 'src/assets/hero/smo-logo.png', speed: 0.7, distance: 7 },
    { pos: [0, 6, 0], logoUrl: 'src/assets/hero/ppc-logo.png', speed: 0.3, distance: 8 },
    { pos: [0, -6, 0], logoUrl: 'src/assets/hero/web-logo.png', speed: 0.6, distance: 6.5 },
    { pos: [4, 4, 4], logoUrl: 'src/assets/hero/insta-logo.png', speed: 0.4, distance: 7.5 },
    { pos: [-4, -4, -4], logoUrl: 'src/assets/hero/gmail-logo.png', speed: 0.5, distance: 6.5 },
    { pos: [4, -4, 4], logoUrl: 'src/assets/hero/analysis.png', speed: 0.6, distance: 7 }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Scroll animation
  useEffect(() => {
    gsap.to('#globe-canvas', {
      scale: 0.5,
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" style={{ background: 'linear-gradient(to bottom, #0B0B0D, #001F3F)' }}>
      <div id="globe-canvas" className="absolute inset-0 w-full h-full">
        <Canvas camera={{ position: [0, 0, 15], fov: 50 }} ref={canvasRef}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#ffffff" intensity={1.5} />
          <Globe />
          {icons.map((icon, i) => (
            <FloatingIcon
              key={i}
              position={icon.pos}
              logoUrl={icon.logoUrl}
              speed={icon.speed}
              distance={icon.distance}
            />
          ))}
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto py-20">
        <div className="transition-opacity duration-1000" key={currentSlide}>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 leading-tight drop-shadow-2xl">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-12 text-gray-200 font-medium max-w-3xl mx-auto drop-shadow-lg">
            {slides[currentSlide].subtitle}
          </p>
        </div>
        <div className="flex justify-center gap-3 mb-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-12 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]' 
                  : 'w-2 bg-gray-600 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <button className="px-10 py-5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-lg md:text-xl font-bold hover:scale-110 hover:shadow-[0_0_50px_rgba(6,182,212,0.9)] transition-all duration-300 shadow-2xl">
          Get Started Today 🚀
        </button>
      </div>
    </section>
  );
}