"use client";
import { useEffect, useState } from "react";

export function useOverDark(ref, selector) {
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(
    function watchOverlap() {
      let frame = 0;

      function check() {
        frame = 0;
        const node = ref.current;
        const target = document.querySelector(selector);
        if (!node || !target) return;
        const a = node.getBoundingClientRect();
        const b = target.getBoundingClientRect();
        setIsOverDark(a.bottom > b.top && a.top < b.bottom && a.right > b.left && a.left < b.right);
      }

      function schedule() {
        if (frame) return;
        frame = requestAnimationFrame(check);
      }

      check();
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);

      return function stopWatching() {
        cancelAnimationFrame(frame);
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
      };
    },
    [ref, selector]
  );

  return isOverDark;
}
