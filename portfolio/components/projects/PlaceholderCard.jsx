import { PLACEHOLDER } from "@/config/projects";

export default function PlaceholderCard() {
  return (
    <div className="flex h-full min-h-56 flex-col justify-between rounded-2xl border border-dashed border-neutral-300 bg-white/40 p-5 backdrop-blur-md">
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-medium text-neutral-400">{PLACEHOLDER.title}</h3>
        <span className="rounded-full border border-neutral-200/70 bg-white/60 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-neutral-400 backdrop-blur-md">
          {PLACEHOLDER.label}
        </span>
      </div>
      <p className="mt-3 text-sm text-neutral-400">{PLACEHOLDER.body}</p>
      <span aria-hidden className="mt-auto pt-5 font-mono text-2xl text-neutral-200">
        {"+"}
      </span>
    </div>
  );
}