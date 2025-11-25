import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = ({ starCount }) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(starCount), { radius: 1.2 })
  );

  useFrame((state, delta) => {
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
  const [starCount, setStarCount] = useState(5000); // default PC value

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    // Set star count based on device
    const updateCount = (e) => {
      setStarCount(e.matches ? 1500 : 5000); // mobile = 1500, PC = 5000
    };

    updateCount(mediaQuery);
    mediaQuery.addEventListener("change", updateCount);

    return () => mediaQuery.removeEventListener("change", updateCount);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-[-1]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 1.5]} // optimized for mobile
        gl={{ antialias: false }} // smoother on low-end phones
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
