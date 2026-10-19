"use client";
import { useEffect } from "react";
import { CURSOR } from "@/config/cursor";

export function useCursorTrail(coreRef, ringRef) {
  useEffect(
    function trackPointer() {
      const core = coreRef.current;
      const ring = ringRef.current;
      if (!core || !ring) return;

      const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
      const corePos = { x: target.x, y: target.y };
      const ringPos = { x: target.x, y: target.y };
      const state = { frame: 0, isVisible: false, isOver: false };

      function place(node, x, y) {
        node.style.transform = "translate3d(" + x + "px, " + y + "px, 0) translate(-50%, -50%)";
      }

      function tick() {
        corePos.x += (target.x - corePos.x) * CURSOR.coreEase;
        corePos.y += (target.y - corePos.y) * CURSOR.coreEase;
        ringPos.x += (target.x - ringPos.x) * CURSOR.ringEase;
        ringPos.y += (target.y - ringPos.y) * CURSOR.ringEase;
        place(core, corePos.x, corePos.y);
        place(ring, ringPos.x, ringPos.y);
        state.frame = requestAnimationFrame(tick);
      }

      function setFlag(name, value) {
        core.dataset[name] = String(value);
        ring.dataset[name] = String(value);
      }

      function handleMove(event) {
        target.x = event.clientX;
        target.y = event.clientY;

        if (!state.isVisible) {
          state.isVisible = true;
          setFlag("visible", true);
        }

        const node = event.target;
        const isOver = Boolean(node && node.closest && node.closest(CURSOR.hoverSelector));
        if (isOver !== state.isOver) {
          state.isOver = isOver;
          setFlag("over", isOver);
        }
      }

      function handleLeave() {
        state.isVisible = false;
        setFlag("visible", false);
      }

      window.addEventListener("pointermove", handleMove, { passive: true });
      document.documentElement.addEventListener("mouseleave", handleLeave);
      state.frame = requestAnimationFrame(tick);

      return function stopTracking() {
        cancelAnimationFrame(state.frame);
        window.removeEventListener("pointermove", handleMove);
        document.documentElement.removeEventListener("mouseleave", handleLeave);
      };
    },
    [coreRef, ringRef]
  );
}
