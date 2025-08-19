import { useRef, useEffect, useState } from 'react';
import LineTabLogo from '../assets/linetab-logo.svg';

interface BubbleData {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  velocity: { x: number; y: number };
  floatOffset: number;
  opacity: number;
}

function BubbleSystem({ animationPhase, startTime, outroStartTime }: { 
  animationPhase: 'intro' | 'display' | 'outro';
  startTime: number;
  outroStartTime: number;
}) {
  const [bubbles, setBubbles] = useState<BubbleData[]>([]);
  const animationRef = useRef<number | undefined>(undefined);
  const bubbleCount = 80;

  // Initialize bubbles
  useEffect(() => {
    if (typeof window === 'undefined') return; // Guard against SSR
    
    // Predefined teal colors with specific opacities
    const bubbleColors = [
      'rgba(139, 207, 207, 0.6)', // Light teal with 60% opacity
      'rgba(102, 194, 194, 0.5)', // Medium teal with 50% opacity
      'rgba(79, 172, 172, 0.7)',  // Darker teal with 70% opacity
      'rgba(156, 220, 220, 0.4)', // Very light teal with 40% opacity
      'rgba(115, 185, 185, 0.6)', // Mid teal with 60% opacity
    ];

    const initialBubbles: BubbleData[] = [];
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    for (let i = 0; i < bubbleCount; i++) {
      // Much larger bubble sizes with wide variance (20-200px)
      const sizeRandom = Math.random();
      let size;
      if (sizeRandom < 0.2) {
        // 20% chance of small bubbles (20-50px)
        size = Math.random() * 30 + 20;
      } else if (sizeRandom < 0.4) {
        // 20% chance of medium bubbles (50-100px)
        size = Math.random() * 50 + 50;
      } else if (sizeRandom < 0.7) {
        // 30% chance of large bubbles (100-150px)
        size = Math.random() * 50 + 100;
      } else {
        // 30% chance of extra large bubbles (150-200px)
        size = Math.random() * 50 + 150;
      }
      // Real bubble physics - smaller bubbles rise faster
      const bubbleSpeed = (200 - size) / 80 + 0.5; // Smaller = faster, adjusted for new size range (20-200px)
      
      const bubbleColor = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
      
      initialBubbles.push({
        id: i,
        x: Math.random() * screenWidth, // Random horizontal position
        y: screenHeight + Math.random() * 300, // Start below screen with staggered timing
        size,
        color: bubbleColor,
        velocity: {
          x: (Math.random() - 0.5) * 0.5, // Gentle horizontal drift
          y: -bubbleSpeed, // Float upward - smaller bubbles faster
        },
        floatOffset: Math.random() * Math.PI * 2,
        opacity: 1, // Opacity is now handled by the rgba color
      });
    }
    
    setBubbles(initialBubbles);
    console.log('Bubbles initialized:', initialBubbles.length, 'Screen:', screenWidth, 'x', screenHeight);
  }, []);

  // Animation loop
  useEffect(() => {
    if (typeof window === 'undefined') return; // Guard against SSR
    
    const animate = () => {
      const time = Date.now() * 0.001;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      setBubbles(prevBubbles => 
        prevBubbles.map(bubble => {
          // Realistic bubble movement with wobble
          const wobble = Math.sin(time * 2 + bubble.floatOffset) * 0.8;
          let newX = bubble.x + bubble.velocity.x + wobble;
          let newY = bubble.y + bubble.velocity.y;
          
          // Reset bubble when it exits the top (like real bubbles)
          if (newY < -bubble.size - 100) {
            newY = screenHeight + bubble.size + Math.random() * 200;
            newX = Math.random() * screenWidth;
          }
          
          // Keep bubbles within horizontal bounds
          if (newX > screenWidth) newX = 0;
          if (newX < -bubble.size) newX = screenWidth;
          
          // Calculate phase-based opacity
          let targetOpacity = bubble.opacity;
          
          // Temporarily disable fade effects for debugging
          // if (animationPhase === 'intro') {
          //   const fadeProgress = Math.min(1, (time - startTime) / 3);
          //   targetOpacity *= fadeProgress;
          // } else if (animationPhase === 'outro') {
          //   const fadeProgress = Math.max(0, 1 - (time - outroStartTime) / 3);
          //   targetOpacity *= fadeProgress;
          // }
          
          return {
            ...bubble,
            x: newX,
            y: newY,
            opacity: targetOpacity,
          };
        })
      );
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animationPhase, startTime, outroStartTime]);

  console.log('BubbleSystem render - bubbles count:', bubbles.length);
  console.log('First bubble:', bubbles[0]);
  console.log('Sample bubble styles:', bubbles[0] ? {
    left: bubbles[0].x,
    top: bubbles[0].y,
    width: bubbles[0].size,
    height: bubbles[0].size,
    backgroundColor: bubbles[0].color,
    opacity: bubbles[0].opacity,
  } : 'No bubbles');
  
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">
      {/* Dynamic bubbles */}
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute rounded-full"
          style={{
            left: bubble.x,
            top: bubble.y,
            width: bubble.size,
            height: bubble.size,
            backgroundColor: bubble.color,
            opacity: bubble.opacity,
            zIndex: 25,
          }}
        />
      ))}
    </div>
  );
}

interface LoadingAnimationProps {
  onComplete?: () => void;
}

export default function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [animationPhase, setAnimationPhase] = useState<'intro' | 'display' | 'outro'>('intro');
  const [startTime, setStartTime] = useState(0);
  const [outroStartTime, setOutroStartTime] = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);
  const [logoFadingOut, setLogoFadingOut] = useState(false);


  useEffect(() => {
    console.log('LoadingAnimation mounted'); 
    const currentTime = Date.now() * 0.001;
    setStartTime(currentTime);
    
    // Show logo after 1.5 seconds
    const showLogoTimer = setTimeout(() => {
      console.log('Showing logo'); 
      setLogoVisible(true);
      setAnimationPhase('display');
    }, 1500);
    
    // Start outro after 5 seconds
    const startOutroTimer = setTimeout(() => {
      console.log('Starting outro phase'); 
      setAnimationPhase('outro');
      setOutroStartTime(Date.now() * 0.001);
      setLogoFadingOut(true);
    }, 5000);

    // Complete animation after 8 seconds
    const completeTimer = setTimeout(() => {
      console.log('Animation completing'); 
      if (onComplete) {
        onComplete();
      }
    }, 8000);

    return () => {
      clearTimeout(showLogoTimer);
      clearTimeout(startOutroTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Background gradient from very light blue to white */}
      <div 
        className="absolute inset-0 z-10 bg-gradient-to-b from-blue-50 to-white"
      />
      
      {/* 2D Bubble System */}
      <BubbleSystem 
        animationPhase={animationPhase}
        startTime={startTime}
        outroStartTime={outroStartTime}
      />
      
      {/* Logo Overlay */}
      <div 
        className={`absolute left-1/2 z-30 text-center transition-all duration-2000 ease-out ${
          logoVisible && !logoFadingOut
            ? 'opacity-100 top-1/2 transform -translate-x-1/2 -translate-y-1/2' 
            : logoFadingOut
            ? 'opacity-0 -top-1/5 transform -translate-x-1/2 -translate-y-1/2 scale-75'
            : 'opacity-0 top-full transform -translate-x-1/2 -translate-y-1/2'
        }`}
        style={{
          transitionDuration: '2s',
          transitionTimingFunction: logoFadingOut ? 'ease-in-out' : 'ease-out'
        }}
      >
        <div className="flex items-center justify-center space-x-4 mb-4">
          <img
            src={LineTabLogo}
            alt="LineTab Logo"
            className="h-16 w-16"
          />
          <h1 
            className="text-6xl font-bold text-blue-900"
            style={{
              letterSpacing: '0.1em',
            }}
          >
            LineTab
          </h1>
        </div>
        <p 
          className="text-xl mt-2 tracking-widest uppercase text-blue-900"
          style={{ 
            letterSpacing: '0.2em',
          }}
        >
          Innovation • Technology • Solutions
        </p>
      </div>
    </div>
  );
}