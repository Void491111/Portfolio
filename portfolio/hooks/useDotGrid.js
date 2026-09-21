"use client";
import { useEffect } from "react";

const OFFSCREEN = -9999;

function getGrid(width, height, gap) {
  return { cols: Math.ceil(width / gap), rows: Math.ceil(height / gap) };
}

function dotPosition(index, gap) {
  return gap / 2 + index * gap;
}

function paintBase(ctx, grid, config) {
  ctx.fillStyle = `rgba(${config.color}, ${config.baseAlpha})`;
  ctx.beginPath();
  for (let col = 0; col < grid.cols; col++) {
    for (let row = 0; row < grid.rows; row++) {
      const x = dotPosition(col, config.gap);
      const y = dotPosition(row, config.gap);
      ctx.moveTo(x + config.radius, y);
      ctx.arc(x, y, config.radius, 0, Math.PI * 2);
    }
  }
  ctx.fill();
}

function getRange(center, influence, gap, max) {
  const start = Math.max(0, Math.floor((center - influence) / gap));
  const end = Math.min(max - 1, Math.ceil((center + influence) / gap));
  return { start, end };
}

export function useDotGrid(canvasRef, config) {
  useEffect(
    function setupDotGrid() {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      const base = document.createElement("canvas");
      const baseCtx = base.getContext("2d");
      const size = { width: 0, height: 0 };
      const target = { x: OFFSCREEN, y: OFFSCREEN };
      const pointer = { x: OFFSCREEN, y: OFFSCREEN };
      const state = { grid: { cols: 0, rows: 0 }, frameId: 0, isVisible: true, isRunning: false };

      function drawActiveDot(x, y) {
        const distance = Math.hypot(x - pointer.x, y - pointer.y);
        const strength = 1 - distance / config.influence;
        if (strength <= 0) return;
        const alpha = config.baseAlpha + strength * (1 - config.baseAlpha);
        const radius = config.radius + strength * config.radius * 1.5;
        ctx.fillStyle = `rgba(${config.color}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      function drawNearby() {
        const cols = getRange(pointer.x, config.influence, config.gap, state.grid.cols);
        const rows = getRange(pointer.y, config.influence, config.gap, state.grid.rows);
        for (let col = cols.start; col <= cols.end; col++) {
          for (let row = rows.start; row <= rows.end; row++) {
            drawActiveDot(dotPosition(col, config.gap), dotPosition(row, config.gap));
          }
        }
      }

    function render() {
        if (size.width <= 0 || size.height <= 0) return;
        ctx.clearRect(0, 0, size.width, size.height);
        ctx.drawImage(base, 0, 0, size.width, size.height);
        if (pointer.x !== OFFSCREEN) drawNearby();
      }

      function isSettled() {
        return Math.abs(target.x - pointer.x) < config.settle && Math.abs(target.y - pointer.y) < config.settle;
      }

      function tick() {
        pointer.x += (target.x - pointer.x) * config.ease;
        pointer.y += (target.y - pointer.y) * config.ease;
        render();
        if (isSettled() || !state.isVisible) {
          state.isRunning = false;
          return;
        }
        state.frameId = requestAnimationFrame(tick);
      }

      function start() {
        if (state.isRunning || !state.isVisible) return;
        state.isRunning = true;
        state.frameId = requestAnimationFrame(tick);
      }

      function stop() {
        cancelAnimationFrame(state.frameId);
        state.isRunning = false;
      }

    function resize() {
        const rect = canvas.getBoundingClientRect();
        if (rect.width <= 0 || rect.height <= 0) return;
        const dpr = window.devicePixelRatio || 1;
        size.width = rect.width;
        size.height = rect.height;
        canvas.width = base.width = rect.width * dpr;
        canvas.height = base.height = rect.height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        baseCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
        state.grid = getGrid(rect.width, rect.height, config.gap);
        paintBase(baseCtx, state.grid, config);
        render();
      }

      function handlePointerMove(event) {
        if (!state.isVisible) return;
        const rect = canvas.getBoundingClientRect();
        target.x = event.clientX - rect.left;
        target.y = event.clientY - rect.top;
        if (pointer.x === OFFSCREEN) {
          pointer.x = target.x;
          pointer.y = target.y;
        }
        start();
      }

      function handlePointerLeave() {
        target.x = pointer.x = OFFSCREEN;
        target.y = pointer.y = OFFSCREEN;
        render();
      }

      function handleVisibility(entries) {
        state.isVisible = entries[0].isIntersecting;
        if (!state.isVisible) stop();
      }

      const resizeObserver = new ResizeObserver(resize);
      const visibilityObserver = new IntersectionObserver(handleVisibility);
      resizeObserver.observe(canvas);
      visibilityObserver.observe(canvas);
      window.addEventListener("pointermove", handlePointerMove);
      document.documentElement.addEventListener("mouseleave", handlePointerLeave);

      return function cleanupDotGrid() {
        stop();
        resizeObserver.disconnect();
        visibilityObserver.disconnect();
        window.removeEventListener("pointermove", handlePointerMove);
        document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      };
    },
    [canvasRef, config]
  );
}