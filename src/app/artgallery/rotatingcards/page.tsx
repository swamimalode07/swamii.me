"use client";

import { useState, useEffect, useRef } from "react";
import { useMotionValue, useSpring, motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

type CardProps = {
  angle: number;
  radius: number;
  flipped: boolean;
  front: React.ReactNode;
  back: React.ReactNode;
};

function FlipCard({ angle, radius, flipped, front, back }: CardProps) {
  return (
    <div
      className="absolute"
      style={{
        width: "220px",
        height: "320px",
        left: "-110px",
        top: "-160px",
        transformStyle: "preserve-3d",
        transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
      }}
    >
      <div
        className="relative h-full w-full transition-transform duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <div className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
          {front}
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}

const cards = [
  {
    image: "/artgallery/img1.jpg",
    title: "Mountain Peaks",
    description: "Snow-dusted summits pierce the clouds above a pristine alpine valley, where silence reigns and the air is crisp with possibility.",
  },
  {
    image: "/artgallery/img2.jpg",
    title: "Golden Retriever",
    description: "A golden retriever mid-leap, ears airborne and tongue flying — pure, unfiltered joy captured in a single frame.",
  },
  {
    image: "/artgallery/img3.jpg",
    title: "Forest Trail",
    description: "Dappled sunlight filters through a cathedral of ancient pines, casting long shadows across a mossy winding path.",
  },
  {
    image: "/artgallery/img4.jpg",
    title: "Ocean` Waves",
    description: "A turquoise wave curls over itself in slow motion, revealing a glassy tunnel of water before it meets the shore.",
  },
  {
    image: "/artgallery/img5.jpg",
    title: "City at Dusk",
    description: "Thousands of lit windows stud a skyline at blue hour, the city humming with the quiet energy of evening routines.",
  },
  {
    image: "/artgallery/img6.jpg",
    title: "Coffee Ritual",
    description: "A precise pour of espresso swirls into steamed milk, forming a fleeting rosette that vanishes with the first sip.",
  },
  {
    image: "/artgallery/img7.jpg",
    title: "Northern Lights",
    description: "Ribbons of green and violet aurora ripple across an ink-black sky above a lone cabin dusted in fresh snow.",
  },
  {
    image: "/artgallery/img8.jpg",
    title: "Desert Dunes",
    description: "Wind-sculpted sand dunes stretch to the horizon, their razor-sharp ridgelines casting dramatic shadows in the late afternoon sun.",
  },
];

export default function Circular3DCards() {
  const totalCards = cards.length;
  const radius = 330;
  const step = 360 / totalCards;

  const [flipped, setFlipped] = useState(false);
  const isScrolling = useRef(false);
  const scrollEndTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastMouse = useRef({ clientX: 0, clientY: 0 });

  const router = useRouter();

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      lastMouse.current = { clientX: e.clientX, clientY: e.clientY };
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Raw rotation target (unbounded degrees, accumulates freely)
  const rotationTarget = useMotionValue(0);

  // Spring-smoothed rotation — this is what drives the ring
  const rotation = useSpring(rotationTarget, {
    stiffness: 80,
    damping: 20,
    mass: 0.8,
  });

  // Snap to nearest card after interaction ends
  const snapTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleSnap = () => {
    if (snapTimeout.current) clearTimeout(snapTimeout.current);
    snapTimeout.current = setTimeout(() => {
      const current = rotationTarget.get();
      const snapped = Math.round(current / step) * step;
      rotationTarget.set(snapped);
    }, 150);
  };

  const hitAreaRef = useRef<HTMLDivElement>(null);

  const markScrolling = () => {
    isScrolling.current = true;
    setFlipped(false);
    if (scrollEndTimeout.current) clearTimeout(scrollEndTimeout.current);
    scrollEndTimeout.current = setTimeout(() => {
      isScrolling.current = false;
      // If mouse is still hovering the hit area, flip right away
      if (hitAreaRef.current) {
        const el = hitAreaRef.current;
        const rect = el.getBoundingClientRect();
        const { clientX: x, clientY: y } = lastMouse.current;
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          setFlipped(true);
        }
      }
    }, 600);
  };

  // Which card index is currently front-facing
  const getFrontIndex = (rot: number) => {
    const norm = ((-rot % 360) + 360) % 360;
    return Math.round(norm / step) % totalCards;
  };

  const [frontIndex, setFrontIndex] = useState(0);

  useEffect(() => {
    return rotation.on("change", (v) => {
      setFrontIndex(getFrontIndex(v));
    });
  }, [rotation]);

  // Mouse wheel
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      markScrolling();
      rotationTarget.set(rotationTarget.get() - e.deltaY * 0.15);
      scheduleSnap();
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  // Arrow keys
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        markScrolling();
        rotationTarget.set(rotationTarget.get() + step);
        scheduleSnap();
      } else if (e.key === "ArrowRight") {
        markScrolling();
        rotationTarget.set(rotationTarget.get() - step);
        scheduleSnap();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [step]);

  return (
    <div className="flex h-screen items-center justify-center overflow-hidden bg-neutral-300">
         <button
        onClick={() => router.push('/artgallery')}
        className="absolute top-5 left-5 flex items-center gap-2 text-white bg-[#09090B]/50 hover:bg-[#09090B]/60 px-4 py-2 rounded-xl backdrop-blur-lg border border-black/15 transition-all"
      >
        <ArrowLeft size={18} />
        Back to Gallery
      </button>  
      <div
        className="relative h-[500px] w-[900px]"
        style={{ perspective: "2000px" }}
      >
        {/* 3D scene driven by motion spring */}
        <motion.div
          className="absolute left-1/2 top-1/2"
          style={{
            transformStyle: "preserve-3d",
            rotateY: rotation,
          }}
        >
          {cards.map((card, index) => {
            const angle = step * index;
            const isFront = index === frontIndex;

            return (
              <FlipCard
                key={index}
                angle={angle}
                radius={radius}
                flipped={isFront && flipped}
                front={
                  <div className="h-full w-full overflow-hidden rounded-[28px] shadow-none">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                }
                back={
                  <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-[28px] bg-white px-6 text-black shadow-sm">
                    <h3 className="text-xl font-semibold">{card.title}</h3>
                    <p className="text-center text-sm leading-relaxed text-black/70">
                      {card.description}
                    </p>
                  </div>
                }
              />
            );
          })}
        </motion.div>

        {/* Flat 2D hit area — never rotates, always stable */}
        <div
          ref={hitAreaRef}
          className="absolute"
          style={{
            width: "220px",
            height: "320px",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10,
            cursor: "pointer",
          }}
          onMouseEnter={() => { if (!isScrolling.current) setFlipped(true); }}
          onMouseLeave={() => setFlipped(false)}
        />
      </div>
    </div>
  );
}