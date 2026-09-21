"use client";
import { motion } from "motion/react";
import { EASE, REVEAL } from "@/config/motion";

export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: REVEAL.distance, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: REVEAL.amount }}
      transition={{ duration: REVEAL.duration, delay, ease: EASE }}
    >
      {children}
    </Component>
  );
}