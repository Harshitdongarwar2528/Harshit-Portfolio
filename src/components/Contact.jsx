import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn, textVariant } from "../utils/motion";

const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const InputField = ({ label, children, error }) => (
  <label className="flex flex-col gap-1.5">
    <span className="text-gray-300 text-[14px] font-medium">{label}</span>
    {children}
    {error && <span className="text-red-400 text-[12px]">{error}</span>}
  </label>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!isValidEmail(form.email)) errs.email = "Enter a valid email address.";
    if (!form.message.trim()) errs.message = "Message cannot be empty.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Harshit",
          from_email: form.email,
          to_email: "harshitdongarwar2003@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 5000);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        alert("Something went wrong. Please try again.");
      });
  };

  const inputClass =
    "bg-[#0d0f1e] border border-white/10 focus:border-purple-500/60 text-white placeholder:text-gray-600 rounded-xl py-3.5 px-5 text-[14px] outline-none transition-all duration-200 focus:shadow-[0_0_0_3px_rgba(124,58,237,0.15)]";

  return (
    <>
      {/* section heading */}
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mb-12"
      >
        <p className={styles.sectionSubText}>Let's talk</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <div className="xl:mt-0 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">

        {/* ── LEFT: form ── */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] rounded-2xl overflow-hidden p-8"
          style={{
            background: "linear-gradient(145deg, #0d0f1e, #111428)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* contact info strip */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { icon: <FaEnvelope />, text: "harshitdongarwar2003@gmail.com", href: "mailto:harshitdongarwar2003@gmail.com" },
              { icon: <FaPhone />, text: "+91 7038798690", href: "tel:+917038798690" },
              { icon: <FaGithub />, text: "GitHub", href: "https://github.com/Harshitdongarwar2528" },
              { icon: <FaLinkedin />, text: "LinkedIn", href: "https://linkedin.com/in/harshit-dongarwar" },
            ].map(({ icon, text, href }) => (
              <a
                key={text}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[13px] text-gray-400 hover:text-purple-300 transition-colors duration-200"
              >
                <span className="text-purple-400">{icon}</span>
                {text}
              </a>
            ))}
          </div>

          <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <InputField label="Your Name" error={errors.name}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={inputClass}
              />
            </InputField>

            <InputField label="Email Address" error={errors.email}>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={inputClass}
              />
            </InputField>

            <InputField label="Message" error={errors.message}>
              <textarea
                rows={6}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project or opportunity..."
                className={inputClass}
              />
            </InputField>

            {/* success banner */}
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-4 py-3 rounded-xl text-[13px] font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/25"
              >
                ✓ Message sent! I'll get back to you soon.
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.03, boxShadow: "0 0 28px rgba(124,58,237,0.5)" }}
              whileTap={{ scale: 0.97 }}
              className="mt-1 self-start px-8 py-3.5 rounded-xl font-semibold text-white text-[15px] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
            >
              {loading ? "Sending…" : "Send Message →"}
            </motion.button>
          </form>
        </motion.div>

        {/* ── RIGHT: 3D earth ── */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");