import { motion } from "framer-motion";

const GithubStats = () => {
  return (
    <section className="py-32 px-6">

      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-16 gradient-text"
        >
          GitHub Stats
        </motion.h2>

        <div className="flex flex-col gap-10 items-center">

          <img
            src="https://github-readme-stats.vercel.app/api?username=sarveshgulgulia90&show_icons=true&theme=tokyonight"
            alt="github stats"
            className="rounded-2xl"
          />

          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=sarveshgulgulia90&theme=tokyonight"
            alt="github streak"
            className="rounded-2xl"
          />

        </div>

      </div>

    </section>
  );
};

export default GithubStats;