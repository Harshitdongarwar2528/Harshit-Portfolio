import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Ref to close mobile menu when clicking outside
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setToggle(false);
      }
    };
    if (toggle) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [toggle]);

  // ✅ Close menu on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setToggle(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 left-0 right-0 z-[99999] pointer-events-auto
        ${scrolled ? "bg-[#0d0d0d]/90 backdrop-blur-md shadow-lg" : "bg-transparent"} transition-all duration-300`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-11 h-11 object-contain" />
          <p className="text-white text-[15px] font-bold cursor-pointer flex">
            <span className="sm:block hidden">&nbsp; Full Stack Developer (MERN)</span>
          </p>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="list-none flex flex-row gap-10">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer transition-colors duration-200`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 ml-4 text-white text-[22px]">
            <a
              href="https://github.com/Harshitdongarwar2528"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/harshit-dongarwar"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className="sm:hidden flex flex-1 justify-end items-center" ref={menuRef}>
          <button
            onClick={() => setToggle(!toggle)}
            aria-label={toggle ? "Close menu" : "Open menu"}
            aria-expanded={toggle}
            className="cursor-pointer text-white text-[26px] z-[99999] bg-transparent border-none"
          >
            {toggle ? <FaTimes /> : <FaBars />}
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-3 min-w-[180px] z-[9999] rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}

              {/* SOCIAL ICONS */}
              <div className="flex gap-3 text-white mt-3 text-[20px]">
                <a
                  href="https://github.com/Harshitdongarwar2528"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/harshit-dongarwar"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <FaLinkedin />
                </a>
              </div>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;