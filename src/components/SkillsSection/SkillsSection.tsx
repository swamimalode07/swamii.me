import React from "react";
import SkillPill from "./SkillPill";
import { skills } from "./constants";

const SkillSection = () => {
  return (
    <div className="px-[4%] py-10 ">
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillPill
            key={skill.name}
            skillName={skill.name}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillSection;