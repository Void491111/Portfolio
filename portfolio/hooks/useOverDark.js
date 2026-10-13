"use client";
import { useEffect, useState } from "react";

export function useOverDark(selector, rootMargin) {
  const [isOverDark, setIsOverDark] = useState(false);

  useEffect(
    function watchDarkPanel() {
      const target = document.querySelector(selector);
      if (!target) return;

      function handleIntersect(entries) {
        setIsOverDark(entries[0].isIntersecting);
      }

      const observer = new IntersectionObserver(handleIntersect, { rootMargin });
      observer.observe(target);

      return function stopWatching() {
        observer.disconnect();
      };
    },
    [selector, rootMargin]
  );

  return isOverDark;
}
