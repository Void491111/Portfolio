export const CARD_LAYOUT = { wide: "md:col-span-2", default: "" };

const MOOISTE = "/projects/mooiste";

export const PROJECTS = [
  {
    slug: "mooiste-pos",
    title: "Mooiste POS",
    year: "2026",
    role: "Full-stack developer",
    layout: "wide",
    summary:
      "Cafe point-of-sale with kitchen queue, stock tracking, cash closing, and QR self-ordering per table.",
    stack: ["Next.js", "Tailwind CSS", "Zustand"], // TODO sesuaiin
    cover: `${MOOISTE}/kasir.png`,
    links: [], // { label: "Live demo", href: "https://..." }
    sections: [
      {
        heading: "Overview",
        body: ["Tulis latar belakang project, masalahnya apa, solusinya apa."],
      },
      {
        heading: "Cashier flow",
        body: ["Jelasin alur kasir: pilih menu, dine in/takeaway, tunai/QRIS."],
        image: { src: `${MOOISTE}/kasir.png`, caption: "Cashier screen" },
      },
      {
        heading: "Kitchen queue",
        body: ["Jelasin antrian dapur dan checklist per item."],
        image: { src: `${MOOISTE}/antrian.png`, caption: "Order queue" },
      },
      {
        heading: "Owner dashboard",
        body: ["Jelasin dasbor omzet, sebaran jam, laporan."],
        image: { src: `${MOOISTE}/dasbor.png`, caption: "Sales dashboard" },
      },
    ],
    gallery: [
      { src: `${MOOISTE}/pesanan.png`, caption: "Order history" },
      { src: `${MOOISTE}/stok.png`, caption: "Stock" },
      { src: `${MOOISTE}/menu.png`, caption: "Menu management" },
      { src: `${MOOISTE}/laporan.png`, caption: "Reports" },
      { src: `${MOOISTE}/tutup-kas.png`, caption: "Cash closing" },
      { src: `${MOOISTE}/qr-meja.png`, caption: "Table QR codes" },
    ],
  },
  {
    slug: "satnusa-hmi",
    title: "Production Machine HMI",
    year: "2025", // TODO
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
    year: "2026", // TODO
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