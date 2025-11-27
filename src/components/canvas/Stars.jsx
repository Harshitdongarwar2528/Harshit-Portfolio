import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

import { WEBGL } from "../../utils/webgl";  // ⭐ ADD THIS

const Stars = ({ starCount }) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(starCount), { radius: 1.2 })
  );

  useFrame((_, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const [starCount, setStarCount] = useState(5000);

  const [webglSupported, setWebglSupported] = useState(true);

  // ⭐ WebGL safe test (prevents blank screen on mobile)
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") ||
        canvas.getContext("experimental-webgl");

      setWebglSupported(!!gl);
    } catch {
      setWebglSupported(false);
    }
  }, []);

  // ❗ If WebGL unavailable → hide stars (avoid crashes)
  if (!webglSupported) return null;

  // ⭐ Dynamic star count for mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    const updateCount = (e) => {
      setStarCount(e.matches ? 800 : 5000);
    };

    updateCount(mediaQuery);
    mediaQuery.addEventListener("change", updateCount);

    return () => mediaQuery.removeEventListener("change", updateCount);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-[100svh] z-[-1] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]}
        gl={{ antialias: false }}
      >
        <Suspense fallback={null}>
          <Stars starCount={starCount} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
