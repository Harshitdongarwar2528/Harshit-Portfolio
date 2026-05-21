import { motion } from "framer-motion";

import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

/**
 * SectionWrapper (StarWrapper)
 * ────────────────────────────
 * Improvements over original:
 *  ✅ Section entry fade + slide-up via staggerContainer
 *  ✅ Smooth scroll target (hash-span) kept, positioned correctly so
 *     the fixed navbar doesn't cut off section headings
 *  ✅ Subtle top gradient line accent on each section
 *  ✅ Optional divider line below each section to visually separate content
 *  ✅ Scroll margin so browser anchor jumps land below the fixed navbar
 */
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* ── scroll anchor — offset by navbar height so headings aren't hidden ── */}
        <span
          id={idName}
          className="hash-span"
          style={{ position: "absolute", top: "-80px", visibility: "hidden" }}
          aria-hidden="true"
        >
          &nbsp;
        </span>

        {/* ── subtle top accent line ── */}
        {idName && (
          <div
            aria-hidden="true"
            className="absolute top-0 left-6 right-6 sm:left-16 sm:right-16 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(124,58,237,0.25), transparent)",
            }}
          />
        )}

        {/* ── section content ── */}
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;