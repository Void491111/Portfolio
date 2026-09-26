const IMG = "/projects/mooiste-cafe/";

export const MOOISTE_CAFE = {
  slug: "mooiste-cafe",
  title: "Mooiste Cafe",
  year: "2026",
  role: "Full-stack developer",
  layout: "wide",
  summary:
    "The first two generations of Mooiste: the final-year project, then a second build that moved the focus from the admin panel to the counter.",
  stack: ["Next.js", "Laravel", "Tailwind CSS"],
  cover: IMG + "dashboard.webp",
  links: [],
  highlights: [
    "Final-year project, then a second build",
    "QR self-ordering per table from the start",
    "Groundwork for the current remake",
  ],
  sections: [
    {
      heading: "The final-year version",
      body: [
        "The first build was aimed at whoever runs the cafe rather than whoever stands at the till. It is an admin panel: revenue over the last thirty days, order count, average ticket, and voided orders, with the day's orders listed underneath.",
        "Everything the cafe sells is managed from the same place, with categories, menu items and their prices, and user accounts split between admin and cashier.",
      ],
      image: { src: IMG + "dashboard.webp", caption: "Admin dashboard, first version" },
    },
    {
      heading: "Ordering by table QR",
      body: [
        "Each table has a code and its own QR, generated in the app and downloadable as a printable card. A guest scans the code on their table and orders from their phone.",
      ],
      image: { src: IMG + "tables-qr.webp", caption: "Table and QR management" },
    },
    {
      heading: "The second version",
      body: [
        "The first build could take orders but was awkward to run a shift on, so the second version was written around the counter instead of the dashboard. The menu became a grid of cards with photos, prices and categories down the side, with the open order and its total sitting next to it.",
        "Items that sell best are surfaced at the top of the grid instead of being hunted for, which matters most during a rush. A dark theme was added for the same reason a cashier screen usually gets one: it runs all day.",
      ],
      image: { src: IMG + "pos.webp", caption: "Counter view, second version" },
    },
    {
      heading: "Stock and queue",
      body: [
        "The second version also added a queue for paid orders and a simple availability list, so an item that runs out can be taken off the counter without editing the menu.",
      ],
      image: { src: IMG + "inventory.webp", caption: "Stock and menu availability" },
    },
    {
      heading: "Where it went next",
      body: [
        "Both versions are what the current remake is built on. The remake keeps the ideas that worked, the table QR and the counter-first layout, and rebuilds the parts that did not hold up once a whole shift ran through them.",
      ],
    },
  ],
  gallery: [
    { src: IMG + "dashboard-orders.webp", caption: "Order list on the dashboard" },
    { src: IMG + "qr-card.webp", caption: "Printable table card" },
    { src: IMG + "categories.webp", caption: "Categories" },
    { src: IMG + "menus.webp", caption: "Menu management" },
    { src: IMG + "orders.webp", caption: "Order history" },
    { src: IMG + "users.webp", caption: "Users and roles" },
    { src: IMG + "queue.webp", caption: "Queue, second version" },
  ],
};
