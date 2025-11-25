import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* Your improved lights but balanced correctly */}
      <hemisphereLight intensity={0.25} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.3}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1.2} />

      {/* FIXED SCALE + POSITION */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}          // sir’s correct scaling
        position={isMobile ? [0, -3.4, -2.3] : [0, -3.25, -1.8]} 
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handler = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Safari / iPhone fix
  useEffect(() => {
    setTimeout(() => window.dispatchEvent(new Event("resize")), 250);
  }, []);

  return (
    <div className="relative w-full h-full">

      <Canvas
        style={{
          touchAction: "none",
          pointerEvents: "auto",
        }}
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>

        <Preload all />
      </Canvas>

      {/* YOUR EXTRA UI TEXT */}
      <div
        className="
          absolute bottom-2 left-1/2 -translate-x-1/2
          flex flex-col items-center
          opacity-80 pointer-events-none
          animate-fadeIn
        "
      >
        <div className="animate-bounceSlow text-white text-[18px] sm:text-[22px] mb-1">
          👆
        </div>
        <p
          className="
            text-white text-[11px]
            sm:text-[13px] md:text-[14px] lg:text-[15px]
            tracking-wide text-center px-3
          "
        >
          Click & drag to move the 3D model
        </p>
      </div>
    </div>
  );
};

export default ComputersCanvas;
