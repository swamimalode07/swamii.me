"use client";
import { useState } from "react";
import { taskbarData } from "./constants";

const Taskbar = () => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="fixed bottom-8 left-1/2 z-50 flex -translate-x-1/2 transform items-center gap-4 rounded-full border border-white/20 bg-white/10 p-3 shadow-lg backdrop-blur-sm">
      {taskbarData.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-[#282828] p-2 transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:scale-105"
        >
          {item.icon}
        </a>
      ))}

      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="mr-2 ml-1 flex items-center gap-2"
      >
        <div className="relative flex items-center justify-center">
          <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-green-500 opacity-75"></span>
          <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]"></span>
        </div>

        <span
          className={`font-sans ml-1 overflow-hidden text-sm  font-medium whitespace-nowrap text-white transition-all duration-800 ease-in-out ${hovered ? "max-w-xs opacity-100" : "max-w-0 opacity-0"
            }`}
        >
          Open to work
        </span>
      </div>
    </div>
  );
};

export default Taskbar;
