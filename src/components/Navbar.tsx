"use client";
import React, { useState, useEffect } from "react";

import CommandMenu from "./CommandMenu";
import { GitHubIcon } from "@/app/icons/Githubicon";
import { useRouter } from "next/navigation";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState<boolean>(false);
  const [stars, setStars] = useState<number | null>(null);

  const router = useRouter();

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleCommandMenu = (): void => {
    setIsCommandMenuOpen(!isCommandMenuOpen);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        toggleCommandMenu();
      }
    };

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      if (!isMobile) {
        document.removeEventListener("keydown", handleKeyDown);
      }
    };
  }, []);

  useEffect(() => {
    const fetchGithubStars = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/swamimalode07/swamii.me"
        );
        const data = await response.json();
        setStars(data.stargazers_count);
      } catch (error) {
        return null;
      }
    };
    fetchGithubStars();
  },[]);

  return (
    <>
      <div className="border-b border-[#424244] px-[2%] py-1 fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-2xl">
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <p className="font-space-grotesk text-sm font-semibold text-white sm:text-xl">
            @code by SWAMI
          </p> 

          <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
            <div className="hidden items-center gap-6 md:flex lg:gap-6">
              <button
                className=" font-sans font-medium text-white/60 hover:text-white transition-colors"
                onClick={() => router.push("/projects")}
              >
                Projects
              </button>
             <div className="hidden md:flex items-center gap-6">


  {/* Art Gallery */}
  <button
    className="font-sans font-medium text-white/60 hover:text-white transition-colors"
    onClick={() => router.push("/artgallery")}
  >
    Art Gallery
  </button>

  {/* GitHub Stars */}
  <Tooltip>
    <TooltipTrigger asChild>
      <button
        onClick={() =>
          router.push("https://github.com/swamimalode07/swamii.me")
        }
        className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-[#1C1C1F] transition-colors"
      >
        <GitHubIcon className="h-5 w-5 text-white/60 hover:text-white transition-colors" />
        <span className="text-white/60 hover:text-white text-sm">
          {stars ?? "--"}
        </span>
      </button>
    </TooltipTrigger>
    <TooltipContent className="bg-black border border-white/20">
      <p className="text-lg">{stars} stars</p>
    </TooltipContent>
  </Tooltip>
</div>
                      
      
            </div>


            

            <button
              onClick={toggleMenu}
              className="flex h-6 w-6 flex-col items-center justify-center space-y-1 md:hidden"
              aria-label="Toggle menu"
            >
              <span
                className={`h-0.5 w-4 bg-white transition-all duration-300 ${
                  isMenuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-4 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border-t-2 border-[#1C1C1F] px-4 pb-4">
            <div className="space-y-1 pt-3">
              <button
                className="block w-full rounded-lg px-3 py-3 text-left font-sans font-medium text-white transition-colors hover:bg-[#1C1C1F] hover:text-gray-300"
                onClick={() => router.push("/projects")}
              >
                Projects
              </button>

              {/* <button
                className="block w-full text-left font-sans font-medium text-white hover:text-gray-300 transition-colors py-3 hover:bg-[#1C1C1F] rounded-lg px-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Art
              </button> */}

              <button
                className="block w-full rounded-lg px-3 py-3 text-left font-sans font-medium text-white transition-colors hover:bg-[#1C1C1F] hover:text-gray-300"
                onClick={() => {
                  setIsMenuOpen(false);
                  toggleCommandMenu();
                }}
              >
                Search
              </button>
               <button
                className="block w-full rounded-lg px-3 py-3 text-left font-sans font-medium text-white transition-colors hover:bg-[#1C1C1F] hover:text-gray-300"
                onClick={() => router.push("/artgallery")}
              >
                Art Gallery
              </button>
            </div>
          </div>
        </div>
      </div>

      <CommandMenu
        isOpen={isCommandMenuOpen}
        onClose={() => setIsCommandMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
