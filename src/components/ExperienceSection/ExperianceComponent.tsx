"use client";

import { ChevronDown } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";

type RoundedType = "all" | "top" | "bottom" | "none";

type ExperienceProps = {
  company: string;
  role: string;
  duration: string;
  points: string[];
  logo: string;
  skills?: string[];
  rounded?: RoundedType;
};

const getRoundedClass = (type: RoundedType) => {
  switch (type) {
    case "top":
      return "rounded-t-2xl";
    case "bottom":
      return "rounded-b-2xl";
    case "none":
      return "rounded-none";
    case "all":
    default:
      return "rounded-2xl";
  }
};

const Experience = ({
  company,
  role,
  duration,
  points,
  logo,
  skills = [],
  rounded = "all",
}: ExperienceProps) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [open, skills]);

  return (
    <div className="px-4 md:px-[4%]">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={`group border border-white/10 bg-transparent backdrop-blur-xl overflow-hidden transition-all duration-150 ${getRoundedClass(
          rounded
        )}`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-start md:items-center p-4 md:p-5 gap-3">
          <div className="flex items-start md:items-center gap-3 md:gap-4 min-w-0">
            {/* Logo */}
            <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
              <span className="absolute -inset-[2px] rounded-[14px] border border-white/20" />
              <div className="w-full h-full rounded-[12px] bg-white/5 flex items-center justify-center overflow-hidden border border-white/10 relative">
                <img
                  src={logo}
                  alt={company}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center min-w-0">
              <h2 className="text-lg md:text-2xl font-semibold tracking-tight leading-snug flex flex-wrap items-center gap-2 font-space-grotesk break-words">
                <span className="truncate">{company}</span>
                <span className="text-[10px] md:text-sm text-secondary font-sans font-normal border border-white/15 px-2 py-0.5 rounded-sm whitespace-nowrap">
                  {role}
                </span>
              </h2>

              <div className="text-secondary/80 text-xs md:text-sm leading-tight">
                {duration}
              </div>
            </div>
          </div>

          <ChevronDown
            className={`w-4 h-4 md:w-5 md:h-5 text-white/70 shrink-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              open ? "rotate-180 scale-110" : ""
            }`}
          />
        </div>

        {/* EXPANDABLE CONTENT */}
        <div
          style={{ height: open ? height : 0 }}
          className="transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-hidden"
        >
          <div
            ref={contentRef}
            className={`px-4 md:px-5 pb-4 md:pb-5 text-sm md:text-base text-secondary/80 leading-relaxed transition-all duration-500 ${
              open
                ? "opacity-100 translate-y-0 blur-0"
                : "opacity-0 -translate-y-2 blur-sm"
            }`}
          >
            {/* Points */}
            <div className="space-y-1.5 md:space-y-2">
              {points.map((point, index) => (
                <p key={index} className="relative pl-4">
                  <span className="absolute left-0 top-[8px] h-1 w-1 rounded-full bg-secondary" />
                  {point}
                </p>
              ))}
            </div>

            {/* Skills */}
            {skills.length > 0 && (
              <div className="mt-5 md:mt-6">
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="text-[10px] md:text-xs px-2.5 md:px-3 py-1 rounded-md bg-white/5 border border-white/10 text-white transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;