import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl"></div>

      <div className="text-center z-10">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold"
        >
          Sarvesh <span className="gradient-text">Gulgulia</span>
        </motion.h1>

        {/* Typing Animation */}
        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "Cybersecurity Enthusiast",
            2000,
            "AI Project Developer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-3xl mt-6 text-gray-300"
        />

        {/* Description */}
        <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg leading-8">
          Building futuristic AI, cybersecurity, networking,
          and full-stack applications.
        </p>

        {/* Buttons & Social Icons */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 items-center">

          {/* GitHub */}
          <a
            href="https://github.com/sarveshgulgulia90"
            target="_blank"
            rel="noreferrer"
            className="text-4xl hover:text-cyan-400 hover:scale-110 transition duration-300"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sarvesh-gulgulia-57a382283/"
            target="_blank"
            rel="noreferrer"
            className="text-4xl hover:text-cyan-400 hover:scale-110 transition duration-300"
          >
            <FaLinkedin />
          </a>

          {/* Email */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=sarveshgulgulia@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white/10 border border-white/10 px-6 py-3 rounded-full hover:bg-cyan-500/20 transition duration-300"
            >
             Contact Me
          </a>

          {/* Resume */}
          <a
            href="/RESUME.pdf"
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-500/20 text-cyan-300 px-6 py-3 rounded-full hover:bg-cyan-500/40 transition duration-300"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
};

export default Hero;