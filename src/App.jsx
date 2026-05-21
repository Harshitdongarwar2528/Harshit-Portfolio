import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from "./components";

/* ── scroll-progress bar at the very top of the viewport ── */
const ScrollProgress = () => {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setPct(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[999999] h-[2px] transition-all duration-75"
      style={{
        width: `${pct}%`,
        background: "linear-gradient(90deg, #7c3aed, #4f46e5, #a78bfa)",
      }}
    />
  );
};

const App = () => {
  return (
    <BrowserRouter>
      {/* ── thin purple scroll-progress indicator ── */}
      <ScrollProgress />

      <div className="relative z-0 bg-primary">

        {/* ── HERO + NAVBAR ── same stacking context so navbar floats over hero ── */}
        <div className="relative">
          <Navbar />
          <Hero />
        </div>

        {/* ── MAIN SECTIONS ── */}
        <div className="relative z-[1]">
          <About />

          {/* subtle section separator */}
          <div
            aria-hidden="true"
            className="max-w-7xl mx-auto px-6 sm:px-16"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
          </div>

          <Experience />
          <Works />
          <Tech />

          {/* ✅ Feedbacks re-enabled — comment out if you don't have testimonials yet */}
          <Feedbacks />

          <Contact />
        </div>

        {/* ── FOOTER ── */}
        <footer className="relative z-[1] border-t border-white/[0.06] py-8 text-center">
          <p className="text-gray-500 text-[13px]">
            Designed &amp; built by{" "}
            <span className="text-purple-400 font-medium">Harshit Dongarwar</span>
            {" · "}
            <a
              href="https://github.com/Harshitdongarwar2528"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              GitHub
            </a>
            {" · "}
            <a
              href="https://linkedin.com/in/harshit-dongarwar"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              LinkedIn
            </a>
          </p>
        </footer>
      </div>
    </BrowserRouter>
  );
};

export default App;