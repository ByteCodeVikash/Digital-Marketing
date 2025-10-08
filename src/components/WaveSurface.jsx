import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function WaveSurface() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, canvasRef.current.clientWidth / canvasRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true, antialias: true });
    renderer.setSize(canvasRef.current.clientWidth, canvasRef.current.clientHeight);
    camera.position.set(0, 6, 12);
    camera.lookAt(0, 0, 0);

    const geometry = new THREE.PlaneGeometry(25, 25, 60, 60);
    const material = new THREE.MeshPhongMaterial({
      color: 0x6366f1,
      emissive: 0x4338ca,
      wireframe: true,
      transparent: true,
      opacity: 0.9
    });
    const plane = new THREE.Mesh(geometry, material);
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    const light = new THREE.PointLight(0xffffff, 1.5, 100);
    light.position.set(0, 15, 0);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    let time = 0;
    let mouseXWave = 0, mouseYWave = 0;

    const onMouseMove = (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      mouseXWave = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseYWave = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.05;

      const positions = geometry.attributes.position.array;
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const distX = (x / 25) - mouseXWave * 12;
        const distY = (y / 25) - mouseYWave * 12;
        const dist = Math.sqrt(distX * distX + distY * distY);
        positions[i + 2] = Math.sin(dist * 2 - time) * 0.8;
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-24 bg-gradient-to-b from-purple-900/50 to-blue-900/50">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-6 fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
          Interactive Wave Surface
        </h2>
        <p className="text-xl text-center text-gray-300 mb-16 fade-in-up max-w-3xl mx-auto">
          Experience the fluidity of modern marketing—adaptive, responsive, and always in motion with your audience's needs
        </p>
        <div className="h-[500px] fade-in-up">
          <canvas ref={canvasRef} className="w-full h-full" />
        </div>
      </div>
    </section>
  );
}