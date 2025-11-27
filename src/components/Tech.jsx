import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-wrap justify-center gap-10 mt-10">

      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="w-28 h-28 bg-[#0d0d0d] rounded-xl
                     flex items-center justify-center
                     shadow-lg shadow-black/40"
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className="w-16 h-16 object-contain"
          />
        </div>
      ))}

    </div>
  );
};

export default SectionWrapper(Tech, "");
