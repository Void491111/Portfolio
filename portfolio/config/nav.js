export const NAV_BRAND = { mark: "A", label: "Alif Hidayat" };

export const NAV_LINKS = [
  { id: "about", label: "About", href: "/#about" },
  { id: "timeline", label: "Timeline", href: "/#timeline" },
  { id: "projects", label: "Projects", href: "/#projects" },
];

export const NAV_SECTION_IDS = ["about", "timeline", "projects"];

export const NAV_CTA = { label: "Contact", href: "/#contact" };

export const NAV_MOTION = {
  hideOnScroll: false,
  hideAfter: 120,
  hiddenOffset: -96,
  activeRootMargin: "-45% 0px -45% 0px",
  spring: { type: "spring", stiffness: 380, damping: 32 },
};

export const NAV_TOGGLE = {
  expandLabel: "Open menu",
  collapseLabel: "Close menu",
};


export const NAV_DRAG = {
  storageKey: "nav-anchor",
  defaultAnchor: "bottom-center",
  longPressMs: 280,
  dragFrom: "(min-width: 1024px)",
  elastic: 0.15,
  anchors: {
    "top-left": "lg:items-start lg:justify-start",
    "top-center": "lg:items-start lg:justify-center",
    "top-right": "lg:items-start lg:justify-end",
    "bottom-left": "lg:items-end lg:justify-start",
    "bottom-center": "lg:items-end lg:justify-center",
    "bottom-right": "lg:items-end lg:justify-end",
  },
};



