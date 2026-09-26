import React, { useState } from "react";
import { Mail, Send, Check, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-20 relative bg-[var(--bg-section-alt)] border-t border-[var(--border-subtle)] transition-colors duration-250">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center space-y-3 max-w-xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#93B9E8] tracking-wider">
              <span className="text-[#3A71A4] font-mono">{"//"}</span>
              <span className="uppercase tracking-widest font-semibold">05. THOUGHT COMMUNICATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-heading)] tracking-tight uppercase">
              COMMENCE <span className="text-[#93B9E8] drop-shadow-[0_0_15px_rgba(147,185,232,0.4)]">TRANSMISSION</span>
            </h2>
            <p className="text-[var(--text-body)] text-sm font-light">
              {PORTFOLIO_DATA.profile.status} • {PORTFOLIO_DATA.profile.location}
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Container */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-sm">

            {/* Left: Info */}
            <div className="md:col-span-5 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-[var(--text-heading)] font-mono uppercase tracking-wider">
                  Direct Protocols
                </h3>
                <p className="text-[var(--text-body)] text-xs leading-relaxed font-light">
                  Transmissions are received directly by {PORTFOLIO_DATA.profile.name}. Telemetry channels are active and monitored.
                </p>

                <div className="pt-2 space-y-3">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] hover:border-[#93B9E8]/60 text-[var(--text-body)] text-xs font-mono transition-colors group cursor-pointer"
                  >
                    <span className="flex items-center gap-2 truncate">
                      <Mail className="w-4 h-4 text-[#93B9E8] shrink-0" />
                      <span className="truncate">{PORTFOLIO_DATA.profile.socials.email}</span>
                    </span>
                    <span className="text-[10px] text-[#93B9E8] group-hover:underline shrink-0 ml-2 font-semibold">
                      {copied ? "Copied!" : "Copy"}
                    </span>
                  </button>

                  <a
                    href={PORTFOLIO_DATA.profile.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] hover:border-[#93B9E8]/60 text-[var(--text-body)] text-xs font-mono transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-[#93B9E8]" />
                    <span>GitHub Repository Profile</span>
                  </a>

                  <a
                    href={PORTFOLIO_DATA.profile.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-card-subtle)] border border-[var(--border-subtle)] hover:border-[#93B9E8]/60 text-[var(--text-body)] text-xs font-mono transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#93B9E8]" />
                    <span>LinkedIn Professional Network</span>
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[var(--bg-card-subtle)] border border-[#93B9E8]/35 text-[#93B9E8] text-[11px] font-mono flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#93B9E8] shrink-0" />
                <span>Voice of the World: Direct Channel Active</span>
              </div>
            </div>

            {/* Right: Thought Communication Form */}
            <div className="md:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5 uppercase font-semibold">
                    Sender Identity [Name / Org]
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tempest Tech / Technical Recruiter"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-input)] border border-[var(--border-input)] focus:border-[#93B9E8] text-[var(--text-heading)] text-xs font-mono outline-none transition-colors shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5 uppercase font-semibold">
                    Return Signal [Email]
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. contact@domain.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-input)] border border-[var(--border-input)] focus:border-[#93B9E8] text-[var(--text-heading)] text-xs font-mono outline-none transition-colors shadow-inner"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-[var(--text-muted)] mb-1.5 uppercase font-semibold">
                    Thought Transmission [Message]
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Detail your engineering requirements or project inquiry..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-input)] border border-[var(--border-input)] focus:border-[#93B9E8] text-[var(--text-heading)] text-xs font-mono outline-none transition-colors resize-none shadow-inner"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#3A71A4] hover:bg-[#29547d] text-[#F7FCFC] font-bold font-mono text-xs uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(58,113,164,0.35)] cursor-pointer"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4 text-[#F7FCFC]" />
                      <span>Transmission Recorded</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#F7FCFC]" />
                      <span>Send Thought Transmission</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
