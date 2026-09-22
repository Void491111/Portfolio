export function pickAnchor(point, viewport) {
  const vertical = point.y < viewport.height / 2 ? "top" : "bottom";
  const third = viewport.width / 3;
  const horizontal = point.x < third ? "left" : point.x < third * 2 ? "center" : "right";
  return vertical + "-" + horizontal;
}
