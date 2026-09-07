import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Shield, Zap, ChevronDown } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface HeroSectionProps {
  onReplayIntro: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onReplayIntro }) => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-12 lg:py-20">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#02070c] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* LEFT COLUMN: Glint Typographic Punch & Tensura System Telemetry */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
        >
          
          {/* Section 1 Marker from Image 3 */}
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/40 text-emerald-400 text-xs font-mono tracking-widest shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>SECTION 1: PROFESSIONAL PROFILE</span>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/40 text-sky-300 text-xs font-mono">
              <span>{PORTFOLIO_DATA.profile.title}</span>
            </div>
          </div>

          {/* Glint-inspired Massive Headline */}
          <div className="space-y-2">
            <div className="font-mono text-xs text-sky-400 tracking-[0.25em] uppercase">
              « {PORTFOLIO_DATA.profile.name} • {PORTFOLIO_DATA.profile.title} »
            </div>
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08] uppercase">
              <span className="text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.4)]">
                ENGINEERING
              </span>{" "}
              IS MORE CRITICAL THAN CONVENTION
            </h1>
          </div>

          {/* Existence Value (EP) Bar from Tensura Concept */}
          <div className="w-full max-w-lg space-y-2 pt-1 pb-1">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-slate-400">Existence Value (EP):</span>
              <span className="text-amber-300 font-bold tracking-wider drop-shadow-[0_0_8px_rgba(255,210,77,0.6)]">
                {PORTFOLIO_DATA.profile.existenceValue}
              </span>
            </div>
            {/* Cybernetic Energy Bar */}
            <div className="relative w-full h-3.5 bg-slate-950 border border-sky-500/40 rounded-full p-0.5 overflow-hidden shadow-[inset_0_0_10px_rgba(14,165,233,0.3)]">
              <div
                className="h-full bg-gradient-to-r from-sky-500 via-emerald-400 to-amber-400 rounded-full shadow-[0_0_12px_rgba(56,189,248,0.8)] relative"
                style={{ width: `${PORTFOLIO_DATA.profile.epProgress}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
              </div>
            </div>
          </div>

          {/* Subtitle with Left Border Accent from Glint layout */}
          <div className="border-l-4 border-emerald-500 pl-4 py-1 max-w-2xl">
            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              {PORTFOLIO_DATA.profile.bio}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            {/* Glint-style Emerald Button */}
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold font-mono text-sm tracking-wider uppercase transition-all duration-200 shadow-[0_0_25px_rgba(16,185,129,0.45)] hover:scale-105 active:scale-95 group"
            >
              <span>EXPLORE PROJECTS</span>
              <span className="w-6 h-6 rounded bg-slate-950 text-emerald-400 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </a>

            {/* Replay Intro Button */}
            <button
              type="button"
              onClick={onReplayIntro}
              className="inline-flex items-center gap-2.5 px-6 py-4 rounded-lg border border-amber-400/40 bg-amber-950/20 hover:bg-amber-950/40 text-amber-300 hover:text-amber-200 font-mono text-sm tracking-wide transition-all duration-200 shadow-[0_0_15px_rgba(255,210,77,0.2)] hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>Replay Raphael Intro</span>
            </button>
          </div>

          {/* Quick Stats Pills */}
          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
            <span className="px-3 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              S-Rank Polyglot Runner
            </span>
            <span className="px-3 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-sky-400" />
              Zero-Dependency Test Engine
            </span>
            <span className="px-3 py-1 rounded bg-slate-900/80 border border-slate-800 text-slate-300 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              Continuous Doc Sync
            </span>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Glint Hero Cutout Framed in Great Sage Concentric Rings */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex items-center justify-center relative"
        >
          
          {/* Outer Rotating Great Sage Concentric Rings */}
          <div className="relative w-[340px] sm:w-[420px] aspect-square flex items-center justify-center">
            
            {/* Concentric Golden & Cyan Magic Rings */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky-400/30 animate-spin" style={{ animationDuration: "35s" }} />
            <div className="absolute inset-4 rounded-full border-2 border-emerald-400/40 animate-spin" style={{ animationDuration: "25s", animationDirection: "reverse" }} />
            <div className="absolute inset-8 rounded-full border border-amber-400/50 shadow-[0_0_30px_rgba(255,210,77,0.25)]" />

            {/* Glowing Backdrop Aura */}
            <div className="absolute inset-12 rounded-full bg-gradient-to-b from-sky-500/20 via-emerald-500/15 to-transparent blur-xl" />

            {/* High-Resolution User Portrait Cutout with Smooth Bottom Fade */}
            <div className="relative w-[280px] sm:w-[340px] h-[380px] sm:h-[460px] flex items-end justify-center z-10 [mask-image:linear-gradient(to_bottom,black_65%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_65%,transparent_98%)]">
              <Image
                src="/images/profile.png"
                alt={`${PORTFOLIO_DATA.profile.name} - ${PORTFOLIO_DATA.profile.title}`}
                width={500}
                height={800}
                priority
                className="w-auto h-full max-h-[460px] object-contain drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]"
              />
            </div>

            {/* Floating RPG Status Badges */}
            <div className="absolute -top-2 right-2 bg-slate-950/90 border border-emerald-500/50 rounded-xl px-3 py-1.5 text-emerald-300 font-mono text-xs shadow-[0_0_15px_rgba(16,185,129,0.3)] backdrop-blur-md z-20 flex items-center gap-1.5 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{PORTFOLIO_DATA.profile.rank}</span>
            </div>

            <div className="absolute bottom-6 -left-4 bg-slate-950/90 border border-sky-500/50 rounded-xl px-3 py-1.5 text-sky-300 font-mono text-xs shadow-[0_0_15px_rgba(56,189,248,0.3)] backdrop-blur-md z-20 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span>UniversalTester Core</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex"
      >
        <a
          href="#skills"
          className="group inline-flex flex-col items-center gap-1 text-slate-500 hover:text-emerald-400 transition-colors"
          aria-label="Scroll to explore archives"
        >
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase group-hover:tracking-[0.25em] transition-all">
            Scroll to Explore Archives
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="p-1 rounded-full border border-slate-800 bg-slate-950/80 group-hover:border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.15)]"
          >
            <ChevronDown className="w-3.5 h-3.5 text-emerald-400" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
};
