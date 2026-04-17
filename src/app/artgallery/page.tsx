"use client";
import { ArrowLeft, ExternalLink, Twitter, Undo2 } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface VideoFrameProps {
  videoUrl: string;
  liveUrl?: string;
  twitterUrl?: string;
}

const VideoFrame: React.FC<VideoFrameProps> = ({
  videoUrl,
  liveUrl,
  twitterUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);


  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Video autoplay failed:", err);
      });
    }
  }, []);


  return (
    <div
      className="group relative mx-auto max-w-[650px] overflow-hidden rounded-2xl outline outline-offset-4 outline-[#1C1C1F]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video Container */}
      <div className="relative aspect-video overflow-hidden bg-[#0A0A0B]">
        <video
          ref={videoRef}
          className="h-full w-full object-cover transition-transform duration-700"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          preload="auto"
          style={{
            pointerEvents: "none",
          }}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

        {/* Subtle Grid Pattern Overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? "opacity-10" : "opacity-0"
            }`}
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="absolute right-2 bottom-2 flex gap-2 transition-all duration-300">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-2 rounded-lg border border-white/10 bg-neutral-800 px-3 py-2 text-white backdrop-blur-xl transition-all duration-300 hover:bg-neutral-900"
          >
            <span className="text-xs font-medium">View Live</span>
            <ExternalLink
              size={14}
              className="transition-transform duration-300"
            />
          </a>
        )}

        {twitterUrl && (
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-3 py-2 text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20"
          >
            <svg
              className="inline-block h-4 w-4 shrink-0"
              viewBox="0 0 24 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9014 0H22.5816L14.5415 9.31897L24 22H16.5941L10.7935 14.309L4.15631 22H0.473926L9.07356 12.0323L0 0H7.59394L12.8372 7.02985L18.9014 0ZM17.6098 19.7662H19.649L6.48589 2.11651H4.29759L17.6098 19.7662Z"
                fill="#A4A4A4"
              />
            </svg>

            <span className="text-xs font-medium">View</span>
          </a>
        )}
      </div>
    </div>
  );
};

const ArtGallery = () => {
  const projects = [
      {
      id: 1,
      videoUrl: "video/realtime.mp4",
      liveUrl: "https://swamii.me/artgallery/realtimecard",
  
    },
    {
      id: 2,
      videoUrl: "video/skillpill.mp4",
      liveUrl: "https://swamii.me/artgallery/skillpill",
  
    },
    {
      id: 3,
      videoUrl: "video/foldercomponent.mp4",
      liveUrl: "https://swamii.me/artgallery/foldercomponent",
      twitterUrl: "https://x.com/SwamiMalode/status/1987369556470341668?s=20",
    },
    {
      id: 4,
      videoUrl: "video/card.mp4",
      liveUrl: "https://swamii.me/artgallery/cardcomponent",
    }
  ];
  const router = useRouter()

  return (
   <div className="bg-black min-h-screen">
  <Container>
    <div className="w-full md:px-8">
      <div className="text-white px-4 md:px-6 max-w-7xl mx-auto">

        {/* Back button */}
        <div className="mt-8 mb-10">
          <Link href="/">
            <Button variant="primary" size="lg">
              <Undo2 className="w-4 h-4 mr-2" /> Back
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-semibold font-space-grotesk mb-3">
            Art Gallery
          </h1>
          <p className="text-lg text-neutral-500">
            Animated components that i made from Design to Code :)
          </p>
        </div>

        <hr className="border-[0.5px] border-[#424244] mb-8" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-16">
          {projects.map((project) => (
            <div key={project.id}>
              <VideoFrame
                videoUrl={project.videoUrl}
                liveUrl={project.liveUrl}
                twitterUrl={project.twitterUrl}
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  </Container>
</div>
  );
};

export default ArtGallery;
