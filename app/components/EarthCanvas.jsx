import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import Earth from '@/public/Earth';

function AnimatedEarth() {
    const earthRef = useRef();
  
    useFrame(() => {
      if (earthRef.current) {
        earthRef.current.rotation.x += 0.0025;
        earthRef.current.rotation.y += 0.0025;
      }
    });
  
    return <Earth ref={earthRef} />;
  }
  
  
  export default function EarthCanvas() {
    return (
      <Canvas>
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedEarth />
      </Canvas>
    );
  }