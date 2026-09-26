import Reveal from "@/components/ui/Reveal";
import ProjectImage from "./ProjectImage";

export default function ProjectSections({ sections = [] }) {
  return (
    <div className="mt-12 space-y-14 sm:mt-16 sm:space-y-20">
      {sections.map(function renderSection(section) {
        return (
          <Reveal key={section.heading} as="section">
            <h2 className="text-2xl font-semibold tracking-tight">{section.heading}</h2>
            <div className="mt-4 space-y-4 text-justify leading-relaxed text-neutral-600 hyphens-auto">
              {section.body.map(function renderParagraph(paragraph, index) {
                return <p key={index}>{paragraph}</p>;
              })}
            </div>
            {section.image && <ProjectImage image={section.image} className="mt-8" />}
          </Reveal>
        );
      })}
    </div>
  );
}

