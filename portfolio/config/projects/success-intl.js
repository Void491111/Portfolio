const IMG = "/projects/success-intl/";

export const SUCCESS_INTL = {
  slug: "success-intl",
  title: "Success International",
  year: "2026",
  role: "Freelance build",
  layout: "default",
  summary:
    "A consulting firm's WordPress site rebuilt on Wix Studio, matched section by section, with the animation and counters written by hand in Velo.",
  stack: ["Wix Studio", "Velo", "CSS"],
  cover: IMG + "home-hero.webp",
  links: [],
  highlights: [
    "13 pages rebuilt from scratch, not imported",
    "Hero and counter animation written in Velo",
    "Chinese and English from the same pages",
  ],
  sections: [
    {
      heading: "Why they left WordPress",
      body: [
        "Success International is a management consulting firm in Taiwan that certifies companies against ISO and ESG standards. Their site ran on WordPress, and the plugins it depended on had turned into a maintenance problem.",
        "The decision was to move the whole thing to Wix Studio, where the client could keep editing it without a developer on retainer.",
      ],
      image: { src: IMG + "home-hero.webp", caption: "The rebuilt homepage" },
    },
    {
      heading: "Match it, don't redesign it",
      body: [
        "The brief was a migration, not a redesign. That makes the job narrower and harder at the same time: every decision is already made, and my job was to land it inside a different builder.",
        "So I worked from measurements instead of impressions. Header 121px tall sitting over the hero, 1140px content container, logo at 174×55, cards at 342×246 on a three-by-two grid. The colors and type came from the original as a fixed set rather than something I picked.",
      ],
      image: { src: IMG + "iso-cards.webp", caption: "ISO certification cards, rebuilt on the Wix grid" },
    },
    {
      heading: "What a builder won't carry across",
      body: [
        "Partway through, the build had to move into a different Wix site. I assumed copy-paste would bring the sections with it. It brings the layout and nothing else.",
        "Velo code, the global stylesheet and its classes, CMS collections and their datasets, header and menu settings, page slugs and SEO fields all stay behind. The homepage hero also sits at a negative offset so it overlaps the header, and that layering breaks on paste.",
        "I wrote the list down and re-did those parts deliberately instead of discovering each one by finding it broken.",
      ],
    },
    {
      heading: "The parts Wix doesn't give you",
      body: [
        "Two things on the homepage aren't built-in. The hero slides have to zoom slowly while the text rises, and each slide change has to restart both animations. CSS animations only run once, so re-triggering means swapping the element between two class names, A and B, every time the slideshow changes.",
        "The counters, 20+ years and 100+ companies, count up the first time the section comes into view and then stop. They ease out rather than tick linearly, and a guard keeps them from replaying every time you scroll back.",
        "Both live in Velo with their numbers in a separate config file, so the client's content edits never touch the code.",
      ],
      image: { src: IMG + "news.webp", caption: "News and blog, bound to Wix CMS collections" },
    },
    {
      heading: "Two languages, one set of pages",
      body: [
        "The site serves Traditional Chinese and English from the same pages through Wix Multilingual, so the layout is built once and the copy swaps. The flag switcher sits in the header next to the menu.",
      ],
      image: { src: IMG + "partners.webp", caption: "Client and partner logos" },
    },
    {
      heading: "Responsive, by hand",
      body: [
        "Wix Studio doesn't reflow a 1440px layout into something sensible on a phone by itself; every breakpoint is positioned. I worked through desktop, tablet and mobile for all 13 pages.",
        "It was the slowest part of the job and the part I learned the most from, because it is where a layout built on fixed coordinates either survives or falls apart.",
      ],
      image: { src: IMG + "home-full.webp", caption: "The homepage end to end" },
    },
  ],
  gallery: [
    { src: IMG + "home-hero.webp", caption: "Homepage hero and services" },
    { src: IMG + "iso-cards.webp", caption: "ISO certification grid" },
    { src: IMG + "partners.webp", caption: "Partners and clients" },
    { src: IMG + "news.webp", caption: "News and blog" },
    { src: IMG + "home-full.webp", caption: "Full homepage" },
  ],
};
