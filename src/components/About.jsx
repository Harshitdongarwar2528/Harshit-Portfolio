import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profile from "../assets/profilee.png"; // 👈 your image

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
className='w-full p-[1px] rounded-[20px] 
           border border-white/10'
    >
      <div
        options={{
          max: 20,
          scale: 1,
          speed: 450,
        }}
className='bg-[#0b0f1a] rounded-[20px] py-6 px-8 min-h-[260px] 
           flex justify-center items-center flex-col gap-4'
      >
        <img
          src={icon}
          alt='web-development'
className='w-14 h-14 object-contain opacity-70'
        />
        <h3 className='text-white text-[18px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      {/* --- Intro Section --- */}
      <motion.div
        variants={textVariant()}
        className='mb-10'
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="mt-20">
           <h2 className={styles.sectionHeadText}  >MERN Stack Developer
        </h2>
        <p className="text-secondary text-[17px] max-w-3xl leading-[30px]">I build full-stack web applications using React, Node.js,
          Express, and MongoDB with authentication and REST APIs.
        </p>
        </div>
       
      </motion.div>

      {/* --- About Content (Text Left + Image Right) --- */}
      <div className='flex flex-col lg:flex-row items-center justify-between gap-10'>
        {/* LEFT: Text */}
        <motion.div
          variants={fadeIn("left", "spring", 0.2, 1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
          className='flex-1'
        >
          <p className='text-secondary text-[17px] max-w-3xl leading-[30px]'>
            I'm <span className='text-white font-semibold'>Harshit Dongarwar</span>,
            a MERN stack developer with hands-on experience building full-stack web applications.

            I have worked on projects involving user authentication, REST API development,
            database design, and frontend integration using React.

            I am currently seeking an entry-level software developer role.

          </p>

          {/* --- Personal Info --- */}
          <div className='mt-6 text-secondary text-[16px] leading-[28px]'>
            <p><span className='text-purple-400 font-semibold'>Email:</span> harshitdongarwar2003@gmail.com</p>
            <p><span className='text-purple-400 font-semibold'>Phone:</span> +91 7038798690</p>
          </div>

          {/* --- Resume Button --- */}
          <motion.a
            href='/Harshit-Dongarwar-Resume.pdf' // 👈 place your resume in "public" folder
            download
            whileTap={{ scale: 0.95 }}
            className='mt-6 inline-block px-6 py-3 bg-gradient-to-r from-[#5b21b6] to-[#7c3aed] text-white font-semibold rounded-lg shadow-md  transition-all duration-300'
          >
            Download Resume
          </motion.a>
        </motion.div>

        {/* --- RIGHT: Profile Image with Hover Effect --- */}
        <motion.div
          className='flex justify-center lg:justify-end flex-1'
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 10,
            duration: 1,
          }}
          viewport={{ once: true }}
        >
          <motion.img
            src={profile}
            alt='Harshit Dongarwar'
            className='w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 shadow-[0_0_25px_rgba(139,92,246,0.4)] cursor-pointer'
            whileHover={{
              scale: 1.1,
              // rotate: 5,
boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.12)"
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 10,
            }}
          />
        </motion.div>
      </div>

      {/* --- Service Cards --- */}
      <div className='mt-20 flex flex-wrap justify-center gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
