import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avinash Singh | Full-Stack Developer & Creative Engineer",
  description:
    "Portfolio of Avinash Singh — Full-Stack Developer, Creative Technologist, and Next.js / React Specialist crafting high-performance digital experiences with GSAP and Tailwind CSS.",
  keywords: [
    "Avinash Singh",
    "Portfolio",
    "Full-Stack Developer",
    "Next.js Developer",
    "GSAP Animations",
    "Tailwind CSS",
    "Creative Web Developer",
    "React Specialist",
  ],
  authors: [{ name: "Avinash Singh" }],
  creator: "Avinash Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avinashsingh.dev",
    title: "Avinash Singh | Full-Stack Developer & Creative Engineer",
    description:
      "Crafting high-performance web applications, fluid animations, and immersive digital experiences.",
    siteName: "Avinash Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinash Singh | Full-Stack Developer",
    description:
      "Crafting high-performance web applications, fluid animations, and immersive digital experiences.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body
        className="min-h-screen bg-[#090a0f] text-slate-100 antialiased selection:bg-cyan-500 selection:text-black overflow-x-hidden"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
