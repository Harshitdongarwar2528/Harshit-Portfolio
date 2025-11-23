import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <>
      {/* HERO TEXT */}
      <section className="relative w-full mx-auto pt-[60px] pb-0">
        <div className={`max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Harshit</span>
            </h1>
            {/* <h3 className={`${styles.heroMidText} text-white`}>
              MERN STACK DEVELOPER
            </h3> */}
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop Responsive Websites, user <br className='sm:block hidden' />
              interfaces and web applications
            </p>
          </div>
        </div>
      </section>

      {/* COMPUTER BELOW HERO TEXT */}
      <div className=" h-[250px] -mt-20">
        <ComputersCanvas />
      </div>

      {/* SCROLL INDICATOR */}
      <div className='w-full flex justify-center items-center mt-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>

    </>
  );
};

export default Hero;
