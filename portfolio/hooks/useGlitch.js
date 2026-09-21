"use client";
import { useEffect, useState } from "react";

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function scrambleText(text, progress, chars) {
  const revealCount = Math.floor(text.length * progress);
  return text
    .split("")
    .map(function scrambleChar(char, index) {
      if (char === " " || index < revealCount) return char;
      return chars[Math.floor(Math.random() * chars.length)];
    })
    .join("");
}

export function useGlitch(text, config) {
  const [display, setDisplay] = useState(text);
  const [isActive, setIsActive] = useState(false);

  useEffect(
    function scheduleGlitch() {
      let loopTimer;
      let frameTimer;

      function queueNext() {
        loopTimer = setTimeout(runGlitch, randomBetween(config.minDelay, config.maxDelay));
      }

      function runGlitch() {
        const start = performance.now();
        setIsActive(true);

        function step() {
          const progress = Math.min(1, (performance.now() - start) / config.duration);
          setDisplay(scrambleText(text, progress, config.chars));
          if (progress < 1) {
            frameTimer = setTimeout(step, config.frameRate);
            return;
          }
          setIsActive(false);
          queueNext();
        }

        step();
      }

      loopTimer = setTimeout(runGlitch, config.initialDelay);

      return function clearGlitch() {
        clearTimeout(loopTimer);
        clearTimeout(frameTimer);
      };
    },
    [text, config]
  );

  return { display, isActive };
}