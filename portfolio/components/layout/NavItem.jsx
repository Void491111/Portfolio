"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { formatIndex } from "@/lib/format";
import { NAV_MOTION } from "@/config/nav";

const LINK_BASE =
  "relative z-10 flex items-center gap-1.5 rounded-full px-2 py-1.5 text-[12px] transition-colors sm:px-3.5 sm:py-2 sm:text-sm ";

export default function NavItem({ link, index, isActive, isHovered, onHover }) {
  function handleEnter() {
    onHover(link.id);
  }

  const tone = isActive || isHovered ? "text-neutral-950" : "text-neutral-500";

  return (
    <li className="relative">
      <Link href={link.href} onMouseEnter={handleEnter} className={LINK_BASE + tone}>
        <span className="hidden font-mono text-[10px] text-neutral-400 sm:inline">{formatIndex(index)}</span>
        {link.label}
      </Link>
      {isHovered && (
        <motion.span layoutId="nav-hover" className="absolute inset-0 rounded-full bg-neutral-100" transition={NAV_MOTION.spring} />
      )}
      {isActive && (
        <motion.span
          layoutId="nav-active"
          className="absolute bottom-0.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-neutral-950"
          transition={NAV_MOTION.spring}
        />
      )}
    </li>
  );
}
