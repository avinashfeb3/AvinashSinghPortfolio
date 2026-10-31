"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROJECTS } from "../data/portfolio-data";
import { Project } from "../types";
import { playSound } from "../utils/audio";
import ProjectModal from "./ProjectModal";
import {
  FolderGit2,
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import { GithubIcon } from "./Icons";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ProjectsProps {
  isMuted?: boolean;
}

type FilterCategory = "all" | "php" | "react" | "next";

export default function Projects({ isMuted = false }: ProjectsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filterTabs = [
    { id: "all", label: "All" },
    { id: "php", label: "PHP" },
    { id: "react", label: "React JS" },
    { id: "next", label: "Next JS" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (gridRef.current) {
        gsap.fromTo(
          gridRef.current.children,
          { opacity: 0, y: 35, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [activeFilter]);

  const handleOpenModal = (project: Project) => {
    playSound("click", isMuted);
    setSelectedProject(project);
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950/30"
    >
      {/* Background ambient spotlight */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>04 // Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Featured Projects &{" "}
            <span className="text-gradient-cyan">System Implementations</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-light">
            Every application engineered with production-ready architecture, high frame rates, and
            exceptional attention to user experience.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  playSound("click", isMuted);
                  setActiveFilter(tab.id as FilterCategory);
                }}
                onMouseEnter={() => playSound("hover", isMuted)}
                className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.35)] scale-105"
                    : "bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/[0.06]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onMouseEnter={() => playSound("hover", isMuted)}
              className="group relative rounded-3xl bg-slate-900/60 border border-white/[0.08] hover:border-cyan-400/50 backdrop-blur-xl overflow-hidden transition-all duration-300 flex flex-col justify-between hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(0,0,0,0.6)]"
            >
              {/* Card Top Accent Banner */}
              <div
                className="h-32 sm:h-36 p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-b border-white/[0.06]"
                style={{
                  backgroundImage: `radial-gradient(circle at 90% 10%, ${project.accentColor}30, transparent 65%)`,
                }}
              >
                {/* Featured Badge or Category */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider rounded-md bg-slate-900/80 text-cyan-300 border border-white/[0.08]">
                    {project.category === "all"
                      ? "All"
                      : project.category === "php"
                        ? "PHP"
                        : project.category === "react"
                          ? "React JS"
                          : "Next JS"}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 px-2.5 py-0.5 text-[10px] font-mono rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      <Sparkles className="w-3 h-3 text-cyan-400" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Primary Metric Pill */}
                {project.metrics && project.metrics[0] && (
                  <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 rounded-lg bg-black/40 backdrop-blur-md border border-white/[0.06] text-xs font-mono text-white">
                    <TrendingUp className="w-3 h-3 text-cyan-400" />
                    <span>{project.metrics[0].label}:</span>
                    <strong className="text-cyan-400">{project.metrics[0].value}</strong>
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <p className="mt-2 text-xs font-medium text-cyan-400/90 font-mono">
                    {project.tagline}
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed font-light line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-slate-800/80 text-slate-300 border border-white/[0.04]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded-md bg-slate-800/40 text-slate-400">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleOpenModal(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    View Case Study →
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                      title="GitHub Repository"
                      aria-label="GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 transition-colors"
                      title="Live Demo"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isMuted={isMuted}
      />
    </section>
  );
}
