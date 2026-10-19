import { MARK } from "@/config/mark";

export default function Mark({ variant = "line", animated = false, className = "" }) {
  const spec = MARK[variant];

  function spinClass(reverse) {
    if (!animated) return "";
    return reverse ? "mark-ccw" : "mark-cw";
  }

  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      {spec.orbits.map(function renderOrbit(orbit, index) {
        return (
          <g key={index} className={spinClass(orbit.reverse)} style={{ "--mark-duration": orbit.duration }}>
            <ellipse
              cx="60"
              cy="60"
              rx={orbit.rx}
              ry={orbit.ry}
              strokeWidth={orbit.width}
              opacity={orbit.opacity}
              transform={"rotate(" + orbit.rotate + " 60 60)"}
            />
          </g>
        );
      })}

      {spec.satellite && (
        <g className={spinClass(spec.satellite.reverse)} style={{ "--mark-duration": spec.satellite.duration }}>
          <circle cx={spec.satellite.x} cy={spec.satellite.y} r={spec.satellite.r} fill="currentColor" stroke="none" />
        </g>
      )}

      <g
        className={spec.coreSpin ? spinClass(spec.coreSpin.reverse) : ""}
        style={spec.coreSpin ? { "--mark-duration": spec.coreSpin.duration } : undefined}
      >
        <path d={spec.core} fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}
