"use client";

import React from "react";
import { PORTFOLIO_DATA, SkillItem } from "@/data/portfolioData";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Cpu, Layers, ShieldCheck, Workflow, Terminal, Gauge, GitBranch, Palette, Sparkles, Binary } from "lucide-react";

const ICON_MAP: Record<string, React.ElementType> = {
  Cpu,
  Layers,
  ShieldCheck,
  Workflow,
  Terminal,
  Gauge,
  GitBranch,
  Palette,
  Sparkles,
  Binary,
};

export const TensuraSkillsMatrix: React.FC = () => {
  const renderSkillCard = (skill: SkillItem, index: number, accent: "sky" | "emerald" | "amber") => {
    const IconComponent = ICON_MAP[skill.iconName] || Cpu;

    const accentClasses = {
      sky: {
        border: "border-sky-500/30 hover:border-sky-400/60",
        shadow: "hover:shadow-[0_0_20px_rgba(56,189,248,0.25)]",
        tag: "text-sky-400 bg-sky-950/40 border-sky-500/30",
        icon: "text-sky-400",
        bar: "from-sky-500 to-cyan-400",
      },
      emerald: {
        border: "border-emerald-500/30 hover:border-emerald-400/60",
        shadow: "hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]",
        tag: "text-emerald-400 bg-emerald-950/40 border-emerald-500/30",
        icon: "text-emerald-400",
        bar: "from-emerald-500 to-teal-400",
      },
      amber: {
        border: "border-amber-500/40 hover:border-amber-400/80",
        shadow: "hover:shadow-[0_0_25px_rgba(255,210,77,0.3)]",
        tag: "text-amber-300 bg-amber-950/40 border-amber-500/40",
        icon: "text-amber-400",
        bar: "from-amber-500 via-yellow-400 to-amber-300",
      },
    }[accent];

    return (
      <div
        key={`${skill.category}-${index}`}
        className={`relative bg-slate-900/60 border ${accentClasses.border} ${accentClasses.shadow} rounded-2xl p-5 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group`}
      >
        {/* Top Header */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className={`p-2.5 rounded-xl bg-slate-950 border border-slate-800 ${accentClasses.icon} shadow-inner`}>
              <IconComponent className="w-5 h-5" />
            </div>
            <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${accentClasses.tag}`}>
              {skill.proficiency}% PROFICIENCY
            </span>
          </div>

          <div>
            <h4 className="text-base font-bold text-white group-hover:text-slate-100 transition-colors">
              [{skill.name}]
            </h4>
            <p className="text-xs text-slate-400 font-light mt-1 line-clamp-2 leading-relaxed">
              {skill.description}
            </p>
          </div>
        </div>

        {/* Bottom Tags & Gauge */}
        <div className="mt-4 space-y-3 pt-3 border-t border-slate-800/80">
          {/* Progress Bar */}
          <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${accentClasses.bar} rounded-full`}
              style={{ width: `${skill.proficiency}%` }}
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {skill.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono text-slate-400 bg-slate-950/60 border border-slate-800 px-2 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/40 text-sky-400 text-xs font-mono tracking-wider">
              <span>« SECTION 2: SYSTEM ARCHIVES »</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
              SKILLS & <span className="text-emerald-400">MASTERY</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-light">
              Categorized according to the Tensura Great Sage capability hierarchy: Intrinsic engineering, Extra performance tools, and Ultimate system powers.
            </p>
          </div>
        </ScrollReveal>

        {/* 1. ULTIMATE SKILLS (Gold Aura) */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(255,210,77,0.8)]" />
              <h3 className="font-mono text-sm sm:text-base font-bold text-amber-300 tracking-wider uppercase">
                [Ultimate Skills: Supreme Capabilities]
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-amber-500/40 to-transparent" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PORTFOLIO_DATA.skills.ultimate.map((skill, idx) =>
                renderSkillCard(skill, idx, "amber")
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* 2. INTRINSIC SKILLS (Cyan Aura) */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
              <h3 className="font-mono text-sm sm:text-base font-bold text-sky-300 tracking-wider uppercase">
                [Intrinsic Skills: Core Architectural Foundation]
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-sky-500/40 to-transparent" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PORTFOLIO_DATA.skills.intrinsic.map((skill, idx) =>
                renderSkillCard(skill, idx, "sky")
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* 3. EXTRA SKILLS (Emerald Aura) */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              <h3 className="font-mono text-sm sm:text-base font-bold text-emerald-300 tracking-wider uppercase">
                [Extra Skills: Specialized Technical Execution]
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/40 to-transparent" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PORTFOLIO_DATA.skills.extra.map((skill, idx) =>
                renderSkillCard(skill, idx, "emerald")
              )}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
