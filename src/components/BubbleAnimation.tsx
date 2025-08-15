import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';
import LogoSvg from '../assets/images/Logo.svg';

// Individual bubble component with realistic material
function Bubble({ position, size, speed, rotationSpeed }: {
  position: [number, number, number];
  size: number;
  speed: number;
  rotationSpeed: { x: number; y: number; z: number };
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const startTime = useRef(Date.now());
  
  // Create realistic bubble material with iridescence (based on Three.js forum best practices)
  const material = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      transmission: 1, // Full transparency like real bubbles
      opacity: 0.05, // Very subtle opacity
      transparent: true,
      roughness: 0,
      metalness: 0,
      ior: 1.35, // Index of refraction for soap bubbles
      iridescence: 1, // Full iridescence for rainbow effect
      iridescenceIOR: 1.3,
      iridescenceThicknessRange: [0, 1400], // Wider range for more color variation
      envMapIntensity: 2, // Stronger environment reflections
      clearcoat: 1,
      clearcoatRoughness: 0,
      depthTest: false, // Better transparency rendering
    });
  }, []);
  
  useFrame(() => {
    if (meshRef.current) {
      const elapsed = (Date.now() - startTime.current) / 1000;
      
      // Float upward
      meshRef.current.position.y = position[1] + elapsed * speed;
      
      // Add gentle floating motion
      meshRef.current.position.x = position[0] + Math.sin(elapsed * 0.5 + position[0]) * 0.2;
      meshRef.current.position.z = position[2] + Math.cos(elapsed * 0.3 + position[2]) * 0.2;
      
      // Rotate for dynamic iridescence
      meshRef.current.rotation.x += rotationSpeed.x;
      meshRef.current.rotation.y += rotationSpeed.y;
      meshRef.current.rotation.z += rotationSpeed.z;
      
      // Reset position when bubble goes too high
      if (meshRef.current.position.y > 15) {
        meshRef.current.position.y = -15;
        startTime.current = Date.now();
      }
    }
  });
  
  return (
    <mesh ref={meshRef} position={position} material={material}>
      <sphereGeometry args={[size, 32, 32]} />
    </mesh>
  );
}

// Bubble system manager
function BubbleSystem() {
  interface BubbleType {
    id: number;
    position: [number, number, number];
    size: number;
    speed: number;
    rotationSpeed: { x: number; y: number; z: number };
  }
  
  const [bubbles, setBubbles] = useState<BubbleType[]>([]);
  const { viewport } = useThree();
  const maxBubbles = 400; // Many more bubbles to completely fill the screen
  const spawnInterval = 50; // Faster spawning
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles(prev => {
        if (prev.length >= maxBubbles) return prev;
        
        const newBubble: BubbleType = {
          id: Date.now() + Math.random(),
          position: [
            (Math.random() - 0.5) * viewport.width * 3, // Wider spread
            -25 - Math.random() * 10, // Start further below
            (Math.random() - 0.5) * 30 // More depth variation
          ],
          size: Math.random() * 0.8 + 0.2, // Larger size range
          speed: Math.random() * 1.5 + 0.5, // Varied speeds
          rotationSpeed: {
            x: (Math.random() - 0.5) * 0.02,
            y: (Math.random() - 0.5) * 0.02,
            z: (Math.random() - 0.5) * 0.02
          }
        };
        
        return [...prev, newBubble];
      });
    }, spawnInterval);
    
    return () => clearInterval(interval);
  }, [viewport.width, maxBubbles]);
  
  return (
    <>
      {bubbles.map(bubble => (
        <Bubble
          key={bubble.id}
          position={bubble.position}
          size={bubble.size}
          speed={bubble.speed}
          rotationSpeed={bubble.rotationSpeed}
        />
      ))}
    </>
  );
}

// Lighting setup for realistic bubble reflections
function Lighting() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.8}
        castShadow
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4A90E2" />
      <pointLight position={[10, -10, 10]} intensity={0.5} color="#F39C12" />
    </>
  );
}

// Main component
export default function RealisticBubbleAnimation({ onComplete }: { onComplete?: () => void }) {
  const [showIntro, setShowIntro] = useState(true);
  
  // Auto-start animation after brief intro
  useEffect(() => {
    const introTimer = setTimeout(() => {
      setShowIntro(false);
    }, 2000); // Show intro for 2 seconds, then start animation
    
    return () => clearTimeout(introTimer);
  }, []);
  
  // Auto-transition to main content after animation runs
  useEffect(() => {
    if (!showIntro && onComplete) {
      const timer = setTimeout(() => {
        onComplete();
      }, 10000); // 10 seconds of bubble animation
      
      return () => clearTimeout(timer);
    }
  }, [showIntro, onComplete]);
  
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Brief intro screen */}
      {showIntro && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="text-center">
            <img 
              src={LogoSvg} 
              alt="LineTab Logo" 
              className="h-24 w-auto mx-auto mb-6 animate-pulse"
            />
            <h1 className="text-6xl md:text-7xl font-bold text-[#1C3960] mb-4 tracking-wider">
              LINETAB
            </h1>
            <p className="text-2xl text-[#4A90E2] opacity-90">
              Dental Waterline Excellence
            </p>
          </div>
        </div>
      )}
      
      {/* Transparent Canvas background to show underlying content */}
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        dpr={[1, 2]}
        shadows
        style={{ background: 'transparent' }}
        gl={{ alpha: true }}
      >
        <Lighting />
        
        {/* Environment for realistic reflections */}
        <Environment preset="sunset" />
        
        {/* Bubble system - always running after intro */}
        {!showIntro && <BubbleSystem />}
        
        {/* Remove controls for cleaner experience */}
      </Canvas>
    </div>
  );
} 