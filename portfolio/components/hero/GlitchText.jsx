"use client";
import { useRef } from "react";
import { useInView } from "motion/react";
import { useGlitch } from "@/hooks/useGlitch";
import { GLITCH } from "@/config/motion";

export default function GlitchText({ text, tone = "default" }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const { display, isActive } = useGlitch(text, GLITCH, isInView);

  return (
    <span ref={ref} className="glitch" data-text={text} data-tone={tone} data-active={isActive} aria-label={text}>
      <span aria-hidden>{display}</span>
    </span>
  );
}