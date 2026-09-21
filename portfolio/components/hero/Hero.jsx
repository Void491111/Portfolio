import DotBackground from "./DotBackground";
import GlitchText from "./GlitchText";
import Reveal from "@/components/ui/Reveal";
import { HERO } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-svh items-center overflow-hidden px-4 sm:px-8">
      <DotBackground />
      <div className="relative mx-auto w-full max-w-5xl">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/80 px-3 py-1 text-xs text-neutral-600 backdrop-blur">
            <span className="size-1.5 animate-pulse rounded-full bg-neutral-950" />
            {HERO.status}
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
            <span className="block text-neutral-400">{HERO.prefix}</span>
            <span className="block"><GlitchText text={HERO.glitchWord} /></span>
            <span className="block">{HERO.suffix}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-neutral-600 sm:text-lg">{HERO.description}</p>
        </Reveal>

        <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
          <a href={HERO.primaryCta.href} className="rounded-full bg-neutral-950 px-5 py-2.5 text-sm text-white transition-colors hover:bg-neutral-800">
            {HERO.primaryCta.label}
          </a>
          <a href={HERO.secondaryCta.href} className="rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-sm transition-colors hover:border-neutral-950">
            {HERO.secondaryCta.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}