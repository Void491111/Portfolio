"use client";
import { motion, useTransform } from "motion/react";
import { SCROLL_TEXT } from "@/config/motion";

export default function ScrollWord({ children, progress, range }) {
  const opacity = useTransform(progress, range, [SCROLL_TEXT.dimOpacity, 1]);
  return (
    <motion.span style={{ opacity }}>
      {children}
      {" "}
    </motion.span>
  );
}