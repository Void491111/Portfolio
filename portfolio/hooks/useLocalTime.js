"use client";
import { useEffect, useState } from "react";
import { formatTime } from "@/lib/time";

export function useLocalTime(timeZone, intervalMs) {
  const [time, setTime] = useState(null);

  useEffect(
    function startClock() {
      function tick() {
        setTime(formatTime(new Date(), timeZone));
      }
      tick();
      const timer = setInterval(tick, intervalMs);
      return function stopClock() {
        clearInterval(timer);
      };
    },
    [timeZone, intervalMs]
  );

  return time;
}
