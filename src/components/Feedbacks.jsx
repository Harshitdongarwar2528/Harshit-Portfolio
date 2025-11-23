import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="
      bg-black-200 p-10 rounded-3xl 
      w-full sm:w-[300px] lg:w-[340px]
      shadow-lg shadow-black/20
      min-h-[380px]            /* ⭐ Equal height */
      flex flex-col justify-between /* ⭐ Makes layout consistent */
    "
  >
    <div>
      <p className="text-white font-black text-[48px]">"</p>
      <p className="text-white tracking-wider text-[17px] leading-[24px] mt-2">
        {testimonial}
      </p>
    </div>

    <div className="mt-7 flex justify-between items-center gap-3">
      <div className="flex-1 flex flex-col">
        <p className="text-white font-medium text-[16px]">
          <span className="blue-text-gradient">@</span> {name}
        </p>
        <p className="mt-1 text-secondary text-[12px]">
          {designation} of {company}
        </p>
      </div>

      <img
        src={image}
        alt={`feedback_by-${name}`}
        className="w-10 h-10 rounded-full object-cover"
      />
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      {/* Header Section */}
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      {/* FIXED SPACING GRID */}
      <div
        className={`
          -mt-20 pb-14 ${styles.paddingX}
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-10
          place-items-center
        `}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
