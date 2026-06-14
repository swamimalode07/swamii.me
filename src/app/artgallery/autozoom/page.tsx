"use client";

import React from 'react'
import AutoZoomAnimation from '@/components/AutoZoom';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

type FeatureCardProps = {
    svg?: React.ReactNode;
    title: string;
    description: string;
};

const FeatureCard = ({
    svg,
    title,
    description,
}: FeatureCardProps) => {
    return (
        <div className="bg-[#171717] w-[600px] rounded-lg p-6 flex flex-col gap-4">
            <div className="h-75 flex items-center justify-center overflow-hidden">
                {svg}
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-2xl text-white font-semibold font-syne">
                    {title}
                </p>

                <p className="text-[#828282] text-lg font-sans">
                    {description}
                </p>
            </div>
        </div>
    );
};

const FeaturesSection = () => {
    const router = useRouter();
    return (
        <div className='flex justify-center items-center h-screen bg-[#09090B]'>
               <button
        onClick={() => router.push('/artgallery')}
        className="absolute top-5 left-5 flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl backdrop-blur-lg border border-white/15 transition-all"
      >
        <ArrowLeft size={18} />
        Back to Gallery
      </button>  
            <FeatureCard svg={<AutoZoomAnimation />} title='AI Powered Auto-Zooms' description='AI automatically zooms into key actions, highlighting exactly what viewers need to see.' />
        </div>
    )
}

export default FeaturesSection