import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function BrainPulse() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    camera.position.z = 12;

    // Brain nodes
    const brainNodes = [];
    for (let i = 0; i < 40; i++) {
      const geometry = new THREE.SphereGeometry(0.15, 16, 16);
      const material = new THREE.MeshPhongMaterial({
        color: 0x06b6d4,
        emissive: 0x06b6d4,
        emissiveIntensity: 0.6,
        transparent: true,
        opacity: 0.9
      });
      const node = new THREE.Mesh(geometry, material);
      node.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 3
      );
      brainNodes.push(node);
      scene.add(node);
    }

    // Connections
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x8b5cf6, transparent: true, opacity: 0.5 });
    brainNodes.forEach((node, i) => {
      if (i < brainNodes.length - 2) {
        const points = [node.position, brainNodes[i + 1].position];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        const line = new THREE.Line(geometry, lineMaterial);
        scene.add(line);
      }
    });

    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(0, 0, 10);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.015;

      brainNodes.forEach((node, i) => {
        const pulse = Math.sin(time * 2 + i * 0.5) * 0.5 + 0.5;
        node.material.emissiveIntensity = pulse * 0.8;
        node.scale.set(1 + pulse * 0.4, 1 + pulse * 0.4, 1 + pulse * 0.4);
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => renderer.dispose();
  }, []);

  const items = [
    { 
      title: 'SEO Optimization', 
      desc: 'Rank higher with cutting-edge SEO techniques and strategic keyword optimization that drives organic growth'
    },
    { 
      title: 'Strategic Planning', 
      desc: 'Develop comprehensive marketing roadmaps aligned with your business goals and market opportunities'
    },
    { 
      title: 'Campaign Management', 
      desc: 'Execute multi-channel campaigns with precision, agility, and data-backed decision making'
    },
    { 
      title: 'Data Analytics', 
      desc: 'Transform raw data into actionable insights for continuous improvement and measurable ROI'
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 bg-gradient-to-b from-purple-900/30 to-blue-900/30">
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-6 fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Digital Brain Pulse
        </h2>
        <p className="text-xl text-center text-gray-300 mb-16 max-w-3xl mx-auto fade-in-up">
          Our intelligent approach combines creativity with data science to power your brand's exponential growth
        </p>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-[500px] fade-in-up">
            <canvas ref={canvasRef} className="w-full h-full" />
          </div>
          <div className="space-y-6">
            {items.map((item, i) => (
              <div 
                key={i}
                className="fade-in-up group p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl border border-purple-500/30 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-2xl font-bold mb-3 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}