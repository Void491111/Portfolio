"use client";
import { useEffect, useState } from "react";

export function useActiveSection(ids, rootMargin) {
  const [activeId, setActiveId] = useState(null);

  useEffect(
    function observeSections() {
      const elements = ids
        .map(function findSection(id) {
          return document.getElementById(id);
        })
        .filter(Boolean);
      if (!elements.length) return;

      function handleIntersect(entries) {
        entries.forEach(function checkEntry(entry) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            return;
          }
          setActiveId(function clearIfLeaving(current) {
            return current === entry.target.id ? null : current;
          });
        });
      }

      const observer = new IntersectionObserver(handleIntersect, { rootMargin });
      elements.forEach(function observeElement(element) {
        observer.observe(element);
      });

      return function disconnectObserver() {
        observer.disconnect();
      };
    },
    [ids, rootMargin]
  );

  return activeId;
}
