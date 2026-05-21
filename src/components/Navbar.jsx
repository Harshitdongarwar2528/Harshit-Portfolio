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

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setToggle(false);
    };
    if (toggle) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [toggle]);

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
          ? "bg-[#080808]/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
        }
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* ── logo + name ── */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0 group"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-9 h-9 object-contain group-hover:scale-105 transition-transform duration-200"
          />
          {/* name block — hidden on xs, shown sm+ */}
          <div className="hidden sm:flex flex-col leading-none gap-[3px]">
            <span className="text-white text-[14px] font-bold tracking-wide whitespace-nowrap">
              Harshit Dongarwar
            </span>
            <span className="text-gray-400 text-[10px] font-medium tracking-[0.18em] uppercase whitespace-nowrap">
              Full Stack · MERN
            </span>
          </div>
        </Link>

        {/* ── desktop menu ── */}
        <div className="hidden sm:flex items-center gap-6 ml-6">

          {/* nav links */}
          <ul className="list-none flex flex-row gap-6">
            {navLinks.map((nav) => (
              <li key={nav.id} className="relative group">
                <a
                  href={`#${nav.id}`}
                  onClick={() => setActive(nav.title)}
                  className={`
                    text-[14px] font-medium transition-colors duration-200 whitespace-nowrap
                    ${active === nav.title ? "text-white" : "text-gray-400 hover:text-white"}
                  `}
                >
                  {nav.title}
                </a>
                {/* underline — white, not purple, cleaner */}
                <span
                  className={`
                    absolute -bottom-1 left-0 h-[1.5px] rounded-full bg-white
                    transition-all duration-300
                    ${active === nav.title ? "w-full opacity-70" : "w-0 opacity-0 group-hover:w-full group-hover:opacity-40"}
                  `}
                />
              </li>
            ))}
          </ul>

          {/* divider */}
          <div className="w-px h-4 bg-white/10" />

          {/* social icons — neutral, no purple */}
          <div className="flex items-center gap-2">
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
                className="w-8 h-8 rounded-md border border-white/10 bg-transparent flex items-center justify-center text-gray-400 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-200 text-[17px]"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* hire me — white outline, no purple bg */}
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full text-[13px] font-semibold text-white border border-white/25 hover:bg-white/10 hover:border-white/40 transition-all duration-200 whitespace-nowrap"
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
            className="w-9 h-9 rounded-md border border-white/10 bg-white/5 flex items-center justify-center text-white text-[18px]"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={toggle ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
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
                transition={{ duration: 0.18 }}
                className="absolute top-[68px] right-3 min-w-[190px] z-[9999] rounded-xl border border-white/[0.08] bg-[#0f0f0f]/95 backdrop-blur-xl p-4 shadow-[0_16px_48px_rgba(0,0,0,0.7)]"
              >
                <ul className="flex flex-col gap-0.5">
                  {navLinks.map((nav) => (
                    <li key={nav.id}>
                      <a
                        href={`#${nav.id}`}
                        onClick={() => { setToggle(false); setActive(nav.title); }}
                        className={`
                          block px-3 py-2 rounded-lg text-[14px] font-medium transition-colors duration-150
                          ${active === nav.title
                            ? "text-white bg-white/8"
                            : "text-gray-400 hover:text-white hover:bg-white/5"
                          }
                        `}
                      >
                        {nav.title}
                      </a>
                    </li>
                  ))}
                </ul>

                <div className="mt-3 pt-3 border-t border-white/[0.08] flex gap-2">
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
                      className="w-9 h-9 rounded-md border border-white/10 bg-white/5 flex items-center justify-center text-gray-300 hover:text-white text-[17px] transition-colors"
                    >
                      {icon}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setToggle(false)}
                    className="flex-1 text-center py-2 rounded-lg text-[13px] font-semibold text-white border border-white/20 hover:bg-white/10 transition-colors"
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