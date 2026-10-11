"use client";
import { useRef, useState } from "react";
import { useDragControls } from "motion/react";
import { NAV_DRAG } from "@/config/nav";

export function useLongPressDrag() {
  const controls = useDragControls();
  const timerRef = useRef(null);
  const draggedRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  function canDrag() {
    if (typeof window === "undefined") return false;
    return window.matchMedia(NAV_DRAG.dragFrom).matches;
  }

  function clearTimer() {
    if (!timerRef.current) return;
    clearTimeout(timerRef.current);
    timerRef.current = null;
  }

  function handlePointerDown(event) {
    if (!canDrag()) return;
    const nativeEvent = event.nativeEvent;
    clearTimer();
    timerRef.current = setTimeout(function beginDrag() {
      draggedRef.current = true;
      setIsDragging(true);
      controls.start(nativeEvent);
    }, NAV_DRAG.longPressMs);
  }

  function handlePointerUp() {
    clearTimer();
  }

  function handleDragEnd() {
    setIsDragging(false);
    setTimeout(function releaseDragged() {
      draggedRef.current = false;
    }, 0);
  }

  function handleClickCapture(event) {
    if (!draggedRef.current) return;
    event.preventDefault();
    event.stopPropagation();
  }

  return { controls, isDragging, handlePointerDown, handlePointerUp, handleDragEnd, handleClickCapture };
}
