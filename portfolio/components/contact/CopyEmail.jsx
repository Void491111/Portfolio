"use client";
import { AnimatePresence, motion } from "motion/react";
import { useCopy } from "@/hooks/useCopy";
import { FOOTER } from "@/config/footer";

export default function CopyEmail({ email }) {
  const { isCopied, copy } = useCopy(FOOTER.copyResetMs);

  function handleClick() {
    copy(email);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex h-9 min-w-24 items-center justify-center overflow-hidden rounded-full border border-neutral-300 px-4 text-sm transition-colors hover:border-neutral-950"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={isCopied ? "copied" : "copy"}
          initial={{ y: 12, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -12, opacity: 0 }}
          transition={FOOTER.labelSwap}
        >
          {isCopied ? FOOTER.copiedLabel : FOOTER.copyLabel}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
