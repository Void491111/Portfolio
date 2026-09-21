export const ARC_ROBOT_CONTROL = {
  slug: "arc-robot-control",
  title: "Arc Articulated Robot Control",
  year: "2025",
  role: "Mobile front-end intern",
  layout: "default",
  summary:
    "Flutter app for driving a small two-axis machine from a phone, built as a stripped-down version of the SCARA robot control app.",
  stack: ["Flutter", "Dart", "REST API"],
  cover: null,
  links: [],
  sections: [
    {
      heading: "Context",
      body: [
        "During my internship at PT Satnusa Persada I built the front-end of a mobile app for one of the smaller machines on the floor, a two-axis unit. An engineer had already built the backend, so my side was the interface and the calls against his API.",
      ],
    },
    {
      heading: "Interface",
      body: [
        "Operators there already knew the control app for the SCARA robot, so I kept my screens close to what they were used to rather than inventing a new visual language. That app runs on red and white accents, which happen to be the company's own colors, so the app sits in the same family as everything else on the floor.",
        "What I built is a stripped-down version of that app: the controls a two-axis machine actually needs, and nothing carried over from a six-axis arm. The layout is mobile first, since the whole point was operating the machine from a phone instead of a fixed panel.",
      ],
    },
    {
      heading: "Controls",
      body: [
        "The main screen has an on-screen joystick for moving the two axes, a live coordinate readout, and an emergency stop.",
        "Inputs and outputs are listed with editable labels. A pin named IN3 means nothing to the person holding the phone, so whoever sets the machine up can rename it to whatever that pin is wired to.",
      ],
    },
    {
      heading: "Network check and notes",
      body: [
        "The app talks to the machine over the local network, so a phone on the wrong Wi-Fi simply fails to connect with no explanation. I added a check that compares the phone's network against the machine's and says so before the operator starts pressing buttons.",
        "The home screen also carries a small notes and todo list, plus a log of recent activity, so what happened on the machine stays next to the controls instead of in a separate notebook.",
      ],
    },
  ],
  gallery: [],
};
