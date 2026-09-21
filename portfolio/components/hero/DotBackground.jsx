"use client";
import { useRef } from "react";
import { useDotGrid } from "@/hooks/useDotGrid";
import { DOT_GRID } from "@/config/motion";

export default function DotBackground() {
  const canvasRef = useRef(null);
  useDotGrid(canvasRef, DOT_GRID);
  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
    />
  );
}