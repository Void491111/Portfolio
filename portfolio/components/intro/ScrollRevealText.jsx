"use client";
import { useRef } from "react";
import { useScroll } from "motion/react";
import ScrollWord from "./ScrollWord";
import { SCROLL_TEXT } from "@/config/motion";

export default function ScrollRevealText({ text, className = "" }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: SCROLL_TEXT.offset });
  const words = text.split(" ");

  return (
    <p ref={containerRef} className={className}>
      {words.map(function renderWord(word, index) {
        const start = index / words.length;
        const end = start + 1 / words.length;
        return (
          <ScrollWord key={`${word}-${index}`} progress={scrollYProgress} range={[start, end]}>
            {word}
          </ScrollWord>
        );
      })}
    </p>
  );
}