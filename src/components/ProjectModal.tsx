"use client";

import React, { useEffect } from "react";
import { Project } from "../types";
import { playSound } from "../utils/audio";
import {
  X,
  ExternalLink,
  CheckCircle2,
  Cpu,
  TrendingUp,
  Sparkles,
} from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  isMuted?: boolean;
}

export default function ProjectModal({ project, onClose, isMuted = false }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => {
          playSound("click", isMuted);
          onClose();
        }}
        className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity animate-in fade-in"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl my-4 sm:my-8 rounded-2xl sm:rounded-3xl bg-[#0d0f17] border border-white/[0.1] shadow-[0_25px_60px_rgba(0,0,0,0.8)] overflow-hidden z-10 animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh]">
        {/* Top Header Banner with Project Accent */}
        <div
          className="h-28 sm:h-36 w-full relative flex items-end p-6 bg-gradient-to-br from-slate-900 to-slate-950 border-b border-white/[0.08]"
          style={{
            backgroundImage: `radial-gradient(circle at 80% 20%, ${project.accentColor}25, transparent 65%)`,
          }}
        >
          {/* Close button */}
          <button
            onClick={() => {
              playSound("click", isMuted);
              onClose();
            }}
            className="absolute top-5 right-5 p-2 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/[0.1] transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div>
            <span className="px-2.5 py-1 text-[11px] font-mono rounded-lg bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 uppercase">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Tagline */}
          <p className="text-base text-cyan-300 font-medium">{project.tagline}</p>

          {/* Deep dive description */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              // Overview & Problem Statement
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed font-light">
              {project.longDescription}
            </p>
          </div>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                Performance Metrics & Outcomes
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {project.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3 rounded-xl bg-slate-900/60 border border-white/[0.06] text-center"
                  >
                    <div className="text-lg sm:text-xl font-bold font-mono text-white">
                      {m.value}
                    </div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              Core Capabilities & Features
            </h4>
            <div className="space-y-2">
              {project.features.map((feat) => (
                <div key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Insights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-emerald-400" />
              System Architecture & Implementation
            </h4>
            <div className="space-y-2">
              {project.architecture.map((arch, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/40 border border-white/[0.04] text-xs text-slate-300 font-mono"
                >
                  <span className="text-cyan-400 font-bold mr-2">&gt;</span>
                  {arch}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Technologies & Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-slate-800 text-xs text-slate-300 border border-white/[0.06] font-mono"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div className="p-6 bg-slate-950/80 border-t border-white/[0.08] flex items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-mono hidden sm:block">
            Architected by Avinash Singh
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all"
            >
              <span>Live Deployment</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
