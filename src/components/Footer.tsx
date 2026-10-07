import { ArrowUp, Github, Linkedin, Twitter, Mail, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#040406] border-t border-white/[0.08] pt-20 pb-12 px-6 md:px-12 text-neutral-400">
      <div className="max-w-7xl mx-auto">
        {/* Top Tier: Big Brand Identity & Tagline */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/[0.06]">
          <div className="md:col-span-6">
            <div className="flex items-baseline gap-2 mb-1 flex-wrap">
              <span className="font-unbounded font-black text-3xl md:text-4xl text-white tracking-tighter">
                AIHSAN
              </span>
              <span className="font-signature text-2xl text-cyan-300 font-normal">
                ~ developer &amp; designer
              </span>
            </div>
            <div className="text-xs font-mono text-cyan-400 mb-4 uppercase tracking-wider">
              Website Developer &amp; Designer · AI &amp; E-Commerce Specialist
            </div>
            <p className="font-editorial italic text-neutral-200 text-lg font-normal max-w-md">
              &ldquo;Building digital experiences, one website at a time.&rdquo;
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
              Navigation
            </div>
            <ul className="space-y-2.5 text-sm font-outfit">
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Featured Live Work</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">What I Build</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About AIHSAN</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Start a Project</a>
              </li>
            </ul>
          </div>

          {/* Featured Live Links Column */}
          <div className="md:col-span-3">
            <div className="text-xs font-mono text-white uppercase tracking-wider mb-4">
              Live Production
            </div>
            <ul className="space-y-2.5 text-sm font-mono">
              <li>
                <a
                  href="https://xolarapremium.floot.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <span>XOLARA PREMIUM</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://sas-bahu-colaction.ai.studio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-300 hover:text-blue-400 transition-colors flex items-center gap-1.5"
                >
                  <span>SAS BAHU COLLECTION</span>
                  <ExternalLink className="w-3 h-3 text-neutral-500" />
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="mailto:aihsannew@gmail.com"
                  className="text-blue-400 hover:underline flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>aihsannew@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Tier: Copyright, Socials & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono">
          <div className="text-neutral-500">
            &copy; {new Date().getFullYear()} AIHSAN. All rights reserved. Handcrafted with modern web standards.
          </div>

          <div className="flex items-center gap-6 text-neutral-400">
            <a
              href="mailto:aihsannew@gmail.com"
              className="hover:text-white transition-colors"
              title="Email"
            >
              Email
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="GitHub"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="Twitter / X"
            >
              Twitter / X
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.1] text-neutral-300 hover:text-white border border-white/[0.08] transition-all"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
