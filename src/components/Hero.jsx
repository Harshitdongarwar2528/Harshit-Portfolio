import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────
   Animated canvas particle field
───────────────────────────────────────────── */
const ParticleCanvas = () => {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    let W, H, particles, raf;

    const rand = (min, max) => Math.random() * (max - min) + min;

    const init = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      particles = Array.from({ length: 100 }, () => ({
        x: rand(0, W),
        y: rand(0, H),
        r: rand(0.5, 2),
        dx: rand(-0.2, 0.2),
        dy: rand(-0.35, -0.08),
        alpha: rand(0.15, 0.65),
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(167,139,250,${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.y < -4) { p.y = H + 4; p.x = rand(0, W); }
        if (p.x < -4) p.x = W + 4;
        if (p.x > W + 4) p.x = -4;
      });
      raf = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", init);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

/* ─────────────────────────────────────────────
   Typewriter hook
───────────────────────────────────────────── */
const useTypewriter = (words, speed = 90, pause = 1800) => {
  const [display, setDisplay] = useState("");
  const [wIndex, setWIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wIndex];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(current.slice(0, charIndex + 1));
          if (charIndex + 1 === current.length) {
            setTimeout(() => setDeleting(true), pause);
          } else {
            setCharIndex((c) => c + 1);
          }
        } else {
          setDisplay(current.slice(0, charIndex - 1));
          if (charIndex - 1 === 0) {
            setDeleting(false);
            setWIndex((i) => (i + 1) % words.length);
            setCharIndex(0);
          } else {
            setCharIndex((c) => c - 1);
          }
        }
      },
      deleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wIndex, words, speed, pause]);

  return display;
};

/* ─────────────────────────────────────────────
   Framer variants
───────────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const ROLES = [
  "MERN Stack Developer",
  "React.js Engineer",
  "Node.js Backend Dev",
  "Full-Stack Builder",
];

const TECH_PILLS = ["React", "Node.js", "Express", "MongoDB", "REST API", "JWT Auth"];

/* ─────────────────────────────────────────────
   Hero
───────────────────────────────────────────── */
const Hero = () => {
  const role = useTypewriter(ROLES, 85, 2000);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden bg-[#050816]">

      {/* 1 ─ radial purple + indigo glows */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 18% 28%, rgba(109,40,217,0.25) 0%, transparent 68%)," +
            "radial-gradient(ellipse 45% 45% at 82% 72%, rgba(79,70,229,0.18) 0%, transparent 65%)",
          zIndex: 0,
        }}
      />

      {/* 2 ─ subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.055) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(139,92,246,0.055) 1px, transparent 1px)",
          backgroundSize: "62px 62px",
          zIndex: 0,
        }}
      />

      {/* 3 ─ animated particles */}
      <ParticleCanvas />

      {/* ─── main content ─── */}
      <div
        className="relative flex flex-col items-center justify-center w-full h-full text-center px-6"
        style={{ zIndex: 2 }}
      >
        {/* availability badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-7 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-[13px] font-medium tracking-wide"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to work · Entry-level &amp; internship roles
        </motion.div>

        <motion.div variants={container} initial="hidden" animate="show">
          {/* greeting */}
          <motion.p
            variants={item}
            className="text-gray-400 text-[16px] sm:text-[18px] mb-2 tracking-[0.22em] uppercase font-medium"
          >
            Hi there, I'm
          </motion.p>

          {/* name */}
          <motion.h1
            variants={item}
            className="text-white font-black text-[50px] sm:text-[82px] leading-none tracking-tight"
          >
            Harshit{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 35%, #7c3aed 70%, #4f46e5 100%)",
              }}
            >
              Dongarwar
            </span>
          </motion.h1>

          {/* typewriter */}
          <motion.div
            variants={item}
            className="mt-5 h-10 flex items-center justify-center"
          >
            <span className="text-[20px] sm:text-[26px] font-semibold text-violet-300 font-mono">
              {role}
              <span className="inline-block w-[2px] h-[1em] bg-violet-400 ml-1 align-middle animate-pulse" />
            </span>
          </motion.div>

          {/* subtitle */}
          <motion.p
            variants={item}
            className="mt-5 text-gray-400 text-[15px] sm:text-[17px] max-w-[520px] mx-auto leading-relaxed"
          >
            Building production-ready web apps with{" "}
            {["React", "Node.js", "Express", "MongoDB"].map((t, i, arr) => (
              <span key={t}>
                <span className="text-gray-200 font-medium">{t}</span>
                {i < arr.length - 1 ? ", " : "."}
              </span>
            ))}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.06, boxShadow: "0 0 32px rgba(139,92,246,0.55)" }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-3.5 rounded-xl font-semibold text-white text-[15px] transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
            >
              View Projects
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-3.5 rounded-xl font-semibold text-purple-300 text-[15px] border border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300"
            >
              Hire Me
            </motion.a>

            <motion.a
              href="/Harshit-Dongarwar-Resume.pdf"
              download
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="px-8 py-3.5 rounded-xl font-semibold text-gray-300 text-[15px] border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300"
            >
              Resume ↓
            </motion.a>
          </motion.div>

          {/* tech pills */}
          <motion.div
            variants={item}
            className="mt-7 flex flex-wrap gap-2 justify-center"
          >
            {TECH_PILLS.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-[12px] rounded-full border border-white/10 text-gray-400 bg-white/5 hover:border-purple-500/40 hover:text-purple-300 transition-colors duration-200 cursor-default"
              >
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <div className="absolute bottom-10 w-full flex justify-center z-10">
        <a href="#about" aria-label="Scroll to about section">
          <div className="w-[32px] h-[56px] rounded-3xl border-2 border-white/20 flex justify-center items-start p-2 hover:border-purple-500/50 transition-colors duration-300">
            <motion.div
              animate={{ y: [0, 18, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, repeatType: "loop" }}
              className="w-2.5 h-2.5 rounded-full bg-purple-400"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;