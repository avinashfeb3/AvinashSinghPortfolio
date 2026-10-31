"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ResumeModal from "../components/ResumeModal";
import InteractiveTerminal from "../components/InteractiveTerminal";

// Dynamically import browser-only canvas and cursor components to prevent SSR hydration mismatch
const CustomCursor = dynamic(() => import("../components/CustomCursor"), {
  ssr: false,
});
const ParticleBackground = dynamic(
  () => import("../components/ParticleBackground"),
  { ssr: false }
);

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  // Keyboard shortcut listener: Ctrl+K or Cmd+K opens terminal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#090a0f] text-slate-100 selection:bg-cyan-500 selection:text-black overflow-x-hidden w-full">
      {/* Browser-only interactive elements */}
      {mounted && (
        <>
          <CustomCursor />
          <ParticleBackground />
        </>
      )}

      {/* Floating Glassmorphism Navbar */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeModalOpen(true)}
        isMuted={isMuted}
        toggleMute={toggleMute}
      />

      {/* Main Content Sections */}
      <main className="w-full flex flex-col">
        {/* Hero Section */}
        <Hero
          onOpenResume={() => setIsResumeModalOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
          isMuted={isMuted}
        />

        {/* About Section */}
        <About isMuted={isMuted} />

        {/* Services Section */}
        <Services
          onSelectService={(service) => setSelectedService(service)}
          isMuted={isMuted}
        />

        {/* Skills & Arsenal Section */}
        <Skills isMuted={isMuted} />

        {/* Portfolio / Featured Projects Section */}
        <Projects isMuted={isMuted} />

        {/* Career Experience & Resume Section */}
        <Resume
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          isMuted={isMuted}
        />

        {/* Contact Section ("Let's Start a Conversation") */}
        <Contact initialService={selectedService} isMuted={isMuted} />
      </main>

      {/* Footer */}
      <Footer isMuted={isMuted} />

      {/* Modals */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        isMuted={isMuted}
      />

      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        isMuted={isMuted}
      />
    </div>
  );
}
