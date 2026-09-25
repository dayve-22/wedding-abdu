'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function PetalsBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Peach/rose/champagne palette particles
    const petalColors = [
      { r: 242, g: 160, b: 123 }, // peach #F2A07B
      { r: 253, g: 218, b: 221 }, // rose blush #FDDADD
      { r: 245, g: 230, b: 200 }, // champagne #F5E6C8
      { r: 223, g: 192, b: 106 }, // gold #DFC06A
      { r: 250, g: 240, b: 220 }, // ivory
    ];

    const particleCount = 60;

    // Create separate geometry per color group for tinting
    const allParticles: THREE.Points[] = [];

    petalColors.forEach((col, colorIdx) => {
      const count = Math.ceil(particleCount / petalColors.length);
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const scales = new Float32Array(count);
      const speeds = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        positions[i * 3]     = (Math.random() - 0.5) * 22;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 28;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
        scales[i] = Math.random() * 0.45 + 0.2;
        speeds[i * 3]     = (Math.random() - 0.5) * 0.007;
        speeds[i * 3 + 1] = -Math.random() * 0.014 - 0.004;
        speeds[i * 3 + 2] = (Math.random() - 0.5) * 0.004;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('scale', new THREE.BufferAttribute(scales, 1));

      // Create petal texture with this color
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.beginPath();
        ctx.ellipse(32, 32, 22, 11, Math.PI / 4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col.r}, ${col.g}, ${col.b}, 0.85)`;
        ctx.fill();

        const gradient = ctx.createRadialGradient(28, 28, 0, 32, 32, 26);
        gradient.addColorStop(0, `rgba(${col.r}, ${col.g}, ${col.b}, 0.95)`);
        gradient.addColorStop(0.6, `rgba(${col.r}, ${col.g}, ${col.b}, 0.5)`);
        gradient.addColorStop(1, `rgba(${col.r}, ${col.g}, ${col.b}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      const material = new THREE.PointsMaterial({
        size: colorIdx === 3 ? 0.45 : 0.58, // gold particles slightly smaller
        map: new THREE.CanvasTexture(canvas),
        transparent: true,
        opacity: colorIdx === 3 ? 0.65 : 0.75,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      });

      const points = new THREE.Points(geometry, material);
      // Store speeds on points userData
      (points as unknown as { speeds: Float32Array; count: number }).speeds = speeds;
      (points as unknown as { speeds: Float32Array; count: number }).count = count;
      scene.add(points);
      allParticles.push(points);
    });

    const ambientLight = new THREE.AmbientLight(0xfff8f0, 0.9);
    scene.add(ambientLight);

    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      allParticles.forEach((points) => {
        const p = points as unknown as { speeds: Float32Array; count: number; geometry: THREE.BufferGeometry; rotation: THREE.Euler };
        const posAttr = p.geometry.attributes.position as THREE.BufferAttribute;
        const posArray = posAttr.array as Float32Array;
        const count = p.count;
        const speeds = p.speeds;

        for (let i = 0; i < count; i++) {
          posArray[i * 3]     += speeds[i * 3] + Math.sin(Date.now() * 0.0008 + i * 2.3) * 0.0025;
          posArray[i * 3 + 1] += speeds[i * 3 + 1];
          posArray[i * 3 + 2] += speeds[i * 3 + 2];

          if (posArray[i * 3 + 1] < -14) {
            posArray[i * 3 + 1] = 14;
            posArray[i * 3]     = (Math.random() - 0.5) * 22;
          }
        }
        posAttr.needsUpdate = true;
        points.rotation.y += 0.0003;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      allParticles.forEach(p => {
        p.geometry.dispose();
        (p.material as THREE.PointsMaterial).dispose();
      });
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    />
  );
}
