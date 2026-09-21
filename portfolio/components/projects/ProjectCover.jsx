import Image from "next/image";

export default function ProjectCover({ project, className = "", priority = false }) {
  if (!project.cover) {
    return (
      <div className="flex h-full w-full items-center justify-center font-mono text-sm text-neutral-400">
        {project.title}
      </div>
    );
  }
  return (
    <Image
      src={project.cover}
      alt={project.title}
      fill
      priority={priority}
      sizes="(min-width: 768px) 66vw, 100vw"
      className={`object-cover object-top ${className}`}
    />
  );
}