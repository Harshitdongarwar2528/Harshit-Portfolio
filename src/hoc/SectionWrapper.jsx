import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <section
        id={idName}
        className={`
          relative 
          w-full
          mx-auto
          ${styles.padding}
          scroll-mt-[80px]      /* 🔥 smaller & correct for mobile */
          z-10
        `}
      >
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}   /* 🔥 Important fix */
          className="w-full min-h-0"                  /* 🔥 Prevents layout blocking */
        >
          <Component />
        </motion.div>
      </section>
    );
  };

export default SectionWrapper;
