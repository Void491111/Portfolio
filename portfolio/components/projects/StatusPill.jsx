const PILL_CLASS =
  "rounded-full border border-neutral-200/70 bg-white/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neutral-500 backdrop-blur-md";

export default function StatusPill({ label }) {
  if (!label) return null;
  return <span className={PILL_CLASS}>{label}</span>;
}