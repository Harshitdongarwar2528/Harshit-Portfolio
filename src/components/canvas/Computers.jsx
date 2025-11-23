import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.3} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1.5}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1.5} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 1.5 : 1.5}
        position={isMobile ? [0, -3.8, -2.2] : [0, -3.25, -2.6]}
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

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  // Force Safari/iPhone layout update
  useEffect(() => {
    setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 300);
  }, []);

  return (
    <div className="relative w-full h-full">

      {/* Canvas */}
      <Canvas
        style={{
            touchAction: "none",
  pointerEvents: "auto", // prevents scroll hijack
        }}
        camera={{ position: [20, 3, 5], fov: 25 }}
        shadows
        dpr={[1, 2]}
        gl={{ preserveDrawingBuffer: true }}
        frameloop="demand"
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

      {/* INTERACTION TEXT (responsive + animated) */}
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
