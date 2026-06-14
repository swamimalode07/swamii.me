import React from 'react';
import Link from 'next/link'; 

interface HeadingProps {
  heading: string;
  showButton?: boolean; 
  buttonLink?: string;    
}

const Heading: React.FC<HeadingProps> = ({ heading, showButton, buttonLink }) => {
  return (
    <div>
      <div
        className="
          text-2xl sm:text-3xl md:text-4xl
          font-semibold text-white
          border-b-2 border-t-2 border-[#1C1C1F]
          bg-[#09090B]
          px-3 sm:px-[5%] py-2 md:py-3
          flex items-center justify-between
        "
      >
        <h1>{heading}</h1>

        {showButton && buttonLink && (
          <Link href={buttonLink}>
            <button
              className="
                rounded-full border-2 border-[#444446]
                bg-[#18181B] px-4 sm:px-6 py-1.5
                text-xs sm:text-sm text-gray-200
                transition hover:bg-[#222226]
              "
            >
              See all
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Heading;
