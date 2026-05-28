'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Create a realistic gear using ExtrudeGeometry
function createGearGeometry(numTeeth: number, outerRadius: number, innerRadius: number, holeRadius: number) {
  const shape = new THREE.Shape();
  const step = (Math.PI * 2) / numTeeth;
  
  for (let i = 0; i < numTeeth; i++) {
    const angle = i * step;
    const nextAngle = (i + 1) * step;
    
    // Bottom of tooth
    shape.lineTo(Math.cos(angle) * innerRadius, Math.sin(angle) * innerRadius);
    // Tip of tooth (ascending)
    shape.lineTo(Math.cos(angle + step * 0.2) * outerRadius, Math.sin(angle + step * 0.2) * outerRadius);
    // Tip of tooth (flat)
    shape.lineTo(Math.cos(angle + step * 0.8) * outerRadius, Math.sin(angle + step * 0.8) * outerRadius);
    // Bottom of tooth (descending)
    shape.lineTo(Math.cos(nextAngle) * innerRadius, Math.sin(nextAngle) * innerRadius);
  }
  
  // Center hole
  const hole = new THREE.Path();
  hole.absarc(0, 0, holeRadius, 0, Math.PI * 2, false);
  shape.holes.push(hole);

  const extrudeSettings = {
    depth: 0.5,
    bevelEnabled: true,
    bevelSegments: 2,
    steps: 1,
    bevelSize: 0.05,
    bevelThickness: 0.05,
  };

  return new THREE.ExtrudeGeometry(shape, extrudeSettings);
}

function MechanicalGear({ position, rotation, scale, color = "#1D4ED8", speed = 1 }: any) {
  const meshRef = useRef<THREE.Group>(null);
  
  const geometry = useMemo(() => createGearGeometry(16, 2, 1.6, 0.5), []);
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: color,
    wireframe: true,
    transparent: true,
    opacity: 0.25,
    side: THREE.DoubleSide
  }), [color]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.2 * speed;
      meshRef.current.rotation.x += delta * 0.05 * speed;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1.5}>
      <group ref={meshRef} position={position} rotation={rotation} scale={scale}>
        {/* Main gear */}
        <mesh geometry={geometry} material={material} position={[0, 0, -0.25]} />
        {/* Inner shaft bearing */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.7, 0.7, 0.8, 16]} />
          <primitive object={material} attach="material" />
        </mesh>
      </group>
    </Float>
  );
}

function MillingSpindle({ position, rotation, scale, color = "#0369A1" }: any) {
  const groupRef = useRef<THREE.Group>(null);
  
  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: color,
    wireframe: true,
    transparent: true,
    opacity: 0.25,
    side: THREE.DoubleSide
  }), [color]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Spindle rotates very fast along its Y axis
      groupRef.current.rotation.y += delta * 1.5;
      // Very slow drift for the float effect
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      groupRef.current.rotation.x = Math.PI / 4 + Math.cos(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={1}>
      <group position={position} scale={scale}>
        <group ref={groupRef} rotation={rotation}>
          {/* Main Body */}
          <mesh position={[0, 2, 0]}>
            <cylinderGeometry args={[1.5, 1.5, 3, 24]} />
            <primitive object={material} attach="material" />
          </mesh>
          
          {/* Tapered section */}
          <mesh position={[0, 0, 0]}>
            <cylinderGeometry args={[1.5, 0.8, 1, 24]} />
            <primitive object={material} attach="material" />
          </mesh>
          
          {/* Tool holder (Collet) */}
          <mesh position={[0, -0.7, 0]}>
            <cylinderGeometry args={[0.8, 0.8, 0.4, 16]} />
            <primitive object={material} attach="material" />
          </mesh>
          
          <mesh position={[0, -1.1, 0]}>
            <cylinderGeometry args={[0.8, 0.3, 0.4, 16]} />
            <primitive object={material} attach="material" />
          </mesh>
          
          {/* Milling tool (End Mill) */}
          <mesh position={[0, -1.8, 0]}>
            <cylinderGeometry args={[0.15, 0.15, 1, 8]} />
            <primitive object={material} attach="material" />
          </mesh>
        </group>
      </group>
    </Float>
  );
}

export default function FloatingCAD() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden mix-blend-multiply">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        
        {/* Background Mechanical Parts - Positioned around the extreme edges */}
        <MechanicalGear position={[-12, 4, -4]} scale={1.2} rotation={[0.5, 0.2, 0]} color="#1D4ED8" speed={1} />
        <MechanicalGear position={[13, 4, -8]} scale={0.8} rotation={[-0.4, 0.5, 1]} color="#0369A1" speed={-1.5} />
        
        <MillingSpindle position={[12, -3, -2]} scale={1} rotation={[Math.PI / 4, 0, 0]} color="#0369A1" />
        
        {/* Complex Planetary Gear Assembly abstraction */}
        <group position={[-11.5, -4, -6]} scale={1.5} rotation={[0.5, 0.8, 0]}>
           <MechanicalGear position={[0, 0, 0]} scale={0.8} color="#1D4ED8" speed={0.5} />
           <MechanicalGear position={[2.5, 0, 0]} scale={0.4} color="#0369A1" speed={-1} />
           <MechanicalGear position={[-1.25, 2.16, 0]} scale={0.4} color="#0369A1" speed={-1} />
           <MechanicalGear position={[-1.25, -2.16, 0]} scale={0.4} color="#0369A1" speed={-1} />
        </group>
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
