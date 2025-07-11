// import { useEffect, useRef, useState } from "react";
// import * as THREE from 'three';


// export function ThreeBackground() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const [isLoaded, setIsLoaded] = useState(false);

//   useEffect(() => {
//     let animationId: number;
//     let scene: any, camera: any, renderer: any, particles: any;

//     const initThreeJS = async () => {
//       try {
//         // Load Three.js with a timeout
//         // const loadThreeJS = () => {
//         //   return new Promise((resolve, reject) => {
//         //     if ((window as any).THREE) {
//         //       resolve((window as any).THREE);
//         //       return;
//         //     }

//         //     const script = document.createElement('script');
//         //     script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
//         //     script.async = true;
//         //     script.onload = () => {
//         //       setTimeout(() => {
//         //         if ((window as any).THREE) {
//         //           resolve((window as any).THREE);
//         //         } else {
//         //           reject(new Error('Three.js failed to load'));
//         //         }
//         //       }, 100);
//         //     };
//         //     script.onerror = () => reject(new Error('Failed to load Three.js script'));
//         //     document.head.appendChild(script);
//         //   });
//         // };

//         // const THREE = await loadThreeJS();
        
//         if (!canvasRef.current) return;

//         // Initialize Three.js scene
//         scene = new THREE.Scene();
//         camera = new THREE.PerspectiveCamera(
//           75,
//           window.innerWidth / window.innerHeight,
//           0.1,
//           1000
//         );

//         renderer = new THREE.WebGLRenderer({
//           canvas: canvasRef.current,
//           alpha: true,
//           antialias: true,
//         });

//         renderer.setSize(window.innerWidth, window.innerHeight);
//         renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

//         // Create particles
//         const particlesGeometry = new THREE.BufferGeometry();
//         const particlesCount = 500;
//         const posArray = new Float32Array(particlesCount * 3);

//         for (let i = 0; i < particlesCount * 3; i++) {
//           posArray[i] = (Math.random() - 0.5) * 80;
//         }

//         particlesGeometry.setAttribute(
//           'position',
//           new THREE.BufferAttribute(posArray, 3)
//         );

//         const particlesMaterial = new THREE.PointsMaterial({
//           size: 2.0,
//           color: '#6366F1',
//           transparent: true,
//           opacity: 0.6,
//         });

//         particles = new THREE.Points(particlesGeometry, particlesMaterial);
//         scene.add(particles);

//         camera.position.z = 30;

//         // Animation loop
//         const animate = () => {
//           animationId = requestAnimationFrame(animate);
          
//           if (particles) {
//             particles.rotation.x += 0.001;
//             particles.rotation.y += 0.002;
//           }

//           renderer.render(scene, camera);
//         };

//         animate();
//         setIsLoaded(true);

//         // Handle resize
//         const handleResize = () => {
//           if (!camera || !renderer || !canvasRef.current) return;
          
//           camera.aspect = window.innerWidth / window.innerHeight;
//           camera.updateProjectionMatrix();
//           renderer.setSize(window.innerWidth, window.innerHeight);
//         };

//         window.addEventListener('resize', handleResize);

//         return () => {
//           window.removeEventListener('resize', handleResize);
//         };

//       } catch (error) {
//         console.error('Error loading Three.js:', error);
//         setIsLoaded(false);
//       }
//     };

//     initThreeJS();

//     return () => {
//       if (animationId) {
//         cancelAnimationFrame(animationId);
//       }
//       if (renderer) {
//         renderer.dispose();
//       }
//     };
//   }, []);

//   return (
//     <>
//       {/* Subtle CSS background - only shows when Three.js is not loaded */}
//       {!isLoaded && (
//         <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-blue-500/3 via-purple-500/2 to-emerald-500/3">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.05),transparent_50%)]"></div>
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.05),transparent_50%)]"></div>
//         </div>
//       )}
      
//       {/* Three.js Canvas */}
//       <canvas
//         ref={canvasRef}
//         className={`fixed top-0 left-0 w-full h-full -z-10 pointer-events-none transition-opacity duration-1000 ${
//           isLoaded ? "opacity-70" : "opacity-0"
//         }`}
//       />
//     </>
//   );
// }

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function ThreeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let animationId: number;
    let scene: THREE.Scene;
    let camera: THREE.PerspectiveCamera;
    let renderer: THREE.WebGLRenderer;
    let particles: THREE.Points;

    if (!canvasRef.current) return;

    // Initialize Three.js scene
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 80;
    }

    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(posArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 2.0,
      color: '#6366F1',
      transparent: true,
      opacity: 0.6,
    });

    particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    camera.position.z = 30;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      particles.rotation.x += 0.001;
      particles.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    animate();
    setIsLoaded(true);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      {!isLoaded && (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-gradient-to-br from-blue-500/3 via-purple-500/2 to-emerald-500/3">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(99,102,241,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(16,185,129,0.05),transparent_50%)]"></div>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40 transition-opacity duration-1000"
      />
    </>
  );
}
