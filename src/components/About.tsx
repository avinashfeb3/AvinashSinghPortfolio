"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PILLARS } from "../data/portfolio-data";
import { playSound } from "../utils/audio";
import {
  Zap,
  Sparkles,
  ShieldCheck,
  Palette,
  Code2,
  MapPin,
  Clock,
  CheckCircle2,
  Terminal,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface AboutProps {
  isMuted?: boolean;
}

export default function About({ isMuted = false }: AboutProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      gsap.from(headerRef.current, {
        scrollTrigger: { trigger: headerRef.current, start: "top 85%", once: true },
        y: 24,
        autoAlpha: 0,
        duration: 0.6,
        ease: "power2.out",
      });
      gsap.from(showcaseRef.current, {
        scrollTrigger: { trigger: showcaseRef.current, start: "top 82%", once: true },
        y: 30,
        autoAlpha: 0,
        duration: 0.7,
        ease: "power2.out",
      });
      gsap.from(pillarsRef.current?.children ?? [], {
        scrollTrigger: { trigger: pillarsRef.current, start: "top 88%", once: true },
        y: 20,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getPillarIcon = (name: string) => {
    switch (name) {
      case "Zap":
        return <Zap className="w-5 h-5 text-cyan-400" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case "Palette":
        return <Palette className="w-5 h-5 text-amber-400" />;
      default:
        return <Code2 className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-4">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // About Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Crafting Digital Experiences Where{" "}
            <span className="text-gradient-cyan">Engineering</span> Meets{" "}
            <span className="text-gradient-emerald">Artistry</span>
          </h2>
        </div>

        {/* 2-Column Showcase */}
        <div
          ref={showcaseRef}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-20"
        >
          {/* Left Column: Interactive 3D Holographic Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-white/[0.09] shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-xl cursor-default"
            >
              {/* Outer decorative glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-emerald-500/30 rounded-3xl blur-xl opacity-40" />

              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Holographic Avatar Emblem */}
                <div className="relative w-28 h-28 mb-5 rounded-2xl bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-700 p-1 shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                  <div className="w-full h-full bg-[#090a0f] rounded-[14px] flex flex-col items-center justify-center">
                    <span className="font-mono text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-sky-200 to-white">
                      &lt;AS/&gt;
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400/80 mt-1">
                      Avinash Singh
                    </span>
                  </div>

                  {/* Corner Accent Dots */}
                  <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyan-400 rounded-full" />
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  Avinash Singh
                </h3>
                <p className="text-xs font-mono text-cyan-400 mt-1">
                  Software Developer
                </p>

                {/* Info Pills */}
                <div className="mt-5 w-full flex flex-col gap-2.5 text-xs text-slate-300 font-mono">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/70 border border-white/[0.05]">
                    <span className="flex items-center gap-2 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      Location
                    </span>
                    <span className="text-white font-medium">
                      Delhi, India
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/70 border border-white/[0.05]">
                    <span className="flex items-center gap-2 text-slate-400">
                      <Zap className="w-3.5 h-3.5 text-amber-400" />
                      Experience
                    </span>
                    <span className="text-amber-300 font-medium">4+ Years</span>
                  </div>
                </div>

                {/* Core Stack Badges */}
                <div className="mt-6 flex flex-wrap justify-center gap-1.5">
                  {[
                    "Next.js",
                    "React 19",
                    "GSAP",
                    "Laravel",
                    "PHP",
                    "MYSQL",
                    "Tailwind CSS",
                    "Bootstrap",
                    "Node.js",
                    "MongoDB",
                    "Git",
                    "GitHub"
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Philosophy */}
          <div
            className="lg:col-span-7 flex flex-col justify-center space-y-6"
          >
            <div className="inline-block">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                {"// Background & Vision"}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
                Turning complex system requirements into seamless, fluid
                interfaces.
              </h3>
            </div>

            <p className="text-slate-300 leading-relaxed text-base sm:text-lg font-light">
              I am a software developer with over four years of specialized
              experience building resilient, full-stack web architectures and
              cinematic front-end applications. My work spans scalable
              enterprise dashboards, high-converting retail platforms, and
              custom WebGL/canvas motion experiences.
            </p>

            <p className="text-slate-400 leading-relaxed text-sm sm:text-base font-light">
              I believe great digital software requires equal respect for
              backend integrity and front-end emotion. By combining the power of{" "}
              <strong className="text-white">Next.js App Router</strong>, strict
              TypeScript type safety, and{" "}
              <strong className="text-cyan-400">GSAP choreographies</strong>, I
              ensure every product I touch is not only technically bulletproof,
              but memorable to every user.
            </p>

            {/* Key Strengths Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Micro-interaction & motion design",
                "Laravel & PHP development",
                "Full-stack Next.js & Node.js architecture",
                "Decoupled REST API services",
                "High-volume database query tuning",
                "Pixel-perfect translation from Figma",
              ].map((strength) => (
                <div
                  key={strength}
                  className="flex items-center gap-2.5 text-sm text-slate-200"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>

            {/* Quick Quote Card */}
            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-cyan-200/90 text-sm italic font-sans flex items-start gap-3">
              <span className="text-2xl text-cyan-400 font-serif leading-none">
                “
              </span>
              <p>
                Code is poetry in motion. When engineering rigor marries visual
                flair, the result is an unforgettable user experience.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Philosophy Pillars */}
        <div
          ref={pillarsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              onMouseEnter={() => playSound("hover", isMuted)}
              className="p-6 rounded-2xl bg-slate-900/50 border border-white/[0.07] backdrop-blur-md"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.gradient} border ${pillar.border} flex items-center justify-center mb-5`}
              >
                {getPillarIcon(pillar.icon)}
              </div>
              <h4 className="text-base font-bold text-white">
                {pillar.title}
              </h4>
              <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
