"use client";
import Link from "next/link";
import NavLinks from "./NavLinks";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useOverDark } from "@/hooks/useOverDark";
import { NAV_BRAND, NAV_CTA, NAV_LINKS, NAV_SECTION_IDS, NAV_MOTION, NAV_DARK } from "@/config/nav";

const SHELL =
  "pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[calc(env(safe-area-inset-bottom)+12px)]";

export default function Navbar() {
  const activeId = useActiveSection(NAV_SECTION_IDS, NAV_MOTION.activeRootMargin);
  const isOverDark = useOverDark(NAV_DARK.selector, NAV_DARK.rootMargin);

  return (
    <div className={SHELL}>
      <nav
        data-over-dark={isOverDark}
        className="glass pointer-events-auto flex max-w-full items-center gap-0.5 rounded-full p-1.5 sm:gap-1"
      >
        <Link
          href="/"
          aria-label={NAV_BRAND.label}
          className="flex size-8 shrink-0 select-none items-center justify-center rounded-full bg-neutral-950 font-mono text-[11px] font-medium text-white sm:size-9 sm:text-xs"
        >
          {NAV_BRAND.mark}
        </Link>
        <NavLinks links={NAV_LINKS} activeId={activeId} />
        <Link
          href={NAV_CTA.href}
          className="group ml-0.5 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-neutral-950 px-2.5 py-1.5 text-[12px] text-white transition-colors hover:bg-neutral-800 sm:ml-1 sm:px-4 sm:py-2 sm:text-sm"
        >
          {NAV_CTA.label}
          <span className="hidden transition-transform duration-300 group-hover:translate-x-0.5 sm:inline">{"\u2192"}</span>
        </Link>
      </nav>
    </div>
  );
}
