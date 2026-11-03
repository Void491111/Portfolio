export default function StackIcon({ item }) {
  return (
    <li className="flex shrink-0 flex-col items-center gap-2.5" aria-hidden>
      <svg viewBox="0 0 24 24" className="size-7 fill-current sm:size-8" focusable="false">
        <path d={item.path} />
      </svg>
      <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
        {item.label}
      </span>
    </li>
  );
}
