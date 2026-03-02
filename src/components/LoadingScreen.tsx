"use client";
import React, { useEffect, useState } from "react";

const words = [
  "Hello",
  "Bonjour",
  "स्वागत है",
  "नमस्कार",
  "Ciao",
  "Olá",
  "おい",
  "Hallå",
  "Guten tag"
];

const WordPreloader = ({ onFinish }: { onFinish: () => void }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [closing, setClosing] = useState(false);

  useEffect(() => {
    if (currentWordIndex < words.length - 1) {
      const timer = setTimeout(() => {
        setCurrentWordIndex((prev) => prev + 1);
      }, 180);
      return () => clearTimeout(timer);
    } else {
      // Trigger the shutter-up animation
      setTimeout(() => setClosing(true), 200);
    }
  }, [currentWordIndex, onFinish]);

  const handleAnimationEnd = () => {
    if (closing) {
      onFinish();
    }
  };

  return (
    <>
      <style>{`
        @keyframes shutterUp {
          0% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-100%);
          }
        }

        .shutter-panel {
          animation: shutterUp 1s cubic-bezier(0.8, 0, 0.2, 1) forwards;
        }
      `}</style>

      <div
        className={`fixed inset-0 bg-black z-9999999999 flex items-center justify-center ${closing ? "shutter-panel" : ""}`}
        onAnimationEnd={handleAnimationEnd}
      >
        <h1 className="text-white text-4xl md:text-6xl tracking-tight transition-opacity duration-300">
          • {words[currentWordIndex]}
        </h1>
      </div>
    </>
  );
};

export default WordPreloader;