import React, { useState, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type ProjectsCardProps = {
  title: string;
  description: string;
  image: string;
  url?: string;
};

const ProjectsCard: React.FC<ProjectsCardProps> = ({
  title,
  description,
  image,
  url,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="relative font-space-grotesk">
      <div
        ref={cardRef}
        className={`relative bg-black pb-6 transition-all duration-300 ${url ? "cursor-pointer" : ""} `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
      >
        <div
          className="mx-2 flex flex-row items-center justify-between gap-3 border-b-2 border-[#404043] pt-3 pb-3 transition-transform duration-300 sm:mx-4 sm:gap-6 sm:pt-4 sm:pb-4 lg:mx-18 lg:gap-10 lg:pt-3 lg:pb-3"
          style={{
            transform: isHovered ? "scale(1.02)" : "scale(1)",
          }}
        >
          <div className="p-2 pt-4 pb-4 sm:p-4 lg:p-4">
            <div className="text-2xl font-normal text-white transition-colors duration-300 sm:text-3xl lg:text-5xl">
              {title}
            </div>
            <div className="sm:text-md mt-1 text-lg text-gray-400 transition-colors duration-300 sm:mt-2 lg:mt-3 lg:text-lg">
              {description}
            </div>
          </div>

          <div className="rounded-xl border border-[#535355] bg-[#18181B] p-1 transition-all duration-300 sm:p-2">
            <Image
              src={image}
              alt={`${title} screenshot`}
              width={400}
              height={250}
              className="h-15 w-28 rounded-lg object-cover transition-all duration-300 sm:h-32 sm:w-44 lg:h-[150px] lg:w-[300px]"
              style={{
                filter: isHovered ? "brightness(1.1)" : "brightness(1)",
              }}
            />
          </div>
        </div>
        {isHovered && url && (
          <div
            className="pointer-events-none fixed z-50 flex transform items-center gap-2 rounded-xl border border-gray-700 bg-[#1C1C1F]/95 px-4 py-2 text-sm font-medium text-white shadow-2xl backdrop-blur-md transition-all duration-200 ease-out"
            style={{
              willChange: "transform",
              transform: `translate(calc(-50% + ${cursorPos.x + (cardRef.current?.getBoundingClientRect().left || 0)}px), calc(-100% + ${cursorPos.y + (cardRef.current?.getBoundingClientRect().top || 0) - 20}px))`,
              left: 0,
              top: 0,
            }}
          >
            Visit Site
            <ArrowUpRight size={16} className="opacity-80" />
            <div className="absolute top-full left-1/2 -translate-x-1/2">
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
