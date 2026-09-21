"use client";
import Link from "next/link";
import { motion } from "motion/react";
import NavLinks from "./NavLinks";
import { useScrollHide } from "@/hooks/useScrollHide";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NAV_BRAND, NAV_CTA, NAV_LINKS, NAV_SECTION_IDS, NAV_MOTION } from "@/config/nav";

export default function Navbar() {
  const isHidden = useScrollHide(NAV_MOTION.hideAfter);
  const activeId = useActiveSection(NAV_SECTION_IDS, NAV_MOTION.activeRootMargin);

  return (
    <motion.header
      className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      animate={{ y: isHidden ? NAV_MOTION.hiddenOffset : 0, opacity: isHidden ? 0 : 1 }}
      transition={NAV_MOTION.spring}
    >
      <nav className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white/75 p-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-md">
        <Link
          href="/"
          aria-label={NAV_BRAND.label}
          className="flex size-9 items-center justify-center rounded-full bg-neutral-950 font-mono text-xs font-medium text-white"
        >
          {NAV_BRAND.mark}
        </Link>
        <NavLinks links={NAV_LINKS} activeId={activeId} />
        <Link
          href={NAV_CTA.href}
          className="group ml-1 inline-flex items-center gap-1.5 rounded-full bg-neutral-950 px-4 py-2 text-sm text-white transition-colors hover:bg-neutral-800"
        >
          {NAV_CTA.label}
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">{"\u2192"}</span>
        </Link>
      </nav>
    </motion.header>
  );
}
