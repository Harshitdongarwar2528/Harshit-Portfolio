import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import profile from "../assets/profile.png"; // 👈 your image

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full bg-gradient-to-r from-[#4b0082] to-[#7e22ce] p-[1px] rounded-[20px] shadow-lg shadow-purple-700/30'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
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
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
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
            a passionate Full Stack MERN Developer with strong expertise in MongoDB,
            Express.js, React, and Node.js. I build scalable, modern, and visually
            stunning web applications that merge design and performance — inspired by
            futuristic aesthetics and smooth user experiences. My focus is to
            bring creative, high-quality solutions to life.
          </p>

          {/* --- Personal Info --- */}
          <div className='mt-6 text-secondary text-[16px] leading-[28px]'>
            <p><span className='text-purple-400 font-semibold'>Name:</span> Harshit Dongarwar</p>
            <p><span className='text-purple-400 font-semibold'>Email:</span> harshitdongarwar2003@gmail.com</p>
            <p><span className='text-purple-400 font-semibold'>Phone:</span> +91 7038798690</p>
          </div>

          {/* --- Resume Button --- */}
          <motion.a
            href='/Harshit-Dongarwar-Resume.pdf' // 👈 place your resume in "public" folder
            download
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(139, 92, 246, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className='mt-6 inline-block px-6 py-3 bg-gradient-to-r from-[#5b21b6] to-[#7c3aed] text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition-all duration-300'
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
            className='w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-purple-600 shadow-[0_0_25px_rgba(139,92,246,0.4)] cursor-pointer'
            whileHover={{
              scale: 1.1,
              rotate: 5,
              boxShadow: "0px 0px 35px rgba(139, 92, 246, 0.9)",
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
