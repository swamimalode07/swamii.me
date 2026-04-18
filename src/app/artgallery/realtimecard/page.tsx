"use client";

import { useRef, useState, useCallback } from "react";
import { motion, useSpring, useMotionTemplate } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const VISITOR_DATA = [
  240, 310, 280, 420, 390, 510, 480, 620, 590, 740,
  710, 830, 800, 920, 880, 1040, 1010, 1150, 1090, 1240,
  1180, 1320, 1290, 1410, 1380, 1520, 1490, 1610, 1580, 1720,
  1690, 1840, 1800, 1960, 1920, 2100, 2060, 2240, 2190, 2380,
];

const GRAPH_PATH =
  "M1 118.5s82.308-15.501 113.735-29 74.769-1.713 121.217-12c37.596-8.328 58.517-15.006 93.781-30.5 80.146-35.215 123.213-16 154.141-24.5S635.97.849 644 2.5";

const SVG_WIDTH = 644;
const SVG_HEIGHT = 228;

function getYAtX(pctX: number): number {
  if (typeof document === "undefined") return 0.5;
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  const path = document.createElementNS(ns, "path") as SVGPathElement;
  path.setAttribute("d", GRAPH_PATH);
  svg.appendChild(path);
  document.body.appendChild(svg);
  const total = path.getTotalLength();
  let lo = 0,
    hi = total,
    mid = total / 2;
  for (let i = 0; i < 50; i++) {
    mid = (lo + hi) / 2;
    const pt = path.getPointAtLength(mid);
    if (pt.x / SVG_WIDTH < pctX) lo = mid;
    else hi = mid;
  }
  const y = path.getPointAtLength(mid).y / SVG_HEIGHT;
  document.body.removeChild(svg);
  return y;
}

function getVisitors(pct: number): number {
  const idx = Math.min(
    Math.floor(pct * VISITOR_DATA.length),
    VISITOR_DATA.length - 1
  );
  return VISITOR_DATA[idx];
}

function Graph() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [playheadPct, setPlayheadPct] = useState(0);
  const [dotYPct, setDotYPct] = useState(0);
  const [visitors, setVisitors] = useState(0);
  const router = useRouter()

  const clipX = useSpring(0, { damping: 18 });
  const clipPath = useMotionTemplate`inset(0px ${clipX}% 0px 0px)`;

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const rect = wrapperRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, x / rect.width));
      const fromRight = (1 - pct) * 100;
      clipX.set(fromRight);
      setPlayheadPct(pct);
      setVisitors(getVisitors(pct));
      setDotYPct(getYAtX(pct));
    },
    [clipX]
  );

  const handlePointerLeave = useCallback(() => {
    setHovered(false);
    setTimeout(() => clipX.set(0), 1000);
  }, [clipX]);

  return (
    <>
     <button
        onClick={() => router.push('/artgallery')}
        className="absolute top-5 left-5 flex items-center gap-2 text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl backdrop-blur-lg border border-white/15 transition-all"
      >
        <ArrowLeft size={18} />
        Back to Gallery
      </button>  
    <div
      ref={wrapperRef}
      className="relative w-full select-none"
      onPointerMove={handlePointerMove}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={handlePointerLeave}
    >
     
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        className="block w-full h-auto"
      >
        <path
          stroke="#43454A"
          strokeWidth="2"
          d={GRAPH_PATH}
        />
        <path
          fill="url(#base-grad)"
          d="M113.912 89.012C82.437 102.511 1 118.01 1 118.01V188h643V1.023c-8.043-.65-129.399 12.499-160.375 20.998-30.976 8.498-74.11-10.714-154.38 24.496-35.319 15.493-56.272 22.17-93.927 30.497-46.52 10.286-89.93-1.5-121.406 11.998"
        />
        <defs>
          <linearGradient id="base-grad" x1="322.5" x2="322.5" y1="1" y2="188" gradientUnits="userSpaceOnUse">
            <stop stopColor="#43454A" stopOpacity="0.5" />
            <stop offset="1" stopColor="#43454A" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ clipPath }}
      >
        <path
          stroke="#1447E6"
          strokeWidth="2"
          d={GRAPH_PATH}
        />
        <path
          fill="url(#reveal-grad)"
          d="M113.912 89.012C82.437 102.511 1 118.01 1 118.01V188h643V1.023c-8.043-.65-129.399 12.499-160.375 20.998-30.976 8.498-74.11-10.714-154.38 24.496-35.319 15.493-56.272 22.17-93.927 30.497-46.52 10.286-89.93-1.5-121.406 11.998"
        />
        <defs>
          <linearGradient id="reveal-grad" x1="322.5" x2="322.5" y1="1" y2="188" gradientUnits="userSpaceOnUse">
            <stop stopColor="#1447E6" stopOpacity="0.4" />
            <stop offset="1" stopColor="#1447E6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>

      {/* Playhead */}
      {hovered && (
        <div
          className="absolute top-0 bottom-0 pointer-events-none"
          style={{
            left: `${playheadPct * 100}%`,
            transform: "translateX(-50%)",
          }}
        >
          <div className="absolute inset-0 w-px bg-white/30 left-1/2 -translate-x-1/2" />

          <div
            className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap"
            style={{ top: "-42px" }}
          >
            <div className="relative bg-[#101214] border border-[#404247] text-white text-xs font-medium px-3 py-1 rounded-full">
              {visitors.toLocaleString()} visitors
              <span
                className="absolute left-1/2 -translate-x-1/2 top-full"
                style={{
                  width: 0,
                  height: 0,
                  borderLeft: "5px solid transparent",
                  borderRight: "5px solid transparent",
                  borderTop: "5px solid #404247",
                }}
              />
            </div>
          </div>

          <div
            className="absolute left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#1447E6] border-2 border-white -translate-y-1/2"
            style={{ top: `${dotYPct * 100}%` }}
          />
        </div>
      )}
    </div>
    </>
  );
}

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-950">
      <div className="bg-[#151515] px-4 py-4 rounded-lg">
        <div className="border border-[#242426] pt-30 rounded-md bg-[#0E0E10]">
          <Graph />
        </div>
        <div className="max-w-sm mt-3 flex flex-col gap-1">
          <h2 className="text-2xl font-sans text-white">
            Real-Time Visibility
          </h2>
          <p className="text-base text-neutral-400 font-sans">
            See what's happening right now. No waiting, no sampling.
          </p>
        </div>
      </div>
    </div>
  );
}