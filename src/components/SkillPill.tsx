"use client"

import React from "react";

type SkillPillProps = {
  skillName: string;
  icon?: React.ReactNode;
  visible?: boolean;
};

const SkillPill = ({ skillName, icon, visible = false }: SkillPillProps) => {
  return (
    <div
      className={`group bg-neutral-800 pr-3 pl-2 py-1 rounded-lg text-sm flex items-center gap-2 w-fit cursor-pointer ${visible ? "overflow-visible" : "overflow-hidden"}`}
    >
      <div
        className={`w-6 h-6 relative shrink-0 ${
          visible
            ? "overflow-visible border border-dashed border-neutral-500 rounded-sm flex items-center justify-center"
            : "overflow-hidden"
        }`}
      >
        <span
          className="absolute inset-0 flex items-center justify-center
            transition-transform duration-300 ease-in-out
            group-hover:-translate-y-full"
        >
          {icon}
        </span>

        <span
          className="absolute inset-0 flex items-center justify-center
            transition-transform duration-300 ease-in-out
            translate-y-full group-hover:translate-y-0"
        >
          {icon}
        </span>
      </div>

      <span className="font-medium whitespace-nowrap text-white">{skillName}</span>
    </div>
  );
};

export default SkillPill;