"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-50 pointer-events-none bg-slate-950/40 backdrop-blur-xs"
      aria-hidden="true"
    >
      {/* Dynamic Mana / Energy Progress Line */}
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-400 shadow-[0_0_14px_rgba(56,189,248,0.85)] relative"
        style={{ scaleX }}
      >
        {/* Leading edge telemetry glow pip */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#ffffff,0_0_16px_rgba(16,185,129,0.9)] opacity-90" />
      </motion.div>
    </div>
  );
};
