"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { PERSONAL_INFO, PROJECTS, STATS } from "../data/portfolio-data";
import { playSound } from "../utils/audio";
import {
  Mail,
  FileText,
  Terminal,
  ChevronRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

interface HeroProps {
  onOpenResume?: () => void;
  onOpenTerminal?: () => void;
  isMuted?: boolean;
}

export default function Hero({
  onOpenResume,
  onOpenTerminal,
  isMuted = false,
}: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const [roleIndex, setRoleIndex] = useState(0);

  // Rotate roles with smooth GSAP transition
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      if (roleRef.current) {
        gsap.to(roleRef.current, {
          y: -20,
          opacity: 0,
          duration: 0.35,
          ease: "power2.in",
          onComplete: () => {
            setRoleIndex((prev) => (prev + 1) % PERSONAL_INFO.roles.length);
            gsap.fromTo(
              roleRef.current,
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.45, ease: "back.out(1.7)" },
            );
          },
        });
      }
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  // Entrance GSAP timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const elements = [
        badgeRef.current,
        titleRef.current,
        roleRef.current,
        descRef.current,
        ...(ctaRef.current ? Array.from(ctaRef.current.children) : []),
        ...(statsRef.current ? Array.from(statsRef.current.children) : []),
      ].filter((element): element is Element => element !== null);

      gsap.set(elements, { autoAlpha: 0 });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => gsap.set(elements, { clearProps: "opacity,visibility,transform" }),
      });

      tl.to(badgeRef.current, {
        y: -30,
        autoAlpha: 1,
        duration: 0.8,
        delay: 0.2,
      })
        .to(
          titleRef.current,
          {
            y: 40,
            autoAlpha: 1,
            duration: 1,
          },
          "-=0.5",
        )
        .to(
          roleRef.current,
          {
            scale: 0.95,
            autoAlpha: 1,
            duration: 0.6,
          },
          "-=0.6",
        )
        .to(
          descRef.current,
          {
            y: 30,
            autoAlpha: 1,
            duration: 0.8,
          },
          "-=0.4",
        )
        .to(
          ctaRef.current?.children || [],
          {
            y: 20,
            autoAlpha: 1,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.4",
        )
        .to(
          statsRef.current?.children || [],
          {
            y: 30,
            autoAlpha: 1,
            duration: 0.7,
            stagger: 0.12,
          },
          "-=0.3",
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const yearsExperience = Math.max(1, new Date().getFullYear() - 2022);
  const displayStats = STATS.map((stat) => {
    if (stat.label === "Years Experience") {
      return { ...stat, value: yearsExperience };
    }
    if (stat.label === "Projects Completed") {
      return { ...stat, value: PROJECTS.length };
    }
    return stat;
  });

  const scrollToSection = (id: string) => {
    playSound("click", isMuted);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background ambient glow spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Decorative Grid Lines */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Availability Badge */}
        <div ref={badgeRef} className="mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/80 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-emerald-300">
              Available for high-impact roles & projects
            </span>
          </div>
        </div>

        {/* Greeting & Name */}
        <div ref={titleRef} className="space-y-2 max-w-full px-2">
          <p className="text-xs sm:text-sm font-mono tracking-widest text-cyan-400 uppercase">
            Hello, World! I am
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white break-words">
            <span className="block drop-shadow-sm">Avinash Singh</span>
          </h1>
        </div>

        {/* Dynamic Changing Role */}
        <div className="min-h-[3rem] mt-3 sm:mt-4 flex items-center justify-center px-2">
          <div
            ref={roleRef}
            className="text-lg sm:text-2xl md:text-3xl font-bold text-gradient-cyan tracking-tight font-sans text-center"
          >
            {PERSONAL_INFO.roles[roleIndex]}
          </div>
        </div>

        {/* Bio summary */}
        <p
          ref={descRef}
          className="mt-6 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed font-light"
        >
          Specializing in{" "}
          <span className="text-white font-medium">React Js & Next JS</span>,{" "}
          <span className="text-white font-medium">Laravel, PHP and MYSQL</span>, and
          buttery-smooth{" "}
          <span className="text-cyan-400 font-medium">GSAP motion</span>. I
          bridge systems architecture and creative engineering to craft
          high-performance digital products.
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
        >
          {/* Explore Projects Button */}
          <button
            onClick={() => scrollToSection("projects")}
            onMouseEnter={() => playSound("hover", isMuted)}
            className="group relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-semibold text-sm shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.55)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore Projects</span>
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* View Resume Button */}
          {onOpenResume && (
            <button
              onClick={() => {
                playSound("click", isMuted);
                onOpenResume();
              }}
              onMouseEnter={() => playSound("hover", isMuted)}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-sm border border-white/[0.1] hover:border-cyan-500/40 backdrop-blur-md transition-all transform hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Resume</span>
            </button>
          )}

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection("contact")}
            onMouseEnter={() => playSound("hover", isMuted)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white font-medium text-sm border border-white/[0.08] backdrop-blur-md transition-all"
          >
            <Mail className="w-4 h-4 text-slate-400" />
            <span>Contact Me</span>
          </button>

          {/* Terminal Launcher */}
          {onOpenTerminal && (
            <button
              onClick={() => {
                playSound("command", isMuted);
                onOpenTerminal();
              }}
              onMouseEnter={() => playSound("hover", isMuted)}
              title="Launch Interactive Terminal Playground"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-slate-950/80 hover:bg-slate-900 text-cyan-400 font-mono text-xs border border-cyan-500/30 hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>&gt; terminal</span>
            </button>
          )}
        </div>

        {/* Social Links Bar */}
        <div className="mt-8 flex items-center gap-3 text-slate-400">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 mr-2">
            Connect:
          </span>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => playSound("hover", isMuted)}
            className="p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-cyan-500/40 hover:text-cyan-400 transition-all transform hover:-translate-y-0.5"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => playSound("hover", isMuted)}
            className="p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-cyan-500/40 hover:text-cyan-400 transition-all transform hover:-translate-y-0.5"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            onMouseEnter={() => playSound("hover", isMuted)}
            className="p-2.5 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-cyan-500/40 hover:text-cyan-400 transition-all transform hover:-translate-y-0.5"
            aria-label="Send Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Live Metrics & Stats Counter Strip */}
        <div
          ref={statsRef}
          className="mt-14 w-full grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-5xl"
        >
          {displayStats.map((stat) => (
            <div
              key={stat.label}
              className="p-5 rounded-2xl bg-slate-900/40 border border-white/[0.06] backdrop-blur-md hover:border-cyan-500/30 transition-all duration-300 text-center group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono flex items-center justify-center gap-0.5 group-hover:text-cyan-400 transition-colors">
                <span>{stat.value}</span>
                <span className="text-cyan-400 text-2xl font-sans">
                  {stat.suffix}
                </span>
              </div>
              <div className="text-xs font-semibold text-slate-300 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <p className="text-[11px] text-slate-500 mt-1 font-light line-clamp-1">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll down indicator */}
        <button
          onClick={() => scrollToSection("about")}
          onMouseEnter={() => playSound("hover", isMuted)}
          className="mt-14 inline-flex flex-col items-center gap-2 text-xs text-slate-500 hover:text-cyan-400 transition-colors group"
          aria-label="Scroll down to About section"
        >
          <span className="font-mono text-[11px] tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-5 h-8 rounded-full border border-slate-700 flex items-start justify-center p-1 group-hover:border-cyan-400 transition-colors">
            <div className="w-1 h-2 rounded-full bg-cyan-400 animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  );
}
