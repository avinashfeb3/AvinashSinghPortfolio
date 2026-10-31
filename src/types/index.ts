export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: "all" | "php" | "react" | "next";
  tags: string[];
  features: string[];
  metrics: { label: string; value: string }[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
  accentColor: string;
  architecture: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 - 100
  iconName?: string;
  category: "frontend" | "backend" | "devops" | "tools";
  experience: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  employmentType?: "Full-Time" | "Internship" | "Contract" | "Freelance" | string;
  isCurrent?: boolean;
  description: string;
  achievements: string[];
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
  gradient: string;
  borderHover: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  highlight: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
}
