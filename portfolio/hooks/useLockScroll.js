"use client";
import { useEffect } from "react";

export function useLockScroll(isLocked) {
  useEffect(
    function lockBodyScroll() {
      if (!isLocked) return;
      const previous = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return function restoreBodyScroll() {
        document.body.style.overflow = previous;
      };
    },
    [isLocked]
  );
}
