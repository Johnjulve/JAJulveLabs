import React from "react";
import { Terminal, Shield } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[var(--bg-section-alt)] border-t border-[var(--border-subtle)] text-[var(--text-muted)] py-12 px-4 sm:px-8 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Version Badge with Rimuru Slime Orb */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full flex items-center justify-center shrink-0">
            {/* Outer Azure Aura */}
            <div className="absolute inset-0 rounded-full bg-[#93B9E8]/20 blur-sm" />
            {/* Concentric Rotating Rimuru Vector Orb */}
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full drop-shadow-[0_0_10px_rgba(147,185,232,0.6)]"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <radialGradient id="footerSlimeGrad" cx="45%" cy="40%" r="55%">
                  <stop offset="0%" stopColor="#F7FCFC" />
                  <stop offset="35%" stopColor="#CCE9F6" />
                  <stop offset="70%" stopColor="#93B9E8" />
                  <stop offset="100%" stopColor="#3A71A4" />
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="46" fill="none" stroke="#93B9E8" strokeWidth="2.5" strokeDasharray="6 4" opacity="0.65" />
              <circle cx="50" cy="50" r="38" fill="none" stroke="#CCE9F6" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.8" />
              <circle cx="50" cy="50" r="28" fill="url(#footerSlimeGrad)" />
              <circle cx="42" cy="42" r="5" fill="#FFFFFF" opacity="0.85" />
            </svg>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-[var(--text-heading)] font-mono text-sm tracking-wider uppercase">
                {PORTFOLIO_DATA.profile.alias}
              </span>
              <span className="text-[10px] font-mono font-semibold text-[#93B9E8] bg-[var(--bg-card)] border border-[#93B9E8]/40 px-2 py-0.5 rounded-full shadow-sm">
                v1.2.0
              </span>
            </div>
            <span className="text-[10px] font-mono text-[var(--text-muted)]">
              Voice of the World Protocol • Next.js 15
            </span>
          </div>
        </div>

        {/* System Badges */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#93B9E8]" />
            Zero-Leak Architecture
          </span>
          <span className="text-[var(--text-muted)] select-none">•</span>
          <span className="text-[var(--text-secondary)] flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-[#3A71A4]" />
            TypeScript 100% Strict
          </span>
        </div>

        {/* Copyright */}
        <div className="text-xs font-mono text-[var(--text-muted)] text-center sm:text-right">
          © {new Date().getFullYear()} {PORTFOLIO_DATA.profile.name} ({PORTFOLIO_DATA.profile.alias}). All rights reserved.
        </div>

      </div>
    </footer>
  );
};

