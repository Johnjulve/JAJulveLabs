import React from "react";
import { Mail, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const TopTicker: React.FC = () => {
  return (
    <div
      className="w-full max-w-full overflow-hidden bg-[var(--bg-section-alt)] border-b border-[var(--border-subtle)] text-[var(--text-body)] text-xs py-1.5 sm:py-2 px-3 sm:px-8 flex items-center justify-between gap-3 z-50 transition-colors duration-250"
      style={{ paddingTop: "calc(0.375rem + env(safe-area-inset-top, 0px))" }}
    >
      {/* Left side: System Announcement Ticker */}
      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 overflow-hidden shrink">
        <span className="flex h-2 w-2 relative shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#93B9E8] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3A71A4]" />
        </span>
        <span className="font-mono text-[#93B9E8] font-bold tracking-wider text-[10px] sm:text-[11px] uppercase shrink-0">
          « NOTICE »
        </span>
        <span className="truncate text-[var(--text-body)] font-mono text-[10px] sm:text-xs">
          VOICE OF THE WORLD PROTOCOL: ARCHITECTURAL TELEMETRY VERIFIED
        </span>
      </div>

      {/* Right side: Socials & Contact CTA */}
      <div className="flex items-center gap-3 sm:gap-4 shrink-0">
        <div className="flex items-center gap-2.5 sm:gap-3 text-[var(--text-muted)]">
          <a
            href={PORTFOLIO_DATA.profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-azure)] transition-colors p-0.5"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={PORTFOLIO_DATA.profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-azure)] transition-colors p-0.5"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-3.5 h-3.5" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_DATA.profile.socials.email}`}
            className="hover:text-[var(--accent-azure)] transition-colors p-0.5"
            aria-label="Send Email"
          >
            <Mail className="w-3.5 h-3.5" />
          </a>
        </div>

        <a
          href="#contact"
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#3A71A4] hover:bg-[#29547d] text-[#F7FCFC] font-bold text-[11px] font-mono tracking-wider transition-all duration-150 shadow-[0_0_12px_rgba(58,113,164,0.35)] shrink-0"
        >
          <Sparkles className="w-3 h-3 text-[#CCE9F6]" />
          » Contact Me
        </a>
      </div>
    </div>
  );
};
