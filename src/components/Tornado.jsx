import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Tornado() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 700, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, 700);
    camera.position.z = 20;

    // Tornado particles
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 1500;
    const positions = [];
    
    for (let i = 0; i < particleCount; i++) {
      const angle = (i / particleCount) * Math.PI * 12;
      const radius = (i / particleCount) * 6;
      const y = (i / particleCount) * 15 - 7;
      
      positions.push(
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius
      );
    }
    
    particleGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({ 
      color: 0x06b6d4, 
      size: 0.15,
      transparent: true,
      opacity: 0.8
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;
      particles.rotation.y += 0.008;
      
      const positions = particleGeometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + i) * 0.015;
      }
      particleGeometry.attributes.position.needsUpdate = true;
      
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / 700;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, 700);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  const keywords = ['Reach', 'Engage', 'Convert', 'Grow'];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 bg-gradient-to-b from-blue-900/30 to-purple-900/30 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40" />
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-8 fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
          Turn Chaos Into Conversions
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-16 fade-in-up max-w-3xl mx-auto leading-relaxed">
          Navigate the complex digital landscape with confidence. We transform scattered efforts into strategic, measurable success that drives real business growth.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {keywords.map((word, i) => (
            <div 
              key={i}
              className="fade-in-up p-10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-3xl border border-purple-500/20 hover:border-cyan-400/60 hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] transition-all duration-300 transform hover:scale-110"
            >
              <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {word}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}