"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceProps {
  logo: string;
  title: string;
  type: string;
  highlights: string[];
  skills: string[];
  color?: string;
  link?: string;
}

const ExperienceSection: React.FC<ExperienceProps> = ({
  logo,
  title,
  type,
  highlights,
  skills,
  color,
  link,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpansion = () => setIsExpanded((prev) => !prev);

  return (
    <div className="font-space-grotesk border-b border-[#1C1C1F] bg-[#09090B] focus:outline-none">
      <div
        onClick={toggleExpansion}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggleExpansion();
        }}
        role="button"
        tabIndex={0}
        className="group flex cursor-pointer items-center gap-4 bg-[#09090B] px-4 py-6 text-white transition-colors duration-200 select-none hover:bg-[#0e0e0f] sm:px-[5%] sm:py-10 focus:outline-none"
      >
        <div className="h-14 w-14 flex-shrink-0 rounded-lg border border-[#2A2A2D] bg-[#18181B] p-1 shadow-sm transition group-hover:border-[#444446]">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <img
              src={logo}
              alt={`${title} Logo`}
              className="pointer-events-none h-full w-full rounded-md object-contain"
            />
          </a>
        </div>

        <div className="flex flex-grow flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <h2 className="text-lg font-semibold sm:text-2xl">{title}</h2>
          <p className="w-fit rounded-md border border-[#2C2C2F] bg-[#1E1F21] px-3 py-1 text-xs text-gray-300 sm:text-sm">
            {type}
          </p>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-shrink-0"
        >
          <ChevronDown className="h-6 w-6 text-gray-400 transition group-hover:text-gray-200" />
        </motion.div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="overflow-hidden bg-[#09090B] px-4 text-white sm:px-[5%]"
          >
            <motion.div
              initial={{ y: -5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -5, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-6 pb-8 pt-4"
            >
              <ul className="space-y-4 text-sm leading-relaxed text-gray-300 sm:text-base">
                {highlights.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-[#444444] shadow-sm"></span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 sm:pt-4">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-md border border-[#2C2C2F] bg-[#18181B] px-3 py-1 text-xs text-gray-300 sm:text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ExperienceSection;
