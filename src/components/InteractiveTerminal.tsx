"use client";

import React, { useState, useEffect, useRef } from "react";
import confetti from "canvas-confetti";
import { PERSONAL_INFO, PROJECTS, SKILLS, EXPERIENCES } from "../data/portfolio-data";
import { playSound } from "../utils/audio";
import {
  X,
  Terminal as TerminalIcon,
  Minimize2,
  Maximize2,
} from "lucide-react";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
  isMuted?: boolean;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal({
  isOpen,
  onClose,
  isMuted = false,
}: TerminalProps) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: "welcome",
      output: (
        <div className="text-slate-300 space-y-1">
          <p className="text-cyan-400 font-bold">
            Avinash Singh CLI [Version 4.2.0-release]
          </p>
          <p className="text-xs text-slate-400">
            Type <span className="text-emerald-400 font-mono">help</span> to
            view available commands.
          </p>
        </div>
      ),
    },
  ]);
  const [isMatrixMode, setIsMatrixMode] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    playSound("command", isMuted);

    let output: React.ReactNode = null;

    switch (trimmed) {
      case "help":
        output = (
          <div className="space-y-1 text-xs">
            <p className="text-slate-400">Available commands:</p>
            <p>
              <span className="text-cyan-400 font-bold">about</span> - Who is
              Avinash Singh?
            </p>
            <p>
              <span className="text-cyan-400 font-bold">skills</span> -
              Technical competencies
            </p>
            <p>
              <span className="text-cyan-400 font-bold">projects</span> - View
              all showcase projects
            </p>
            <p>
              <span className="text-cyan-400 font-bold">experience</span> -
              Work history (Full-Time & Internships)
            </p>
            <p>
              <span className="text-cyan-400 font-bold">contact</span> - Contact
              and social coordinates
            </p>
            <p>
              <span className="text-cyan-400 font-bold">sudo hire</span> -
              Direct hiring protocol
            </p>
            <p>
              <span className="text-cyan-400 font-bold">matrix</span> - Toggle
              matrix mode
            </p>
            <p>
              <span className="text-cyan-400 font-bold">clear</span> - Clear
              terminal window
            </p>
            <p>
              <span className="text-cyan-400 font-bold">exit</span> - Close
              terminal
            </p>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="text-xs space-y-1.5 text-slate-300">
            <p className="text-cyan-300 font-bold">{PERSONAL_INFO.name}</p>
            <p>{PERSONAL_INFO.title}</p>
            <p className="text-slate-400">{PERSONAL_INFO.bio}</p>
            <p className="text-emerald-400">Status: {PERSONAL_INFO.status}</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="text-xs space-y-1">
            <p className="text-cyan-400 font-bold">
              Top Technologies & Proficiencies:
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 pt-1">
              {SKILLS.slice(0, 10).map((s) => (
                <div key={s.name} className="flex justify-between">
                  <span className="text-slate-300">{s.name}</span>
                  <span className="text-emerald-400 font-mono">{s.level}%</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="text-xs space-y-1.5">
            <p className="text-cyan-400 font-bold">Showcase Applications:</p>
            {PROJECTS.map((p) => (
              <div key={p.id} className="text-slate-300">
                <span className="text-white font-bold">{p.title}</span> —{" "}
                <span className="text-slate-400">{p.tagline}</span>
              </div>
            ))}
          </div>
        );
        break;

      case "experience":
      case "resume":
        output = (
          <div className="text-xs space-y-2">
            <p className="text-cyan-400 font-bold">Career & Work Experience:</p>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="text-slate-300">
                <span className="text-white font-bold">{exp.role}</span> @ {exp.company}{" "}
                <span className="text-cyan-400 font-mono">[{exp.employmentType || "Role"}]</span>{" "}
                <span className="text-slate-500">({exp.period})</span>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="text-xs space-y-1 text-slate-300">
            <p>
              Email:{" "}
              <span className="text-cyan-400">{PERSONAL_INFO.email}</span>
            </p>
            <p>
              GitHub:{" "}
              <span className="text-cyan-400">{PERSONAL_INFO.github}</span>
            </p>
            <p>
              LinkedIn:{" "}
              <span className="text-cyan-400">{PERSONAL_INFO.linkedin}</span>
            </p>
            <p>
              Location:{" "}
              <span className="text-slate-300">{PERSONAL_INFO.location}</span>
            </p>
          </div>
        );
        break;

      case "sudo hire":
      case "hire":
        try {
          confetti({
            particleCount: 120,
            spread: 90,
            origin: { y: 0.5 },
          });
        } catch (e) {}
        output = (
          <div className="text-xs p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 space-y-2">
            <p className="font-bold text-sm">
              🎉 ACCESS GRANTED: HIRE PROTOCOL ENGAGED!
            </p>
            <p>
              Thank you for considering Avinash Singh! You have unlocked direct
              priority email dispatch.
            </p>
            <p>
              Please send offer or scheduling notes to{" "}
              <a
                href={`mailto:${PERSONAL_INFO.email}?subject=Priority%20Hiring%20Offer`}
                className="underline font-bold text-white"
              >
                {PERSONAL_INFO.email}
              </a>
              .
            </p>
          </div>
        );
        break;

      case "matrix":
        setIsMatrixMode(!isMatrixMode);
        output = (
          <p className="text-emerald-400 text-xs">
            Matrix mode {isMatrixMode ? "disabled" : "enabled"}. Follow the
            white rabbit...
          </p>
        );
        break;

      case "clear":
        setHistory([]);
        return;

      case "exit":
      case "quit":
        onClose();
        return;

      default:
        output = (
          <p className="text-rose-400 text-xs">
            command not found: {cmd}. Type{" "}
            <span className="underline">help</span> for assistance.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    handleCommand(inputVal);
    setInputVal("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md animate-in fade-in"
      />

      {/* Terminal Window */}
      <div
        className={`relative w-full max-w-2xl h-[480px] max-h-[85vh] rounded-2xl border shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10 flex flex-col overflow-hidden animate-in zoom-in-95 font-mono ${
          isMatrixMode
            ? "bg-black border-emerald-500/40 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)]"
            : "bg-[#090b10] border-cyan-500/30 text-slate-200"
        }`}
      >
        {/* Top title bar */}
        <div className="px-4 py-3 bg-slate-900/90 border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              onClick={onClose}
              className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 cursor-pointer"
            />
            <div className="w-3 h-3 rounded-full bg-amber-500 cursor-pointer" />
            <div className="w-3 h-3 rounded-full bg-emerald-500 cursor-pointer" />
            <span className="text-xs text-slate-400 ml-2 font-mono flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              avinash@workstation:~ (zsh)
            </span>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Output area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed">
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              {item.command && (
                <div className="flex items-center gap-2 text-cyan-400 font-bold">
                  <span>avinash@portfolio:~$</span>
                  <span className="text-white font-normal">{item.command}</span>
                </div>
              )}
              <div className="pl-2">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command input prompt */}
        <form
          onSubmit={handleSubmit}
          className="p-3 bg-slate-950/90 border-t border-white/[0.08] flex items-center gap-2 text-xs"
        >
          <span className="text-cyan-400 font-bold">avinash@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help' or 'sudo hire'..."
            className="flex-1 bg-transparent text-white focus:outline-none font-mono placeholder-slate-600"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}
