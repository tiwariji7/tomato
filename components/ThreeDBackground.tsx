
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedShapes = () => {
  const sphereRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    sphereRef.current.position.y = Math.sin(t) * 0.2;
    sphereRef.current.rotation.x = t * 0.2;
    sphereRef.current.rotation.z = t * 0.3;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#ff4d4d" intensity={2} />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={sphereRef} args={[1, 64, 64]} position={[2, 0, -2]}>
          <MeshDistortMaterial
            color="#ff4d4d"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[-3, 1, -3]}>
          <torusKnotGeometry args={[0.5, 0.2, 128, 32]} />
          <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} />
        </mesh>
      </Float>

      <Float speed={3} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[0, -2, -4]}>
          <octahedronGeometry args={[0.8]} />
          <meshStandardMaterial color="#ff4d4d" wireframe />
        </mesh>
      </Float>
    </>
  );
};

export const ThreeDBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0a0a0a]">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <AnimatedShapes />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 pointer-events-none" />
    </div>
  );
};
