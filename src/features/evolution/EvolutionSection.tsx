"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { CheckCircle2, Milestone } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const EvolutionSection: React.FC = () => {
  return (
    <section id="evolution" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/40 text-sky-400 text-xs font-mono tracking-wider">
              <span>« SECTION 4: EVOLUTION TIMELINE »</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              GROWTH & <span className="text-emerald-400">EVOLUTION</span>
            </h2>
            <p className="text-slate-400 text-sm font-light">
              Career milestones and architectural breakthroughs in software engineering.
            </p>
          </div>
        </ScrollReveal>

        {/* Milestones Timeline */}
        <div className="space-y-6 relative before:absolute before:inset-0 before:left-6 sm:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:via-sky-500 before:to-transparent">
          {PORTFOLIO_DATA.evolution.map((item, idx) => (
            <ScrollReveal key={idx} direction="left" delay={idx * 0.15}>
              <div className="relative pl-14 sm:pl-20 space-y-3">
                {/* Timeline Marker Node */}
                <div className="absolute left-3.5 sm:left-5.5 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-emerald-400 flex items-center justify-center shadow-[0_0_12px_rgba(16,185,129,0.6)]">
                  <Milestone className="w-3 h-3 text-emerald-400" />
                </div>

                {/* Card */}
                <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-7 backdrop-blur-md space-y-4 hover:border-emerald-500/40 transition-colors">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-emerald-400">
                        {item.organization} • {item.rank}
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300 font-mono text-xs">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Key Architectural Breakthroughs:
                    </div>
                    <ul className="space-y-1.5">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
