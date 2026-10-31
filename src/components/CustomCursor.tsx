"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only enable on desktop with fine pointer
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
        document.body.classList.add("custom-cursor-active");
      }

      // Quick snappy center dot
      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.08,
        ease: "power2.out",
      });

      // Check if target or parent is interactive
      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable =
          target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a") ||
          target.getAttribute("role") === "button" ||
          target.classList.contains("interactive-hover");

        setIsPointer(!!isClickable);
      }
    };

    const handleMouseDown = () => setIsHovered(true);
    const handleMouseUp = () => setIsHovered(false);

    const handleMouseLeave = () => {
      setIsVisible(false);
      document.body.classList.remove("custom-cursor-active");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Smooth follower ticker
    const ticker = gsap.ticker.add(() => {
      // Lerp follow
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;

      gsap.set(follower, {
        x: followerX,
        y: followerY,
      });
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      gsap.ticker.remove(ticker);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Center dot */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9999] transition-transform duration-75"
        style={{ willChange: "transform" }}
      >
        <div
          className={`rounded-full bg-cyan-400 transition-all duration-200 ${
            isHovered
              ? "w-2 h-2 scale-75 opacity-80"
              : isPointer
              ? "w-3 h-3 bg-cyan-300 scale-125"
              : "w-2 h-2 opacity-90 shadow-[0_0_10px_#38bdf8]"
          }`}
        />
      </div>

      {/* Outer halo / ring follower */}
      <div
        ref={followerRef}
        aria-hidden="true"
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[9998] transition-all duration-300 ease-out"
        style={{ willChange: "transform" }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            isPointer
              ? "w-12 h-12 border-cyan-400/80 bg-cyan-500/10 scale-110 shadow-[0_0_20px_rgba(56,189,248,0.25)]"
              : isHovered
              ? "w-10 h-10 border-cyan-300/60 bg-cyan-400/20 scale-90"
              : "w-8 h-8 border-slate-500/40 bg-transparent"
          }`}
        />
      </div>
    </>
  );
}
