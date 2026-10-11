const NODE_CLASS =
  "flex -translate-x-1/2 -translate-y-1/2 items-center justify-center whitespace-nowrap rounded-full border border-neutral-200/70 bg-white/70 px-2 py-1 font-mono text-[10px] text-neutral-600 shadow-[0_2px_10px_rgba(0,0,0,0.05)] backdrop-blur-md sm:px-3 sm:py-1.5 sm:text-[11px]";

export default function OrbitNode({ label, angle, duration, counterClass }) {
  return (
    <span className="orbit-arm absolute left-1/2 top-1/2" style={{ "--orbit-a": angle + "deg" }}>
      <span className={counterClass} style={{ "--orbit-duration": duration, display: "block" }}>
        <span className={NODE_CLASS}>{label}</span>
      </span>
    </span>
  );
}
