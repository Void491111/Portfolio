"use client";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { useLockScroll } from "@/hooks/useLockScroll";
import { LIGHTBOX } from "@/config/lightbox";

export default function Lightbox({ image, isOpen, onClose }) {
  useLockScroll(isOpen);

  useEffect(
    function bindEscape() {
      if (!isOpen) return;
      function handleKeyDown(event) {
        if (event.key === "Escape") onClose();
      }
      window.addEventListener("keydown", handleKeyDown);
      return function unbindEscape() {
        window.removeEventListener("keydown", handleKeyDown);
      };
    },
    [isOpen, onClose]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div className="fixed inset-0 z-[60] flex items-center justify-center bg-white/95 p-4 backdrop-blur-sm sm:p-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={LIGHTBOX.backdrop} onClick={onClose}>
          <button type="button" onClick={onClose} className="absolute right-4 top-4 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm transition-colors hover:border-neutral-950">
            {LIGHTBOX.closeLabel}
          </button>
          <motion.figure className="max-h-full w-full max-w-6xl" initial={{ scale: 0.97, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.97, opacity: 0 }} transition={LIGHTBOX.panel}>
            <Image src={image.src} alt={image.caption ?? ""} width={1600} height={830} sizes="100vw" className="h-auto w-full rounded-xl border border-neutral-200" />
            {image.caption && <figcaption className="mt-3 text-center text-sm text-neutral-500">{image.caption}</figcaption>}
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}