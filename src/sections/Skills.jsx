import { motion } from "framer-motion";

const skills = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Python",
  "Cybersecurity",
  "Tailwind CSS",
  "Django",
  "Firebase",
  "Machine Learning",
  "GitHub",
];

const Skills = () => {
  return (
    <section
    id="skills"
    className="py-32 px-6"
    >

      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 gradient-text"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 25px rgba(0,255,255,0.5)",
              }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-lg cursor-pointer"
            >

              <h3 className="text-xl font-semibold text-gray-200">
                {skill}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;