"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EXPERIENCES } from "../data/portfolio-data";
import { playSound } from "../utils/audio";
import {
  FileText,
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
  Award,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ResumeProps {
  onOpenResumeModal: () => void;
  isMuted?: boolean;
}

export default function Resume({
  onOpenResumeModal,
  isMuted = false,
}: ResumeProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate vertical progress line
      if (lineRef.current && timelineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 70%",
              end: "bottom 70%",
              scrub: 0.5,
            },
          },
        );
      }

      // Animate cards
      if (timelineRef.current) {
        const cards = timelineRef.current.querySelectorAll(".timeline-card");
        cards.forEach((card) => {
          gsap.from(card, {
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
            y: 35,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="resume"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>05 // Career Journey & Experience</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Work Experience &{" "}
            <span className="text-gradient-cyan">Track Record</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-light">
            Full-time software engineering roles and intensive web development
            internships delivering production-grade web applications.
          </p>

          {/* Quick Resume CTA Banner */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                playSound("click", isMuted);
                onOpenResumeModal();
              }}
              onMouseEnter={() => playSound("hover", isMuted)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all transform hover:-translate-y-0.5"
            >
              <FileText className="w-4 h-4" />
              <span>View Full Interactive Resume</span>
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div ref={timelineRef} className="relative mt-8 sm:mt-12 pl-8 sm:pl-12">
          {/* Vertical Track & Scrub line */}
          <div className="absolute top-0 bottom-0 left-3 sm:left-4 w-[2px] bg-slate-800">
            <div
              ref={lineRef}
              className="w-full bg-gradient-to-b from-cyan-400 via-sky-400 to-indigo-500 shadow-[0_0_12px_#38bdf8]"
              style={{ height: "0%" }}
            />
          </div>

          {/* Milestones list */}
          <div className="space-y-8 sm:space-y-12">
            {EXPERIENCES.map((item) => {
              const isEdu =
                item.employmentType === "Education";
              const isInternship = item.employmentType === "Internship";
              const isFullTime = item.employmentType === "Full-Time";

              return (
                <div key={item.id} className="timeline-card relative group">
                  {/* Timeline indicator node */}
                  <div
                    className={`absolute -left-[29px] sm:-left-[39px] top-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#090a0f] border-2 transition-all shadow-[0_0_10px_rgba(6,182,212,0.6)] flex items-center justify-center group-hover:scale-125 ${
                      isInternship
                        ? "border-amber-400 group-hover:border-white shadow-[0_0_10px_rgba(251,191,36,0.6)]"
                        : isEdu
                          ? "border-purple-400 group-hover:border-white shadow-[0_0_10px_rgba(168,85,247,0.6)]"
                          : "border-cyan-400 group-hover:border-white"
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        isInternship
                          ? "bg-amber-400"
                          : isEdu
                            ? "bg-purple-400"
                            : "bg-cyan-400"
                      }`}
                    />
                  </div>

                  {/* Card Content */}
                  <div
                    onMouseEnter={() => playSound("hover", isMuted)}
                    className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/[0.08] hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 transform group-hover:-translate-y-1 group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)]"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div>
                        <div className="flex items-center gap-2.5 flex-wrap">
                          {isEdu ? (
                            <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
                          ) : isInternship ? (
                            <Award className="w-4 h-4 text-amber-400 shrink-0" />
                          ) : (
                            <Briefcase className="w-4 h-4 text-cyan-400 shrink-0" />
                          )}
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                            {item.role}
                          </h3>

                          {/* Employment Type Badge */}
                          {item.employmentType && (
                            <span
                              className={`px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-mono font-semibold flex items-center gap-1 border ${
                                isFullTime
                                  ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/30"
                                  : isInternship
                                    ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
                                    : "bg-purple-500/15 text-purple-300 border-purple-500/30"
                              }`}
                            >
                              {isFullTime ? (
                                <Briefcase className="w-3 h-3" />
                              ) : isInternship ? (
                                <Award className="w-3 h-3" />
                              ) : (
                                <GraduationCap className="w-3 h-3" />
                              )}
                              {item.employmentType}
                            </span>
                          )}
                        </div>

                        <div className="text-sm font-medium text-slate-300 mt-1 flex items-center gap-2">
                          <span className="text-cyan-400 font-semibold">
                            {item.company}
                          </span>
                          <span className="text-slate-600">•</span>
                          <span className="text-slate-400 flex items-center gap-1 text-xs">
                            <MapPin className="w-3 h-3 text-slate-500" />
                            {item.location}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
                        <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-800 text-cyan-300 border border-cyan-500/20 flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-cyan-400" />
                          {item.period}
                        </span>
                        {item.isCurrent && (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 animate-pulse">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed font-light mt-3 mb-4">
                      {item.description}
                    </p>

                    {/* Bullet achievements */}
                    <div className="space-y-2 mb-5">
                      {item.achievements.map((ach, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                        >
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isInternship ? "text-amber-400" : "text-cyan-400"
                            }`}
                          />
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-slate-800/80 text-slate-300 border border-white/[0.04]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
