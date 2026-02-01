import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

/* ---------------- Project Card ---------------- */

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0, 0.8)}
      whileHover={{
        y: -6,
        boxShadow: "0px 20px 40px rgba(0,0,0,0.35)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="bg-[#0b0f1a] border border-white/10
                 rounded-2xl p-6 md:p-8
                 max-w-5xl mx-auto w-full
                 transition-shadow duration-300"
    >
      {/* IMAGE */}
      <div className="relative w-full h-[260px] md:h-[340px] overflow-hidden rounded-xl group">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-black/20 opacity-0
                        group-hover:opacity-100 transition-opacity duration-300" />

        {/* ICONS */}
        <div className="absolute top-4 right-4 flex gap-3">
          {live_demo_link && (
            <motion.div
              title="View Live Demo"
              onClick={() => window.open(live_demo_link, "_blank")}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black/80 w-11 h-11 ring-1 ring-white/20
                         rounded-full flex justify-center items-center
                         cursor-pointer"
            >
              <FaExternalLinkAlt className="text-white text-[18px]" />
            </motion.div>
          )}

          {source_code_link && (
            <motion.div
              title="View Source Code"
              onClick={() => window.open(source_code_link, "_blank")}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black/80 w-11 h-11 ring-1 ring-white/20
                         rounded-full flex justify-center items-center
                         cursor-pointer"
            >
              <img
                src={github}
                alt="GitHub repository"
                className="w-1/2 h-1/2 object-contain"
              />
            </motion.div>
          )}
        </div>
      </div>

      {/* CONTENT */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <h3 className="text-white text-[28px] font-semibold">
          {name}
        </h3>

        <p className="mt-4 text-secondary text-[15px] leading-[26px]">
          {description}
        </p>
      </motion.div>

      {/* TAGS */}
      <motion.div
        className="mt-5 flex flex-wrap gap-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
      >
        {tags.map((tag) => (
          <motion.span
            key={tag.name}
            variants={{
              hidden: { opacity: 0, y: 6 },
              show: { opacity: 1, y: 0 },
            }}
            className={`text-[13px] ${tag.color}`}
          >
            #{tag.name}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
};

/* ---------------- Works Section ---------------- */

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <p className={styles.sectionSubText}>Featured Work</p>
        <h2 className={`${styles.sectionHeadText} mt-2`}>
          Featured Projects.
        </h2>
      </motion.div>

      <motion.div
        className="mt-16 space-y-14"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
