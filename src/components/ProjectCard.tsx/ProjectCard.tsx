import Image from "next/image"
import React from "react"
import StatusDot from "../BlinkingDot.tsx/BlinkingDot"
import RingButton from "../RingButton"
import { GitHubIcon } from "@/app/icons/Githubicon"
import { CircleArrowRight } from "lucide-react"

type ProjectStatus = "live" | "building" | "discontinued"

type ProjectCardProps = {
  image: string
  title: string
  description: string
  status?: ProjectStatus
  liveLink?: string
  githubLink?: string
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
}: ProjectCardProps) => {

  const color = statusColorMap[status]

  return (
    <div className="h-full bg-black border border-neutral-800 ring-1 rounded-lg ring-neutral-900 hover:ring-neutral-800 transition duration-300 ring-offset-4 ring-offset-black flex flex-col">
      
      <div className="p-2 rounded-xl">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full md:h-52 object-cover rounded-sm"
        />
      </div>

      <div className="p-2 flex flex-1 flex-col">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-base md:text-xl font-semibold font-space-grotesk mb-2">
            {title}
          </h3>

          <div className="flex gap-2 items-center">
            <StatusDot color={color}/>
            {status}
          </div>
        </div>

        <p className="text-[14px] md:text-base text-gray-400 mb-4 px-2 flex-1">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 p-2 mt-auto">
          {liveLink && (
            <RingButton
              text="View Live"
              icon={CircleArrowRight}
              href={liveLink}
              size="md"
            />
          )}

          {githubLink && (
            <RingButton
              text="Github"
              icon={GitHubIcon}
              href={githubLink}
              size="md"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard