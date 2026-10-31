"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TESTIMONIALS } from "../data/portfolio-data";
import { playSound } from "../utils/audio";
import { Star, Quote, MessageSquareQuote } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface TestimonialsProps {
  isMuted?: boolean;
}

export default function Testimonials({ isMuted = false }: TestimonialsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950/40"
    >
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-600/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-purple-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-4">
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>06 // Client & Peer Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            What Leaders & Partners Say About{" "}
            <span className="text-gradient-cyan">Avinash</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-light">
            Real feedback from engineering directors, startup founders, and
            design leaders who have partnered with me on production systems.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8"
        >
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              onMouseEnter={() => playSound("hover", isMuted)}
              className="p-7 rounded-3xl bg-slate-900/60 border border-white/[0.08] hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] flex flex-col justify-between group"
            >
              <div>
                {/* 5-Star Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-600 group-hover:text-cyan-400/40 transition-colors" />
                </div>

                <div className="text-xs font-mono text-cyan-300 font-medium mb-3">
                  "{item.highlight}"
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-light italic">
                  "{item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center font-bold text-white text-xs">
                  {item.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-slate-400 font-mono">
                    {item.role} •{" "}
                    <span className="text-cyan-400">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
