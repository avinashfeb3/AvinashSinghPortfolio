"use client";

import React, { useEffect, useState } from "react";
import { PERSONAL_INFO } from "../data/portfolio-data";
import { playSound } from "../utils/audio";
import {
  ArrowUp,
  Mail,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

interface FooterProps {
  isMuted?: boolean;
}

export default function Footer({ isMuted = false }: FooterProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > window.innerHeight);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    playSound("click", isMuted);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <>
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          onMouseEnter={() => playSound("hover", isMuted)}
          className="fixed right-5 bottom-5 z-40 p-3 rounded-xl bg-slate-900/90 text-cyan-400 border border-cyan-500/30 shadow-lg shadow-cyan-500/10 backdrop-blur-md transition-colors hover:bg-cyan-500/20 hover:text-cyan-300"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <footer className="relative border-t border-white/[0.08] bg-[#07080c] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center">


        {/* Brand & Socials Grid */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-white/[0.06]">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-bold text-white text-xs">
                AS
              </div>
              <span className="text-lg font-bold text-white tracking-tight">Avinash Singh</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-sm font-light">
              Software Developer & Creative Engineer passionate about performant architectures and
              silky GSAP motion.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
             <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => playSound("hover", isMuted)}
              className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08] hover:border-cyan-400 hover:text-cyan-400 text-slate-400 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => playSound("hover", isMuted)}
              className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08] hover:border-cyan-400 hover:text-cyan-400 text-slate-400 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
           
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              onMouseEnter={() => playSound("hover", isMuted)}
              className="p-2.5 rounded-xl bg-slate-900 border border-white/[0.08] hover:border-cyan-400 hover:text-cyan-400 text-slate-400 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="w-full pt-8 flex flex-col items-center justify-center text-xs text-slate-500 font-mono font-semibold gap-4 text-center">
          <p suppressHydrationWarning>© {currentYear} Avinash Singh. All rights reserved.</p>
        </div>
      </div>
      </footer>
    </>
  );
}
