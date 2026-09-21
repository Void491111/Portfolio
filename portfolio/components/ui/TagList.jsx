const TAG_CLASS =
  "rounded-full border border-neutral-200/70 bg-white/60 px-2.5 py-0.5 text-xs text-neutral-600 shadow-[0_1px_4px_rgba(0,0,0,0.03)] backdrop-blur-md";

export default function TagList({ tags = [], className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {tags.map(function renderTag(tag) {
        return (
          <li key={tag} className={TAG_CLASS}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
}