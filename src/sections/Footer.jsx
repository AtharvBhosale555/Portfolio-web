import { FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi';
import { contactDetails } from '../data/content';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-page/95 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-400">© 2026 Atharv Bhosale. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4 text-slate-300">
          <a href={contactDetails.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">
            <FiLinkedin size={18} />
          </a>
          <a href={contactDetails.github} target="_blank" rel="noreferrer" className="transition hover:text-white">
            <FiGithub size={18} />
          </a>
          <a href="#home" className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10">
            <FiArrowUp /> Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
