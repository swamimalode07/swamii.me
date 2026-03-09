"use client";
import React from "react";
import { FileDown, Calendar } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import RingButton from "./RingButton";

const HeroSection = () => {
  return (
    <div>
      <div className=" bg-black md:px-[2%] pt-20">
        <div className="px-4 pt-4 sm:px-6 sm:pt-6 md:ml-4 md:px-0 md:pt-8">
          <div className="mb-7 md:mb-20 flex max-w-7xl flex-col items-start justify-center pt-10 text-white sm:mt-18 md:pt-0 lg:mt-6">
            <div className="font-space-grotesk text-4xl tracking-tight leading-tight  font-semibold  sm:text-6xl md:text-7xl lg:text-8xl xl:text-[130px]">
              <div className="flex items-center gap-4">
                <span>Hi I&apos;m Swami </span>
                <span onClick={() => window.open("https://x.com/SwamiMalode", "_blank", "noopener,noreferrer")} className="text-[#27272A] hover:text-blue-500 hover:rotate-10 transform-fill transition-all duration-150 ease-in-out cursor-pointer">
                  <svg className="w-12 h-12 sm:w-24 sm:h-24" width="98" height="98" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M50.9026 63.3234C50.341 63.3234 49.5453 63.2184 48.5156 63.0084C47.4859 62.7984 46.8071 62.6227 46.4793 62.4813C45.3093 64.824 43.718 66.663 41.7053 67.9984C39.6926 69.3337 37.4458 70.0014 34.965 70.0014C32.4843 70.0014 30.179 69.2635 28.0493 67.7877C25.9196 66.3116 24.4334 64.5428 23.5909 62.4813C22.1399 63.0436 20.6421 63.3248 19.0974 63.3248C15.5869 63.3248 12.5913 62.0011 10.1105 59.3537C7.62971 56.7065 6.41272 53.5791 6.45953 49.9713C6.41263 49.8313 6.41263 49.6907 6.45953 49.5495V49.1277C6.41263 48.9873 6.41263 48.8468 6.45953 48.7062C6.50643 48.5658 6.50643 48.4252 6.45953 48.2845C4.44682 46.9726 2.86707 45.2976 1.72029 43.2594C0.573428 41.2203 0 39.0177 0 36.6516C0 34.2855 0.620188 31.9896 1.86057 29.7641C3.10097 27.5385 4.86794 25.84 7.16149 24.6687L6.88079 23.5442C6.59995 22.8414 6.45953 22.0448 6.45953 21.1546C6.36596 20.7798 6.36596 20.3815 6.45953 19.9598C6.41263 16.3989 7.60621 13.2831 10.0403 10.6125C12.4742 7.94177 15.4933 6.60642 19.0974 6.60642C20.6421 6.60642 22.1399 6.88754 23.5909 7.44978C24.4802 5.34136 25.9547 3.57263 28.0142 2.14358C30.0736 0.714525 32.3905 0 34.9649 0C40.1137 0 43.9518 2.48326 46.4793 7.44978C47.7197 6.88754 49.1941 6.60642 50.9026 6.60642C54.4131 6.60642 57.3971 7.91834 59.8546 10.5422C62.312 13.166 63.5875 16.3052 63.6811 19.9598C63.6344 20.241 63.6111 20.6392 63.6111 21.1546L63.1901 23.5442C63.0967 23.9659 62.9563 24.3407 62.7687 24.6687C64.875 25.6526 66.5834 27.1871 67.8941 29.2721C69.2047 31.3571 69.9068 33.8052 70.0004 36.6165C69.907 39.2403 69.2752 41.583 68.1048 43.6446C66.9346 45.7062 65.3899 47.2523 63.4708 48.2831C63.5641 48.4705 63.6108 48.611 63.6108 48.7048L63.6808 49.5481C63.5874 49.6881 63.5874 49.8287 63.6808 49.9698C63.5874 53.7181 62.3002 56.8808 59.8192 59.458C57.3384 62.0349 54.3664 63.3234 50.9026 63.3234Z" fill="currentColor" />
                    <path d="M46.4092 23.0522L29.4884 39.9197L23.6609 34.0161C22.8184 33.3133 21.9876 32.9619 21.1684 32.9619C20.3493 32.9619 19.4717 33.3133 18.5355 34.0161C17.8334 35 17.4941 35.9488 17.5175 36.8625C17.5408 37.7761 17.9036 38.5141 18.6057 39.0763L26.9608 47.5101C27.8033 48.2129 28.7161 48.5643 29.699 48.5643C30.682 48.5643 31.4543 48.2129 32.016 47.5101H32.0863L51.4215 27.6737C53.1987 25.7173 51.8979 23.5385 51.3622 23.0257C50.8265 22.5129 48.4256 21.0517 46.4092 23.0522Z" fill="white" />
                  </svg>

                </span>
              </div>
            </div>
            <p className="font-space-grotesk text-4xl tracking-tight leading-tight font-semibold sm:-mt-4 sm:text-6xl md:-mt-6 md:text-7xl lg:-mt-2 lg:text-8xl xl:-mt-10 xl:text-[130px]">
              I build for the web.
            </p>
            <p className="font-space-grotesk mt-4 w-full text-sm text-secondary sm:mt-6 sm:w-[80%] sm:text-base md:mt-2 md:w-[70%] md:text-lg lg:w-[60%] lg:text-xl xl:w-[45%] xl:text-2xl">
              I build Websites that look and feel good to use. Design Engineer and Full Stack Developer
            </p>

            <div className="mt-6 flex flex-wrap gap-3 md:gap-6 sm:mt-6 md:mt-8">
              <a href="https://swamii.me" target="_blank" rel="noopener noreferrer">
                <RingButton text="View my Work" icon={FileDown} />
              </a>
              <a href="https://cal.com/swamimalode" target="_blank" rel="noopener noreferrer">
                <RingButton text="Book a Meeting" icon={Calendar} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-14">

      </div>

      {/* <div className="h-12 border-b-2 border-[#1C1C1F] bg-black bg-[radial-gradient(circle,#1D202A_1px,transparent_1px)] [background-size:12px_12px] sm:h-16 sm:[background-size:14px_14px] md:h-18 md:[background-size:16px_16px]"></div> */}
    </div>
  );
};

export default HeroSection;
