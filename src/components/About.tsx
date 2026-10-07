import { ArrowUpRight, Terminal, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface AboutProps {
  onOpenContact: () => void;
}

export default function About({ onOpenContact }: AboutProps) {
  const skillsList = [
    'Website Development',
    'UI/UX Design',
    'Responsive Web Design',
    'Creative Frontend Development',
    'Interactive Animations',
    'E-commerce Websites',
    'Landing Pages',
    'Modern Web Experiences',
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="down">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-4 uppercase tracking-wider">
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>About AIHSAN</span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Bio */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up">
              <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-normal italic text-white tracking-tight leading-[1.2] mb-6">
                &ldquo;I’m <span className="font-unbounded font-black not-italic text-cyan-400">AIHSAN</span>, a Website Developer &amp; Designer focused on creating modern, interactive and visually memorable digital experiences.&rdquo;
              </h2>

              <p className="text-neutral-300 text-base leading-relaxed font-outfit mb-6">
                I specialize in high-conversion catalogue websites, luxury e-commerce stores, and custom interactive digital experiences. By combining cutting-edge AI development tools with clean frontend architecture, I deliver ultra-fast, bespoke websites that captivate customers.
              </p>

              <div className="flex items-center gap-4 flex-wrap pt-2">
                <button
                  onClick={onOpenContact}
                  className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2 cursor-pointer"
                >
                  <span>Work With Me</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <a
                  href="#projects"
                  className="text-xs font-mono text-cyan-400 hover:text-white transition-colors"
                >
                  View Featured Projects &rarr;
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Clean Skills Grid */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/[0.1] backdrop-blur-xl shadow-xl">
                <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider mb-4 pb-2 border-b border-white/[0.08]">
                  Core Skills &amp; Capabilities
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {skillsList.map((skill) => (
                    <div
                      key={skill}
                      className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center gap-2 text-xs font-outfit text-neutral-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span>Stack: React · Tailwind · TypeScript</span>
                  <span className="text-emerald-400 font-semibold">100% Custom Code</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
