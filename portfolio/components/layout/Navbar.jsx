"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import NavLinks from "./NavLinks";
import { useScrollHide } from "@/hooks/useScrollHide";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useStoredAnchor } from "@/hooks/useStoredAnchor";
import { useLongPressDrag } from "@/hooks/useLongPressDrag";
import { pickAnchor } from "@/lib/anchor";
import { NAV_BRAND, NAV_CTA, NAV_LINKS, NAV_SECTION_IDS, NAV_MOTION, NAV_TOGGLE, NAV_DRAG } from "@/config/nav";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const isScrolledAway = useScrollHide(NAV_MOTION.hideAfter);
  const activeId = useActiveSection(NAV_SECTION_IDS, NAV_MOTION.activeRootMargin);
  const { anchor, saveAnchor, resetAnchor } = useStoredAnchor();
  const drag = useLongPressDrag();
  const containerRef = useRef(null);
  const isHidden = NAV_MOTION.hideOnScroll && isOpen && isScrolledAway;

  function handleToggle() {
    setIsOpen(function toggleOpen(previous) {
      return !previous;
    });
  }

  function handleDragEnd(event, info) {
    const viewport = { width: window.innerWidth, height: window.innerHeight };
    saveAnchor(pickAnchor(info.point, viewport));
    drag.handleDragEnd();
  }

  return (
    <div ref={containerRef} className={`pointer-events-none fixed inset-0 z-50 flex p-4 ${NAV_DRAG.anchors[anchor]}`}>
      <motion.nav
        drag
        dragListener={false}
        dragControls={drag.controls}
        dragMomentum={false}
        dragSnapToOrigin
        dragConstraints={containerRef}
        dragElastic={NAV_DRAG.elastic}
        onDragEnd={handleDragEnd}
        onPointerDown={drag.handlePointerDown}
        onPointerUp={drag.handlePointerUp}
        onPointerCancel={drag.handlePointerUp}
        onClickCapture={drag.handleClickCapture}
        animate={{ opacity: isHidden ? 0 : 1, scale: drag.isDragging ? 1.04 : 1 }}
        transition={NAV_MOTION.spring}
        className="pointer-events-auto flex h-fit items-center gap-1 rounded-full border border-neutral-200 bg-white/75 p-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-md"
        style={{ cursor: drag.isDragging ? "grabbing" : "auto" }}
      >
        <button
          type="button"
          onClick={handleToggle}
          onDoubleClick={resetAnchor}
          aria-expanded={isOpen}
          aria-label={isOpen ? NAV_TOGGLE.collapseLabel : NAV_TOGGLE.expandLabel}
          title={NAV_BRAND.label}
          className="flex size-9 shrink-0 select-none items-center justify-center rounded-full bg-neutral-950 font-mono text-xs font-medium text-white transition-transform duration-300 active:scale-95"
        >
          {NAV_BRAND.mark}
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="nav-body"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: "auto" }}
              exit={{ opacity: 0, width: 0 }}
              transition={NAV_MOTION.spring}
              className="flex items-center gap-1 overflow-hidden"
            >
              <NavLinks links={NAV_LINKS} activeId={activeId} />
              <Link
                href={NAV_CTA.href}
                className="group ml-1 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-neutral-950 px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-800"
              >
                {NAV_CTA.label}
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">{"\u2192"}</span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}
