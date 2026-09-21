"use client";
import { useState } from "react";
import NavItem from "./NavItem";

export default function NavLinks({ links, activeId }) {
  const [hoveredId, setHoveredId] = useState(null);

  function handleLeave() {
    setHoveredId(null);
  }

  return (
    <ul className="flex items-center" onMouseLeave={handleLeave}>
      {links.map(function renderLink(link, index) {
        return (
          <NavItem
            key={link.id}
            link={link}
            index={index}
            isActive={activeId === link.id}
            isHovered={hoveredId === link.id}
            onHover={setHoveredId}
          />
        );
      })}
    </ul>
  );
}
