"use client";
import { useEffect } from "react";

const OFFSCREEN = -9999;

function buildDots(width, height, gap) {
  const dots = [];
  for (let x = gap / 2; x < width; x += gap) {
    for (let y = gap / 2; y < height; y += gap) dots.push({ x, y });
  }
  return dots;
}

export function useDotGrid(canvasRef, config) {
  useEffect(
    function setupDotGrid() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const size = { width: 0, height: 0 };
      const target = { x: OFFSCREEN, y: OFFSCREEN };
      const pointer = { x: OFFSCREEN, y: OFFSCREEN };
      let dots = [];
      let frameId = 0;

      function resize() {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();
        size.width = rect.width;
        size.height = rect.height;
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        dots = buildDots(rect.width, rect.height, config.gap);
      }

      function drawDot(dot) {
        const distance = Math.hypot(dot.x - pointer.x, dot.y - pointer.y);
        const strength = Math.max(0, 1 - distance / config.influence);
        const alpha = config.baseAlpha + strength * (1 - config.baseAlpha);
        const radius = config.radius + strength * config.radius * 1.5;
        ctx.fillStyle = `rgba(${config.color}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      function draw() {
        pointer.x += (target.x - pointer.x) * config.ease;
        pointer.y += (target.y - pointer.y) * config.ease;
        ctx.clearRect(0, 0, size.width, size.height);
        dots.forEach(drawDot);
        frameId = requestAnimationFrame(draw);
      }

      function handlePointerMove(event) {
        const rect = canvas.getBoundingClientRect();
        target.x = event.clientX - rect.left;
        target.y = event.clientY - rect.top;
        if (pointer.x === OFFSCREEN) {
          pointer.x = target.x;
          pointer.y = target.y;
        }
      }

      function handlePointerLeave() {
        target.x = pointer.x = OFFSCREEN;
        target.y = pointer.y = OFFSCREEN;
      }

      const observer = new ResizeObserver(resize);
      observer.observe(canvas);
      window.addEventListener("pointermove", handlePointerMove);
      document.documentElement.addEventListener("mouseleave", handlePointerLeave);
      frameId = requestAnimationFrame(draw);

      return function cleanupDotGrid() {
        cancelAnimationFrame(frameId);
        observer.disconnect();
        window.removeEventListener("pointermove", handlePointerMove);
        document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      };
    },
    [canvasRef, config]
  );
}