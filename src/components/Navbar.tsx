"use client";
import React, { useState, useEffect } from "react";

import CommandMenu from "./CommandMenu";
import { GitHubIcon } from "@/app/icons/Githubicon";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState<boolean>(false);

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

  return (
    <>
      <div className="border-b-2 border-[#1C1C1F] bg-black px-[2%]">
        <div className="flex items-center justify-between px-4 py-4 sm:px-6">
          <p className="font-sans text-lg font-semibold text-white sm:text-xl">
            @code by SWAMI
          </p> 

          <div className="flex items-center gap-3 sm:gap-6 lg:gap-8">
            <div className="hidden items-center gap-6 md:flex lg:gap-8">
              <button
                className=" font-sans font-medium text-white transition-colors hover:text-gray-300"
                onClick={() => router.push("/projects")}
              >
                Projects
              </button>
              <button
                className=" font-sans font-medium text-white transition-colors hover:text-gray-300"
                onClick={() => router.push("/artgallery")}
              >
                Art Gallery
              </button>
            </div>

            {/* <button
              onClick={toggleCommandMenu}
              className="hidden items-center gap-3 rounded-lg border-2 border-[#252528] bg-black px-4 py-2.5 text-gray-400 transition-all duration-200 hover:border-gray-500 hover:text-gray-300 md:flex"
            >
              <span className=" text-sm font-medium">
                Search...
              </span>
              <div className="flex items-center gap-1">
                <kbd className="rounded border border-[#404044] bg-[#252528] px-2 py-1 font-mono text-xs text-gray-300">
                  CTRL
                </kbd>
                <kbd className="rounded border border-[#404044] bg-[#252528] px-2 py-1 font-mono text-xs text-gray-300">
                  K
                </kbd>
              </div>
            </button> */}

            {/* <div className="md:hidden sm:hidden scale-75 origin-right">
              <Searchbox />
            </div> */}
            <a
              href="https://github.com/swamimalode07"
              target="_blank"
              rel="noopener noreferrer"
              className="-ml-4 flex h-7 w-7 items-center justify-center rounded-lg ring-2 ring-[#252528] transition-all duration-200 hover:bg-[#1C1C1F] hover:ring-gray-400 sm:h-8 sm:w-8 md:h-11 md:w-11"
            >
              <GitHubIcon className="h-4 w-4 text-white sm:h-4 sm:w-4 md:h-5 md:w-5" />
            </a>

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
