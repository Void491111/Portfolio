const IMG = "/projects/hmi/";

export const HMI_REDESIGN = {
  slug: "hmi-redesign",
  title: "HMI Screen Redesign",
  year: "2025",
  role: "UI/UX design intern",
  layout: "default",
  summary:
    "Redesign of the HMI screens on automated PCB production machines, done in Figma during my internship at PT Satnusa Persada.",
  stack: ["Figma", "Auto Layout"],
  cover: IMG + "after-home.webp",
  links: [],
  highlights: [
    "Screens an operator reads for a whole shift",
    "One fixed sidebar across every screen",
    "Color carries one meaning, not decoration",
  ],
  sections: [
    {
      heading: "Where this ran",
      body: [
        "I interned at PT Satnusa Persada, where the floor runs automated PCB assembly machines. Each machine is driven through its own HMI screen, and an operator looks at that screen for a whole shift.",
      ],
    },
    {
      heading: "The screens before",
      body: [
        "The existing screens had grown by addition. Controls sat wherever there was room, labels were set in the smallest type that still fit, and color showed up on buttons that did unrelated things.",
        "An operator who did not already know the machine had to ask someone. Engineers running a program test worked through the same screens and hit the same wall.",
      ],
      image: { src: IMG + "before-io-monitoring.webp", caption: "The original I/O monitoring screen" },
    },
    {
      heading: "One screen for machine state",
      body: [
        "The redesign puts state, live metrics and the run controls together. Whether the machine is running or stopped reads as a single chip at the top, instead of being worked out from which indicator happens to be lit.",
      ],
      image: { src: IMG + "after-home.webp", caption: "Redesigned home screen" },
    },
    {
      heading: "Navigation that stays put",
      body: [
        "Five destinations sit in a fixed sidebar: machine selection, I/O monitoring, home, parameter settings and error monitoring. They hold the same position on every screen, so moving between them becomes muscle memory instead of a search.",
        "The station table replaces a wall of indicators. One row per station, one column per state, read left to right.",
      ],
      image: { src: IMG + "after-machine-status.webp", caption: "Station status table" },
    },
    {
      heading: "Color with one job",
      body: [
        "Each color carries a single meaning across every screen, so the color of a control tells you what kind of thing it is before you read its label. On the old screens the same color could mean three different things depending on which page you were on.",
      ],
      image: { src: IMG + "after-io-x20.webp", caption: "I/O monitoring, redesigned" },
    },
    {
      heading: "Built with auto layout",
      body: [
        "The screens are built in Figma with auto layout, so spacing and alignment come from the component instead of from nudging things by hand. Trying a different arrangement cost minutes rather than a rebuild.",
      ],
    },
  ],
  gallery: [
    { src: IMG + "before-machine-control.webp", caption: "Before: machine control" },
    { src: IMG + "before-teaching.webp", caption: "Before: position teaching" },
    { src: IMG + "after-station-overview.webp", caption: "After: station overview" },
    { src: IMG + "after-auto-running.webp", caption: "After: auto running" },
    { src: IMG + "after-io-x40.webp", caption: "After: I/O X40" },
    { src: IMG + "after-io-y100.webp", caption: "After: output Y100" },
  ],
};
