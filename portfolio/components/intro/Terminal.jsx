"use client";
import { useRef } from "react";
import { useInView } from "motion/react";
import { useTypewriter } from "@/hooks/useTypewriter";
import { TYPEWRITER } from "@/config/motion";
import TerminalLine from "./TerminalLine";

const WINDOW_DOTS = ["dot-1", "dot-2", "dot-3"];

export default function Terminal({ lines }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const { visibleLines, isDone } = useTypewriter(lines, isInView, TYPEWRITER);
  const lastIndex = visibleLines.length - 1;

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-950 shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        {WINDOW_DOTS.map(function renderDot(id) {
          return <span key={id} className="size-2.5 rounded-full bg-white/20" />;
        })}
        <span className="ml-3 font-mono text-xs text-white/40">alif@portfolio ~</span>
      </div>
      <div className="min-h-72 space-y-1.5 p-5 font-mono text-[13px] leading-relaxed sm:text-sm">
        {visibleLines.map(function renderLine(line, index) {
          return <TerminalLine key={index} line={line} showCursor={!isDone && index === lastIndex} />;
        })}
        {isDone && <TerminalLine line={{ type: "cmd", text: "" }} showCursor />}
      </div>
    </div>
  );
}