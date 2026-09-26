import React from "react";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";
import { CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative bg-[var(--bg-section-alt)] border-y border-[var(--border-subtle)] transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#93B9E8] tracking-wider">
              <span className="text-[#3A71A4] font-mono">{"//"}</span>
              <span className="uppercase tracking-widest font-semibold">03. DEPLOYED SYSTEMS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[var(--text-heading)] tracking-tight uppercase">
              PROJECT <span className="text-[#93B9E8] drop-shadow-[0_0_15px_rgba(147,185,232,0.4)]">PORTFOLIO</span>
            </h2>
            <p className="text-[var(--text-body)] text-sm sm:text-base font-light">
              Engineered with strict separation of concerns, exhaustive testing harnesses, and high architectural rigor.
            </p>
          </div>
        </ScrollReveal>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.projects.map((project: ProjectItem, idx: number) => (
            <ScrollReveal key={project.id} direction="up" delay={idx * 0.15} className="h-full">
              <div
                className="h-full relative bg-[var(--bg-card)] border border-[var(--border-subtle)] hover:border-[#93B9E8]/70 rounded-2xl p-6 sm:p-7 backdrop-blur-md transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_25px_rgba(147,185,232,0.18)] group hover:-translate-y-1 shadow-sm"
              >
                {/* Header */}
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#93B9E8] bg-[var(--bg-card-subtle)] border border-[#93B9E8]/35 px-2.5 py-1 rounded-full font-semibold">
                      {project.classification}
                    </span>
                    <span className="text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg-card-subtle)] border border-[#93B9E8]/30 px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#93B9E8]" />
                      <span>{project.systemBadge}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-heading)] group-hover:text-[#93B9E8] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#93B9E8] mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-[var(--text-body)] text-sm font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Architecture Highlights */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-mono text-[var(--text-muted)] tracking-wider uppercase">
                      Architectural Features:
                    </div>
                    <ul className="space-y-1.5">
                      {project.architectureHighlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[var(--text-body)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#93B9E8] shrink-0 mt-0.5" />
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Metrics & Tech Stack */}
                <div className="mt-6 pt-5 border-t border-[var(--border-subtle)] space-y-4">
                  {/* Metrics Badges (Optional) */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-2 bg-[var(--bg-card-subtle)] p-3 rounded-xl border border-[var(--border-subtle)]">
                      {project.metrics.map((m, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-[10px] text-[var(--text-muted)] font-mono">{m.label}</span>
                          <span className="text-xs font-bold text-[var(--text-heading)] font-mono">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono text-[var(--text-muted)] bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] px-2.5 py-0.5 rounded-full"
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
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#3A71A4] hover:bg-[#29547d] text-[#F7FCFC] text-xs font-mono font-semibold transition-colors shadow-sm"
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
