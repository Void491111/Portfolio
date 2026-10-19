export const MARK = {
  line: {
    orbits: [
      { rx: 48, ry: 15, rotate: -24, width: 3.4, opacity: 1, duration: "19s", reverse: false },
      { rx: 22, ry: 47, rotate: 14, width: 2.2, opacity: 1, duration: "27s", reverse: true },
      { rx: 38, ry: 29, rotate: 62, width: 1.5, opacity: 0.8, duration: "15s", reverse: true },
      { rx: 30, ry: 43, rotate: -62, width: 1.1, opacity: 0.5, duration: "34s", reverse: false },
    ],
    satellite: { x: 103, y: 47, r: 3.4, duration: "11s", reverse: false },
    core: "M60 52 L68 60 L60 68 L52 60 Z",
    coreSpin: { duration: "44s", reverse: true },
  },
  solid: {
    orbits: [
      { rx: 47, ry: 16, rotate: -24, width: 7, opacity: 1, duration: "22s", reverse: false },
      { rx: 22, ry: 47, rotate: 16, width: 6, opacity: 1, duration: "30s", reverse: true },
    ],
    satellite: null,
    core: "M60 48 L72 60 L60 72 L48 60 Z",
    coreSpin: null,
  },
};
