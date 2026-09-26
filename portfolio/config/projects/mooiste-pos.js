const IMG = "/projects/mooiste/";

export const MOOISTE_POS = {
  slug: "mooiste-pos",
  title: "Mooiste POS",
  year: "2026",
  role: "Full-stack developer",
  layout: "wide",
  summary:
    "Full remake of Mooiste as a cafe point-of-sale: counter orders, kitchen queue, stock, cash closing, reports, and table QR ordering.",
  stack: ["Next.js", "TypeScript", "NestJS", "Prisma", "Supabase", "Tailwind CSS"],
  cover: IMG + "kasir-cart.webp",
  links: [],
  highlights: [
    "Covers a full shift: order, queue, stock, cash close",
    "Two roles in one app, cashier and owner",
    "Guests order from their own phone by table QR",
  ],
  sections: [
    {
      heading: "Why rebuild it",
      body: [
        "Mooiste began as my final-year project, a web ordering system for a cafe in Batam. It stopped at ordering.",
        "The remake covers the whole shift: orders at the counter, drinks and food routed to the right station, stock that moves as things sell, a cash count at closing, and numbers the owner reads the next morning. Two roles share one app. A cashier sees only what a shift needs, while the owner gets menu, reports and table QR codes on top.",
      ],
    },
    {
      heading: "Taking an order",
      body: [
        "Each menu card shows what is left and carries its own quantity stepper, so the cashier never leaves the grid mid-order. Dine-in and takeaway stay separate because they are billed and served differently. Tax is 10%, and the order closes with cash or QRIS.",
      ],
      image: { src: IMG + "kasir-cart.webp", caption: "Counter view with an open order" },
    },
    {
      heading: "Kitchen queue",
      body: [
        "Drinks are a checklist the barista ticks off. Kitchen items sit in their own list underneath, so neither station reads the other's work.",
        "Handed-over orders park at the bottom for a few minutes with an undo. The most common mistake on a busy night is giving a drink to the wrong table.",
      ],
      image: { src: IMG + "antrian.webp", caption: "Queue with per-item checklist" },
    },
    {
      heading: "Stock that knows about open orders",
      body: [
        "Three numbers stay separate: on hand, committed to orders still in the queue, and actually available. Without that split, two cashiers can sell the same last portion within a minute.",
        "The owner edits counts inline after a delivery. A cashier can only mark an item sold out. Sold-out items grey out in the grid instead of vanishing, so a guest gets told the item exists but is finished today.",
      ],
      image: { src: IMG + "stok-owner.webp", caption: "Stock, owner view with inline editing" },
    },
    {
      heading: "Closing the drawer",
      body: [
        "The cashier counts the drawer and types the amount. It is checked against cash orders only, so QRIS never distorts the count, and the difference is recorded with who closed it and an optional note. Thirty closings stay in history, which is what makes a shortage traceable to a shift.",
      ],
      image: { src: IMG + "tutup-kas-selesai.webp", caption: "Closed drawer with recorded difference" },
    },
    {
      heading: "What the owner sees",
      body: [
        "Revenue, orders, average ticket and cancellations across 1, 7, 30 or 90 days. The hourly chart is the one that gets used: it shows which hours carry the day, and staffing follows from that.",
      ],
      image: { src: IMG + "dasbor.webp", caption: "Dashboard with daily revenue and hourly spread" },
    },
    {
      heading: "Reports",
      body: ["Any date range, a daily recap, and a download for daily totals or the per-menu breakdown."],
      image: { src: IMG + "laporan.webp", caption: "Report with custom date range" },
    },
    {
      heading: "Menu",
      body: [
        "Price, category, photo, and an on-sale toggle kept separate from stock. An item can be in stock and still be off the menu.",
      ],
      image: { src: IMG + "menu.webp", caption: "Menu management" },
    },
    {
      heading: "Table QR",
      body: [
        "A printable code per table. A guest scans, orders from their phone, and it lands in the same queue as a counter order.",
      ],
      image: { src: IMG + "qr-meja.webp", caption: "Printable QR codes per table" },
    },
  ],
  gallery: [
    { src: IMG + "kasir-empty.webp", caption: "Counter, no open order" },
    { src: IMG + "pesanan-kasir.webp", caption: "Order history, cashier view" },
    { src: IMG + "pesanan-owner.webp", caption: "Order history, owner view" },
    { src: IMG + "stok-kasir.webp", caption: "Stock, cashier view" },
    { src: IMG + "tutup-kas-input.webp", caption: "Counting the drawer" },
  ],
};

