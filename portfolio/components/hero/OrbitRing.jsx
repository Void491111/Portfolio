import OrbitNode from "./OrbitNode";

export default function OrbitRing({ ring }) {
  const spinClass = ring.reverse ? "orbit-ccw" : "orbit-cw";
  const counterClass = ring.reverse ? "orbit-cw" : "orbit-ccw";
  const size = ring.radius * 2;

  return (
    <span className={"absolute inset-0 " + ring.className}>
      <span
        aria-hidden
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-neutral-300/70"
        style={{ width: size, height: size }}
      />
      <span className={"absolute inset-0 " + spinClass} style={{ "--orbit-duration": ring.duration }}>
        {ring.nodes.map(function renderNode(label, index) {
          return (
            <OrbitNode
              key={label}
              label={label}
              angle={(360 / ring.nodes.length) * index}
              radius={ring.radius}
              duration={ring.duration}
              counterClass={counterClass}
            />
          );
        })}
      </span>
    </span>
  );
}
