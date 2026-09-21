import Link from "next/link";
import ProjectCover from "./ProjectCover";
import StatusPill from "./StatusPill";
import TagList from "@/components/ui/TagList";
import { PROJECTS_SECTION } from "@/config/site";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow duration-500 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
    >
      <div className="relative aspect-16/10 overflow-hidden border-b border-neutral-100 bg-neutral-50">
        <ProjectCover project={project} className="transition-transform duration-700 ease-out group-hover:scale-[1.03]" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-medium">{project.title}</h3>
          <div className="flex shrink-0 items-center gap-2">
            <StatusPill label={project.status} />
            <span className="font-mono text-xs text-neutral-400">{project.year}</span>
          </div>
        </div>
        <p className="mt-2 text-sm text-neutral-600">{project.summary}</p>
        <TagList tags={project.stack} className="mt-4" />
        <span className="mt-auto inline-flex items-center gap-1 pt-5 text-sm font-medium">
          {PROJECTS_SECTION.cardCta}
          <span className="transition-transform duration-300 group-hover:translate-x-1">{"\u2192"}</span>
        </span>
      </div>
    </Link>
  );
}