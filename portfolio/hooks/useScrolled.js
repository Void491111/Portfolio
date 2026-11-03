"use client";
import { useEffect, useState } from "react";

export function useScrolled(threshold) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(
    function watchScroll() {
      let frame = 0;

      function readScroll() {
        frame = 0;
        setIsScrolled(window.scrollY > threshold);
      }

      function requestRead() {
        if (frame) return;
        frame = requestAnimationFrame(readScroll);
      }

      readScroll();
      window.addEventListener("scroll", requestRead, { passive: true });

      return function removeScrollListener() {
        window.removeEventListener("scroll", requestRead);
        if (frame) cancelAnimationFrame(frame);
      };
    },
    [threshold]
  );

  return isScrolled;
}
