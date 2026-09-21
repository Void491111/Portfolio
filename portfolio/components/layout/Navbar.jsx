"use client";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import NavLinks from "./NavLinks";
import { useScrollHide } from "@/hooks/useScrollHide";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NAV_BRAND, NAV_CTA, NAV_LINKS, NAV_SECTION_IDS, NAV_MOTION, NAV_TOGGLE } from "@/config/nav";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const isScrolledAway = useScrollHide(NAV_MOTION.hideAfter);
  const activeId = useActiveSection(NAV_SECTION_IDS, NAV_MOTION.activeRootMargin);
  const isHidden = NAV_MOTION.hideOnScroll && isOpen && isScrolledAway;

  function handleToggle() {
    setIsOpen(function toggleOpen(previous) {
      return !previous;
    });
  }

  return (
    <motion.header
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      animate={{ y: isHidden ? NAV_MOTION.hiddenOffset : 0, opacity: isHidden ? 0 : 1 }}
      transition={NAV_MOTION.spring}
    >
      <motion.nav layout transition={NAV_MOTION.spring} className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white/75 p-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-md">
        <button type="button" onClick={handleToggle} aria-expanded={isOpen} aria-label={isOpen ? NAV_TOGGLE.collapseLabel : NAV_TOGGLE.expandLabel} title={NAV_BRAND.label} className="flex size-9 shrink-0 items-center justify-center rounded-full bg-neutral-950 font-mono text-xs font-medium text-white transition-transform duration-300 active:scale-95">
          {NAV_BRAND.mark}
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div key="nav-body" layout initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: "auto" }} exit={{ opacity: 0, width: 0 }} transition={NAV_MOTION.spring} className="flex items-center gap-1 overflow-hidden">
              <NavLinks links={NAV_LINKS} activeId={activeId} />
              <Link href={NAV_CTA.href} className="group ml-1 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-neutral-950 px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-800">
                {NAV_CTA.label}
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">{"\u2192"}</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}
