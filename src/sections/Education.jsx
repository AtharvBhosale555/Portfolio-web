import { motion } from 'framer-motion';
import { education } from '../data/content';

function Education() {
  return (
    <section id="education" className="py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Education</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Learning Journey</h2>
        </div>

        <div className="space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-[32px] border border-white/10 bg-page/80 p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{item.details}</p>
                </div>
                <span className="inline-flex rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200">
                  {item.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
