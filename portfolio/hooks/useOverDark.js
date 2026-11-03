"use client";
import { useEffect, useState } from "react";

export function useOverDark(selector, offset) {
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(
    function watchDarkPanel() {
      const target = document.querySelector(selector);
      if (!target) return;

      let observer = null;
      let frame = 0;

      function handleIntersect(entries) {
        setIsOverDark(entries[0].isIntersecting);
      }

      function buildObserver() {
        if (observer) observer.disconnect();
        const bottom = Math.max(window.innerHeight - offset, 0);
        observer = new IntersectionObserver(handleIntersect, {
          rootMargin: "0px 0px -" + bottom + "px 0px",
        });
        observer.observe(target);
      }

      function requestRebuild() {
        if (frame) return;
        frame = requestAnimationFrame(function rebuildObserver() {
          frame = 0;
          buildObserver();
        });
      }

      buildObserver();
      window.addEventListener("resize", requestRebuild);

      return function stopWatching() {
        window.removeEventListener("resize", requestRebuild);
        if (frame) cancelAnimationFrame(frame);
        if (observer) observer.disconnect();
      };
    },
    [selector, offset]
  );

  return isOverDark;
}
