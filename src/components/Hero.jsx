import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, Text } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

// Holographic Globe with Data Lines
function HolographicGlobe() {
  const globeRef = useRef();
  const linesRef = useRef();
  const particlesRef = useRef();

  useEffect(() => {
    // Create data lines around globe
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];
    
    for (let i = 0; i < 100; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      const radius = 2.5;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      linePositions.push(x, y, z);
      linePositions.push(x * 1.5, y * 1.5, z * 1.5);
    }
    
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
    linesRef.current.geometry = lineGeometry;

    // Create particles
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = [];
    
    for (let i = 0; i < 1000; i++) {
      particlePositions.push(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
    }
    
    particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(particlePositions, 3));
    particlesRef.current.geometry = particleGeometry;
  }, []);

  useFrame(({ clock }) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
      globeRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.1;
    }
    
    if (linesRef.current) {
      linesRef.current.rotation.y -= 0.001;
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <group>
      {/* Main Globe - Cyan Color */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial 
          color="#00F0FF"
          wireframe
          transparent
          opacity={0.3}
          emissive="#00F0FF"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Inner Glow Sphere - Purple */}
      <mesh>
        <sphereGeometry args={[2.3, 32, 32]} />
        <meshBasicMaterial 
          color="#7B2CBF"
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Data Lines - Cyan */}
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#00F0FF" transparent opacity={0.6} />
      </lineSegments>

      {/* Particles - Pink */}
      <points ref={particlesRef}>
        <bufferGeometry />
        <pointsMaterial 
          color="#FF006E" 
          size={0.05} 
          transparent 
          opacity={0.6}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

// Floating Social Media Icons
function FloatingIcon({ position, icon, color, speed, radius }) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (ref.current) {
      const t = clock.getElapsedTime() * speed;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = position[1] + Math.sin(t * 2) * 0.3;
      ref.current.rotation.y += 0.02;
      
      if (hovered) {
        ref.current.scale.setScalar(1.3);
      } else {
        ref.current.scale.setScalar(1);
      }
    }
  });

  return (
    <group 
      ref={ref} 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Icon Sphere */}
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial 
          color={color}
          emissive={color}
          emissiveIntensity={hovered ? 1 : 0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Icon Text */}
      <Text
        position={[0, 0, 0.41]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {icon}
      </Text>

      {/* Glow Ring */}
      {hovered && (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.6, 0.05, 16, 100]} />
          <meshBasicMaterial color={color} transparent opacity={0.5} />
        </mesh>
      )}
    </group>
  );
}

// Mouse-Reactive Lighting
function MouseLight() {
  const lightRef = useRef();
  const { mouse, viewport } = useThree();

  useFrame(() => {
    if (lightRef.current) {
      lightRef.current.position.x = (mouse.x * viewport.width) / 2;
      lightRef.current.position.y = (mouse.y * viewport.height) / 2;
    }
  });

  return (
    <pointLight 
      ref={lightRef} 
      position={[0, 0, 5]} 
      intensity={2} 
      color="#00F0FF"
      distance={10}
    />
  );
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AdMark — Magnetize Your Growth",
      subtitle: "We don't just market, we magnetize customers to your brand"
    },
    {
      title: "Transform Digital Presence",
      subtitle: "Data-driven strategies that deliver measurable results"
    },
    {
      title: "Dominate The Digital World",
      subtitle: "Where innovation meets execution for exponential growth"
    }
  ];

  const socialIcons = [
    { pos: [0, 0, 0], icon: '📱', color: '#E1306C', speed: 0.3, radius: 4, label: 'Instagram' },
    { pos: [0, 0, 0], icon: '👍', color: '#1877F2', speed: 0.4, radius: 5, label: 'Facebook' },
    { pos: [0, 0, 0], icon: '▶️', color: '#FF0000', speed: 0.5, radius: 4.5, label: 'YouTube' },
    { pos: [0, 0, 0], icon: '💰', color: '#34A853', speed: 0.35, radius: 5.5, label: 'Ads' },
    { pos: [0, 0, 0], icon: '🔍', color: '#00F0FF', speed: 0.45, radius: 4.8, label: 'SEO' },
    { pos: [0, 0, 0], icon: '📧', color: '#EA4335', speed: 0.4, radius: 5.2, label: 'Email' },
    { pos: [0, 0, 0], icon: '📊', color: '#7B2CBF', speed: 0.38, radius: 4.3, label: 'Analytics' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: '#home',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const canvas = document.getElementById('globe-canvas');
        if (canvas) {
          const scale = 1 - self.progress * 0.5;
          const opacity = 1 - self.progress;
          canvas.style.transform = `scale(${scale})`;
          canvas.style.opacity = opacity;
        }
      }
    });
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        background: 'linear-gradient(180deg, #0A0A0A 0%, #141414 100%)'
      }}
    >
      {/* 3D Canvas */}
      <div 
        id="globe-canvas" 
        className="absolute inset-0 w-full h-full"
        style={{ transformOrigin: 'center center' }}
      >
        <Canvas 
          camera={{ position: [0, 0, 12], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#7B2CBF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00F0FF" />
          
          <HolographicGlobe />
          <MouseLight />
          
          {socialIcons.map((icon, i) => (
            <FloatingIcon
              key={i}
              position={icon.pos}
              icon={icon.icon}
              color={icon.color}
              speed={icon.speed}
              radius={icon.radius}
            />
          ))}
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div 
          className="transition-all duration-1000 ease-in-out"
          key={currentSlide}
        >
          <h1 
            className="text-5xl sm:text-6xl md:text-8xl font-black mb-6 leading-tight gradient-text-admark neon-glow-cyan"
          >
            {slides[currentSlide].title}
          </h1>
          <p 
            className="text-xl sm:text-2xl md:text-3xl mb-12 font-medium max-w-3xl mx-auto"
            style={{
              color: 'rgba(255, 255, 255, 0.9)',
              textShadow: '0 0 20px rgba(0, 240, 255, 0.3)',
            }}
          >
            {slides[currentSlide].subtitle}
          </p>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center gap-3 mb-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-12 bg-admark-cyan shadow-neon-cyan' 
                  : 'w-2 bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* CTA Button - Glassmorphism with Neon */}
        <button 
          className="group relative px-10 py-5 rounded-full text-lg md:text-xl font-bold transition-all duration-500 glassmorphism-strong hover:scale-105 pulse-glow"
          style={{
            border: '2px solid rgba(0, 240, 255, 0.4)',
          }}
        >
          <span className="gradient-text-cyan-pink">
            Explore Our Services 🚀
          </span>
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-admark-cyan font-medium">Scroll for more</span>
            <svg 
              className="w-6 h-6 text-admark-cyan" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}