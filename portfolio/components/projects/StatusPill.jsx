import { STATUS_TONES, STATUS_DEFAULT_TONE } from "@/config/status";

const BASE_CLASS = "rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider backdrop-blur-md";

export default function StatusPill({ label }) {
  if (!label) return null;
  const tone = STATUS_TONES[label] ?? STATUS_DEFAULT_TONE;
  return <span className={`${BASE_CLASS} ${tone}`}>{label}</span>;
}