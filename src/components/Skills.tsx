"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SKILLS } from "../data/portfolio-data";
import { playSound } from "../utils/audio";
import {
  Code2,
  Database,
  Wrench,
  Layers,
  Cpu,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SkillsProps {
  isMuted?: boolean;
}

type CategoryType = "all" | "frontend" | "backend" | "tools";

export default function Skills({ isMuted = false }: SkillsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");

  const categories = [
    { id: "all", label: "All Technologies", icon: Layers },
    { id: "frontend", label: "Frontend & Motion", icon: Code2 },
    { id: "backend", label: "Backend & Databases", icon: Database },
    { id: "tools", label: "Tools & Testing", icon: Wrench },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? SKILLS
      : SKILLS.filter((s) => s.category === activeCategory);

  // GSAP animation on category switch or scroll
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 25, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.out",
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>03 // Technical Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Tools, Frameworks &{" "}
            <span className="text-gradient-cyan">Modern Stacks</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-light">
            Engineered with deep specialization in modern React/Next.js
            ecosystems and production-grade scalable backends.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playSound("click", isMuted);
                  setActiveCategory(cat.id as CategoryType);
                }}
                onMouseEnter={() => playSound("hover", isMuted)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.35)] scale-105"
                    : "bg-slate-900/60 hover:bg-slate-800/80 text-slate-400 hover:text-white border border-white/[0.06]"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={() => playSound("hover", isMuted)}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-white/[0.06] hover:border-cyan-500/40 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)] group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </span>
                    {skill.featured && (
                      <span className="px-1.5 py-0.5 text-[9px] font-mono rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        Primary
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold">
                    {skill.level}%
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 mt-1 font-mono">
                  <span className="capitalize">{skill.category}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4 w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 transition-all duration-700 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
