import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const TechCard = ({ tech, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.05, 0.5)}
      className="relative flex flex-col items-center gap-3 cursor-default"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute -top-10 px-3 py-1 rounded-lg text-[12px] font-medium text-white bg-[#1a1040] border border-purple-500/30 whitespace-nowrap z-10 pointer-events-none"
          >
            {tech.name}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-5px] w-2.5 h-2.5 bg-[#1a1040] border-r border-b border-purple-500/30 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* card */}
      <motion.div
        whileHover={{ scale: 1.12, y: -6 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="relative w-[100px] h-[100px] rounded-2xl flex items-center justify-center overflow-hidden"
        style={{
          background: "linear-gradient(145deg, #0d0d1f, #141430)",
          border: hovered ? "1px solid rgba(139,92,246,0.5)" : "1px solid rgba(255,255,255,0.06)",
          boxShadow: hovered ? "0 0 20px rgba(139,92,246,0.3), inset 0 0 20px rgba(139,92,246,0.05)" : "none",
          transition: "border 0.25s, box-shadow 0.25s",
        }}
      >
        {/* glow behind icon */}
        {hovered && (
          <div
            className="absolute inset-0 opacity-20"
            style={{ background: "radial-gradient(circle at center, #7c3aed, transparent 65%)" }}
          />
        )}
        <img
          src={tech.icon}
          alt={tech.name}
          className="w-14 h-14 object-contain relative z-10"
          style={{ filter: hovered ? "drop-shadow(0 0 8px rgba(167,139,250,0.5))" : "none", transition: "filter 0.25s" }}
        />
      </motion.div>

      {/* label */}
      <span
        className="text-[12px] font-medium transition-colors duration-200 text-center leading-tight max-w-[100px]"
        style={{ color: hovered ? "#a78bfa" : "#6b7280" }}
      >
        {tech.name}
      </span>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-12"
      >
        <p className={styles.sectionSubText}>My toolkit</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <motion.div
        className="flex flex-wrap justify-center gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ show: { transition: { staggerChildren: 0.06 } } }}
      >
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} tech={tech} index={index} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");