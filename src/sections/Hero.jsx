import { motion } from 'framer-motion';
import { FiArrowRight, FiChevronDown } from 'react-icons/fi';

function Hero() {
  return (
    <section id="home" className="pt-16 pb-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-2 sm:px-0 lg:flex-row lg:items-center lg:justify-between">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-400">Hello, I’m Atharv</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">I build modern AI and web experiences.</h1>
          <div className="mt-6 space-y-3 text-slate-300 sm:text-lg">
            <p>CSE Student</p>
            <p>Machine Learning & Data Science Enthusiast</p>
            <p>Aspiring Data Scientist</p>
          </div>
          <p className="mt-6 max-w-xl text-slate-400">
            I build Machine Learning projects and work with real-world datasets to solve practical problems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-500"
            >
              View Projects
              <FiArrowRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-card flex h-80 w-full max-w-xl flex-col justify-between rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 to-white/10 p-6 shadow-glow"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-3xl bg-white/5 p-4">
              <span className="rounded-2xl bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-accent">AI</span>
              <span className="rounded-2xl bg-white/5 px-3 py-1 text-xs text-slate-300">Modern Tools</span>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-slate-400">Selected focus areas</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {['Python', 'React', 'OpenCV', 'Machine Learning'].map((item) => (
                  <div key={item} className="rounded-3xl border border-white/10 bg-page/80 px-4 py-4 text-sm text-slate-200">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-4 text-slate-300">
            <span>Floating ideas</span>
            <FiChevronDown className="text-xl text-accent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
