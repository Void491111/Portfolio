import { notFound } from "next/navigation";
import { getProjectBySlug, getProjectSlugs } from "@/lib/projects";
import { SITE } from "@/config/site";
import ProjectHeader from "@/components/project-detail/ProjectHeader";
import ProjectHighlights from "@/components/project-detail/ProjectHighlights";
import ProjectSections from "@/components/project-detail/ProjectSections";
import ProjectGallery from "@/components/project-detail/ProjectGallery";

export function generateStaticParams() {
  return getProjectSlugs().map(function toParam(slug) {
    return { slug };
  });
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: `${project.title} — ${SITE.name}`, description: project.summary };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="px-4 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28">
      <article className="mx-auto max-w-4xl">
        <ProjectHeader project={project} />
        <ProjectHighlights items={project.highlights} />
        <ProjectSections sections={project.sections} />
        <ProjectGallery images={project.gallery} />
      </article>
    </main>
  );
}
