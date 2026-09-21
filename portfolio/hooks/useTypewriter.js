"use client";
import { useEffect, useState } from "react";

function getVisibleLines(lines, lineIndex, charIndex) {
  return lines.slice(0, lineIndex + 1).map(function toVisibleLine(line, index) {
    if (index !== lineIndex || line.type !== "cmd") return line;
    return { ...line, text: line.text.slice(0, charIndex) };
  });
}

export function useTypewriter(lines, isActive, config) {
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const isDone = lineIndex >= lines.length;

  useEffect(
    function stepTypewriter() {
      if (!isActive || isDone) return;
      const line = lines[lineIndex];
      const isLineComplete = line.type !== "cmd" || charIndex >= line.text.length;
      const delay = isLineComplete ? config.lineDelay : config.charDelay;

      const timer = setTimeout(function advanceTypewriter() {
        if (isLineComplete) {
          setLineIndex(function nextLine(index) {
            return index + 1;
          });
          setCharIndex(0);
          return;
        }
        setCharIndex(function nextChar(index) {
          return index + 1;
        });
      }, delay);

      return function clearStep() {
        clearTimeout(timer);
      };
    },
    [isActive, isDone, lineIndex, charIndex, lines, config]
  );

  return { visibleLines: getVisibleLines(lines, lineIndex, charIndex), isDone };
}