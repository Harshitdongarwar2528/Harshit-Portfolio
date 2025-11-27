// Ball.jsx (FINAL STABLE VERSION — No crashes + same old style)

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { WEBGL } from "../../utils/webgl";

// 🎾 Single floating ball
const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={1.5}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[0, 0, 0.1]} />

      <mesh castShadow receiveShadow scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />

        {/* Black background like your old perfect style */}
        <meshStandardMaterial
          color="#0d0d0d"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />

        <Decal
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// 🎾 Canvas that renders ONE ball (same style as old)
const BallCanvas = ({ icon }) => {
  const [allowRender, setAllowRender] = useState(true);

  useEffect(() => {
    // Disable WebGL balls on mobile → use fallback icons
    if (window.innerWidth < 768) {
      setAllowRender(false);
    }
  }, []);

  if (!WEBGL.isWebGLAvailable()) return null;

  // MOBILE FALLBACK (NO CRASHES)
  if (!allowRender) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-transparent">
        <img src={icon} alt="tech" className="w-16 h-16 object-contain" />
      </div>
    );
  }

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.2]}
      gl={{ antialias: false, alpha: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
