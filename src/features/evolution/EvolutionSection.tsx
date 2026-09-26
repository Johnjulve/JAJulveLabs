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
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#93B9E8] tracking-wider">
              <span className="text-[#3A71A4] font-mono">{"//"}</span>
              <span className="uppercase tracking-widest font-semibold">04. EVOLUTION TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] tracking-tight uppercase">
              GROWTH & <span className="text-[#93B9E8] drop-shadow-[0_0_15px_rgba(147,185,232,0.4)]">EVOLUTION</span>
            </h2>
            <p className="text-[var(--text-body)] text-sm font-light">
              Career milestones and architectural breakthroughs in software engineering.
            </p>
          </div>
        </ScrollReveal>

        {/* Milestones Timeline */}
        <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-6 sm:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-[#3A71A4] via-[#93B9E8] before:to-transparent">
          {PORTFOLIO_DATA.evolution.map((item, idx) => (
            <ScrollReveal key={idx} direction="left" delay={idx * 0.15}>
              <div className="relative pl-16 sm:pl-24 space-y-3">
                {/* Timeline Marker Node */}
                <div className="absolute left-6 sm:left-8 -translate-x-1/2 top-6 sm:top-7 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[var(--bg-card)] border-2 border-[#93B9E8] flex items-center justify-center shadow-[0_0_22px_rgba(147,185,232,0.4)] z-10 transition-transform group-hover:scale-110">
                  <div className="absolute inset-0.5 rounded-full border border-[#CCE9F6]/40" />
                  <Milestone className="w-5 h-5 sm:w-6 sm:h-6 text-[#93B9E8] drop-shadow-[0_0_8px_rgba(147,185,232,0.8)]" />
                </div>

                {/* Card */}
                <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl p-6 sm:p-7 backdrop-blur-md space-y-4 hover:border-[#93B9E8]/60 transition-colors shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold text-[var(--text-heading)]">
                        {item.title}
                      </h3>
                      <span className="text-xs font-mono text-[#93B9E8] font-semibold">
                        {item.organization} • {item.rank}
                      </span>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] text-[var(--text-muted)] font-mono text-xs font-semibold">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-[var(--text-body)] text-sm font-light leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-[var(--border-subtle)]">
                    <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase tracking-wider">
                      Key Architectural Breakthroughs:
                    </div>
                    <ul className="space-y-1.5">
                      {item.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-body)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#93B9E8] shrink-0 mt-0.5" />
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
