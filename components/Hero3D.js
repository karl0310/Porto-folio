"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Stars,
  Sphere,
  Torus,
  Icosahedron,
} from "@react-three/drei";

import { useRef } from "react";

function ObjetPrincipal() {
  const objet = useRef();

  useFrame((state) => {
    if (!objet.current) return;

    objet.current.rotation.x =
      state.clock.elapsedTime * 0.18;

    objet.current.rotation.y =
      state.clock.elapsedTime * 0.28;

    objet.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.2) * 0.12;
  });

  return (
    <group ref={objet}>

      <Icosahedron args={[1.45, 5]}>
        <meshStandardMaterial
          metalness={0.9}
          roughness={0.12}
          emissive="#071b38"
          emissiveIntensity={2}
        />
      </Icosahedron>

      <Torus
        args={[1.9, 0.018, 32, 160]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          emissive="#2684ff"
          emissiveIntensity={8}
          metalness={0.8}
        />
      </Torus>

      <Torus
        args={[2.15, 0.012, 32, 160]}
        rotation={[0, Math.PI / 3, 0]}
      >
        <meshStandardMaterial
          emissive="#ffffff"
          emissiveIntensity={5}
          metalness={0.8}
        />
      </Torus>

    </group>
  );
}

function Particules() {
  const particules = [];

  for (let i = 0; i < 80; i++) {
    const angle =
      Math.random() * Math.PI * 2;

    const distance =
      2.8 + Math.random() * 3;

    const x =
      Math.cos(angle) * distance;

    const y =
      (Math.random() - 0.5) * 4;

    const z =
      Math.sin(angle) * distance;

    particules.push(
      <Sphere
        key={i}
        args={[
          0.015 + Math.random() * 0.035,
          8,
          8,
        ]}
        position={[x, y, z]}
      >
        <meshStandardMaterial
          emissive="#2684ff"
          emissiveIntensity={
            2 + Math.random() * 5
          }
        />
      </Sphere>
    );
  }

  return (
    <group>
      {particules}
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.7} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={3}
      />

      <pointLight
        position={[-4, 2, 3]}
        intensity={15}
        distance={8}
      />

      <pointLight
        position={[4, -2, -2]}
        intensity={10}
        distance={7}
      />

      <Stars
        radius={10}
        depth={5}
        count={700}
        factor={1.5}
        saturation={0}
        fade
        speed={0.4}
      />

      <Float
        speed={1.4}
        rotationIntensity={0.15}
        floatIntensity={0.4}
      >
        <ObjetPrincipal />
      </Float>

      <Particules />

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.04}
        autoRotate
        autoRotateSpeed={0.25}
      />
    </>
  );
}

export default function Hero3D() {
  return (
    <div
      className="hero-3d"
      aria-label="Animation 3D"
    >
      <Canvas
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 6],
          fov: 42,
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
