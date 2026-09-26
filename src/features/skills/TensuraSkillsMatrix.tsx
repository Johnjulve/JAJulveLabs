"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, SkillItem } from "@/data/portfolioData";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Cpu, Layers, ShieldCheck, Workflow, Terminal, Gauge, GitBranch, Palette, Sparkles, Binary } from "lucide-react";
import { cn } from "@/lib/utils";

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

const ACCENT_THEMES = {
  sky: {
    border: "border-[var(--border-subtle)] hover:border-[var(--accent-azure)]",
    shadow: "hover:shadow-[0_0_20px_rgba(147,185,232,0.2)]",
    tag: "text-[var(--text-heading)] bg-[var(--bg-card-subtle)] border-[var(--border-subtle)]",
    icon: "text-[var(--accent-azure)]",
  },
  azure: {
    border: "border-[var(--border-subtle)] hover:border-[var(--accent-azure)]",
    shadow: "hover:shadow-[0_0_20px_rgba(147,185,232,0.25)]",
    tag: "text-[var(--text-heading)] bg-[var(--bg-card-subtle)] border-[var(--border-subtle)]",
    icon: "text-[var(--accent-azure)]",
  },
  deepBlue: {
    border: "border-[#3A71A4]/40 hover:border-[var(--accent-azure)]",
    shadow: "hover:shadow-[0_0_25px_rgba(58,113,164,0.3)]",
    tag: "text-[#F7FCFC] bg-[#3A71A4] border-[#3A71A4]",
    icon: "text-[var(--accent-azure)]",
  },
} as const;

type SkillCategoryFilter = "all" | "ultimate" | "intrinsic" | "extra";

export const TensuraSkillsMatrix: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<SkillCategoryFilter>("all");

  const renderSkillCard = (skill: SkillItem, index: number, accent: "sky" | "azure" | "deepBlue") => {
    const IconComponent = ICON_MAP[skill.iconName] || Cpu;
    const accentClasses = ACCENT_THEMES[accent];

    return (
      <ScrollReveal
        key={`${skill.category}-${index}`}
        direction="up"
        delay={index * 0.08}
        className="h-full"
      >
        <div
          className={`h-full relative bg-[var(--bg-card)] border ${accentClasses.border} ${accentClasses.shadow} rounded-2xl p-5 sm:p-6 backdrop-blur-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5`}
        >
          {/* Top Header */}
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <div className={`p-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] ${accentClasses.icon} shadow-inner`}>
                <IconComponent className="w-5 h-5" />
              </div>
              <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${accentClasses.tag} uppercase tracking-wider font-semibold`}>
                {skill.category} Capability
              </span>
            </div>

            <div>
              <h4 className="text-base font-bold text-[var(--text-heading)] group-hover:text-[var(--accent-azure)] transition-colors">
                [{skill.name}]
              </h4>
              <p className="text-xs text-[var(--text-secondary)] font-light mt-1.5 leading-relaxed">
                {skill.description}
              </p>
            </div>
          </div>

          {/* Bottom Tags (Clean, no arbitrary percentage bars) */}
          <div className="mt-5 pt-3.5 border-t border-[var(--border-subtle)] flex flex-wrap gap-1.5">
            {skill.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg-secondary)] border border-[var(--border-subtle)] px-2 py-0.5 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    );
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-12">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[var(--accent-azure)] tracking-wider">
              <span className="text-[var(--text-muted)] font-mono">{"//"}</span>
              <span className="uppercase tracking-widest font-semibold">02. SYSTEM ARCHIVES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight uppercase">
              SKILLS & <span className="text-[var(--accent-azure)] drop-shadow-[0_0_15px_rgba(147,185,232,0.3)]">MASTERY</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-sm sm:text-base font-light">
              Categorized according to system scope: Core Architectural Foundations, Specialized Execution, and Autonomous Engineering Engines.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
          {[
            { id: "all", label: "ALL CAPABILITIES", count: 10 },
            { id: "ultimate", label: "AUTONOMOUS ENGINES (2)", count: 2 },
            { id: "intrinsic", label: "CORE ARCHITECTURE (4)", count: 4 },
            { id: "extra", label: "SYSTEM EXECUTION (4)", count: 4 },
          ].map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as SkillCategoryFilter)}
                className={cn(
                  "px-4 py-2 rounded-xl font-mono text-xs tracking-wider transition-all duration-200 border cursor-pointer",
                  isActive
                    ? "bg-[#3A71A4] border-[var(--accent-azure)] text-[#F7FCFC] shadow-[0_0_15px_rgba(147,185,232,0.3)] font-semibold scale-105"
                    : "bg-[var(--bg-secondary)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-heading)] hover:border-[var(--accent-azure)]/50"
                )}
              >
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 1. ULTIMATE SKILLS (Deep Blue & Azure Aura) */}
        {(activeFilter === "all" || activeFilter === "ultimate") && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[var(--accent-azure)] shadow-[0_0_10px_rgba(147,185,232,0.8)]" />
                <h3 className="font-mono text-sm sm:text-base font-bold text-[var(--accent-azure)] tracking-wider uppercase">
                  [Autonomous Systems & Flagship Engines]
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-[var(--border-prominent)] to-transparent" />
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {PORTFOLIO_DATA.skills.ultimate.map((skill, idx) =>
                renderSkillCard(skill, idx, "deepBlue")
              )}
            </div>
          </div>
        )}

        {/* 2. INTRINSIC SKILLS (Azure Aura) */}
        {(activeFilter === "all" || activeFilter === "intrinsic") && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[var(--accent-azure)] shadow-[0_0_10px_rgba(58,113,164,0.8)]" />
                <h3 className="font-mono text-sm sm:text-base font-bold text-[var(--accent-azure)] tracking-wider uppercase">
                  [Intrinsic Skills: Core Architectural Foundation]
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-[var(--border-prominent)] to-transparent" />
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PORTFOLIO_DATA.skills.intrinsic.map((skill, idx) =>
                renderSkillCard(skill, idx, "azure")
              )}
            </div>
          </div>
        )}

        {/* 3. EXTRA SKILLS (Light Sky Aura) */}
        {(activeFilter === "all" || activeFilter === "extra") && (
          <div className="space-y-4 animate-in fade-in duration-200">
            <ScrollReveal direction="left">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[var(--accent-azure)] shadow-[0_0_10px_rgba(147,185,232,0.8)]" />
                <h3 className="font-mono text-sm sm:text-base font-bold text-[var(--accent-azure)] tracking-wider uppercase">
                  [Extra Skills: Specialized Technical Execution]
                </h3>
                <div className="flex-1 h-px bg-gradient-to-r from-[var(--border-prominent)] to-transparent" />
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PORTFOLIO_DATA.skills.extra.map((skill, idx) =>
                renderSkillCard(skill, idx, "sky")
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
