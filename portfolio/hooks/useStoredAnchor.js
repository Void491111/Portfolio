"use client";
import { useEffect, useState } from "react";
import { NAV_DRAG } from "@/config/nav";

export function useStoredAnchor() {
  const [anchor, setAnchor] = useState(NAV_DRAG.defaultAnchor);

  useEffect(function loadAnchor() {
    try {
      const saved = window.localStorage.getItem(NAV_DRAG.storageKey);
      if (saved && NAV_DRAG.anchors[saved]) setAnchor(saved);
    } catch {
      setAnchor(NAV_DRAG.defaultAnchor);
    }
  }, []);

  function saveAnchor(next) {
    setAnchor(next);
    try {
      window.localStorage.setItem(NAV_DRAG.storageKey, next);
    } catch {
      return;
    }
  }

  function resetAnchor() {
    saveAnchor(NAV_DRAG.defaultAnchor);
  }

  return { anchor, saveAnchor, resetAnchor };
}
