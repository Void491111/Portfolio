const IMG = "/projects/shift/";

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
  sections: [
    {
      heading: "Overview",
      body: [
        "Mooiste started as my final-year project: a web ordering system for a cafe in Batam. This is the full remake. Same problem, rebuilt from scratch as a point-of-sale a cashier can run a whole shift on.",
        "The original stopped at ordering. The remake covers the shift end to end: taking orders at the counter, routing drinks and food to the right station, tracking what is still in stock, counting the cash drawer at closing, and giving the owner numbers to read the next morning.",
        "Two roles share one app. A cashier only sees what a shift needs. The owner gets menu management, reports and table QR codes on top of that.",
      ],
    },
    {
      heading: "Taking an order",
      body: [
        "The menu is grouped into Coffee, Non Coffee, Food and Snack, with search on top for a cafe that keeps adding items. Each card shows how many are left, and the quantity stepper sits on the card itself so the cashier never leaves the grid mid-order.",
        "The order panel keeps dine-in and takeaway apart, since they are billed and served differently. Tax is applied at 10%, and the order closes with either cash or QRIS.",
      ],
      image: { src: IMG + "kasir-cart.webp", caption: "Counter view with an open order" },
    },
    {
      heading: "Kitchen queue",
      body: [
        "Every paid order lands in the queue as a card. Drinks are a checklist the barista ticks off one by one, and kitchen items are listed separately underneath so the two stations do not read each other's work.",
        "A counter shows progress per order, so anyone walking past knows what is nearly done. Orders already handed over stay parked at the bottom for a few minutes with an undo, because the most common mistake is handing a drink to the wrong table.",
      ],
      image: { src: IMG + "antrian.webp", caption: "Queue with per-item checklist" },
    },
    {
      heading: "Stock that reflects open orders",
      body: [
        "Stock keeps three numbers apart: what is physically on hand, what is already committed to orders still in the queue, and what is actually available to sell. Without that split a cashier can sell the same last portion twice within a minute.",
        "The owner edits the numbers inline after a delivery. A cashier cannot change stock, only mark an item sold out when the ingredients run out mid-shift. Sold-out items grey out in the counter grid instead of disappearing, so the cashier can tell a guest the item exists but is finished today.",
      ],
      image: { src: IMG + "stok-owner.webp", caption: "Stock, owner view with inline editing" },
    },
    {
      heading: "Closing the drawer",
      body: [
        "At the end of a shift the cashier counts the physical cash and types the amount in. The app compares it against what cash orders alone should have produced, so QRIS payments do not distort the count.",
        "The result is recorded with the difference, who closed it, and an optional note for things like change that was never picked up. Past closings stay in a history list, which is what makes a shortage traceable to a shift instead of a guess.",
      ],
      image: { src: IMG + "tutup-kas-selesai.webp", caption: "Closed drawer with recorded difference" },
    },
    {
      heading: "Owner dashboard",
      body: [
        "Revenue, order count, average ticket and cancellations, over one, seven, thirty or ninety days. The daily revenue line makes slow weeks obvious at a glance.",
        "The hourly distribution is the chart the owner actually uses: it shows which hours carry the day, which is what staffing decisions are made from.",
      ],
      image: { src: IMG + "dasbor.webp", caption: "Dashboard with daily revenue and hourly spread" },
    },
    {
      heading: "Reports",
      body: [
        "Any date range, a daily recap table, and a download for either the daily totals or the per-menu breakdown, so the numbers can be handed to whoever does the bookkeeping without giving them an account.",
      ],
      image: { src: IMG + "laporan.webp", caption: "Report with custom date range" },
    },
    {
      heading: "Menu management",
      body: [
        "The owner adds an item, sets its price and category, attaches a photo, and toggles whether it is on sale. The toggle is separate from stock on purpose: an item can be in stock but taken off the menu.",
      ],
      image: { src: IMG + "menu.webp", caption: "Menu management" },
    },
    {
      heading: "Table QR ordering",
      body: [
        "Each table gets a printable QR code. A guest scans it, sees the menu on their own phone, and orders without waiting for someone to come over. The order arrives in the same queue as a counter order, so the kitchen has one place to look.",
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

