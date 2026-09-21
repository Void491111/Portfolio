export const EASE = [0.22, 1, 0.36, 1];

export const REVEAL = { duration: 0.7, distance: 16, amount: 0.2 };

export const GLITCH = {
  initialDelay: 800,
  minDelay: 3000,
  maxDelay: 6000,
  duration: 700,
  frameRate: 45,
  chars: "!<>-_\\/[]{}=+*^?#01",
};

export const TYPEWRITER = { charDelay: 45, lineDelay: 450 };

export const DOT_GRID = {
  gap: 22,
  radius: 1,
  baseAlpha: 0.12,
  influence: 130,
  ease: 0.15,
  settle: 0.5,
  color: "0, 0, 0",
};

export const SCROLL_TEXT = {
  dimOpacity: 0.15,
  offset: ["start 0.85", "end 0.45"],
};
export const HEARTBEAT = {
  beat: { scale: [1, 1.4, 1, 1.25, 1] },
  beatTransition: { duration: 1.2, times: [0, 0.12, 0.24, 0.36, 0.6], repeat: Infinity, ease: "easeInOut" },
  ring: { scale: [1, 1, 2.8], opacity: [0, 0.4, 0] },
  ringTransition: { duration: 1.2, times: [0, 0.12, 0.8], repeat: Infinity, ease: "easeOut" },
};
