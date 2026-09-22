import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ProjectCard from "./ProjectCard";
import PlaceholderCard from "./PlaceholderCard";
import { PROJECTS, CARD_LAYOUT } from "@/config/projects";
import { PROJECTS_SECTION } from "@/config/site";

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <SectionLabel>{PROJECTS_SECTION.label}</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{PROJECTS_SECTION.heading}</h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-3">
          {PROJECTS.map(function renderProject(project, index) {
            return (
              <Reveal key={project.slug} delay={index * 0.08} className={CARD_LAYOUT[project.layout] ?? CARD_LAYOUT.default}>
                <ProjectCard project={project} />
              </Reveal>
            );
          })}
          <Reveal delay={PROJECTS.length * 0.08}>
            <PlaceholderCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
