import DotBackground from "./DotBackground";
import GlitchText from "./GlitchText";
import Orbit from "./Orbit";
import Reveal from "@/components/ui/Reveal";
import { HERO } from "@/config/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-[78svh] items-center overflow-hidden px-4 py-20 sm:px-8 lg:min-h-svh lg:py-0">
      <DotBackground />
      <div className="relative mx-auto grid w-full max-w-5xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center xl:max-w-6xl xl:gap-20">
        <div>
          <Reveal>
            <h1 className="text-4xl font-semibold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="sheen block text-neutral-400">{HERO.prefix}</span>
              <span className="mt-2 block">
                <span className="highlight">
                  <GlitchText text={HERO.glitchWord} tone="invert" />
                </span>
              </span>
              {HERO.suffix && <span className="mt-2 block">{HERO.suffix}</span>}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-neutral-600 sm:text-lg xl:text-xl">{HERO.description}</p>
          </Reveal>

          <Reveal delay={0.25} className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 sm:mt-8">
            <a href={HERO.primaryCta.href} className="group inline-flex items-center gap-2 rounded-full bg-neutral-950 px-5 py-2.5 text-sm text-white transition-colors hover:bg-neutral-800 xl:px-6 xl:py-3 xl:text-base">
              {HERO.primaryCta.label}
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">{"\u2192"}</span>
            </a>
            <a href={HERO.secondaryCta.href} className="text-sm text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-950 hover:decoration-neutral-950 xl:text-base">
              {HERO.secondaryCta.label}
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <Orbit />
        </Reveal>
      </div>
    </section>
  );
}
