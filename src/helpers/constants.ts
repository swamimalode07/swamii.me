export type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  github?: string;
  status?: "live" | "discontinued" | "building";
  projectBg: string;
};

export const projects: Project[] = [
  // {
  //   id: 0,
  //   name:"VidStudio",
  //   description:"A video editing app that allows users to create and edit videos with a variety of tools and effects.",
  //   image: "/Project/ProjectImages/vidstudio.png",
  //   link: "https://vidstudio.live",
  //   status: "building",
  //   projectBg:"/Project/ProjectBackground/vidstudio.png",
  // },
  {
    id: 1,
    name: "GhostType",
    description:"A minimalistic typing test app designed to improve typing speed and accuracy with a dynamic leaderboard.",
    image: "/Project/ProjectImages/ghosttype.png",
    link: "https://ghosttype.swamii.me",
    github: "https://github.com/swamimalode07/ghosttype",
     status: "live",
     projectBg:"/Project/ProjectBackground/ghosttype.png"
  },
  {
    id: 2,
    name: "Layers Landing Page",
    description:
      "A SaaS landing page with interactive animations built using modern frontend technologies.",
    image: "/Project/ProjectImages/layers.png",
    link: "https://landing.swamii.me",
    github: "https://github.com/swamimalode07/SaaS-Landing-Page",
      status: "live",
      projectBg:"/Project/ProjectBackground/layers.png"
  },
  {
    id: 3,
    name: "Anieditor",
    description:
      "An app that lets users apply anime overlays and custom images on top of their photos.",
    image: "/Project/ProjectImages/anieditor.png",
    link: "https://anieditor.vercel.app",
    github: "https://github.com/swamimalode07/anieditor",
    status: "live",
    projectBg: "/Project/ProjectBackground/anieditor.png"
  },
  {
    id: 4,
    name: "ClearStatus",
    description:
      "A multi-tenant status page for SaaS teams to share incidents, maintenance, and uptime updates.",
    image: "/Project/ProjectImages/clearstatus.png",
    link: "https://clearstatus.vercel.app",
    github: "https://github.com/swamimalode07/clearstatus",
    status: "discontinued",
    projectBg: "/Project/ProjectBackground/clearstatus.png"
  },
  {
    id: 5,
    name: "Simon Game",
    description:
      "An interactive memory game with a competitive leaderboard system.",
    image: "/Project/ProjectImages/simon.png",
    link: "https://simonsaysplay.vercel.app/login",
    github: "https://github.com/swamimalode07/SimonsaysGame",
    status: "live",
    projectBg: "/Project/ProjectBackground/simon.png"
  },
  {
    id: 6,
    name: "Mach5 Software",
    description:
      "Frontend development work transforming Figma designs into fully responsive web pages.",
    image: "/Project/ProjectImages/mach.png",
    link: "https://mach5.io",
    status: "live",
    projectBg: "/Project/ProjectBackground/mach.png"
  },
];