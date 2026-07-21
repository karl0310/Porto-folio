import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

/**
 * Simple decorative 3D scene:
 * - Floating torus + subtle particles
 * Replace with your own GLTF or creative model.
 */

function Torus() {
  return (
    <Float speed={1} rotationIntensity={0.6} floatIntensity={0.6}>
      <mesh rotation={[0.6, 0.3, 0]} position={[0, 0, 0]}>
        <torusGeometry args={[1, 0.35, 48, 128]} />
        <meshStandardMaterial
          color="#00e6ff"
          metalness={0.6}
          roughness={0.2}
          emissive={"#003f4d"}
          emissiveIntensity={0.8}
        />
      </mesh>
    </Float>
  );
}

const ThreeScene: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }} style={{ height: "100%", width: "100%" }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 4, 3]} intensity={0.8} />
      <Suspense fallback={null}>
        <Torus />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </Canvas>
  );
};

export default ThreeScene;
