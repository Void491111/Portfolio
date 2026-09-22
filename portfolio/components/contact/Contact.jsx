import Reveal from "@/components/ui/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import EmailLink from "./EmailLink";
import CopyEmail from "./CopyEmail";
import LocalTime from "./LocalTime";
import SocialLinks from "./SocialLinks";
import FooterColumn from "./FooterColumn";
import Watermark from "./Watermark";
import { SITE, CONTACT, SOCIALS } from "@/config/site";
import { FOOTER } from "@/config/footer";

export default function Contact() {
  const copyright = `\u00a9 ${new Date().getFullYear()} ${SITE.name}`;

  return (
    <section id="contact" className="px-4 pb-6 pt-10 sm:px-8 sm:pt-16">
      <div className="panel-dark relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-5 pt-12 sm:px-12 sm:pt-20">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <SectionLabel>{FOOTER.label}</SectionLabel>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-5xl">{CONTACT.heading}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-md text-neutral-600">{FOOTER.subheading}</p>
          </Reveal>

          <Reveal delay={0.15} className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
            <EmailLink email={SITE.email} />
            <CopyEmail email={SITE.email} />
          </Reveal>

          <Reveal delay={0.2} className="mt-14 grid gap-8 border-t border-neutral-200 pt-8 text-sm sm:mt-20 sm:grid-cols-3">
            <FooterColumn label={FOOTER.timeLabel}>
              <LocalTime />
            </FooterColumn>
            <FooterColumn label={FOOTER.socialLabel}>
              <SocialLinks links={SOCIALS} />
            </FooterColumn>
            <FooterColumn label={copyright}>
              <a href="#" className="group inline-flex items-center gap-1 text-neutral-600 transition-colors hover:text-neutral-950">
                {FOOTER.backToTop}
                <span className="transition-transform duration-300 group-hover:-translate-y-0.5">{"\u2191"}</span>
              </a>
            </FooterColumn>
          </Reveal>
        </div>
        <Watermark text={FOOTER.watermark} />
      </div>
    </section>
  );
}