import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import ProjectCover from "@/components/projects/ProjectCover";
import ProjectMeta from "./ProjectMeta";

export default function ProjectHeader({ project }) {
  return (
    <header>
      <Reveal>
        <Link href="/#projects" className="text-sm text-neutral-500 transition-colors hover:text-neutral-950">
          ← Back to projects
        </Link>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">{project.title}</h1>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 max-w-2xl text-justify text-lg text-neutral-600 hyphens-auto">{project.summary}</p>
      </Reveal>
      <Reveal delay={0.15}>
        <ProjectMeta project={project} />
      </Reveal>
      <Reveal delay={0.2}>
        <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
          <ProjectCover project={project} priority />
        </div>
      </Reveal>
    </header>
  );
}
