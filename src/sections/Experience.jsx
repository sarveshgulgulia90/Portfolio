import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="py-32 px-6 bg-[#0a0f1f]">

      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-20 gradient-text text-center"
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-cyan-500/30 ml-6">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 ml-10"
          >

            <div className="absolute w-5 h-5 bg-cyan-400 rounded-full -left-[11px]"></div>

            <h3 className="text-2xl font-bold text-white">
              Web Development Intern
            </h3>

            <p className="text-cyan-400 mt-2">
              Unified Mentor • May 2025 - Jul 2025
            </p>

            <p className="text-gray-400 mt-4 leading-8">
              Developed full-stack projects including portfolio websites,
              management systems, games, and productivity applications while
              strengthening frontend, backend, debugging, and deployment skills.
            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Experience;