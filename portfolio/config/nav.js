export const NAV_BRAND = { mark: "A", label: "Alif Hidayat" };

export const NAV_LINKS = [
  { id: "about", label: "About", href: "/#about" },
  { id: "projects", label: "Projects", href: "/#projects" },
];

export const NAV_SECTION_IDS = ["about", "projects"];

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
  elastic: 0.15,
  anchors: {
    "top-left": "items-start justify-start",
    "top-center": "items-start justify-center",
    "top-right": "items-start justify-end",
    "bottom-left": "items-end justify-start",
    "bottom-center": "items-end justify-center",
    "bottom-right": "items-end justify-end",
  },
};

