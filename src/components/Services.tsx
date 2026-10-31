"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SERVICES } from "../data/portfolio-data";
import { playSound } from "../utils/audio";
import {
  Layers,
  Sparkles,
  Gauge,
  Rocket,
  Component,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Wrench,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServicesProps {
  onSelectService?: (serviceTitle: string) => void;
  isMuted?: boolean;
}

export default function Services({ onSelectService, isMuted = false }: ServicesProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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
      gsap.from(gridRef.current?.children ?? [], {
        scrollTrigger: { trigger: gridRef.current, start: "top 82%", once: true },
        y: 28,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case "Layers":
        return <Layers className="w-6 h-6 text-cyan-400" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-purple-400" />;
      case "Gauge":
        return <Gauge className="w-6 h-6 text-emerald-400" />;
      case "Rocket":
        return <Rocket className="w-6 h-6 text-amber-400" />;
      case "Component":
        return <Component className="w-6 h-6 text-blue-400" />;
      case "Cpu":
        return <Cpu className="w-6 h-6 text-rose-400" />;
      default:
        return <Wrench className="w-6 h-6 text-cyan-400" />;
    }
  };

  const handleInquire = (serviceTitle: string) => {
    playSound("click", isMuted);
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950/40"
    >
      {/* Decorative backdrop glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>02 // Services & Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            High-Impact Services Engineered For{" "}
            <span className="text-gradient-cyan">Scale & Speed</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-light">
            Whether launching an ambitious new product or supercharging an existing codebase, I
            deliver battle-tested technical execution from architecture to final polish.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {SERVICES.map((service) => (
            <div
              key={service.id}
              onMouseEnter={() => playSound("hover", isMuted)}
              className="relative rounded-3xl bg-slate-900/60 border border-white/[0.08] p-7 backdrop-blur-xl flex flex-col justify-between"
            >
              {/* Subtle gradient hover wash */}
              <div
                className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${service.gradient} opacity-0 pointer-events-none`}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-slate-800/80 border border-white/[0.1] flex items-center justify-center mb-6">
                  {getServiceIcon(service.icon)}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-400 leading-relaxed font-light">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-6 space-y-2.5 pt-4 border-t border-white/[0.06]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500">
                    Key Deliverables:
                  </span>
                  {service.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-xs text-slate-300 font-sans"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="relative z-10 mt-8 pt-4">
                <button
                  onClick={() => handleInquire(service.title)}
                  className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-800/60 hover:bg-cyan-500/20 text-xs font-semibold text-slate-200 hover:text-cyan-300 border border-white/[0.08] hover:border-cyan-500/40"
                >
                  <span>Inquire for Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
