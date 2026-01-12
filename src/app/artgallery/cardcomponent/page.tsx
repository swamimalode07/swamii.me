'use client';

import { useRouter } from 'next/navigation';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineAutoGraph } from "react-icons/md";
import { IoGlobeOutline, IoKeypad } from "react-icons/io5";
import { HiOutlineGlobe } from "react-icons/hi";
import { TbProgressCheck } from "react-icons/tb";
import { ArrowLeft } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  return (
      <div className="flex justify-center min-h-screen items-center bg-black">
         <button
        onClick={() => router.push('/artgallery')}
        className="absolute top-5 left-5 flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl backdrop-blur-lg border border-white/15 transition-all"
      >
        <ArrowLeft size={18} />
        Back to Gallery
      </button>  
        <div className="
            w-150 h-130 rounded-lg
            bg-[radial-gradient(circle,rgba(152,66,35,0.5)_1px,transparent_0.001px),linear-gradient(to_top_right,#F7A404_0%,#C94802_20%,#010101_65%)]
            bg-[size:15px_15px,auto]
          ">
            <div className="w-90 mx-auto m-8 bg-[#222020]/50 p-2 rounded-lg space-y-4 border border-[#363636]">
              <div className="bg-[#111111]/50 rounded-lg border border-[#3B2628]">
                <h1 className="text-xl px-6 pt-6 pb-2 font-semibold font-sans">Grow</h1>
                <p className="text-sm font-normal text-[#6E6E6E] px-6">We specialize in maximizing your investment potential across cash assets, ETFs, and cryptocurrencies.</p>
                <Orbit/>
              </div>
            </div>
          </div>

      </div>
  );
}


const RotatingIcon = ({ icon: Icon, bgColor = "bg-white", iconColor = "text-black" }: { icon: React.ComponentType<{ className: string }>; bgColor?: string; iconColor?: string }) => {
  return (
    <div className={`${bgColor} h-6 w-6 rounded-full flex items-center justify-center `}>
      <Icon className={`h-3 w-3 ${iconColor}`} />
    </div>
  );
};

const Orbit = () => {
  return (
    <div className="p-4">
      <div className="relative w-[300px] h-[300px] mx-auto">
        <svg width="300" height="300" viewBox="0 0 200 200" className="block bg-[#111111]/20 rounded-full">
          <defs>
            <linearGradient id="fillGrad" x1="80%" y1="50%" x2="10%" y2="10%">
              <stop offset="0%" stopColor="#000" opacity="0.1" />
              <stop offset="80%" stopColor="#902B01" />
              <stop offset="100%" stopColor="#F64901" />
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="fillGradTwo" x1="80%" y1="90%" x2="10%" y2="10%">
              <stop offset="0%" stopColor="#000" />
              <stop offset="20%" stopColor="#902B01" />
              <stop offset="100%" stopColor="#F64901" />
            </linearGradient>
          </defs>
          <defs>
            <linearGradient id="fillGradThree" x1="10%" y1="100%" x2="10%" y2="10%">
              <stop offset="0%" stopColor="#000" />
              <stop offset="80%" stopColor="#902B01" />
              <stop offset="100%" stopColor="#F64901" />
            </linearGradient>
          </defs>
          <circle cx="100" cy="100" r="99" fill="url(#fillGrad)" stroke="#FE4D00" strokeDasharray="3" strokeWidth="0.4" fillOpacity="0.2" />
          <circle cx="100" cy="100" r="70" fill="url(#fillGradTwo)" stroke="#FE4D00" strokeWidth="0.4" fillOpacity="0.1" />
          <circle cx="100" cy="100" r="40" fill="url(#fillGradThree)" stroke="#FE4D00" strokeWidth="0.4" fillOpacity="0.12" />
          <circle cx="100" cy="100" r="15" fill="#FE4D00" />
          <path
            d="M 100 0 C 115 55, 145 85, 200 100 C 145 115, 115 145, 100 200 C 85 145, 55 115, 0 100 C 55 85, 85 55, 100 0 Z"
            transform="translate(100 100) scale(0.07) translate(-100 -100)"
            fill="white"
          />
        </svg>

        <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-full h-full animate-[spin_12s_linear_infinite]">
            {/* Icon at 0° (top) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <div className="animate-[spin_12s_linear_infinite_reverse]">
                <RotatingIcon icon={HiOutlineGlobe} bgColor="bg-white" iconColor="text-[#F64901]"/>
              </div>
            </div>
            {/* Icon at 120° (bottom-right) */}
            <div className="absolute left-[93.3%] top-[75%] -translate-x-1/2 -translate-y-1/2">
              <div className="animate-[spin_12s_linear_infinite_reverse]">
                <RotatingIcon icon={IoGlobeOutline} bgColor="bg-white" iconColor="text-[#F64901]" />
              </div>
            </div>
            {/* Icon at 240° (bottom-left) */}
            <div className="absolute left-[6.7%] top-[75%] -translate-x-1/2 -translate-y-1/2">
              <div className="animate-[spin_12s_linear_infinite_reverse]">
                <RotatingIcon icon={MdOutlineAutoGraph} bgColor="bg-white" iconColor="text-[#F64901]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 w-[70%] h-[70%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-full h-full animate-[spin_8s_linear_infinite_reverse]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="animate-[spin_8s_linear_infinite]">
                <RotatingIcon icon={FaRegUserCircle} bgColor="bg-white" iconColor="text-[#F64901]" />
              </div>
            </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <div className="animate-[spin_8s_linear_infinite]">
                <RotatingIcon icon={TbProgressCheck} bgColor="bg-white" iconColor="text-[#F64901]" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 w-[40%] h-[40%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative w-full h-full animate-[spin_6s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="animate-[spin_6s_linear_infinite_reverse]">
                <RotatingIcon icon={IoKeypad} bgColor="bg-white" iconColor="text-[#F64901]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};