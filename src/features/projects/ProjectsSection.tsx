"use client";

import React from "react";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";
import { CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative bg-slate-950/40 border-y border-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-xs font-mono tracking-wider">
              <span>« SECTION 3: DEPLOYED SYSTEMS »</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase">
              PROJECT <span className="text-emerald-400">PORTFOLIO</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-light">
              Engineered with strict separation of concerns, exhaustive testing harnesses, and high architectural rigor.
            </p>
          </div>
        </ScrollReveal>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project: ProjectItem, idx: number) => (
            <ScrollReveal key={project.id} direction="up" delay={idx * 0.15} className="h-full">
              <div
                className="h-full relative bg-slate-900/70 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] group hover:-translate-y-1"
              >
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-950/50 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                    {project.classification}
                  </span>
                  <span className="text-xs font-mono text-amber-300 font-semibold drop-shadow-[0_0_8px_rgba(255,210,77,0.5)]">
                    ⚡ {project.epValue}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-sky-400 mt-1">
                    {project.tagline}
                  </p>
                </div>

                <p className="text-slate-300 text-sm font-light leading-relaxed">
                  {project.description}
                </p>

                {/* Architecture Highlights */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] font-mono text-slate-400 tracking-wider uppercase">
                    Architectural Features:
                  </div>
                  <ul className="space-y-1.5">
                    {project.architectureHighlights.map((hl, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Metrics & Tech Stack */}
              <div className="mt-6 pt-5 border-t border-slate-800/80 space-y-4">
                {/* Metrics Badges (Optional) */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 gap-2 bg-slate-950/80 p-3 rounded-xl border border-slate-800/60">
                    {project.metrics.map((m, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="text-[10px] text-slate-400 font-mono">{m.label}</span>
                        <span className="text-xs font-bold text-slate-200 font-mono">{m.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono text-slate-300 bg-slate-950 border border-slate-800 px-2.5 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 pt-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-xs font-mono transition-colors"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>View Source</span>
                    </a>
                  )}
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
