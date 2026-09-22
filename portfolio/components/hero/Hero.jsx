import DotBackground from "./DotBackground";
import GlitchText from "./GlitchText";
import StatusBadge from "./StatusBadge";
import Reveal from "@/components/ui/Reveal";
import { HERO } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden px-4 sm:px-8">
      <DotBackground />
      <div className="relative mx-auto w-full max-w-5xl">
        <Reveal>
          <StatusBadge label={HERO.status} />
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="block text-neutral-400">{HERO.prefix}</span>
            <span className="mt-1 block">
              <span className="highlight">
                <GlitchText text={HERO.glitchWord} tone="invert" />
              </span>
            </span>
            <span className="mt-1 block">{HERO.suffix}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-neutral-600 sm:text-lg">{HERO.description}</p>
        </Reveal>

        <Reveal delay={0.3} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
          <a href={HERO.primaryCta.href} className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 text-sm text-white transition-colors hover:bg-neutral-800">
            {HERO.primaryCta.label}
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">{"\u2192"}</span>
          </a>
          <a href={HERO.secondaryCta.href} className="text-sm text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-950 hover:decoration-neutral-950">
            {HERO.secondaryCta.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}