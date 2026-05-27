import { motion } from "framer-motion";

const About = () => {
  return (
    <section
    id="about"
     className="py-32 px-6 bg-[#0a0f1f]"
    >

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 gradient-text"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-3xl p-10 shadow-2xl"
        >

          <p className="text-gray-300 text-lg leading-9">
            I’m a Computer Science Engineering student at JK Lakshmipat University
            passionate about building futuristic software solutions in AI,
            cybersecurity, networking, and full-stack development.
          </p>

          <p className="text-gray-400 text-lg leading-9 mt-6">
            I’ve worked on projects involving secure AI consultation platforms,
            penetration testing tools, machine learning systems, distributed
            computing, network monitoring, and computer vision applications.
          </p>

          <p className="text-gray-400 text-lg leading-9 mt-6">
            I enjoy solving real-world problems using modern technologies and
            continuously exploring cybersecurity, cryptography, distributed systems,
            and intelligent applications.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default About;