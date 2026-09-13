"use client";

import React, { useState, useEffect } from "react";
import { X, Sparkles, ChevronRight } from "lucide-react";

const RAPHAEL_QUOTES = [
  "« NOTICE » Analyzing visitor telemetry... Full-stack architectures operating at 100% efficiency.",
  "« NOTICE » Recommended inspection: UniversalTester architecture featuring zero-dependency execution.",
  "« NOTICE » All codebases follow strict TypeScript contracts and continuous documentation synchronization.",
  "« NOTICE » E_Botar voting platform is running stable on v4.0.0 architecture.",
  "« NOTICE » Existence Value (EP): Exceeds 1,250,000. System ready for high-scale engineering challenges.",
  "« NOTICE » Voice of the World protocol confirms: All micro-services verified and operational.",
];

export const RaphaelAssistant: React.FC = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  // Auto-collapse dialogue bubble on mobile scroll to maintain viewport clarity
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const handleNextQuote = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setQuoteIndex((prev) => (prev + 1) % RAPHAEL_QUOTES.length);
  };

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <aside
      aria-label="Raphael Wisdom Lord Assistant"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 flex flex-col items-start select-none pointer-events-auto"
    >
      {/* Speech Bubble - Floats directly ABOVE the avatar without displacing it horizontally */}
      {isOpen && (
        <div className="mb-3 relative w-[calc(100vw-2.5rem)] sm:w-80 max-w-[340px] bg-[#040d16]/95 border border-sky-500/40 rounded-2xl p-4 text-xs text-sky-100 shadow-[0_0_25px_rgba(56,189,248,0.25)] backdrop-blur-md animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-sky-950">
            <div className="flex items-center gap-1.5 text-amber-400 font-mono text-[10px] tracking-wider uppercase font-bold">
              <Sparkles className="w-3 h-3 text-amber-400 animate-spin" style={{ animationDuration: "8s" }} />
              <span>VOICE OF THE WORLD</span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-md hover:bg-slate-800/60 transition-colors"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="text-[11px] font-mono leading-relaxed text-slate-200 min-h-[2.5rem]">
            {RAPHAEL_QUOTES[quoteIndex]}
          </div>

          <div className="mt-3 pt-2 border-t border-sky-950 flex items-center justify-between">
            <button
              type="button"
              onClick={handleNextQuote}
              className="inline-flex items-center gap-1 text-[10px] text-amber-400 hover:text-amber-300 font-mono tracking-wide transition-colors group"
            >
              <span>Next Telemetry Insight</span>
              <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <span className="text-[9px] font-mono text-slate-400">
              {quoteIndex + 1}/{RAPHAEL_QUOTES.length}
            </span>
          </div>

          {/* Bubble Tail pointing directly down at the Raphael Core Orb */}
          <div className="absolute -bottom-1.5 left-7 w-3 h-3 bg-[#040d16] border-r border-b border-sky-500/40 rotate-45" />
        </div>
      )}

      {/* MINI RAPHAEL (WISDOM LORD) CORE ORB BUTTON - Locked in position, never shifts sideways */}
      <button
        type="button"
        onClick={toggleOpen}
        className="group relative cursor-pointer focus:outline-none transition-transform active:scale-95"
        title="Wisdom Lord Raphael (Click to toggle telemetry)"
        aria-label="Wisdom Lord Raphael Assistant"
      >
        <div className="w-14 h-14 relative flex items-center justify-center">
          
          {/* Ambient Glow Aura */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/20 via-red-500/25 to-sky-500/20 blur-md group-hover:blur-lg transition-all" />

          {/* SVG Mini Raphael Core Geometry */}
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full drop-shadow-[0_0_18px_rgba(255,210,77,0.5)] transition-transform group-hover:scale-105"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Crimson Wisdom Eye Gradient */}
              <radialGradient id="raphaelEyeGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#ffffff" />
                <stop offset="25%" stopColor="#fca5a5" />
                <stop offset="60%" stopColor="#dc2626" />
                <stop offset="90%" stopColor="#991b1b" />
                <stop offset="100%" stopColor="#450a0a" />
              </radialGradient>

              {/* Gold Ring Gradient */}
              <linearGradient id="raphaelGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fffbeb" />
                <stop offset="50%" stopColor="#ffd24d" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>

            {/* Dark background backing circle */}
            <circle cx="50" cy="50" r="44" fill="#030a12" stroke="#ffd24d" strokeWidth="1" strokeOpacity="0.4" />

            {/* Rotating Outer Runic Ring (Clockwise) */}
            <g className="origin-center animate-spin" style={{ animationDuration: "20s" }}>
              <circle cx="50" cy="50" r="41" fill="none" stroke="url(#raphaelGoldGrad)" strokeWidth="1.5" strokeDasharray="6 3 2 3" />
              {/* Outer cardinal gem pips */}
              <circle cx="50" cy="9" r="1.5" fill="#ffd24d" />
              <circle cx="50" cy="91" r="1.5" fill="#ffd24d" />
              <circle cx="9" cy="50" r="1.5" fill="#ffd24d" />
              <circle cx="91" cy="50" r="1.5" fill="#ffd24d" />
            </g>

            {/* Rotating Middle Ring (Counter-Clockwise) */}
            <g className="origin-center animate-spin" style={{ animationDuration: "14s", animationDirection: "reverse" }}>
              <circle cx="50" cy="50" r="33" fill="none" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.8" />
              {/* 8-pointed mini star lines */}
              <polygon
                points="50,22 53,47 78,50 53,53 50,78 47,53 22,50 47,47"
                fill="none"
                stroke="#ffd24d"
                strokeWidth="0.75"
                strokeOpacity="0.6"
              />
            </g>

            {/* Sacred Inner Boundary */}
            <circle cx="50" cy="50" r="22" fill="none" stroke="#ffd24d" strokeWidth="1.5" />
            <circle cx="50" cy="50" r="19" fill="#05101a" />

            {/* RAPHAEL'S CRIMSON WISDOM CORE (Harmonic Pulse) */}
            <g className="origin-center animate-pulse" style={{ animationDuration: "2s" }}>
              <circle cx="50" cy="50" r="16" fill="url(#raphaelEyeGrad)" />
              {/* Inner Diamond Glint */}
              <polygon
                points="50,38 53,50 50,62 47,50"
                fill="#ffffff"
                opacity="0.95"
              />
              <circle cx="50" cy="50" r="3.5" fill="#ffffff" />
            </g>

            {/* Orbiting Telemetry Sparkle */}
            <g className="origin-center animate-spin" style={{ animationDuration: "6s" }}>
              <circle cx="50" cy="27" r="2" fill="#38bdf8" />
            </g>
          </svg>

          {/* Indicator Badge when bubble is closed */}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center text-[10px] font-bold shadow-[0_0_10px_rgba(255,210,77,0.8)] font-mono animate-bounce">
              !
            </div>
          )}
        </div>
      </button>
    </aside>
  );
};

// Backward compatible export
export const SlimeAssistant = RaphaelAssistant;
