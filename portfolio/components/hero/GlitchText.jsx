"use client";
import { useGlitch } from "@/hooks/useGlitch";
import { GLITCH } from "@/config/motion";

export default function GlitchText({ text }) {
  const { display, isActive } = useGlitch(text, GLITCH);
  return (
    <span className="glitch" data-text={text} data-active={isActive} aria-label={text}>
      <span aria-hidden>{display}</span>
    </span>
  );
}