"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  OrbitControls,
  Sparkles,
  useGLTF,
  ContactShadows,
} from "@react-three/drei";

import { Suspense, useRef } from "react";


// ============================================================
// MODÈLE 3D DU DÉVELOPPEUR
// ============================================================

function DeveloperDesk() {
  const group = useRef();

  const { scene } = useGLTF("/3d/developer-desk.glb");

  useFrame((state) => {
    if (!group.current) return;

    // Petit mouvement de respiration / flottement
    group.current.position.y =
      Math.sin(state.clock.elapsedTime * 1.2) * 0.035;

    // Rotation très légère
    group.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.25) * 0.025;
  });

  return (
    <group
      ref={group}
      position={[0, -1.55, 0]}
      scale={2.25}
    >
      <primitive object={scene} />
    </group>
  );
}


// ============================================================
// SCÈNE 3D
// ============================================================

function Scene() {
  const sceneGroup = useRef();

  useFrame((state) => {
    if (!sceneGroup.current) return;

    // Mouvement subtil de toute la scène
    sceneGroup.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.18) * 0.025;

    // Effet léger de parallaxe suivant la souris
    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    sceneGroup.current.rotation.x =
      mouseY * 0.015;

    sceneGroup.current.rotation.z =
      mouseX * -0.015;
  });

  return (
    <group ref={sceneGroup}>

      {/* ---------------------------------------------------- */}
      {/* ÉCLAIRAGE PRINCIPAL                                  */}
      {/* ---------------------------------------------------- */}

      <ambientLight intensity={1.2} />

      <directionalLight
        position={[4, 6, 5]}
        intensity={3}
      />

      <pointLight
        position={[-3, 2, 3]}
        intensity={12}
        distance={8}
      />

      <pointLight
        position={[4, 1, -2]}
        intensity={8}
        distance={7}
      />


      {/* ---------------------------------------------------- */}
      {/* ENVIRONNEMENT                                       */}
      {/* ---------------------------------------------------- */}

      <Environment preset="city" />


      {/* ---------------------------------------------------- */}
      {/* PERSONNAGE + BUREAU                                 */}
      {/* ---------------------------------------------------- */}

      <Float
        speed={1.1}
        rotationIntensity={0.08}
        floatIntensity={0.12}
      >
        <Suspense fallback={null}>
          <DeveloperDesk />
        </Suspense>
      </Float>


      {/* ---------------------------------------------------- */}
      {/* PARTICULES                                          */}
      {/* ---------------------------------------------------- */}

      <Sparkles
        count={90}
        scale={[6, 5, 5]}
        size={1.8}
        speed={0.25}
      />


      {/* ---------------------------------------------------- */}
      {/* OMBRE AU SOL                                        */}
      {/* ---------------------------------------------------- */}

      <ContactShadows
        position={[0, -1.7, 0]}
        opacity={0.45}
        scale={7}
        blur={2.8}
        far={4}
      />

    </group>
  );
}


// ============================================================
// HERO 3D
// ============================================================

export default function Hero3D() {
  return (
    <div
      className="hero-3d"
      style={{
        width: "100%",
        height: "100%",
        minHeight: "600px",
        position: "relative",
      }}
    >

      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{
          position: [0, 0.3, 7],
          fov: 38,
        }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >

        <Suspense fallback={null}>

          <Scene />

        </Suspense>


        {/* -------------------------------------------------- */}
        {/* CONTRÔLES                                         */}
        {/* -------------------------------------------------- */}

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.05}
          minPolarAngle={Math.PI / 2.35}
          maxPolarAngle={Math.PI / 1.7}
          rotateSpeed={0.35}
        />

      </Canvas>


      {/* ---------------------------------------------------- */}
      {/* LUEUR D'ARRIÈRE-PLAN                                */}
      {/* ---------------------------------------------------- */}

      <div
        style={{
          position: "absolute",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(30,120,255,0.16) 0%, rgba(30,120,255,0.05) 40%, transparent 72%)",
          filter: "blur(25px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

    </div>
  );
}


// ============================================================
// PRÉCHARGEMENT DU MODÈLE
// ============================================================

useGLTF.preload("/3d/developer-desk.glb");
