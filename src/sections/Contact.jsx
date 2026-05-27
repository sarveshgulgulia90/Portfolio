import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6"
    >

      <div className="max-w-5xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-10 gradient-text"
        >
          Contact Me
        </motion.h2>

        <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto"
        >
            Open to collaborations, freelance opportunities,
            full-time roles, innovative projects,
            and discussions around AI, cybersecurity,
            software engineering, and emerging technologies.
        </motion.p>

        <div className="flex justify-center gap-8 mt-12 flex-wrap">

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sarveshgulgulia@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-500/20 hover:bg-cyan-500/40 transition duration-300 px-8 py-4 rounded-2xl border border-cyan-500/20"
          >
            <div className="flex items-center gap-3 text-cyan-300 text-lg">
              <FaEnvelope />
              Email Me
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sarvesh-gulgulia-57a382283/"
            target="_blank"
            rel="noreferrer"
            className="bg-white/5 hover:bg-white/10 transition duration-300 px-8 py-4 rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-3 text-white text-lg">
              <FaLinkedin />
              LinkedIn
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sarveshgulgulia90"
            target="_blank"
            rel="noreferrer"
            className="bg-white/5 hover:bg-white/10 transition duration-300 px-8 py-4 rounded-2xl border border-white/10"
          >
            <div className="flex items-center gap-3 text-white text-lg">
              <FaGithub />
              GitHub
            </div>
          </a>

        </div>

      </div>

    </section>
  );
};

export default Contact;