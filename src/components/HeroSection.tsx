import React from "react";
import { FileDown, Calendar } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import RingButton from "./RingButton";

const HeroSection = () => {
  return (
    <div>
      <div className="border-b-2 border-[#1C1C1F] bg-black px-[2%] pt-20">
        <div className="px-4 pt-4 sm:px-6 sm:pt-6 md:ml-4 md:px-0 md:pt-4">
          <div className="mb-20 flex max-w-7xl flex-col items-start justify-center pt-10 text-white sm:mt-18 md:pt-0 lg:mt-6">
            <p className="font-space-grotesk text-4xl tracking-tight leading-tight  font-semibold  sm:text-6xl md:text-7xl lg:text-8xl xl:text-[130px]">
              Hi I&apos;m Swami
            </p>
            <p className="font-space-grotesk text-4xl tracking-tight leading-tight font-semibold sm:-mt-4 sm:text-6xl md:-mt-6 md:text-7xl lg:-mt-2 lg:text-8xl xl:-mt-10 xl:text-[130px]">
              I build for the web.
            </p>

            <p className="font-space-grotesk mt-4 w-full text-sm text-secondary sm:mt-6 sm:w-[80%] sm:text-base md:mt-2 md:w-[70%] md:text-lg lg:w-[60%] lg:text-xl xl:w-[45%] xl:text-2xl">
              I build Websites that look and feel good to use. Specialized in
              Full Stack Development and UI & UX Design
            </p>

            <div className="mt-4 flex flex-wrap gap-3 md:gap-6 sm:mt-6 md:mt-8">
                <RingButton text="View my Work" href="https://swamii.me" icon={FileDown}/>
                <RingButton text="Book a Meeting" href="https://swamii.me" icon={Calendar} />
            </div>
          </div>
        </div>
      </div>

      <div className="h-12 border-b-2 border-[#1C1C1F] bg-black bg-[radial-gradient(circle,#1D202A_1px,transparent_1px)] [background-size:12px_12px] sm:h-16 sm:[background-size:14px_14px] md:h-18 md:[background-size:16px_16px]"></div>
    </div>
  );
};

export default HeroSection;
