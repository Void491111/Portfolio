"use client";
import { motion } from "motion/react";
import { HEARTBEAT } from "@/config/motion";

export default function StatusBadge({ label }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs text-neutral-600 backdrop-blur">
      <span className="relative flex size-2">
        <motion.span
          className="absolute inset-0 rounded-full bg-neutral-950"
          animate={HEARTBEAT.ring}
          transition={HEARTBEAT.ringTransition}
        />
        <motion.span
          className="relative size-2 rounded-full bg-neutral-950"
          animate={HEARTBEAT.beat}
          transition={HEARTBEAT.beatTransition}
        />
      </span>
      {label}
    </span>
  );
}
