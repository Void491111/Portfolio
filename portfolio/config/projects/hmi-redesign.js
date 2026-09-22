export const HMI_REDESIGN = {
  slug: "hmi-redesign",
  title: "HMI Screen Redesign",
  year: "2025",
  role: "UI/UX design intern",
  layout: "default",
  summary:
    "Redesign of the HMI screens on automated PCB production machines, done in Figma during my internship at PT Satnusa Persada.",
  stack: ["Figma", "Auto Layout"],
  cover: null,
  links: [],
  sections: [
    {
      heading: "Where this ran",
      body: [
        "I interned at PT Satnusa Persada, where the floor runs automated PCB assembly machines. Each machine is driven through its own HMI screen, and an operator looks at that screen for a whole shift.",
      ],
    },
    {
      heading: "Problem",
      body: [
        "The screens had collected controls over the years. Buttons sat wherever there was space, so an operator had to hunt for the one they needed, and anything unfamiliar meant stopping to ask someone. Engineers running program tests went through the same screens and hit the same wall.",
      ],
    },
    {
      heading: "Redesign",
      body: [
        "I rebuilt the layout in Figma as a clean interface on a white background. Controls are grouped by what they do rather than by when they were added, and color carries one meaning per function, so the color of a control tells you what kind of action it performs before you read its label.",
        "The screens are built with auto layout, so spacing and alignment come from the component instead of from nudging things by hand. That kept the grouping consistent from one screen to the next, and trying a different arrangement cost a few minutes rather than a rebuild.",
      ],
    },
  ],
  gallery: [],
};

