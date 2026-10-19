"use client";
import { useRef } from "react";
import { useCursorTrail } from "@/hooks/useCursorTrail";

export default function CursorOrbit() {
  const coreRef = useRef(null);
  const ringRef = useRef(null);
  useCursorTrail(coreRef, ringRef);

  return (
    <div className="cursor-layer" aria-hidden>
      <span ref={ringRef} className="cursor-ring" data-visible="false" data-over="false" />
      <span ref={coreRef} className="cursor-core" data-visible="false" data-over="false" />
    </div>
  );
}
