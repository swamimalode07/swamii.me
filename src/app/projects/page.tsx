"use client";
import React, { useState, useEffect } from "react";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { GitHubIcon } from "../icons/Githubicon";
import Link from "next/link";

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [stars, setStars] = useState<Record<string, number>>({});

  const categories = [
    { id: "all", name: "All" },
    { id: "fullstack", name: "Full Stack" },
    { id: "freelance", name: "Freelance" },
    { id: "frontend", name: "Frontend" },
  ];

  const projects = [
    {
      id: 1,
      title: "GhostType",
      description:
        "A minimalistic typing test app designed to enhance your typing speed and accuracy with dynamic leaderboard.",
      category: "frontend",
      technologies: ["React", "Tailwind CSS", "Appwrite"],
      year: "2025",
      image: "/ghosttype.png",
      github: "swamimalode07/ghosttype",
      live: "https://ghosttype.swamii.me",
    },
    {
      id: 2,
      title: "Layers Landing Page",
      description:
        "Landing page for a SaaS, with interactive Animations made using Tailwind CSS and Framer motion",
      category: "frontend",
      technologies: ["Next.js", "Framer motion", "Tailwind CSS", "Typescript"],
      year: "2025",
      image: "/layers.png",
      github: "swamimalode07/SaaS-Landing-Page",
      live: "https://landing.swamii.me",
    },
    {
      id: 3,
      title: "Anieditor",
      description:
        "A site that lets you apply Anime overlays above your Images also let's you add custom images.",
      category: "frontend",
      technologies: ["React", "Tailwind CSS"],
      year: "2025",
      image: "/anieditor.png",
      github: "swamimalode07/anieditor",
      live: "https://anieditor.vercel.app",
    },
    {
      id: 4,
      title: "ClearStatus",
      description:
        "A modern, multi-tenant status page for SaaS teams. Easily share incidents, maintenance, and uptime with users.",
      category: "fullstack",
      technologies: ["React", "Go", "Tailwind CSS", "PostgreSQL"],
      year: "2025",
      image: "/clearstatus.png",
      github: "swamimalode07/clearstatus",
      live: "https://clearstatus.vercel.app",
    },
    {
      id: 5,
      title: "Simon Game",
      description:
        "A interactive memory game with features that also include a leaderboard with 400+ users.",
      category: "fullstack",
      technologies: ["HTML", "CSS", "Node.jsx", "Express", " MongoDB"],
      year: "2024",
      image: "/simon.png",
      github: "swamimalode07/SimonsaysGame",
      live: "https://simonsaysplay.vercel.app/login",
    },
    {
      id: 6,
      title: "Mach5 Software",
      description:
        "Worked as a Frontend Developer, transforming Figma design into fully responsive web pages.",
      category: "freelance",
      technologies: ["HTML", "Tailwind CSS"],
      year: "2025",
      image: "/mach.png",

      live: "https://mach5.io",
    },
  ];

  const fetchStars = async (repo: string) => {
    try {
      const res = await fetch(`https://api.github.com/repos/${repo}`);
      if (!res.ok) return 0;
      const data = await res.json();
      return data.stargazers_count || 0;
    } catch (err) {
      console.error("Error fetching stars:", err);
      return 0;
    }
  };

  useEffect(() => {
    projects.forEach(async (project) => {
      if (project.github) {
        const starCount = await fetchStars(project.github);
        setStars((prev) => ({ ...prev, [project.github]: starCount }));
      }
    });
  }, []);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="font-space-grotesk mx-auto bg-black bg-[repeating-linear-gradient(45deg,#000_0px,#000_7px,#1C1C1F_7px,#1C1C1F_8px)]">
      <div className="mx-auto w-[80%] border-r-2 border-l-2 border-[#1C1C1F] bg-black text-white">
        <div className="border-b border-[#1C1C1F]">
          <div className="mx-auto max-w-5xl px-6 py-10">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <h1 className="font-space-grotesk-700 text-4xl font-bold sm:text-6xl md:text-7xl lg:text-8xl">
                Projects
              </h1>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-[#494949] px-3 py-2 text-sm text-white transition-colors hover:text-white"
              >
                <ArrowLeft size={18} /> Back
              </Link>
            </div>
            <p className="font-space-grotesk-400 max-w-2xl text-base text-[#666] sm:text-xl">
              All my Proof of Work at one place
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-6 py-10 sm:max-w-[80%]">
          <div className="mb-12 flex w-fit gap-1 rounded-full border border-[#1C1C1F] p-1  mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`font-space-grotesk-500 rounded-full px-2.5 py-1.5 text-xs transition-all duration-300 sm:px-4 sm:py-2 sm:text-sm ${
                  selectedCategory === category.id
                    ? "bg-[#1C1C1C] text-white"
                    : "text-[#666] hover:text-[#999]"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#1C1C1F] bg-[#0A0A0A] transition-all duration-500 hover:-translate-y-2 hover:transform hover:border-[#333] hover:shadow-2xl hover:shadow-black/50"
              >
                <div className="relative aspect-[4/2] overflow-hidden bg-[#111]">
                  <img
                    src={
                      project.image ||
                      "https://via.placeholder.com/400x300/111111/666666?text=Project"
                    }
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {project.github && (
                      <a
                        href={`https://github.com/${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
                      >
                        <Github size={20} className="text-white" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-white/10 p-3 backdrop-blur-sm transition-colors duration-200 hover:bg-white/20"
                      >
                        <ExternalLink size={20} className="text-white" />
                      </a>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 rounded-full bg-black/70 px-2 py-1 backdrop-blur-sm">
                    <span className="font-space-grotesk-400 text-xs text-[#888]">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-space-grotesk-600 mb-3 text-xl font-bold transition-colors duration-300 group-hover:text-[#CCC]">
                    {project.title}
                  </h3>
                  <p className="font-space-grotesk-400 mb-4 text-sm leading-relaxed text-[#666]">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-space-grotesk-400 rounded-full border border-[#1C1C1F] bg-[#111] px-2 py-1 text-xs text-[#888]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex w-full flex-col gap-3 sm:flex-row">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-space-grotesk-500 flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#333] bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] px-4 py-2 text-sm text-white transition-all duration-300 hover:border-[#444] hover:from-[#2a2a2a] hover:to-[#3a3a3a]"
                      >
                        <ExternalLink size={16} />
                        View Live
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={`https://github.com/${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-space-grotesk-500 flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#333] bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] px-4 py-2 text-sm text-white transition-all duration-300 hover:border-[#444] hover:from-[#2a2a2a] hover:to-[#2a2a2a]"
                      >
                        <GitHubIcon width={16} />
                        <p>Github</p>
                        <span className="flex items-center gap-1">
                          <span className="border-l border-gray-500 pl-2">
                            {stars[project.github] ?? 0}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <polygon
                              points="12,2 15,8.5 22,9.3 17,14 18.5,21 12,17.8 5.5,21 7,14 2,9.3 9,8.5"
                              fill="#888" // gray color
                            />
                          </svg>
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-20">
            <div className="flex items-center justify-center">
              <div className="h-1 w-1 rounded-full bg-[#333]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
