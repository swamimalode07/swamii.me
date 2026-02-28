import React, { useEffect, useState } from "react";

const words = [
  "Hello",
  "Bonjour",
  "“स्वागत है",
  "नमस्कार",
  "Ciao",
  "Olá",
  "おい",
  "Hallå",
  "Guten tag"
];

const WordPreloader = ({ onFinish }: { onFinish: () => void }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (currentWordIndex < words.length - 1) {
      const timer = setTimeout(() => {
        setCurrentWordIndex((prev) => prev + 1);
      }, 180);

      return () => clearTimeout(timer);
    } else {
      setTimeout(onFinish, 10);
    }
  }, [currentWordIndex, onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <h1 className="text-white text-4xl  md:text-6xl tracking-tight transition-opacity duration-300">
        • {words[currentWordIndex]}
      </h1>
    </div>
  );
};

export default WordPreloader;