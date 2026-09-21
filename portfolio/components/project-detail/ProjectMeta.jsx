import TagList from "@/components/ui/TagList";

function MetaItem({ label, children }) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-widest text-neutral-400">{label}</dt>
      <dd className="mt-2 text-sm">{children}</dd>
    </div>
  );
}

export default function ProjectMeta({ project }) {
  return (
    <div className="mt-8 border-y border-neutral-200 py-6">
      <dl className="grid gap-6 sm:grid-cols-3">
        <MetaItem label="Role">{project.role}</MetaItem>
        <MetaItem label="Year">{project.year}</MetaItem>
        <MetaItem label="Stack"><TagList tags={project.stack} /></MetaItem>
      </dl>
      {project.links.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          {project.links.map(function renderLink(link) {
            return (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950">
                {link.label} ↗
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}