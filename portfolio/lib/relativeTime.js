const UNITS = [
  { limit: 60, div: 1, name: "s" },
  { limit: 3600, div: 60, name: "m" },
  { limit: 86400, div: 3600, name: "h" },
  { limit: 604800, div: 86400, name: "d" },
  { limit: Infinity, div: 604800, name: "w" },
];

export function relativeTime(iso) {
  const seconds = Math.max(0, (Date.now() - new Date(iso).getTime()) / 1000);
  const unit = UNITS.find(function fits(item) {
    return seconds < item.limit;
  });
  return Math.floor(seconds / unit.div) + unit.name;
}