export const ORBIT = {
  avatar: { src: "/avatar.webp", alt: "Alif Hidayat", size: 132 },
  rings: [
    {
      id: "inner",
      radius: 118,
      duration: "52s",
      reverse: false,
      className: "",
      nodes: ["Next.js", "React", "Tailwind"],
    },
    {
      id: "outer",
      radius: 180,
      duration: "78s",
      reverse: true,
      className: "hidden sm:block",
      nodes: ["TypeScript", "Flutter", "Figma", "Prisma"],
    },
  ],
  cards: [
    { id: "where", title: "Batam, ID", body: "GMT+7", position: "left-0 top-4", className: "hidden sm:block" },
    { id: "school", title: "Politeknik Negeri Batam", body: "D3 Informatics, 2026", position: "right-0 bottom-6", className: "hidden sm:block" },
  ],
};
