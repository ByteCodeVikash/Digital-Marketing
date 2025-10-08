import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function MirrorRoom() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 700, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, 700);
    camera.position.z = 10;

    // Reflective cube
    const geometry = new THREE.BoxGeometry(4, 4, 4);
    const material = new THREE.MeshPhongMaterial({
      color: 0x6366f1,
      emissive: 0x4338ca,
      shininess: 100,
      transparent: true,
      opacity: 0.4,
      wireframe: true
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Lights
    const pointLight1 = new THREE.PointLight(0x06b6d4, 1.5, 100);
    pointLight1.position.set(7, 7, 7);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x8b5cf6, 1.5, 100);
    pointLight2.position.set(-7, -7, 7);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xec4899, 1, 100);
    pointLight3.position.set(0, 7, -7);
    scene.add(pointLight3);

    scene.add(new THREE.AmbientLight(0xffffff, 0.3));

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.006;
      cube.rotation.y += 0.006;
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

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 bg-gradient-to-b from-purple-900/30 to-gray-900/50 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-30" />
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-16 relative fade-in-up">
          <div className="text-7xl md:text-9xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 animate-pulse leading-tight">
            AdMark
          </div>
          <div className="absolute inset-0 text-7xl md:text-9xl font-black text-purple-500/20 blur-3xl transform scale-110 leading-tight">
            AdMark
          </div>
        </div>
        <p className="text-3xl md:text-5xl text-gray-300 italic mb-10 fade-in-up">
          Reflecting the Future of Marketing
        </p>
        <p className="text-xl text-gray-400 fade-in-up max-w-3xl mx-auto leading-relaxed">
          We don't just follow trends—we create them. Our innovative approach mirrors your brand's potential and amplifies it across every digital touchpoint, ensuring your message resonates in a crowded marketplace.
        </p>
      </div>
    </section>
  );
}