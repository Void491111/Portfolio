import { relativeTime } from "@/lib/relativeTime";

export default function CommitRow({ commit }) {
  return (
    <li>
      <a
        href={commit.url}
        target="_blank"
        rel="noreferrer"
        className="group flex items-baseline gap-3 border-b border-neutral-200 py-3 transition-colors hover:border-neutral-400"
      >
        <span className="font-mono text-[11px] uppercase tracking-widest text-neutral-400">
          {commit.repo}
        </span>
        <span className="min-w-0 flex-1 truncate text-sm text-neutral-700 transition-colors group-hover:text-neutral-950">
          {commit.message}
        </span>
        <span className="shrink-0 font-mono text-[11px] text-neutral-400">
          {relativeTime(commit.date)}
        </span>
      </a>
    </li>
  );
}