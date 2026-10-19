"use client";
import { useRef } from "react";
import { motion } from "motion/react";
import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import TimelineItem from "./TimelineItem";
import { useRailProgress } from "@/hooks/useRailProgress";
import { TIMELINE } from "@/config/timeline";

const RAIL_BASE = "absolute left-4 top-0 h-full w-px lg:left-1/2 lg:-translate-x-1/2";

export default function Timeline() {
  const listRef = useRef(null);
  const progress = useRailProgress(listRef);

  return (
    <section id="timeline" className="px-4 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-5xl xl:max-w-6xl">
        <Reveal className="lg:text-center">
          <SectionLabel>{TIMELINE.label}</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{TIMELINE.heading}</h2>
        </Reveal>

        <div ref={listRef} className="relative mt-14">
          <span aria-hidden className={RAIL_BASE + " bg-neutral-200"} />
          <motion.span aria-hidden style={{ scaleY: progress }} className={RAIL_BASE + " origin-top bg-neutral-950"} />
          <ol className="space-y-14">
            {TIMELINE.items.map(function renderItem(item, index) {
              return <TimelineItem key={item.id} item={item} delay={index * 0.05} isLeft={index % 2 === 0} />;
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}


