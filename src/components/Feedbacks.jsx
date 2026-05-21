import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.18, 0.75)}
    className="relative flex flex-col justify-between p-7 rounded-2xl overflow-hidden"
    style={{
      background: "linear-gradient(145deg, #0d0f1e, #0f1228)",
      border: "1px solid rgba(255,255,255,0.07)",
      minHeight: "340px",
    }}
  >
    {/* subtle top-left glow */}
    <div
      className="absolute -top-8 -left-8 w-32 h-32 rounded-full pointer-events-none"
      style={{ background: "radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)" }}
    />

    {/* star rating */}
    <div className="flex gap-1 mb-4">
      {Array.from({ length: 5 }).map((_, i) => (
        <FaStar key={i} className="text-amber-400 text-[13px]" />
      ))}
    </div>

    {/* quote mark */}
    <p
      className="absolute top-5 right-6 text-[72px] font-black leading-none select-none pointer-events-none"
      style={{ color: "rgba(124,58,237,0.15)" }}
    >
      "
    </p>

    {/* testimonial text */}
    <p className="text-gray-300 text-[15px] leading-[1.7] flex-1">
      {testimonial}
    </p>

    {/* author row */}
    <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-3">
      <img
        src={image}
        alt={name}
        className="w-11 h-11 rounded-full object-cover border border-purple-500/30"
      />
      <div className="flex flex-col">
        <p className="text-white font-semibold text-[14px]">{name}</p>
        <p className="text-gray-500 text-[12px]">
          {designation} · {company}
        </p>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => (
  <div>
    {/* header */}
    <motion.div
      variants={textVariant()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="mb-12"
    >
      <p className={styles.sectionSubText}>What others say</p>
      <h2 className={styles.sectionHeadText}>Testimonials.</h2>
    </motion.div>

    {/* cards grid */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={{ show: { transition: { staggerChildren: 0.18 } } }}
    >
      {testimonials.map((testimonial, index) => (
        <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
      ))}
    </motion.div>
  </div>
);

export default SectionWrapper(Feedbacks, "");