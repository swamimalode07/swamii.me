"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const Page = () => {
  const router = useRouter();

  return (
    <div className="max-w-7xl mx-auto border-l border-r border-[#27272a] bg-[repeating-linear-gradient(45deg,#000_0px,#000_7px,#1C1C1F_7px,#1C1C1F_8px)] font-space-grotesk">
      <div className="min-h-screen mx-auto">
        <div className="border-b-2 border-[#1C1C1F]">
          <div className="pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:ml-4 md:px-0">
            <div className="max-w-7xl pt-10 md:pt-0 lg:mt-6 flex flex-col items-start justify-center text-white mb-20">

              <div className="flex w-full items-center justify-between mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#494949] bg-[#1C1C1C]">
                  <span className="text-sm text-[#A4A4A4]">
                    🔥 Coming soon
                  </span>
                </div>

                <button
                  onClick={() => router.back()}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#494949] bg-[#1C1C1C] text-sm text-white hover:bg-[#2A2A2A] transition mr-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-bold leading-tight ">
                Components
              </h1>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[120px] font-bold leading-tight sm:-mt-4 md:-mt-6 lg:-mt-2 xl:-mt-8 ">
                Library
              </h1>
            </div>
          </div>
        </div>

        <div className="h-16 sm:h-20 md:h-24 bg-[radial-gradient(circle,#1D202A_1px,transparent_1px)] [background-size:14px_14px] sm:[background-size:16px_16px] md:[background-size:18px_18px] bg-black border-b-2 border-[#1C1C1F]"></div>

        <div className="bg-black px-4 sm:px-6 md:pl-4 md:px-0 py-6">
          <div className="max-w-7xl">
            <p className="text-[#494949] text-sm">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
