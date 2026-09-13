import React from "react";
import { Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const TopTicker: React.FC = () => {
  return (
    <div
      className="w-full bg-[#05101a] border-b border-sky-950/60 text-slate-300 text-xs py-1.5 sm:py-2 px-3 sm:px-8 flex items-center justify-between gap-3 z-50"
      style={{ paddingTop: "calc(0.375rem + env(safe-area-inset-top, 0px))" }}
    >
      {/* Left side: System Announcement Ticker */}
      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 overflow-hidden shrink">
        <span className="flex h-2 w-2 relative shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="font-mono text-emerald-400 font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase shrink-0">
          « NOTICE »
        </span>
        <span className="truncate text-slate-300 font-mono text-[10px] sm:text-xs">
          VOICE OF THE WORLD PROTOCOL: ULTIMATE SKILL RAPHAEL ENGAGED
        </span>
      </div>

      {/* Right side: Socials & Contact CTA */}
      <div className="flex items-center gap-3 sm:gap-4 shrink-0">
        <div className="flex items-center gap-2.5 sm:gap-3 text-slate-400">
          <a
            href={PORTFOLIO_DATA.profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors p-0.5"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={PORTFOLIO_DATA.profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-emerald-400 transition-colors p-0.5"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.socials.email}`}
            className="hover:text-emerald-400 transition-colors p-0.5"
            aria-label="Send Email"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>
        </div>

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-[11px] font-mono tracking-wider transition-all duration-150 shadow-[0_0_12px_rgba(16,185,129,0.35)] shrink-0"
        >
          <Sparkles className="w-3 h-3" />
          » Contact Me
        </a>
      </div>
    </div>
  );
};
