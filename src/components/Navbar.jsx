import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaMoon,
  FaSun
} from "react-icons/fa";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") !== "light"
  );

  useEffect(() => {

    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

  }, [darkMode]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 dark:bg-black/20 bg-white/70 border-b border-white/10"
    >

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold gradient-text">
          Sarvesh
        </h1>

        {/* Desktop */}
        <ul className="hidden md:flex gap-8 items-center text-gray-700 dark:text-gray-300">

          {["about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="hover:text-cyan-400 transition cursor-pointer capitalize"
              >
                {item}
              </Link>
            </li>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl hover:text-cyan-400 transition"
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0f1f] dark:bg-[#0a0f1f] bg-white">

          <ul className="flex flex-col items-center py-6 gap-6 text-gray-700 dark:text-gray-300">

            {["about", "skills", "projects", "contact"].map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-cyan-400 transition cursor-pointer capitalize"
                >
                  {item}
                </Link>
              </li>
            ))}

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl hover:text-cyan-400 transition"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

          </ul>

        </div>
      )}

    </motion.nav>
  );
};

export default Navbar;