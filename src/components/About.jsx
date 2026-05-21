import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profile from "../assets/profilee.png";

/* ── stat card ── */
const Stat = ({ value, label }) => (
  <div className="flex flex-col items-center gap-1">
    <span className="text-white text-[28px] font-black leading-none">{value}</span>
    <span className="text-gray-400 text-[12px] text-center leading-tight">{label}</span>
  </div>
);

/* ── skill bar ── */
const SkillBar = ({ name, pct, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="flex flex-col gap-1.5"
  >
    <div className="flex justify-between text-[13px]">
      <span className="text-gray-300 font-medium">{name}</span>
      <span className="text-purple-400">{pct}%</span>
    </div>
    <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${pct}%` }}
        transition={{ duration: 0.9, delay: delay + 0.15, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full rounded-full"
        style={{ background: "linear-gradient(90deg, #7c3aed, #4f46e5)" }}
      />
    </div>
  </motion.div>
);

const SKILLS = [
  { name: "React.js", pct: 88 },
  { name: "Node.js / Express", pct: 82 },
  { name: "MongoDB", pct: 78 },
  { name: "REST API / JWT", pct: 85 },
  { name: "HTML / CSS / Tailwind", pct: 90 },
];

/* ── service card ── */
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[230px] w-full" tiltMaxAngleX={12} tiltMaxAngleY={12}>
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="w-full p-[1px] rounded-[20px]"
      style={{
        background: "linear-gradient(135deg, rgba(124,58,237,0.4), rgba(79,70,229,0.15), rgba(255,255,255,0.05))",
      }}
    >
      <div className="bg-[#080c1a] rounded-[20px] py-7 px-6 min-h-[240px] flex justify-center items-center flex-col gap-4 hover:bg-[#0d1228] transition-colors duration-300">
        <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
          <img src={icon} alt={title} className="w-9 h-9 object-contain" />
        </div>
        <h3 className="text-white text-[16px] font-bold text-center leading-snug">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* ── section header ── */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mb-12"
      >
        <p className={styles.sectionSubText}>Who I am</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      {/* ── main two-column layout ── */}
      <div className="flex flex-col lg:flex-row gap-14 items-start">

        {/* LEFT column */}
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 0.9)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="flex-1 flex flex-col gap-8"
        >
          {/* bio */}
          <p className="text-gray-400 text-[16px] leading-[1.85]">
            I'm{" "}
            <span className="text-white font-semibold">Harshit Dongarwar</span>, a
            MERN stack developer with hands-on experience building full-stack web
            applications. I've worked on projects involving user authentication, REST API
            development, database design, and frontend integration using React.
            <br /><br />
            I'm passionate about writing clean, maintainable code and delivering
            real-world solutions. Currently seeking an entry-level software developer role
            where I can contribute and grow.
          </p>

          {/* contact row */}
          <div className="flex flex-col gap-2 text-[15px]">
            <a
              href="mailto:harshitdongarwar2003@gmail.com"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-300 transition-colors duration-200 group"
            >
              <span className="text-purple-400 font-semibold group-hover:text-purple-300">✉</span>
              harshitdongarwar2003@gmail.com
            </a>
            <a
              href="tel:+917038798690"
              className="flex items-center gap-2 text-gray-400 hover:text-purple-300 transition-colors duration-200 group"
            >
              <span className="text-purple-400 font-semibold group-hover:text-purple-300">📞</span>
              +91 7038798690
            </a>
          </div>

          {/* resume button */}
          <motion.a
            href="/Harshit-Dongarwar-Resume.pdf"
            download
            whileHover={{ scale: 1.05, boxShadow: "0 0 24px rgba(139,92,246,0.45)" }}
            whileTap={{ scale: 0.96 }}
            className="self-start mt-1 px-7 py-3 rounded-xl font-semibold text-white text-[15px] transition-all duration-300"
            style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
          >
            Download Resume ↓
          </motion.a>

          {/* stats row */}
          <div className="flex gap-8 mt-2 flex-wrap">
            {[
              { value: "5+", label: "Projects built" },
              { value: "2+", label: "Years learning" },
              { value: "MERN", label: "Stack Expertise" },
            ].map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </motion.div>

        {/* RIGHT column – photo + skill bars */}
        <div className="flex-1 flex flex-col gap-10 items-end lg:items-start">

          {/* profile image */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 110, damping: 12, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* glow ring */}
            <div
              className="absolute inset-0 rounded-full blur-xl opacity-40 scale-110"
              style={{ background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
            />
            <motion.img
              src={profile}
              alt="Harshit Dongarwar"
              className="relative w-56 h-56 lg:w-72 lg:h-72 rounded-full object-cover border-2 border-purple-500/40"
              whileHover={{ scale: 1.06 }}
              transition={{ type: "spring", stiffness: 200, damping: 12 }}
            />
          </motion.div>

          {/* skill bars */}
          <div className="w-full flex flex-col gap-4">
            {SKILLS.map((s, i) => (
              <SkillBar key={s.name} name={s.name} pct={s.pct} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </div>

      {/* ── service cards ── */}
      <motion.div
        className="mt-24 flex flex-wrap justify-center gap-7"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={{ show: { transition: { staggerChildren: 0.12 } } }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");