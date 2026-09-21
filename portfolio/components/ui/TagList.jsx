export default function TagList({ tags = [], className = "" }) {
  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {tags.map(function renderTag(tag) {
        return (
          <li key={tag} className="rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs text-neutral-600">
            {tag}
          </li>
        );
      })}
    </ul>
  );
}