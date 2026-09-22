import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import ScrollRevealText from "./ScrollRevealText";
import Terminal from "./Terminal";
import { INTRO } from "@/config/site";

export default function Intro() {
  return (
    <section id="about" className="px-4 pb-16 pt-4 sm:px-8 lg:py-32">
      <div className="mx-auto grid max-w-5xl gap-10 sm:gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div>
          <Reveal><SectionLabel>{INTRO.label}</SectionLabel></Reveal>
          <ScrollRevealText
            text={INTRO.text}
            className="mt-5 text-justify text-2xl font-medium sm:mt-6 leading-snug tracking-tight sm:text-3xl"
          />
        </div>
        <Reveal delay={0.1} className="lg:sticky lg:top-24">
          <Terminal lines={INTRO.terminal} />
        </Reveal>
      </div>
    </section>
  );
}

