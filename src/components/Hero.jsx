import { motion } from "framer-motion";
import bg from "../assets/herobg.png"; // adjust path

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={bg}
          alt=""
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* HERO CONTENT (EMPTY / MINIMAL ON PURPOSE) */}
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {/* Hero text already handled in Introduction section */}
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-2 border-white/30 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white/60 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
