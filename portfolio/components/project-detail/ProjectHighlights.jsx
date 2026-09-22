import Reveal from "@/components/ui/Reveal";

export default function ProjectHighlights({ items = [] }) {
  if (!items.length) return null;
  return (
    <Reveal delay={0.18}>
      <ul className="mt-8 grid gap-3 sm:grid-cols-3">
        {items.map(function renderHighlight(item, index) {
          return (
            <li key={item} className="rounded-xl border border-neutral-200/70 bg-white/60 p-4 text-sm text-neutral-700 backdrop-blur-md">
              <span className="mb-2 block font-mono text-[10px] text-neutral-400">{String(index + 1).padStart(2, "0")}</span>
              {item}
            </li>
          );
        })}
      </ul>
    </Reveal>
  );
}