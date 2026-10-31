"use client";

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "../data/portfolio-data";
import { playSound } from "../utils/audio";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Copy,
  Check,
  MessageCircle,
  ExternalLink,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

interface ContactProps {
  initialService?: string;
  isMuted?: boolean;
}

export default function Contact({ isMuted = false }: ContactProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentTime, setCurrentTime] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setCurrentTime(istTime);
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("avinashfeb03@gmail.com");
    setCopiedEmail(true);
    playSound("click", isMuted);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("8595196640");
    setCopiedPhone(true);
    playSound("click", isMuted);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950/60"
    >
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-purple-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs tracking-wider uppercase mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>06 // Direct Contact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Let's Start a <span className="text-gradient-cyan">Conversation</span>
          </h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base font-light">
            I am actively looking for web development opportunities and ready to join your team.
            Reach out directly through phone, WhatsApp, or email.
          </p>
        </div>

        {/* Primary Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
          {/* Phone Card */}
          <div
            onMouseEnter={() => playSound("hover", isMuted)}
            className="p-7 sm:p-9 rounded-3xl bg-slate-900/70 border border-white/[0.08] hover:border-emerald-500/40 backdrop-blur-xl transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available to Call
                </span>
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Contact Number
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-mono mt-1 group-hover:text-emerald-300 transition-colors">
                +91 8595196640
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-light">
                Direct mobile line for discussions, interview calls, and urgent inquiries.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center gap-3">
              <a
                href="tel:8595196640"
                onClick={() => playSound("click", isMuted)}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-emerald-500/20 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Call Directly</span>
              </a>

              <button
                onClick={handleCopyPhone}
                title="Copy phone number"
                className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/[0.08] transition-all shrink-0 flex items-center gap-1.5 text-xs font-mono"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 hidden sm:inline">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div
            onMouseEnter={() => playSound("hover", isMuted)}
            className="p-7 sm:p-9 rounded-3xl bg-slate-900/70 border border-white/[0.08] hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 shadow-[0_15px_35px_rgba(0,0,0,0.4)] flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">
                  Quick Response
                </span>
              </div>

              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Email Address
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white font-mono mt-1 group-hover:text-cyan-300 transition-colors break-all">
                avinashfeb03@gmail.com
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2 font-light">
                Send job offers, project specifications, or collaboration details anytime.
              </p>
            </div>

            <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center gap-3">
              <a
                href="mailto:avinashfeb03@gmail.com"
                onClick={() => playSound("click", isMuted)}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 transition-all"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </a>

              <button
                onClick={handleCopyEmail}
                title="Copy email address"
                className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-white/[0.08] transition-all shrink-0 flex items-center gap-1.5 text-xs font-mono"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-400 hidden sm:inline">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="hidden sm:inline">Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Secondary Info Grid: WhatsApp, Location, Timezone, Socials */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* WhatsApp Card */}
          <a
            href="https://wa.me/918595196640"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playSound("click", isMuted)}
            className="p-5 rounded-2xl bg-slate-900/50 border border-white/[0.08] hover:border-emerald-500/40 backdrop-blur-md transition-all flex items-center justify-between group"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400">WhatsApp Chat</span>
                <p className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                  +91 8595196640
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
          </a>

          {/* Location Card */}
          <div className="p-5 rounded-2xl bg-slate-900/50 border border-white/[0.08] backdrop-blur-md flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase text-slate-400">Location</span>
              <p className="text-sm font-semibold text-white">Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Quick Social & Resume Access Banner */}
        <div className="mt-8 p-6 rounded-3xl bg-slate-900/40 border border-white/[0.06] backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Available for Full-Time Roles & Projects
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Trained in Full Stack Web Development with complete end-to-end knowledge.
            </p>
          </div>

          <div className="flex items-center gap-3">
              <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-white/[0.08]"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-white/[0.08]"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

          
          </div>
        </div>
      </div>
    </section>
  );
}
