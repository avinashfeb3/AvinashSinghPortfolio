"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "../data/portfolio-data";
import { playSound } from "../utils/audio";
import {
  Menu,
  X,
  Volume2,
  VolumeX,
  Terminal,
  FileText,
  Send,
  Sparkles,
} from "lucide-react";

interface NavbarProps {
  onOpenTerminal?: () => void;
  onOpenResume?: () => void;
  isMuted?: boolean;
  toggleMute?: () => void;
}

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Portfolio", href: "#projects" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar({
  onOpenTerminal,
  onOpenResume,
  isMuted = false,
  toggleMute,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = [
        "about",
        "services",
        "skills",
        "projects",
        "resume",
        "contact",
      ];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    playSound("click", isMuted);
    setMobileMenuOpen(false);

    if (href.startsWith("#")) {
      const targetId = href.replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 bg-[#090a0f]/80 backdrop-blur-xl border-b border-white/[0.07] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
                playSound("click", isMuted);
              }}
              className="group flex items-center gap-2.5 text-slate-100 hover:text-white transition-colors"
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 via-sky-600 to-indigo-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <div className="w-full h-full bg-[#090a0f] rounded-[10px] flex items-center justify-center">
                  <span className="font-mono font-bold text-xs tracking-tighter text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    AS
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm tracking-tight text-white flex items-center gap-1.5">
                  Avinash Singh
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                </span>
                {/* <span className="text-[10px] font-mono text-slate-400 tracking-wider uppercase">
                  Full-Stack Dev
                </span> */}
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-slate-900/60 border border-white/[0.08] backdrop-blur-md">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    onMouseEnter={() => playSound("hover", isMuted)}
                    className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-cyan-300 bg-cyan-500/15 shadow-[0_0_12px_rgba(6,182,212,0.2)]"
                        : "text-slate-300 hover:text-white hover:bg-white/[0.05]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Actions: Terminal, Audio, Resume, Hire */}
            <div className="hidden lg:flex items-center gap-2.5">
              {/* Terminal Button */}
              {onOpenTerminal && (
                <button
                  onClick={() => {
                    playSound("command", isMuted);
                    onOpenTerminal();
                  }}
                  onMouseEnter={() => playSound("hover", isMuted)}
                  title="Open Interactive Terminal"
                  className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono text-slate-400 hover:text-cyan-300 rounded-lg bg-slate-900/50 hover:bg-slate-800/80 border border-white/[0.08] transition-all"
                >
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-[11px]">CLI</span>
                </button>
              )}

              {/* Sound Toggle */}
              {toggleMute && (
                <button
                  onClick={() => {
                    toggleMute();
                    playSound("toggle", !isMuted);
                  }}
                  title={
                    isMuted ? "Enable sound effects" : "Mute sound effects"
                  }
                  className="p-2 text-slate-400 hover:text-cyan-300 rounded-lg bg-slate-900/50 hover:bg-slate-800/80 border border-white/[0.08] transition-all"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-slate-500" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-cyan-400" />
                  )}
                </button>
              )}

              {/* Resume Button */}
              {onOpenResume && (
                <button
                  onClick={() => {
                    playSound("click", isMuted);
                    onOpenResume();
                  }}
                  onMouseEnter={() => playSound("hover", isMuted)}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white rounded-lg bg-slate-900/60 hover:bg-slate-800/80 border border-white/[0.08] transition-all"
                >
                  <FileText className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Resume</span>
                </button>
              )}

              {/* Contact / Hire Me CTA */}
              <button
                onClick={() => handleNavClick("#contact")}
                onMouseEnter={() => playSound("hover", isMuted)}
                className="group relative inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Let's Talk</span>
                <Send className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center gap-2">
              {toggleMute && (
                <button
                  onClick={toggleMute}
                  className="p-2 text-slate-300 hover:text-white rounded-lg bg-slate-900/80 border border-white/[0.08]"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-slate-500" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-cyan-400" />
                  )}
                </button>
              )}

              <button
                onClick={() => {
                  playSound("click", isMuted);
                  setMobileMenuOpen(!mobileMenuOpen);
                }}
                className="p-2 text-slate-200 hover:text-white rounded-lg bg-slate-900/80 border border-white/[0.08] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#090a0f]/98 backdrop-blur-2xl flex flex-col pt-24 px-6 pb-8 border-b border-white/[0.08] overflow-y-auto">
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center justify-between py-3.5 px-4 text-base font-medium text-slate-200 hover:text-cyan-400 rounded-xl hover:bg-white/[0.05] transition-all border-b border-white/[0.04] text-left"
              >
                <span>{link.name}</span>
                <Sparkles className="w-4 h-4 text-cyan-400/50" />
              </button>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col gap-3">
            {onOpenResume && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-slate-200 bg-slate-900/80 rounded-xl border border-white/[0.1]"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Full Resume</span>
              </button>
            )}

            {onOpenTerminal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-medium text-cyan-300 bg-slate-900/80 rounded-xl border border-cyan-500/30"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Interactive Terminal Playground</span>
              </button>
            )}

            <button
              onClick={() => handleNavClick("#contact")}
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/25"
            >
              <span>Get In Touch</span>
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
