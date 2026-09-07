import React from "react";
import { Terminal, Shield } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#02070c] border-t border-slate-900 text-slate-400 py-12 px-4 sm:px-8 relative">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Brand & Version Badge */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-emerald-400/80 bg-slate-950 flex items-center justify-center shadow-[0_0_12px_rgba(16,185,129,0.3)] shrink-0">
            <span className="text-emerald-400 font-bold font-mono text-[10px]">GS</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white font-mono text-sm tracking-wider">
                JAJULVELABS
              </span>
              <span className="text-[10px] font-mono font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-500/40 px-2.5 py-0.5 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                v1.1.0
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              Voice of the World Protocol • Next.js 15
            </span>
          </div>
        </div>

        {/* System Badges */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="text-slate-400 flex items-center gap-1">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            Zero-Leak Clean Architecture
          </span>
          <span className="text-slate-400 select-none">•</span>
          <span className="text-slate-400 flex items-center gap-1">
            <Terminal className="w-3.5 h-3.5 text-sky-400" />
            TypeScript 100% Strict
          </span>
        </div>

        {/* Copyright */}
        <div className="text-xs font-mono text-slate-400 text-center sm:text-right">
          © {new Date().getFullYear()} Johnjulve (JAJulveLabs). All rights reserved.
        </div>

      </div>
    </footer>
  );
};
