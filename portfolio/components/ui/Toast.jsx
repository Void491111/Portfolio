"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { TOAST } from "@/config/toast";

export default function Toast({ isOpen, message }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(function markMounted() {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={TOAST.transition}
          className={TOAST.className}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
