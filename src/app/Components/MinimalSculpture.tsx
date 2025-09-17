"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type MinimalSculptureProps = {
  className?: string;
  accent?: "teal" | "amber" | "violet";
  glow?: boolean;
};

const accentConfigs = {
  teal: {
    glow: "from-cyan-500/40 via-emerald-400/10 to-transparent",
    sheen: "from-cyan-300/80 via-cyan-200/10 to-transparent",
  },
  amber: {
    glow: "from-amber-400/40 via-orange-500/20 to-transparent",
    sheen: "from-amber-200/70 via-orange-100/10 to-transparent",
  },
  violet: {
    glow: "from-fuchsia-400/40 via-purple-500/10 to-transparent",
    sheen: "from-fuchsia-200/80 via-purple-100/10 to-transparent",
  },
};

const floatingTransition = {
  duration: 8,
  repeat: Infinity,
  repeatType: "mirror" as const,
  ease: "easeInOut" as const,
};

export function MinimalSculpture({ className = "", accent = "teal", glow = true }: MinimalSculptureProps) {
  const accentPalette = useMemo(() => accentConfigs[accent], [accent]);

  return (
    <motion.div
      animate={{ y: [-12, 12] }}
      transition={floatingTransition}
      className={`relative isolate aspect-square w-full max-w-[520px] ${className}`.trim()}
    >
      {glow && (
        <div
          className={`absolute inset-10 -z-20 rounded-[52%] bg-gradient-to-br ${accentPalette.glow} blur-3xl opacity-70`}
        />
      )}
      <div className="absolute inset-0 -z-10 rounded-[56%] bg-gradient-to-br from-slate-900 via-black to-slate-950" />
      <div className="absolute inset-4 rounded-[48%] bg-gradient-to-br from-white/4 via-white/0 to-white/0 opacity-80" />
      <div
        className="absolute inset-8 rounded-[46%] border border-white/10 bg-slate-950/60 shadow-[0_40px_120px_-40px_rgba(15,23,42,0.8)] backdrop-blur-xl"
      />
      <div
        className="absolute inset-8 rounded-[46%]"
        style={{
          background:
            "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.25), transparent 65%), " +
            "radial-gradient(circle at 75% 65%, rgba(255,255,255,0.18), transparent 60%)",
          mixBlendMode: "screen",
          opacity: 0.9,
        }}
      />
      <div
        className="absolute inset-10 rounded-[44%]"
        style={{
          background: "repeating-radial-gradient(circle at center, rgba(255,255,255,0.16) 0px, rgba(255,255,255,0.16) 14px, transparent 18px, transparent 32px)",
          WebkitMaskImage:
            "radial-gradient(circle at center, rgba(0,0,0,0.95) 25%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0) 70%)",
          maskImage:
            "radial-gradient(circle at center, rgba(0,0,0,0.95) 25%, rgba(0,0,0,0.6) 55%, rgba(0,0,0,0) 70%)",
          opacity: 0.6,
        }}
      />
      <div
        className="absolute inset-16 rounded-[40%]"
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          WebkitMaskImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.8) 0px, rgba(0,0,0,0.8) 10px, transparent 12px, transparent 22px)",
          maskImage:
            "repeating-linear-gradient(0deg, rgba(0,0,0,0.8) 0px, rgba(0,0,0,0.8) 10px, transparent 12px, transparent 22px)",
          opacity: 0.7,
        }}
      />
      <div
        className={`absolute inset-20 rounded-[38%] bg-gradient-to-br ${accentPalette.sheen} opacity-80 mix-blend-screen`}
      />
      <div className="absolute inset-[22%] rounded-[36%] border border-white/10 opacity-30" />
      <div className="absolute inset-[30%] rounded-[32%] border border-white/5 opacity-20" />
      <motion.div
        className="absolute inset-[18%] rounded-[38%] border border-white/5"
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{
          boxShadow: "0 25px 80px rgba(15, 23, 42, 0.45)",
          background:
            "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(2,6,23,0.95)), " +
            "radial-gradient(circle at 65% 25%, rgba(255,255,255,0.12), transparent 60%)",
        }}
      />
    </motion.div>
  );
}

export default MinimalSculpture;
