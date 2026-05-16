import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      {/* ✅ Added section heading */}
      <motion.div
        variants={textVariant()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className='mb-10'
      >
        <p className={styles.sectionSubText}>My toolkit</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      {/* ✅ Stagger animation on the grid */}
      <motion.div
        className="flex flex-wrap justify-center gap-10 mt-10"
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          show: { transition: { staggerChildren: 0.08 } },
        }}
      >
        {technologies.map((tech) => (
          <motion.div
            key={tech.name}
            variants={fadeIn("up", "spring", 0, 0.5)}
            whileHover={{ scale: 1.1, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex flex-col items-center gap-3 cursor-pointer group"
          >
            <div
              className="w-28 h-28 bg-[#0d0d0d] rounded-xl
                         flex items-center justify-center
                         shadow-lg shadow-black/40
                         border border-white/5
                         group-hover:border-purple-500/40
                         transition-all duration-300"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-16 h-16 object-contain"
              />
            </div>
            {/* ✅ Tech name label below icon */}
            <p className="text-secondary text-[13px] font-medium group-hover:text-white transition-colors duration-200">
              {tech.name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");