import { motion } from "framer-motion";
import {
  FaCertificate,
  FaShieldAlt,
  FaServer,
  FaBrain
} from "react-icons/fa";

const certificates = [
  {
    title: "Cisco - Introduction to Cybersecurity",
    icon: <FaShieldAlt />,
    color: "text-cyan-400",
  },

  {
    title: "IBM Cognitive Class - Spark Fundamentals",
    icon: <FaBrain />,
    color: "text-purple-400",
  },

  {
    title: "Coursera Project Certificate",
    icon: <FaCertificate />,
    color: "text-pink-400",
  },

  {
    title: "Red Hat System Administration I (RH124)",
    icon: <FaServer />,
    color: "text-red-400",
  },
];

const Certificates = () => {
  return (
    <section className="py-32 px-6">

      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 gradient-text text-center"
        >
          Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}

              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0,255,255,0.3)",
              }}

              className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-lg text-center"
            >

              <div className={`text-5xl mb-6 ${cert.color}`}>
                {cert.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-200 leading-8">
                {cert.title}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Certificates;