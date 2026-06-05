import { motion } from 'framer-motion';
import { experience } from '../data/content';

function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Experience</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Professional Experience</h2>
        </div>

        <motion.div
          className="glass-card rounded-[32px] border border-white/10 bg-page/80 p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-white">{experience.title}</h3>
              <p className="mt-1 text-slate-400">{experience.company}</p>
            </div>
            <span className="inline-flex rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200">
              {experience.duration}
            </span>
          </div>
          <ul className="mt-5 space-y-3 text-slate-300">
            {experience.responsibilities.map((line) => (
              <li key={line} className="flex gap-3">
                <span className="mt-1 text-accent">•</span>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
