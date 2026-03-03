"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleArrowRight, CircleCheck, Copy } from "lucide-react";

const email = "swamimalodeofficial@gmail.com";
const twitterUrl = "https://x.com/swamimalode";

const iconVariants = {
  initial: { y: 10, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: -10, opacity: 0 },
};

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className="bg-black text-center py-34 px-[5%] font-space-grotesk">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-4">
        Let's work together
      </h2>
      <p className="text-gray-300 mb-10 text-lg">
        Have a project in mind? Let's create something amazing.
      </p>
      <div className="flex items-center justify-center gap-4">
        {/* Email + Copy */}
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-grey px-3 py-1 rounded-lg">
              <motion.a
            href={`mailto:${email}`}
            className="text-white font-semibold font-sans px-1 py-1 rounded underline-offset-4 hover:text-gray-300 transition-colors duration-200"
          >
            Email me
          </motion.a>

          <button
            onClick={handleCopy}
            className="relative  w-8 h-8 flex items-center justify-center rounded text-gray-400 hover:text-white transition-colors duration-200 overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {copied ? (
                <motion.span
                  key="check"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.10 }}
                  className="absolute"
                >
                  <CircleCheck className="h-5 w-5 text-green-500" />
                </motion.span>
              ) : (
                <motion.span
                  key="copy"
                  variants={iconVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.18 }}
                  className="absolute"
                >
                  <Copy className="h-4 w-4" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
          </div>
        
        </div>

        {/* Twitter */}
        <motion.a
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-sans bg-grey px-3 py-2 rounded-lg underline-offset-4 hover:text-gray-300 transition-colors duration-200 font-semibold flex items-center gap-3"
        >
          Twitter DM <span className="">  <svg height="15" width="15" fill="none" viewBox="0 0 1200 1227" className="text-white hover:text-[#5865F2] transition-colors duration-300">
                <path
                    fill="#fff"
                    d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
                />
            </svg></span>
        </motion.a>
      </div>
    </section>
  );
};

export default ContactSection;