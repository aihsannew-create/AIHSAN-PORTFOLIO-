import { useState } from 'react';
import { GitBranch, CheckCircle2, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';
import ScrollReveal, { LeftOpenRightCloseText } from './ScrollReveal';

export default function Process() {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 px-6 md:px-12 relative z-10 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <ScrollReveal direction="down" delay={0}>
          <div className="max-w-2xl mb-12">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-3 tracking-wider uppercase">
              <GitBranch className="w-4 h-4 text-cyan-400" />
              <span>Workflow &amp; Methodology</span>
            </div>
            <h2 className="font-unbounded text-2xl sm:text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              How I <span className="font-editorial italic font-normal text-cyan-400">Build</span>
            </h2>
            <div className="font-signature text-3xl text-cyan-300 mt-2 select-none">
              From discovery to production launch in 6 phases
            </div>
            <p className="mt-2 text-base text-neutral-400 leading-relaxed font-outfit">
              A battle-tested six-phase engineering pipeline ensuring razor-sharp aesthetic fidelity, sub-second performance, and conversion-ready catalogues.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Steps Grid with Interactive Focus & Scroll Reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCESS_STEPS.map((stepItem, index) => {
            const isSelected = selectedStep === index;
            return (
              <ScrollReveal key={stepItem.step} direction="tilt" delay={index * 80} duration={700}>
                <div
                  onClick={() => setSelectedStep(index)}
                  className={`cursor-pointer p-6 sm:p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between h-full backdrop-blur-xl ${
                    isSelected
                      ? 'bg-blue-950/30 border-cyan-400/60 shadow-xl shadow-cyan-950/40 ring-1 ring-cyan-400/40 -translate-y-2'
                      : 'glass-panel border-white/[0.08] hover:border-cyan-500/30 hover:-translate-y-1'
                  }`}
                >
                  <div>
                    {/* Step Number & Phase */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-bebas text-4xl text-cyan-400 tracking-wider">
                        {stepItem.step}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-400 px-2 py-0.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                        {stepItem.duration}
                      </span>
                    </div>

                    <h3 className="font-syne text-2xl font-bold text-white mb-1">
                      {stepItem.title}
                    </h3>
                    <div className="text-xs font-mono text-cyan-300/80 mb-4">
                      {stepItem.subtitle}
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed mb-6 font-outfit">
                      {stepItem.description}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="pt-4 border-t border-white/[0.06]">
                    <div className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider mb-2">
                      Key Deliverables
                    </div>
                    <div className="space-y-1.5">
                      {stepItem.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Process Guarantee Callout */}
        <ScrollReveal direction="up" delay={200}>
          <div className="mt-12 p-6 glass-panel rounded-2xl border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-neutral-200">
                Direct developer collaboration with transparent milestones and real-time previews.
              </span>
            </div>
            <a href="#contact" className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold">
              <span>Ready to start Phase 01? Let’s talk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
