"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onReplayIntro: () => void;
}

const NAV_LINKS = [
  { label: "[Status]", href: "#hero", id: "hero" },
  { label: "[Core Skills]", href: "#skills", id: "skills" },
  { label: "[Project Portfolio]", href: "#projects", id: "projects" },
  { label: "[Growth & Evolution]", href: "#evolution", id: "evolution" },
  { label: "[Thought Communication]", href: "#contact", id: "contact" },
];

export const Navbar: React.FC<NavbarProps> = ({ onReplayIntro }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ["hero", "skills", "projects", "evolution", "contact"];
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 w-full bg-[#030a12]/90 backdrop-blur-md border-b border-sky-900/40 transition-colors duration-200"
      style={{ top: 0, paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4 lg:gap-6">
        {/* Brand Logo & Great Sage Emblem */}
        <a href="#hero" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-emerald-400/80 bg-slate-950 flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.35)] group-hover:scale-105 transition-transform shrink-0">
            <span className="text-emerald-400 font-bold font-mono text-xs tracking-tighter">GS</span>
            <div className="absolute inset-0 rounded-full border border-sky-400/40 animate-spin" style={{ animationDuration: "12s" }} />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-bold text-sm sm:text-base lg:text-lg tracking-wider text-white group-hover:text-emerald-300 transition-colors uppercase whitespace-nowrap">
                {PORTFOLIO_DATA.profile.alias}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-500/40 px-1.5 sm:px-2 py-0.5 rounded-md whitespace-nowrap tracking-wider shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                {PORTFOLIO_DATA.profile.rank}
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 tracking-wider uppercase whitespace-nowrap">
              {PORTFOLIO_DATA.profile.title}
            </span>
          </div>
        </a>

        {/* Desktop Bracketed Links (from Tensura Great Sage UI) - Protected with whitespace-nowrap */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-950/60 border border-sky-900/50 rounded-full px-3.5 py-1.5 shadow-[inset_0_0_12px_rgba(14,165,233,0.1)] shrink-0">
          {NAV_LINKS.map((link, idx) => {
            const isActive = activeSection === link.id;
            return (
              <React.Fragment key={link.href}>
                {idx > 0 && <span className="text-sky-800 text-xs select-none px-0.5">•</span>}
                <a
                  href={link.href}
                  className={cn(
                    "px-3 py-1 font-mono text-xs rounded-full whitespace-nowrap transition-all duration-200",
                    isActive
                      ? "text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.3)] font-semibold"
                      : "text-slate-300 hover:text-emerald-400 hover:bg-emerald-950/30"
                  )}
                >
                  {link.label}
                </a>
              </React.Fragment>
            );
          })}
        </nav>

        {/* Right CTA / Replay Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onReplayIntro}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-amber-400/40 bg-amber-950/20 hover:bg-amber-950/40 text-amber-300 text-xs font-mono tracking-wider transition-all duration-200 shadow-[0_0_12px_rgba(255,210,77,0.2)] hover:scale-105 whitespace-nowrap shrink-0"
            title="Replay Voice of the World Raphael Intro Screen"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Replay Intro</span>
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 text-slate-300 hover:text-white shrink-0"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-emerald-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#030a12]/98 backdrop-blur-xl border-b border-sky-900/60 px-5 py-5 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-mono text-xs text-slate-200 hover:text-emerald-400 py-2.5 px-3 rounded-md hover:bg-emerald-950/30 border-b border-slate-900/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex justify-center items-center gap-2 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono text-xs font-bold tracking-wider transition-all duration-150 shadow-[0_0_15px_rgba(16,185,129,0.35)]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>» Contact Me</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onReplayIntro();
              }}
              className="w-full inline-flex justify-center items-center gap-2 py-2.5 rounded-lg border border-amber-400/40 bg-amber-950/30 hover:bg-amber-950/50 text-amber-300 text-xs font-mono transition-all duration-150"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Replay Raphael Intro</span>
            </button>

            {/* Mobile Socials */}
            <div className="flex items-center justify-center gap-6 pt-2 border-t border-slate-900 text-slate-400">
              <a
                href={PORTFOLIO_DATA.profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors p-2"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PORTFOLIO_DATA.profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors p-2"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.socials.email}`}
                className="hover:text-emerald-400 transition-colors p-2"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
