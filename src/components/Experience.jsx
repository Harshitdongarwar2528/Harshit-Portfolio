import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "linear-gradient(145deg, #0d0f1e, #111428)",
      boxShadow: "0 4px 32px rgba(0,0,0,0.4)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: "16px",
      color: "#fff",
    }}
    contentArrowStyle={{ borderRight: "7px solid #111428" }}
    date={
      <span className="text-gray-400 text-[13px] font-medium">
        {experience.date}
      </span>
    }
    iconStyle={{
      background: experience.iconBg,
      boxShadow: "0 0 0 4px rgba(124,58,237,0.25)",
    }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[20px] font-bold">{experience.title}</h3>
      <p
        className="text-purple-400 text-[14px] font-semibold mt-0.5"
        style={{ margin: "4px 0 0" }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-none flex flex-col gap-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="flex items-start gap-2 text-gray-400 text-[13px] leading-relaxed"
        >
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <>
    <motion.div
      variants={textVariant()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mb-4"
    >
      <p className={`${styles.sectionSubText} text-center`}>What I've done so far</p>
      <h2 className={`${styles.sectionHeadText} text-center`}>Experience.</h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline lineColor="rgba(124,58,237,0.2)">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  </>
);

export default SectionWrapper(Experience, "work");