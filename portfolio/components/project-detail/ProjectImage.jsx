"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "@/components/ui/Lightbox";
import { LIGHTBOX } from "@/config/lightbox";

export default function ProjectImage({ image, className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <figure className={className}>
      <button type="button" onClick={handleOpen} aria-label={LIGHTBOX.zoomLabel} className="group block w-full overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50">
        <Image src={image.src} alt={image.caption ?? ""} width={image.width ?? 1600} height={image.height ?? 830} sizes="(min-width: 896px) 896px, 100vw" className="h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]" />
      </button>
      <figcaption className="mt-3 flex flex-wrap items-center gap-x-2 text-sm text-neutral-500">
        {image.caption}
        <span className="font-mono text-xs text-neutral-400">{LIGHTBOX.zoomLabel}</span>
      </figcaption>
      <Lightbox image={image} isOpen={isOpen} onClose={handleClose} />
    </figure>
  );
}