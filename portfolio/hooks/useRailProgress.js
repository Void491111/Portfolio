"use client";
import { useScroll, useSpring } from "motion/react";

export function useRailProgress(ref) {
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  return useSpring(scrollYProgress, { stiffness: 90, damping: 26, restDelta: 0.001 });
}
