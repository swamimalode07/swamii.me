export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  github?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    name: "GhostType",
    description:
      "A minimalistic typing test app designed to improve typing speed and accuracy with a dynamic leaderboard.",
    image: "/ghosttype.png",
    link: "https://ghosttype.swamii.me",
    github: "https://github.com/swamimalode07/ghosttype",
  },
  {
    id: 2,
    name: "Layers Landing Page",
    description:
      "A SaaS landing page with interactive animations built using modern frontend technologies.",
    image: "/layers.png",
    link: "https://landing.swamii.me",
    github: "https://github.com/swamimalode07/SaaS-Landing-Page",
  },
  {
    id: 3,
    name: "Anieditor",
    description:
      "An app that lets users apply anime overlays and custom images on top of their photos.",
    image: "/anieditor.png",
    link: "https://anieditor.vercel.app",
    github: "https://github.com/swamimalode07/anieditor",
  },
  {
    id: 4,
    name: "ClearStatus",
    description:
      "A multi-tenant status page for SaaS teams to share incidents, maintenance, and uptime updates.",
    image: "/clearstatus.png",
    link: "https://clearstatus.vercel.app",
    github: "https://github.com/swamimalode07/clearstatus",
  },
  {
    id: 5,
    name: "Simon Game",
    description:
      "An interactive memory game with a competitive leaderboard system.",
    image: "/simon.png",
    link: "https://simonsaysplay.vercel.app/login",
    github: "https://github.com/swamimalode07/SimonsaysGame",
  },
  {
    id: 6,
    name: "Mach5 Software",
    description:
      "Frontend development work transforming Figma designs into fully responsive web pages.",
    image: "/mach.png",
    link: "https://mach5.io",
  },
];