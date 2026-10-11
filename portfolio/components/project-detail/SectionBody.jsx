"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { DISCLOSURE } from "@/config/disclosure";

const PARAGRAPH_CLASS = "text-justify leading-relaxed text-neutral-600 hyphens-auto";

export default function SectionBody({ paragraphs }) {
  const [isOpen, setIsOpen] = useState(false);
  const first = paragraphs[0];
  const rest = paragraphs.slice(1);

  function handleToggle() {
    setIsOpen(function toggleOpen(previous) {
      return !previous;
    });
  }

  return (
    <div className="mt-4">
      <p className={PARAGRAPH_CLASS}>{first}</p>

      {rest.length > 0 && (
        <>
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="rest"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={DISCLOSURE.transition}
                className="overflow-hidden"
              >
                <div className="space-y-4 pt-4">
                  {rest.map(function renderParagraph(text, index) {
                    return (
                      <p key={index} className={PARAGRAPH_CLASS}>
                        {text}
                      </p>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            type="button"
            onClick={handleToggle}
            aria-expanded={isOpen}
            className="mt-3 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-neutral-500 transition-colors hover:text-neutral-950"
          >
            {isOpen ? DISCLOSURE.less : DISCLOSURE.more}
            <svg
              viewBox="0 0 24 24"
              aria-hidden
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={"size-3.5 transition-transform duration-300 " + (isOpen ? "rotate-180" : "")}
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
