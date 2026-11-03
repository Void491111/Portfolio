import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import StackIcon from "./StackIcon";
import { STACK, STACK_MARQUEE } from "@/config/stack";

const TRACK = "marquee-track flex w-max items-start text-neutral-950";

export default function TechStack() {
  const trackStyle = {
    "--marquee-duration": STACK_MARQUEE.duration,
    gap: STACK_MARQUEE.gap + "px",
    paddingRight: STACK_MARQUEE.gap + "px",
  };

  return (
    <section className="py-14 sm:py-20">
      <Reveal className="px-4 sm:px-8">
        <div className="mx-auto max-w-5xl xl:max-w-6xl">
          <SectionLabel>Stack</SectionLabel>
        </div>
      </Reveal>

      <div className="marquee mt-8 sm:mt-10">
        <ul className={TRACK} style={trackStyle}>
          {STACK.map(function renderIcon(item) {
            return <StackIcon key={item.id} item={item} />;
          })}
        </ul>
        <ul className={TRACK} style={trackStyle}>
          {STACK.map(function renderCloneIcon(item) {
            return <StackIcon key={item.id + "-clone"} item={item} />;
          })}
        </ul>
      </div>

      <p className="sr-only">
        {STACK.map(function readLabel(item) {
          return item.label;
        }).join(", ")}
      </p>
    </section>
  );
}
