import React from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section className="bg-black text-gray-300">
      <div className="px-[4%] py-10 md:py-15">
        <p className="mb-4 sm:mb-4 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          Heyy!! I’m a <span className="text-neutral-300">Design Engineer</span> and a <span className="text-neutral-300">Full Stack Developer</span>.
        </p>
        <p></p>
        <p className="mb-4 sm:mb-1 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          I love both Design & Development. I create websites that are not just beautiful, but functional and reliable.
        </p>
        <p className="mb-4 sm:mb-1 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          Right now, I’m building
          <a
            href="https://www.vidstudio.live/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 inline-flex"
          >
            <span className="inline-flex items-center gap-2 bg-black border border-neutral-700 px-2  rounded-lg hover:text-white md:text-lg font-sans shadow-[inset_0_0_12px_rgba(115,115,115,0.6)] hover:shadow-[inset_0_0_12px_rgba(139,92,246,0.6)] transition-all duration-200 font-semibold hover:border-purple-800` ml-1 mr-1">
              <Image
                src="/official/vidstudioLogo.png"
                alt="VidStudio"
                width={16}
                height={16}
                className="block"
              />
              VidStudio
            </span>
          </a>
          - a video recording tool that help anyone record high-quality, beautiful product videos with ease & it's free.
        </p>
        <p className="mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg md:text-xl text-[#A6A6A6]">
          I’m always looking for new opportunities to learn and grow.
        </p>



        <div className="flex flex-wrap justify-center sm:justify-start gap-6 py-2 sm:py-4">

          <a
            href="https://github.com/swamimalode07"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            GitHub <ArrowUpRight size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/swamimalode/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>
          {/* <a
            href="https://leetcode.com/u/shrek07/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-white hover:underline text-sm sm:text-base"
          >
            Leetcode <ArrowUpRight size={16} />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;
