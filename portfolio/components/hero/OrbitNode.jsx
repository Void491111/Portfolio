const NODE_CLASS =
  "flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200/70 bg-white/70 px-3 py-1.5 font-mono text-[11px] text-neutral-600 shadow-[0_2px_10px_rgba(0,0,0,0.05)] backdrop-blur-md";

export default function OrbitNode({ label, angle, radius, duration, counterClass }) {
  const place = "rotate(" + angle + "deg) translateY(-" + radius + "px) rotate(" + -angle + "deg)";
  return (
    <span className="absolute left-1/2 top-1/2" style={{ transform: place }}>
      <span className={counterClass} style={{ "--orbit-duration": duration, display: "block" }}>
        <span className={NODE_CLASS}>{label}</span>
      </span>
    </span>
  );
}
