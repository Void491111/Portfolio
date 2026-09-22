import Reveal from "@/components/ui/Reveal";
import ProjectImage from "./ProjectImage";

export default function ProjectGallery({ images = [] }) {
  if (!images.length) return null;
  return (
    <section className="mt-14 sm:mt-20">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight">Gallery</h2>
      </Reveal>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {images.map(function renderImage(image, index) {
          return (
            <Reveal key={image.src} delay={(index % 2) * 0.08}>
              <ProjectImage image={image} />
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
