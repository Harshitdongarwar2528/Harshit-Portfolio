const styles = {
  /* ── spacing ── */
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding:  "sm:px-16 px-6 sm:py-16 py-10",

  /* ── hero typography ── */
  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroMidText:
    "font-semibold text-white lg:text-[48px] sm:text-[40px] xs:text-[32px] text-[28px] lg:leading-[60px]",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  /* ── section typography ── */
  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",

  /* ── ✅ NEW: gradient text utility ── */
  gradientText:
    "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400",

  /* ── ✅ NEW: card / glass surfaces ── */
  cardDark:
    "bg-[#0d0f1e] border border-white/[0.07] rounded-2xl",
  glassDark:
    "bg-[#050816]/80 backdrop-blur-xl border border-white/[0.06]",

  /* ── ✅ NEW: common button variants ── */
  btnPrimary:
    "px-7 py-3 rounded-xl font-semibold text-white text-[15px] bg-gradient-to-r from-[#7c3aed] to-[#4f46e5] hover:shadow-[0_0_24px_rgba(124,58,237,0.5)] transition-all duration-300",
  btnGhost:
    "px-7 py-3 rounded-xl font-semibold text-purple-300 text-[15px] border border-purple-500/40 bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300",
  btnOutline:
    "px-7 py-3 rounded-xl font-semibold text-gray-300 text-[15px] border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300",

  /* ── ✅ NEW: section divider (horizontal rule) ── */
  sectionDivider:
    "w-full h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent my-16",
};

export { styles };