"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Sphere,
  TorusKnot,
} from "@react-three/drei";

import { useRef } from "react";

function Scene() {
  const objet = useRef();

  useFrame((state) => {
    if (!objet.current) return;

    objet.current.rotation.x =
      state.clock.elapsedTime * 0.18;

    objet.current.rotation.y =
      state.clock.elapsedTime * 0.28;
  });

  return (
    <>
      {/* Lumière générale */}
      <ambientLight intensity={1.2} />

      {/* Lumière principale */}
      <directionalLight
        position={[4, 4, 5]}
        intensity={2.5}
      />

      {/* Lumière bleue */}
      <pointLight
        position={[-4, 1, 2]}
        intensity={12}
        distance={8}
      />

      {/* Objet 3D principal */}
      <Float
        speed={1.5}
        rotationIntensity={0.35}
        floatIntensity={0.7}
      >
        <TorusKnot
          ref={objet}
          args={[1.05, 0.28, 128, 32]}
          scale={1.35}
        >
          <meshStandardMaterial
            metalness={0.85}
            roughness={0.18}
            emissive="#071a36"
            emissiveIntensity={1.8}
          />
        </TorusKnot>
      </Float>

      {/* Petites particules lumineuses */}

      <Sphere
        args={[0.12, 32, 32]}
        position={[-1.9, 1.1, 0]}
      >
        <meshStandardMaterial
          emissive="#1677ff"
          emissiveIntensity={8}
        />
      </Sphere>

      <Sphere
        args={[0.08, 32, 32]}
        position={[1.8, -1.2, 0]}
      >
        <meshStandardMaterial
          emissive="#ffffff"
          emissiveIntensity={5}
        />
      </Sphere>

      {/* Rotation automatique */}
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
}

export default function Hero3D() {
  return (
    <div
      className="hero-3d"
      aria-label="Animation 3D décorative"
    >
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 42,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
