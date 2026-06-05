import { motion } from 'framer-motion';
import { contactDetails } from '../data/content';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Get In Touch</h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            className="glass-card rounded-[32px] border border-white/10 bg-page/80 p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-5 text-slate-300">
              <p>Reach out for collaborations, internships, or project discussions.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-200">
                  <FiMail className="text-accent" />
                  <span>{contactDetails.email}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <FiPhone className="text-accent" />
                  <span>{contactDetails.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200">
                  <FiMapPin className="text-accent" />
                  <span>{contactDetails.location}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <a
                  href={contactDetails.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10"
                >
                  <FiLinkedin /> LinkedIn
                </a>
                <a
                  href={contactDetails.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:bg-white/10"
                >
                  <FiGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            action="#"
            className="glass-card rounded-[32px] border border-white/10 bg-page/80 p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-5">
              <label className="text-sm text-slate-300" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent"
              />

              <label className="text-sm text-slate-300" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent"
              />

              <label className="text-sm text-slate-300" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write a message..."
                className="w-full rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-accent"
              />

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-3xl bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-500"
              >
                Submit Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
