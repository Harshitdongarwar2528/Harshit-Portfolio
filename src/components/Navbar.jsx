import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* close on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setToggle(false);
    };
    if (toggle) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [toggle]);

  /* close on Escape */
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") setToggle(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        ${styles.paddingX}
        w-full flex items-center py-4 fixed top-0 left-0 right-0 z-[99999]
        transition-all duration-300
        ${scrolled
          ? "bg-[#050816]/85 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
        }
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* ── logo ── */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-200"
          />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-white text-[15px] font-bold tracking-wide">
              Harshit Dongarwar
            </span>
            <span className="text-purple-400 text-[11px] font-medium tracking-widest uppercase">
              Full Stack · MERN
            </span>
          </div>
        </Link>

        {/* ── desktop menu ── */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="list-none flex flex-row gap-8">
            {navLinks.map((nav) => (
              <li key={nav.id} className="relative group">
                <a
                  href={`#${nav.id}`}
                  onClick={() => setActive(nav.title)}
                  className={`
                    text-[15px] font-medium transition-colors duration-200
                    ${active === nav.title ? "text-white" : "text-gray-400 hover:text-white"}
                  `}
                >
                  {nav.title}
                </a>
                {/* animated underline */}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-purple-500 to-indigo-500
                    transition-all duration-300
                    ${active === nav.title ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </li>
            ))}
          </ul>

          {/* social icons */}
          <div className="flex items-center gap-3 ml-2">
            {[
              { href: "https://github.com/Harshitdongarwar2528", icon: <FaGithub />, label: "GitHub" },
              { href: "https://linkedin.com/in/harshit-dongarwar", icon: <FaLinkedin />, label: "LinkedIn" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-200 text-[18px]"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* hire me pill */}
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full text-[13px] font-semibold text-white border border-purple-500/50 bg-purple-500/15 hover:bg-purple-500/30 transition-all duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* ── mobile hamburger ── */}
        <div className="sm:hidden flex flex-1 justify-end items-center" ref={menuRef}>
          <button
            onClick={() => setToggle((t) => !t)}
            aria-label={toggle ? "Close menu" : "Open menu"}
            aria-expanded={toggle}
            className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-white text-[20px] z-[99999]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={toggle ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                {toggle ? <FaTimes /> : <FaBars />}
              </motion.span>
            </AnimatePresence>
          </button>

          {/* mobile dropdown */}
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -8 }}
                transition={{ duration: 0.2 }}
                className="absolute top-[72px] right-3 min-w-[200px] z-[9999] rounded-2xl border border-white/10 bg-[#0d0d1a]/95 backdrop-blur-xl p-5 shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
              >
                <ul className="flex flex-col gap-1">
                  {navLinks.map((nav) => (
                    <li key={nav.id}>
                      <a
                        href={`#${nav.id}`}
                        onClick={() => { setToggle(false); setActive(nav.title); }}
                        className={`
                          block px-3 py-2 rounded-lg text-[15px] font-medium transition-colors duration-150
                          ${active === nav.title
                            ? "text-white bg-purple-500/15"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                          }
                        `}
                      >
                        {nav.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-4 border-t border-white/10 flex gap-3">
                  {[
                    { href: "https://github.com/Harshitdongarwar2528", icon: <FaGithub />, label: "GitHub" },
                    { href: "https://linkedin.com/in/harshit-dongarwar", icon: <FaLinkedin />, label: "LinkedIn" },
                  ].map(({ href, icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-9 h-9 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white text-[18px] transition-colors"
                    >
                      {icon}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setToggle(false)}
                    className="flex-1 text-center py-2 rounded-lg text-[13px] font-semibold text-white bg-purple-600/50 hover:bg-purple-600/70 transition-colors"
                  >
                    Hire Me
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;