import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Secure AI Consultation Platform",
    description:
      "AI-powered healthcare consultation platform with secure authentication and smart symptom analysis.",
    tech: ["React", "Node.js", "MongoDB"],
    github:
      "https://github.com/GauRaVsinghbora/Secure_AI_Consultation_platform",
  },

  {
    title: "AI Steganography",
    description:
      "Secure steganography system using AES encryption and LSB image embedding techniques.",
    tech: ["Python", "AES", "OpenCV"],
    github:
      "https://github.com/sarveshgulgulia90/Stegenography_AI",
  },

  {
    title: "Penetration Testing Tool",
    description:
      "Cybersecurity-focused vulnerability assessment and penetration testing toolkit.",
    tech: ["Python", "Cybersecurity"],
    github:
      "https://github.com/sarveshgulgulia90/Penetration-Testing-Tool",
  },

  {
    title: "Startup Management System",
    description:
      "Django-based startup management platform with authentication and database workflows.",
    tech: ["Django", "MySQL", "Tailwind"],
    github:
      "https://github.com/sarveshgulgulia90/startup_management_system",
  },

  {
    title: "Network Monitoring System",
    description:
      "Real-time server and network monitoring system with infrastructure tracking.",
    tech: ["Networking", "Python"],
    github:
      "https://github.com/sarveshgulgulia90/Real-time-Server-Network-Monitoring-System",
  },

  {
    title: "Machine Learning Project",
    description:
      "Movie success prediction using ensemble machine learning models and analytics.",
    tech: ["ML", "Python", "Scikit-learn"],
    github:
      "https://github.com/sarveshgulgulia90/Machine-Learning-Project",
  },
];

const Projects = () => {
  return (
    <section
    id="projects"
    className="py-32 px-6 bg-[#0a0f1f]"
    >

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 gradient-text"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 30px rgba(0,255,255,0.3)",
              }}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg"
            >

              <h3 className="text-2xl font-bold text-white mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/10 text-cyan-300 px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <a
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-3 mt-8 text-cyan-400 hover:text-white transition"
              >
                <FaGithub />
                View Project
              </a>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Projects;