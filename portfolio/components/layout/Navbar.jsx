"use client";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Mark from "@/components/ui/Mark";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useOverDark } from "@/hooks/useOverDark";
import { useScrolled } from "@/hooks/useScrolled";
import { NAV_BRAND, NAV_CTA, NAV_LINKS, NAV_SECTION_IDS, NAV_MOTION, NAV_DARK, NAV_SCROLL } from "@/config/nav";

const HEADER =
  "nav-shell fixed inset-x-0 top-0 z-50 px-3 pt-4 sm:px-4 sm:pt-6 md:pt-8 data-scrolled:pt-2 sm:data-scrolled:pt-3 md:data-scrolled:pt-3";

const PILL =
  "glass nav-pill mx-auto flex h-14 max-w-full items-center justify-between gap-1 rounded-full px-2 sm:h-16 sm:gap-2 sm:px-4 data-scrolled:h-12 sm:data-scrolled:h-14 data-scrolled:max-w-2xl lg:data-scrolled:max-w-4xl";

const BRAND =
  "flex shrink-0 items-center gap-2 pl-1 text-sm font-medium tracking-tight text-neutral-950 sm:gap-2.5 sm:text-base";

const CTA =
  "group inline-flex shrink-0 items-center gap-1.5 rounded-full bg-neutral-950 px-3 py-1.5 text-[12px] text-white transition-colors hover:bg-neutral-800 sm:px-4 sm:py-2 sm:text-sm";

export default function Navbar() {
  const activeId = useActiveSection(NAV_SECTION_IDS, NAV_MOTION.activeRootMargin);
  const isOverDark = useOverDark(NAV_DARK.selector, NAV_DARK.rootMargin);
  const isScrolled = useScrolled(NAV_SCROLL.threshold);
  const scrolledFlag = isScrolled ? "true" : undefined;

  return (
    <header data-scrolled={scrolledFlag} className={HEADER}>
      <nav data-scrolled={scrolledFlag} data-over-dark={isOverDark} className={PILL}>
        <Link href="/" aria-label={NAV_BRAND.label} className={BRAND}>
          <Mark variant="solid" className="size-6 shrink-0 sm:size-7" />
          <span className="hidden sm:inline">{NAV_BRAND.label}</span>
        </Link>

        <div className="flex min-w-0 items-center gap-1 sm:gap-2">
          <NavLinks links={NAV_LINKS} activeId={activeId} />
          <Link href={NAV_CTA.href} className={CTA}>
            {NAV_CTA.label}
            <span className="hidden transition-transform duration-300 group-hover:translate-x-0.5 sm:inline">
              {"→"}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
