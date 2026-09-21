import Image from "next/image";

export default function ProjectImage({ image, className = "" }) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50">
        <Image
          src={image.src}
          alt={image.caption ?? ""}
          width={image.width ?? 1920}
          height={image.height ?? 1000}
          sizes="(min-width: 896px) 896px, 100vw"
          className="h-auto w-full"
        />
      </div>
      {image.caption && <figcaption className="mt-3 text-sm text-neutral-500">{image.caption}</figcaption>}
    </figure>
  );
}