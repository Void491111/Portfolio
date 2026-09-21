"use client";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

export function useScrollHide(threshold) {
  const { scrollY } = useScroll();
  const [isHidden, setIsHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", function handleScroll(current) {
    const previous = scrollY.getPrevious() ?? 0;
    setIsHidden(current > previous && current > threshold);
  });

  return isHidden;
}
