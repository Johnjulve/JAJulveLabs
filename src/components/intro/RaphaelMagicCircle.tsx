import React from "react";
import styles from "./raphael.module.css";

interface RaphaelMagicCircleProps {
  isExiting?: boolean;
}

export const RaphaelMagicCircle: React.FC<RaphaelMagicCircleProps> = ({ isExiting = false }) => {
  // Generate 12 radiant rays
  const rays = Array.from({ length: 12 }, (_, i) => {
    const angle = (i * 360) / 12;
    return (
      <line
        key={`ray-${i}`}
        x1="250"
        y1="100"
        x2="250"
        y2="140"
        stroke="#ffd24d"
        strokeWidth="1.5"
        strokeOpacity="0.7"
        transform={`rotate(${angle} 250 250)`}
      />
    );
  });

  // Generate 12-sided star points: alternating outer (r=180) and inner (r=148)
  const starPoints = Array.from({ length: 24 }, (_, i) => {
    const r = i % 2 === 0 ? 180 : 148;
    const angle = (i * 360) / 24 - 90;
    const rad = (angle * Math.PI) / 180;
    const x = 250 + r * Math.cos(rad);
    const y = 250 + r * Math.sin(rad);
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");

  return (
    <div className={`${styles.circleWrapper} ${isExiting ? styles.circleExiting : ""}`}>
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          {/* Radial Gradients */}
          <radialGradient id="coreGlowGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="25%" stopColor="#ffd700" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#38bdf8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#091a29" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fff2a8" />
            <stop offset="50%" stopColor="#ffd24d" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>

          {/* Clockwise circular path for outer runic text */}
          <path
            id="outerRunePath"
            d="M 250,250 m -206,0 a 206,206 0 1,1 412,0 a 206,206 0 1,1 -412,0"
          />

          {/* Counter-clockwise circular path for inner skill text */}
          <path
            id="innerSkillPath"
            d="M 250,250 m 126,0 a 126,126 0 1,0 -252,0 a 126,126 0 1,0 252,0"
          />
        </defs>

        {/* STATIC FOUNDATION RINGS */}
        {/* Outermost rim */}
        <circle cx="250" cy="250" r="242" fill="none" stroke="#ffd24d" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="250" cy="250" r="236" fill="none" stroke="url(#goldGradient)" strokeWidth="2.5" strokeOpacity="0.9" />
        <circle
          cx="250"
          cy="250"
          r="225"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          strokeOpacity="0.6"
        />

        {/* Outer text containment boundary */}
        <circle cx="250" cy="250" r="192" fill="none" stroke="#ffd24d" strokeWidth="1.5" strokeOpacity="0.75" />

        {/* 12-POINTED STAR POLYGON & INNER SACRED GEOMETRY */}
        <polygon
          points={starPoints}
          fill="none"
          stroke="#ffd24d"
          strokeWidth="1.5"
          strokeOpacity="0.8"
        />
        <circle cx="250" cy="250" r="158" fill="none" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5" strokeDasharray="3 4" />

        {/* ROTATING LAYER 1: RADIANT RAYS */}
        <g className={styles.radiantRays}>
          {rays}
          {/* Accent secondary small star */}
          <polygon
            points={starPoints}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="0.75"
            strokeOpacity="0.4"
            transform="rotate(15 250 250)"
          />
        </g>

        {/* ROTATING LAYER 2: OUTER RUNIC TEXT RING (22s Clockwise) */}
        <g className={styles.outerRunicRing}>
          <text
            fill="#ffe885"
            fontSize="10"
            fontFamily="var(--font-geist-mono), monospace"
            letterSpacing="2.5"
            fontWeight="bold"
            style={{ textTransform: "uppercase" }}
          >
            <textPath href="#outerRunePath" startOffset="0%">
              « ULTIMATE SKILL : RAPHAEL » • « LORD OF WISDOM » • « VOICE OF THE WORLD » • « ANALYSIS PROTOCOL » •
            </textPath>
          </text>
        </g>

        {/* Inner boundary circles */}
        <circle cx="250" cy="250" r="140" fill="none" stroke="#ffd24d" strokeWidth="1.5" strokeOpacity="0.85" />
        <circle cx="250" cy="250" r="114" fill="none" stroke="#ffd24d" strokeWidth="1" strokeOpacity="0.6" />

        {/* ROTATING LAYER 3: INNER SKILL TEXT RING (28s Counter-Clockwise) */}
        <g className={styles.innerSkillRing}>
          <text
            fill="#7dd3fc"
            fontSize="8.5"
            fontFamily="var(--font-geist-mono), monospace"
            letterSpacing="2"
            fontWeight="bold"
            style={{ textTransform: "uppercase" }}
          >
            <textPath href="#innerSkillPath" startOffset="0%">
              « FULL STACK ARCHITECTURE » • « STRICT TYPE SAFETY » • « PERFORMANCE ENGINE » •
            </textPath>
          </text>
        </g>

        {/* Core containment rings */}
        <circle cx="250" cy="250" r="82" fill="none" stroke="#ffd24d" strokeWidth="1.5" strokeOpacity="0.75" strokeDasharray="6 3" />
        <circle cx="250" cy="250" r="62" fill="none" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.6" />
        <circle cx="250" cy="250" r="48" fill="none" stroke="#ffd24d" strokeWidth="2" strokeOpacity="0.9" />

        {/* PULSING CENTRAL CORE (1.8s Pulse) */}
        <g className={styles.coreGlow}>
          <circle cx="250" cy="250" r="42" fill="url(#coreGlowGrad)" />
          {/* Inner core glyph */}
          <circle cx="250" cy="250" r="14" fill="#ffffff" opacity="0.9" />
          <polygon
            points="250,238 259,250 250,262 241,250"
            fill="#ffd24d"
          />
        </g>
      </svg>
    </div>
  );
};
