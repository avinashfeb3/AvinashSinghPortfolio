"use client";

import React, { useEffect } from "react";
import { PERSONAL_INFO, EXPERIENCES, RESUME_DATA } from "../data/portfolio-data";
import { playSound } from "../utils/audio";
import {
  X,
  Download,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Printer,
} from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isMuted?: boolean;
}

export default function ResumeModal({ isOpen, onClose, isMuted = false }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    playSound("click", isMuted);
    window.print();
  };

  const handleDownload = () => {
    playSound("success", isMuted);
    // Generate text/markdown formatted resume blob for instant real download
    const resumeText = `# ${PERSONAL_INFO.name}
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
Portfolio: https://avinashsingh.dev | GitHub: ${PERSONAL_INFO.github}

## SUMMARY
${RESUME_DATA.summary}

## WORK EXPERIENCE
${EXPERIENCES.filter((e) => e.employmentType !== "Education")
  .map(
    (exp) => `### ${exp.role} - ${exp.company} [${exp.employmentType || "Work Experience"}]
Period: ${exp.period} | Location: ${exp.location} | Type: ${exp.employmentType || "Full-Time"}
${exp.description}
Key Achievements:
${exp.achievements.map((a) => ` - ${a}`).join("\n")}
Technologies: ${exp.skills.join(", ")}
`
  )
  .join("\n")}

## EDUCATION
${RESUME_DATA.education
  .map(
    (edu) => `### ${edu.degree}
${edu.institution} (${edu.period})
Grade: ${edu.grade}
${edu.highlights.map((h) => ` - ${h}`).join("\n")}
`
  )
  .join("\n")}

## CERTIFICATIONS
${RESUME_DATA.certifications
  .map((c) => ` - ${c.name} (${c.issuer}, ${c.date})`)
  .join("\n")}
`;

    const blob = new Blob([resumeText], { type: "text/markdown;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Avinash_Singh_Resume.md");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => {
          playSound("click", isMuted);
          onClose();
        }}
        className="fixed inset-0 bg-black/85 backdrop-blur-xl animate-in fade-in"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl my-4 sm:my-8 rounded-2xl sm:rounded-3xl bg-[#0d0f17] border border-white/[0.1] shadow-[0_25px_60px_rgba(0,0,0,0.85)] z-10 max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-6 bg-slate-900/90 border-b border-white/[0.08] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-bold text-white text-sm">
              AS
            </div>
            <div>
              <h3 className="text-lg font-bold text-white leading-tight">
                Avinash Singh — Curriculum Vitae
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                Senior Full-Stack & Creative Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg border border-white/[0.08]"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg shadow-md shadow-cyan-500/20 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download CV</span>
            </button>

            <button
              onClick={() => {
                playSound("click", isMuted);
                onClose();
              }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-2"
              aria-label="Close resume"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Printable / Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-slate-200">
          {/* Header Summary */}
          <div className="border-b border-white/[0.08] pb-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Avinash Singh</h1>
                <p className="text-sm font-mono text-cyan-400 mt-0.5">{PERSONAL_INFO.title}</p>
              </div>
              <div className="text-xs font-mono text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              {RESUME_DATA.summary}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              Professional Experience
            </h2>

            <div className="space-y-6">
              {EXPERIENCES.filter((e) => e.employmentType !== "Education").map((exp) => (
                <div
                  key={exp.id}
                  className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-white/[0.06]"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-base font-bold text-white">{exp.role}</h3>
                      {exp.employmentType && (
                        <span
                          className={`px-2 py-0.5 text-[10px] font-mono rounded-full font-semibold border ${
                            exp.employmentType === "Full-Time"
                              ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/30"
                              : exp.employmentType === "Internship"
                              ? "bg-amber-500/15 text-amber-300 border-amber-500/30"
                              : "bg-purple-500/15 text-purple-300 border-purple-500/30"
                          }`}
                        >
                          {exp.employmentType}
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-mono text-cyan-400">{exp.period}</span>
                  </div>

                  <div className="text-xs font-medium text-slate-400 mb-3">
                    {exp.company} • {exp.location}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 mb-3 font-light">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5 mb-4">
                    {exp.achievements.map((a, i) => (
                      <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                        <span className="text-cyan-400 font-bold leading-none mt-1">•</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 text-[10px] font-mono rounded bg-slate-800 text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Education
              </h2>
              {RESUME_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-900/50 border border-white/[0.06] space-y-2"
                >
                  <h3 className="text-sm font-bold text-white">{edu.degree}</h3>
                  <p className="text-xs text-slate-400">{edu.institution}</p>
                  <div className="flex items-center justify-between text-[11px] font-mono text-cyan-400">
                    <span>{edu.period}</span>
                    <span>{edu.grade}</span>
                  </div>
                  <ul className="space-y-1 pt-2">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="text-[11px] text-slate-300 flex items-start gap-1.5">
                        <span className="text-cyan-400">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <h2 className="text-sm font-mono uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Certifications & Badges
              </h2>
              <div className="space-y-3">
                {RESUME_DATA.certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="p-3.5 rounded-xl bg-slate-900/50 border border-white/[0.06] flex items-center justify-between"
                  >
                    <div>
                      <div className="text-xs font-bold text-white">{cert.name}</div>
                      <div className="text-[11px] text-slate-400">{cert.issuer}</div>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400">{cert.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
