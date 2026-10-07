import { useState } from 'react';
import { Cpu, CheckCircle2, Sparkles } from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'core' | 'frameworks' | 'design' | 'creative'>('all');

  const filteredSkills = activeTab === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((s) => s.category === activeTab);

  const tabs = [
    { key: 'all', label: 'All Technologies' },
    { key: 'core', label: 'Core Frontend' },
    { key: 'frameworks', label: 'Frameworks & E-comm' },
    { key: 'design', label: 'UI / UX & Responsive' },
    { key: 'creative', label: 'Creative & Motion' },
  ];

  return (
    <section id="skills" className="py-24 px-6 md:px-12 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="down" delay={0}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2 tracking-wider uppercase">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Technical &amp; Creative Mastery</span>
              </div>
              <h2 className="font-unbounded text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight">
                Skills &amp; <span className="font-editorial italic font-normal text-cyan-400">Toolkit</span>
              </h2>
              <div className="font-signature text-3xl text-cyan-300 mt-2 select-none">
                Tested across complex e-commerce architectures
              </div>
              <p className="mt-2 text-base text-neutral-400 leading-relaxed font-outfit">
                Crafted with modern industry standards, zero boilerplate reliance, and a deep dedication to fluid user experience.
              </p>
            </div>

            {/* Interactive Category Segmented Control */}
            <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white/[0.03] border border-white/[0.08] rounded-2xl self-start md:self-end">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key as any)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-xl transition-all font-mono ${
                    activeTab === tab.key
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-neutral-400 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <ScrollReveal key={skill.name} direction="tilt" delay={index * 55} duration={700}>
              <div
                className="glass-panel p-6 rounded-3xl border border-white/[0.08] hover:border-cyan-400/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full backdrop-blur-xl shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-syne text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-lg bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 font-semibold">
                      {skill.level}
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 leading-relaxed mb-6 font-outfit">
                    {skill.highlight}
                  </p>
                </div>

                {/* Discrete Milestone Segments */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 mb-2">
                    <span>Proficiency Tier</span>
                    <span className="text-cyan-400 font-semibold">{skill.level}</span>
                  </div>
                  <div className="flex gap-1.5">
                    <div className="h-1.5 flex-1 rounded-full bg-cyan-400" />
                    <div className="h-1.5 flex-1 rounded-full bg-cyan-400" />
                    <div className="h-1.5 flex-1 rounded-full bg-cyan-400" />
                    <div
                      className={`h-1.5 flex-1 rounded-full ${
                        skill.level === 'Specialist' || skill.level === 'Expert' || skill.level === 'Core Mastery'
                          ? 'bg-cyan-400'
                          : 'bg-white/[0.1]'
                      }`}
                    />
                    <div
                      className={`h-1.5 flex-1 rounded-full ${
                        skill.level === 'Expert' || skill.level === 'Core Mastery'
                          ? 'bg-cyan-400'
                          : 'bg-white/[0.1]'
                      }`}
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Development Philosophy Bar */}
        <ScrollReveal direction="up" delay={200}>
          <div className="mt-12 p-6 glass-panel rounded-2xl border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-mono">
            <div className="flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Strict TypeScript typing · 60fps compositor-only animations · Zero cumulative layout shift</span>
            </div>
            <span className="text-cyan-300 font-semibold">React 19 / Vite / Tailwind Architecture</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
