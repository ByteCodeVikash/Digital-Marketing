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
      {/* Main Globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial 
          color="#00FFFF"
          wireframe
          transparent
          opacity={0.3}
          emissive="#00FFFF"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Inner Glow Sphere */}
      <mesh>
        <sphereGeometry args={[2.3, 32, 32]} />
        <meshBasicMaterial 
          color="#B026FF"
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Data Lines */}
      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#00FFFF" transparent opacity={0.6} />
      </lineSegments>

      {/* Particles */}
      <points ref={particlesRef}>
        <bufferGeometry />
        <pointsMaterial 
          color="#00FFFF" 
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
      color="#00FFFF"
      distance={10}
    />
  );
}

// Binary Rain Background
function BinaryRain() {
  const groupRef = useRef();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.position.y -= 0.05;
        if (child.position.y < -10) {
          child.position.y = 10;
        }
      });
    }
  });

  return (
    <group ref={groupRef}>
      {Array.from({ length: 50 }).map((_, i) => (
        <Text
          key={i}
          position={[
            (Math.random() - 0.5) * 20,
            Math.random() * 20 - 10,
            -5
          ]}
          fontSize={0.3}
          color="#00FFFF"
          opacity={0.2}
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </Text>
      ))}
    </group>
  );
}

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "AdMark — The Future of Digital Growth",
      subtitle: "We don't market, we magnetize."
    },
    {
      title: "Transform Your Digital Presence",
      subtitle: "Data-driven strategies that deliver real results"
    },
    {
      title: "Dominate The Digital World",
      subtitle: "Where innovation meets execution"
    }
  ];

  const socialIcons = [
    { pos: [0, 0, 0], icon: '📱', color: '#E1306C', speed: 0.3, radius: 4, label: 'Instagram' },
    { pos: [0, 0, 0], icon: '👍', color: '#1877F2', speed: 0.4, radius: 5, label: 'Facebook' },
    { pos: [0, 0, 0], icon: '▶️', color: '#FF0000', speed: 0.5, radius: 4.5, label: 'YouTube' },
    { pos: [0, 0, 0], icon: '💰', color: '#34A853', speed: 0.35, radius: 5.5, label: 'Ads' },
    { pos: [0, 0, 0], icon: '🔍', color: '#00FFFF', speed: 0.45, radius: 4.8, label: 'SEO' },
    { pos: [0, 0, 0], icon: '📧', color: '#EA4335', speed: 0.4, radius: 5.2, label: 'Email' },
    { pos: [0, 0, 0], icon: '📊', color: '#B026FF', speed: 0.38, radius: 4.3, label: 'Analytics' },
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
        background: 'linear-gradient(to bottom, #0B0B0D 0%, #001F3F 100%)'
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
          <pointLight position={[10, 10, 10]} intensity={1} color="#B026FF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00FFFF" />
          
          <HolographicGlobe />
          <BinaryRain />
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
            className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 leading-tight"
            style={{
              background: 'linear-gradient(90deg, #00FFFF 0%, #B026FF 50%, #00FFFF 100%)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'gradient 3s ease infinite',
              filter: 'drop-shadow(0 0 30px rgba(0, 255, 255, 0.5))',
            }}
          >
            {slides[currentSlide].title}
          </h1>
          <p 
            className="text-lg sm:text-xl md:text-2xl mb-12 font-medium max-w-3xl mx-auto"
            style={{
              color: '#ffffff',
              textShadow: '0 0 20px rgba(176, 38, 255, 0.5)',
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
                  ? 'w-12 bg-cyan-400' 
                  : 'w-2 bg-gray-600 hover:bg-gray-400'
              }`}
              style={{
                boxShadow: index === currentSlide 
                  ? '0 0 20px rgba(0, 255, 255, 0.8)' 
                  : 'none'
              }}
            />
          ))}
        </div>

        {/* CTA Button - Glassmorphism */}
        <button 
          className="group relative px-10 py-5 rounded-full text-lg md:text-xl font-bold transition-all duration-500 overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(0, 255, 255, 0.3)',
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 0 50px rgba(0, 255, 255, 0.9)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 255, 255, 0.3)';
          }}
        >
          <span 
            className="relative z-10"
            style={{
              background: 'linear-gradient(90deg, #00FFFF, #B026FF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Explore Campaigns 🚀
          </span>
        </button>
      </div>

      {/* Gradient Animation Keyframes */}
      <style>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}