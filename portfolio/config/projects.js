export const CARD_LAYOUT = { wide: "md:col-span-2", default: "" };

export const PROJECTS = [
  {
    slug: "mooiste-pos",
    title: "Mooiste POS",
    year: "2026",
    role: "Full-stack developer",
    layout: "wide",
    summary:
      "Cafe point-of-sale with kitchen queue, stock tracking, cash closing, and QR self-ordering per table.",
    stack: ["Next.js", "Tailwind CSS", "Zustand"],
    cover: null,
    links: [],
    sections: [
      { heading: "Overview", body: ["Tulis latar belakang project, masalahnya apa, solusinya apa."] },
      { heading: "Cashier flow", body: ["Jelasin alur kasir: pilih menu, dine in/takeaway, tunai/QRIS."] },
      { heading: "Kitchen queue", body: ["Jelasin antrian dapur dan checklist per item."] },
      { heading: "Owner dashboard", body: ["Jelasin dasbor omzet, sebaran jam, laporan."] },
    ],
    gallery: [],
  },
  {
    slug: "satnusa-hmi",
    title: "Production Machine HMI",
    year: "2025",
    role: "Mobile developer & UI designer",
    layout: "default",
    summary: "Flutter app for controlling production machines, with redesigned HMI screens.",
    stack: ["Flutter", "Dart", "Figma"],
    cover: null,
    links: [],
    sections: [{ heading: "Overview", body: ["TODO"] }],
    gallery: [],
  },
  {
    slug: "ternak-klip",
    title: "Ternak Klip",
    year: "2026",
    role: "Developer (team)",
    layout: "default",
    summary: "Video clip app built with a small team for a client.",
    stack: ["TODO"],
    cover: null,
    links: [],
    sections: [{ heading: "Overview", body: ["TODO"] }],
    gallery: [],
  },
];
