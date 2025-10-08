import React, { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, RoundedBox } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// 3D Rotating Card Component
function RotatingCard({ position, service, isFlipped, onFlip }) {
  const cardRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (cardRef.current) {
      // Smooth rotation animation
      const targetRotationY = isFlipped ? Math.PI : 0;
      cardRef.current.rotation.y = THREE.MathUtils.lerp(
        cardRef.current.rotation.y,
        targetRotationY,
        0.1
      );

      // Hover effect - floating
      if (hovered) {
        cardRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1 + 0.3;
      } else {
        cardRef.current.position.y = THREE.MathUtils.lerp(
          cardRef.current.position.y,
          position[1],
          0.1
        );
      }
    }
  });

  return (
    <group
      ref={cardRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={onFlip}
    >
      {/* Front Side */}
      <group visible={!isFlipped}>
        <RoundedBox args={[2.5, 3, 0.1]} radius={0.1}>
          <meshStandardMaterial
            color={service.color}
            emissive={service.color}
            emissiveIntensity={hovered ? 0.5 : 0.2}
            metalness={0.8}
            roughness={0.2}
            transparent
            opacity={0.9}
          />
        </RoundedBox>

        {/* Icon */}
        <Text
          position={[0, 0.8, 0.06]}
          fontSize={0.6}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {service.icon}
        </Text>

        {/* Title */}
        <Text
          position={[0, 0, 0.06]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2}
          textAlign="center"
          fontWeight="bold"
        >
          {service.title}
        </Text>

        {/* Click hint */}
        <Text
          position={[0, -1.2, 0.06]}
          fontSize={0.15}
          color="#00F0FF"
          anchorX="center"
          anchorY="middle"
        >
          Click to explore
        </Text>

        {/* Glow Ring on Hover */}
        {hovered && (
          <mesh rotation={[0, 0, 0]} position={[0, 0, -0.05]}>
            <ringGeometry args={[1.8, 2, 32]} />
            <meshBasicMaterial color="#00F0FF" transparent opacity={0.3} side={THREE.DoubleSide} />
          </mesh>
        )}
      </group>

      {/* Back Side */}
      <group visible={isFlipped} rotation={[0, Math.PI, 0]}>
        <RoundedBox args={[2.5, 3, 0.1]} radius={0.1}>
          <meshStandardMaterial
            color="#0A0A0A"
            emissive={service.color}
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.1}
            transparent
            opacity={0.95}
          />
        </RoundedBox>

        {/* Description */}
        <Text
          position={[0, 0.3, 0.06]}
          fontSize={0.15}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.2}
          textAlign="center"
          lineHeight={1.3}
        >
          {service.desc}
        </Text>

        {/* Features */}
        <Text
          position={[0, -0.8, 0.06]}
          fontSize={0.12}
          color="#00F0FF"
          anchorX="center"
          anchorY="middle"
          maxWidth={2.2}
          textAlign="center"
        >
          {service.features}
        </Text>

        {/* Click to flip back */}
        <Text
          position={[0, -1.3, 0.06]}
          fontSize={0.13}
          color="#FF006E"
          anchorX="center"
          anchorY="middle"
        >
          Click to flip back
        </Text>
      </group>

      {/* Particle Effect on Hover */}
      {hovered && (
        <points>
          <sphereGeometry args={[2, 16, 16]} />
          <pointsMaterial
            color={service.color}
            size={0.05}
            transparent
            opacity={0.6}
            sizeAttenuation
          />
        </points>
      )}
    </group>
  );
}

// Floating Particles Background
function FloatingParticles() {
  const particlesRef = useRef();

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particlePositions = [];
  for (let i = 0; i < 200; i++) {
    particlePositions.push(
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20
    );
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlePositions.length / 3}
          array={new Float32Array(particlePositions)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#7B2CBF"
        size={0.1}
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export default function Services() {
  const [flippedCards, setFlippedCards] = useState({});

  const services = [
    {
      icon: '🔍',
      title: 'SEO Services',
      desc: 'Dominate search rankings with cutting-edge optimization strategies.',
      features: '✓ Technical SEO ✓ Link Building ✓ Content Strategy',
      color: '#00F0FF'
    },
    {
      icon: '📱',
      title: 'Social Media Marketing',
      desc: 'Build viral campaigns that convert followers into customers.',
      features: '✓ Content Creation ✓ Community Management ✓ Paid Ads',
      color: '#7B2CBF'
    },
    {
      icon: '💰',
      title: 'PPC Advertising',
      desc: 'Maximize ROI with data-driven paid advertising campaigns.',
      features: '✓ Google Ads ✓ Facebook Ads ✓ Retargeting',
      color: '#FF006E'
    },
    {
      icon: '💻',
      title: 'Web Development',
      desc: 'Lightning-fast, conversion-optimized websites that wow.',
      features: '✓ Custom Design ✓ Responsive ✓ E-commerce',
      color: '#00F0FF'
    },
    {
      icon: '✍️',
      title: 'Content Marketing',
      desc: 'Compelling stories that engage, educate, and convert.',
      features: '✓ Blog Writing ✓ Video Scripts ✓ Email Campaigns',
      color: '#7B2CBF'
    },
    {
      icon: '📊',
      title: 'Analytics & Reporting',
      desc: 'Real-time insights that drive intelligent marketing decisions.',
      features: '✓ Custom Dashboards ✓ Performance Tracking ✓ A/B Testing',
      color: '#FF006E'
    }
  ];

  const handleFlip = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Calculate grid positions
  const getCardPosition = (index) => {
    const row = Math.floor(index / 3);
    const col = index % 3;
    const x = (col - 1) * 3.5;
    const y = -(row * 4) + 2;
    return [x, y, 0];
  };

  return (
    <section
      id="services"
      className="relative py-20 md:py-32 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #0A0A0A 0%, #141414 50%, #0A0A0A 100%)'
      }}
    >
      {/* Animated Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-16 text-center"
      >
        <h2 className="text-5xl md:text-7xl font-black mb-6 gradient-text-admark neon-glow-cyan">
          Our Services
        </h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
          Choose your growth plan and watch your business transform
        </p>
      </motion.div>

      {/* 3D Canvas with Cards */}
      <div className="w-full h-[800px] md:h-[900px]">
        <Canvas
          camera={{ position: [0, 0, 12], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00F0FF" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#7B2CBF" />
          <pointLight position={[0, 0, 15]} intensity={0.5} color="#FF006E" />

          <FloatingParticles />

          {services.map((service, index) => (
            <RotatingCard
              key={index}
              position={getCardPosition(index)}
              service={service}
              isFlipped={flippedCards[index]}
              onFlip={() => handleFlip(index)}
            />
          ))}
        </Canvas>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <button
          className="group relative px-10 py-5 rounded-full text-lg md:text-xl font-bold transition-all duration-500 glassmorphism-strong hover:scale-105"
          style={{
            border: '2px solid rgba(0, 240, 255, 0.4)',
            boxShadow: '0 0 30px rgba(0, 240, 255, 0.3)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 0 50px rgba(255, 0, 110, 0.6)';
            e.currentTarget.style.borderColor = 'rgba(255, 0, 110, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 0 30px rgba(0, 240, 255, 0.3)';
            e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.4)';
          }}
        >
          <span className="gradient-text-cyan-pink">
            Get Custom Quote →
          </span>
        </button>
      </motion.div>

      {/* Decorative Neon Orbs */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-admark-cyan rounded-full opacity-10 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-admark-pink rounded-full opacity-10 blur-3xl" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '2s' }} />
    </section>
  );
}