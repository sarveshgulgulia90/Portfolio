import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import CursorGlow from "./components/CursorGlow";
import AnimatedBackground from "./components/AnimatedBackground";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import GithubStats from "./sections/GithubStats";
import Experience from "./sections/Experience";
import Certificates from "./sections/Certificates";
import Contact from "./sections/Contact";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {
      setLoading(false);
    }, 2500);

  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="bg-white dark:bg-[#050816] text-black dark:text-white transition-all duration-500 overflow-hidden min-h-screen relative">

      <AnimatedBackground />

      <CursorGlow />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <GithubStats />

      <Experience />

      <Certificates />

      <Contact />

      <Footer />

    </div>
  );
}

export default App;