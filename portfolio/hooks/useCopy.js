"use client";
import { useEffect, useState } from "react";

export function useCopy(resetMs) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(
    function scheduleReset() {
      if (!isCopied) return;
      const timer = setTimeout(function resetCopied() {
        setIsCopied(false);
      }, resetMs);
      return function clearReset() {
        clearTimeout(timer);
      };
    },
    [isCopied, resetMs]
  );

  async function copy(text) {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    } catch {
      setIsCopied(false);
    }
  }

  return { isCopied, copy };
}
