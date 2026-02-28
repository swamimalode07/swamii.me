import React from "react";
import { FileDown, Calendar } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <div className="border-b-2 border-[#1C1C1F] bg-black px-[2%]">
        <div className="px-4 pt-4 sm:px-6 sm:pt-6 md:ml-4 md:px-0 md:pt-4">
          <div className="mb-20 flex max-w-7xl flex-col items-start justify-center pt-10 text-white sm:mt-18 md:pt-0 lg:mt-6">
            <p className="font-space-grotesk text-4xl tracking-tight leading-tight  font-semibold  sm:text-6xl md:text-7xl lg:text-8xl xl:text-[130px]">
              Hi I&apos;m Swami
            </p>
            <p className="font-space-grotesk text-4xl tracking-tight leading-tight font-semibold sm:-mt-4 sm:text-6xl md:-mt-6 md:text-7xl lg:-mt-2 lg:text-8xl xl:-mt-10 xl:text-[130px]">
              I build for the web.
            </p>

            <p className="font-space-grotesk mt-4 w-full text-sm text-[#A4A4A4] sm:mt-6 sm:w-[80%] sm:text-base md:mt-8 md:w-[70%] md:text-lg lg:w-[60%] lg:text-xl xl:w-[45%] xl:text-2xl">
              I build Websites that look and feel good to use. Specialized in
              Full Stack Development and UI & UX Design
            </p>

            <div className="mt-4 flex flex-wrap gap-3 sm:mt-6 md:mt-8">
              <a
                href="/Swami_Malode_Resume.pdf"
                download="Swami-Malode-Resume.pdf"
                className="group inline-flex items-center gap-2 rounded-full border border-[#2A2A2A] bg-[#181818] px-5 py-3 text-sm text-gray-300 transition-all duration-300 hover:border-[#3A3A3A] hover:bg-[#1F1F1F] hover:text-white"
              >
                <span className="font-medium">Download Resume</span>
                <FileDown
                  size={18}
                  strokeWidth={1.25}
                  className="text-gray-400 transition-colors duration-300 group-hover:text-white"
                />
              </a>

              <a
                href="https://cal.com/swamimalode"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full border border-[#2A2A2A] bg-[#181818] px-5 py-3 text-base text-gray-300 transition-all duration-300 hover:-translate-y-[1px] hover:border-[#3A3A3A] hover:bg-[#1F1F1F] hover:text-white"
              >
                <span className="font-medium tracking-wide">Book a Meet</span>

                <div className="relative flex items-center">
                  <Image
                    src="/logo.ico"
                    alt="Meet logo"
                    width={22}
                    height={22}
                    className="opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-12 border-b-2 border-[#1C1C1F] bg-black bg-[radial-gradient(circle,#1D202A_1px,transparent_1px)] [background-size:12px_12px] sm:h-16 sm:[background-size:14px_14px] md:h-18 md:[background-size:16px_16px]"></div>
    </div>
  );
};

export default HeroSection;
