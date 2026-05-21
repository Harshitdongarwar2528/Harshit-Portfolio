import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

/* ── project card ── */
const ProjectCard = ({ name, description, tags, image, source_code_link, live_demo_link, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.12, 0.75)}
    whileHover={{ y: -8 }}
    transition={{ type: "spring", stiffness: 200, damping: 16 }}
    className="relative group rounded-2xl overflow-hidden"
    style={{
      background: "linear-gradient(145deg, #0d0f1e, #111428)",
      border: "1px solid rgba(255,255,255,0.07)",
    }}
  >
    {/* gradient border on hover */}
    <div
      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
      style={{
        background: "linear-gradient(135deg, rgba(124,58,237,0.25), rgba(79,70,229,0.1), transparent)",
        zIndex: 0,
      }}
    />

    {/* image */}
    <div className="relative w-full h-[240px] md:h-[300px] overflow-hidden">
      <motion.img
        src={image}
        alt={name}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.07 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f1e]/90 via-transparent to-transparent opacity-60" />

      {/* action icons */}
      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
        {live_demo_link && (
          <motion.button
            title="Live Demo"
            onClick={() => window.open(live_demo_link, "_blank")}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.93 }}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[15px]"
            style={{ background: "rgba(124,58,237,0.8)", backdropFilter: "blur(8px)" }}
          >
            <FaExternalLinkAlt />
          </motion.button>
        )}
        {source_code_link && (
          <motion.button
            title="Source Code"
            onClick={() => window.open(source_code_link, "_blank")}
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.93 }}
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(8px)", border: "1px solid rgba(255,255,255,0.15)" }}
          >
            <img src={github} alt="GitHub" className="w-5 h-5 object-contain" />
          </motion.button>
        )}
      </div>
    </div>

    {/* content */}
    <div className="relative z-10 p-6">
      <h3 className="text-white text-[22px] font-bold mb-2">{name}</h3>
      <p className="text-gray-400 text-[14px] leading-relaxed mb-5">{description}</p>

      {/* tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag.name}
            className={`text-[12px] px-2.5 py-1 rounded-full border border-white/10 bg-white/5 ${tag.color}`}
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

/* ── works section ── */
const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-14"
      >
        <p className={styles.sectionSubText}>What I've built</p>
        <h2 className={`${styles.sectionHeadText}`}>Featured Projects.</h2>
      </motion.div>

      {/* project grid – 2 columns on md+ */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "projects");