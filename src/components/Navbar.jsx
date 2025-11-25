import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-[9999] ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
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
            Harshit Dongarwar{" "}
            <span className="sm:block hidden">&nbsp;| Full Stack Developer</span>
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
                } hover:text-white text-[18px] font-medium cursor-pointer`}
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
              className="hover:text-gray-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/harshit-dongarwar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            onClick={() => setToggle(!toggle)}
            className="cursor-pointer text-white text-[26px] z-[99999]"
          >
            {toggle ? <FaTimes /> : <FaBars />}
          </div>

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
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/harshit-dongarwar"
                  target="_blank"
                  rel="noopener noreferrer"
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
