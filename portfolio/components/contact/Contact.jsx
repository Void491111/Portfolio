import Reveal from "@/components/ui/Reveal";
import { SITE, CONTACT, SOCIALS } from "@/config/site";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-neutral-200 px-4 py-24 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">{CONTACT.heading}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <a href={`mailto:${SITE.email}`} className="mt-6 inline-block text-lg underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-950">
            {SITE.email}
          </a>
        </Reveal>
        <Reveal delay={0.15}>
          <ul className="mt-8 flex flex-wrap gap-5 text-sm text-neutral-600">
            {SOCIALS.map(function renderSocial(social) {
              return (
                <li key={social.href}>
                  <a href={social.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-neutral-950">
                    {social.label} ↗
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
        <p className="mt-16 font-mono text-xs text-neutral-400">© {new Date().getFullYear()} {SITE.name}</p>
      </div>
    </section>
  );
}