import { motion } from 'framer-motion';
import { stats } from '../data/content';

function About() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">About</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">About Me</h2>
          </div>
          <p className="max-w-xl text-slate-400">
            I am a motivated CSE student with strong interest in AI, ML, and building practical applications.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            className="glass-card rounded-[32px] border border-white/10 bg-page/80 p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-slate-300">
              I am a Computer Science student exploring AI, machine learning, and full stack development.
              I enjoy solving problems through code and creating elegant, data-driven experiences.
            </p>
            <div className="mt-8 space-y-4 text-slate-300">
              <p>• CSE student</p>
              <p>• Interested in AI/ML</p>
              <p>• Likes building projects</p>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {stats.map((item) => (
              <motion.div
                key={item.label}
                className="glass-card rounded-[28px] border border-white/10 bg-page/80 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-4xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
