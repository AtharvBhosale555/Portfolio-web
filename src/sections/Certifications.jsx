import { motion } from 'framer-motion';
import { certifications } from '../data/content';

function Certifications() {
  return (
    <section id="certifications" className="py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Skills</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">I'm good at...</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              className="glass-card rounded-[32px] border border-white/10 bg-page/80 p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">✌️</p>
              <h3 className="mt-4 text-xl font-semibold text-white">{cert.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{cert.provider}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
