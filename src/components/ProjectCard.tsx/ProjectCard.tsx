"use client";

import Image from "next/image"
import React, { useEffect } from "react"
import StatusDot from "../BlinkingDot.tsx/BlinkingDot"
import RingButton from "../RingButton"
import { GitHubIcon } from "@/app/icons/Githubicon"
import { CircleArrowRight } from "lucide-react"
import { motion } from "motion/react"
import { Button } from "../ui/button";

type ProjectStatus = "live" | "building" | "discontinued"

type ProjectCardProps = {
  image: string
  title: string
  description: string
  status?: ProjectStatus
  liveLink?: string
  githubLink?: string
  projectBg?: string
}

const statusColorMap: Record<ProjectStatus, "green" | "yellow" | "red"> = {
  live: "green",
  building: "yellow",
  discontinued: "red",
}

const ProjectCard = ({
  image,
  title,
  description,
  status = "live",
  liveLink,
  githubLink,
  projectBg,
}: ProjectCardProps) => {

  const color = statusColorMap[status]
  const [githubStar, setGithubStar] = React.useState<number>(0);

   const fetchStars = async (repo: string): Promise<number> => {
    try {
      const res = await fetch(`https://api.github.com/repos/${repo}`);
      if (!res.ok) return 0;
      const data = await res.json();
      return typeof data.stargazers_count === "number" ? data.stargazers_count : 0;
    } catch (err) {
      console.error("Error fetching stars:", err);
      return 0;
    }
  };

  useEffect(() => {
    if (githubLink) {
      fetchStars( githubLink.replace("https://github.com/", "") ).then(setGithubStar);
    }
  },[githubLink])

  return (
    <div className="h-full group bg-black border border-neutral-800 ring-1 rounded-lg ring-neutral-900 hover:ring-neutral-800 transition duration-300 ring-offset-4 ring-offset-black flex flex-col">

      <div className="relative w-full md:h-52 rounded-t-lg overflow-hidden bg-neutral-900">
        {githubStar > 0 && (
          <div className="absolute top-2 right-2 z-20">
            <Button variant="primary" size="sm" className="flex items-center gap-1 bg-transparent hover:bg-transparent">
              <GitHubIcon />
              <span className="text-white">{githubStar}</span>
            </Button>
          </div>
        )}

        <Image
          src={projectBg || image}
          alt="background"
          fill
          className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-600"
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y:30 }}
          whileHover={{ opacity: 1, y: 20 }}
          transition={{ duration: 0.2 }}
          className="flex justify-center items-center"
        >
          <Image
            src={image}
            alt={title}
            width={340}
            height={120}
            className="relative z-10 object-contain mt-6 rounded-t-lg border border-neutral-600"
          />
        </motion.div>

      </div>

      <div className="p-2 flex flex-1 flex-col">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-base md:text-xl font-semibold font-space-grotesk mb-2">
            {title}
          </h3>

          <div className="flex gap-2 items-center">
            <StatusDot color={color} />
            {status}
          </div>
        </div>

        <p className="text-[14px] md:text-base text-gray-400 mb-4 px-2 flex-1">
          {description}
        </p>

        <div className={`grid ${githubLink ? "grid-cols-2" : "grid-cols-1"} gap-4 p-2 mt-auto`}>
          {liveLink && (
            <RingButton
              text="View Live"
              icon={CircleArrowRight}
              href={liveLink}
              size="md"
              target="_blank"
              rel="noopener noreferrer"
            />
          )}

          {githubLink && (
            <RingButton
              text="Github"
              icon={GitHubIcon}
              href={githubLink}
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard