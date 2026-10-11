import Reveal from "@/components/ui/Reveal";

const SIDE_LEFT = "lg:col-start-1 lg:row-start-1 lg:pr-14 lg:text-right";
const SIDE_RIGHT = "lg:col-start-2 lg:row-start-1 lg:pl-14";

export default function TimelineItem({ item, delay, isLeft }) {
  return (
    <Reveal delay={delay} as="li" className="relative pl-10 lg:grid lg:grid-cols-2 lg:gap-0 lg:pl-0">
      <span className="absolute left-[11px] top-1.5 size-3 rounded-full border-2 border-canvas bg-gold lg:left-1/2 lg:-translate-x-1/2" />
      <div className={isLeft ? SIDE_LEFT : SIDE_RIGHT}>
        <p className="font-mono text-xs uppercase tracking-widest text-gold">{item.year}</p>
        <h3 className="mt-2 text-lg font-medium">{item.title}</h3>
        <p className="mt-0.5 font-mono text-xs text-neutral-500">{item.place}</p>
        <p className="mt-2 text-neutral-600">{item.body}</p>
      </div>
    </Reveal>
  );
}
