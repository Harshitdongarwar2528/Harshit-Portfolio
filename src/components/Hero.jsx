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
          aria-hidden="true"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4">
        {/* ✅ Added name + title so the hero section isn't empty */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-4"
        >
          <h1 className="text-white font-black text-[40px] sm:text-[60px] leading-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-500">
              Harshit
            </span>
          </h1>
          <p className="text-secondary text-[18px] sm:text-[22px] max-w-xl leading-relaxed">
            MERN Stack Developer — building full-stack web apps with React,
            Node.js, Express &amp; MongoDB.
          </p>

          {/* ✅ CTA button */}
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-8 py-3 bg-gradient-to-r from-[#5b21b6] to-[#7c3aed] text-white font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            View My Work
          </motion.a>
        </motion.div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about" aria-label="Scroll to about section">
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