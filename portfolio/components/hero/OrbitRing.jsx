import OrbitNode from "./OrbitNode";

export default function OrbitRing({ ring }) {
  const spinClass = ring.reverse ? "orbit-ccw" : "orbit-cw";
  const counterClass = ring.reverse ? "orbit-cw" : "orbit-ccw";
  const vars = {
    "--orbit-r-sm": ring.radiusSm + "px",
    "--orbit-r-lg": ring.radius + "px",
    "--orbit-r-xl": ring.radiusXl + "px",
  };

  return (
    <span className="orbit-ring absolute inset-0" style={vars}>
      <span
        aria-hidden
        className="orbit-circle absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-neutral-300/70"
      />
      <span className={"absolute inset-0 " + spinClass} style={{ "--orbit-duration": ring.duration }}>
        {ring.nodes.map(function renderNode(label, index) {
          return (
            <OrbitNode
              key={label}
              label={label}
              angle={(360 / ring.nodes.length) * index}
              duration={ring.duration}
              counterClass={counterClass}
            />
          );
        })}
      </span>
    </span>
  );
}
