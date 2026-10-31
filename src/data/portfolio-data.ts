import {
  Project,
  SkillItem,
  ExperienceItem,
  TestimonialItem,
  StatItem,
  ServiceItem,
} from "../types";

export const PERSONAL_INFO = {
  name: "Avinash Singh",
  title: "Web Developer, Laravel Developer & Full-Stack Developer",
  roles: [
    "Software Developer",
    "Full-Stack Engineer",
    "Laravel & PHP Specialist",
    "Next.js & React Developer",
    "GSAP Motion & UI Craftsman",
  ],
  bio: "Hi! I am Avinash Singh, a Web Developer, Laravel Developer & Full Stack Developer. Passionate about design, art, and cutting-edge web technologies. Trained at Sea Solution (Delhi) and actively seeking a high-impact web development role.",
  location: "Delhi, India",
  email: "avinashfeb03@gmail.com",
  phone: "+91 8595196640",
  rawPhone: "8595196640",
  whatsappUrl: "https://wa.me/918595196640",
  github: "https://github.com/avinashfeb3",
  linkedin: "https://www.linkedin.com/in/avinash-singh-59645b237/",
  resumeUrl: "#resume",
  status: "🟢 Actively looking for a Web Developer / Full Stack role",
  timezone: "Asia/Kolkata (IST, UTC+5:30)",
  yearsExperience: "4+",
};

export const STATS: StatItem[] = [
  {
    label: "Years Experience",
    value: 4,
    suffix: "+",
    description: "Architecting web apps & scalable backends",
  },
  {
    label: "Projects Completed",
    value: 28,
    suffix: "+",
    description: "Production web applications delivered",
  },
  {
    label: "Code Commits",
    value: 18,
    suffix: "k+",
    description: "Across open-source and enterprise repos",
  },
];

export const PILLARS = [
  {
    title: "Performance Engineering",
    description:
      "Obsessed with sub-second page loads, minimal layout shifts, tree-shaking, and optimizing Next.js Core Web Vitals to score 95+ consistently.",
    icon: "Zap",
    gradient: "from-cyan-500/20 to-blue-500/20",
    border: "border-cyan-500/30",
  },
  {
    title: "Cinematic Motion & GSAP",
    description:
      "Crafting 60fps micro-interactions, scrub-based ScrollTriggers, and fluid physics-inspired UI choreography that enriches narrative without sacrificing speed.",
    icon: "Sparkles",
    gradient: "from-purple-500/20 to-pink-500/20",
    border: "border-purple-500/30",
  },
  {
    title: "Resilient Architecture",
    description:
      "Designing clean modular TypeScript codebases, decoupled API services, strict type safety, and robust state management with modern patterns.",
    icon: "ShieldCheck",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "border-emerald-500/30",
  },
  {
    title: "Pixel-Perfect Fidelity",
    description:
      "Bridging the gap between Figma designs and production code with pixel precision, fluid typography, responsive layouts, and accessibility.",
    icon: "Palette",
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "border-amber-500/30",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "online-travel-agency",
    title: "Online Travel Agency",
    tagline: "Travel booking and tour management website",
    description:
      "A PHP-based travel platform for browsing destinations, managing tour packages, and handling customer bookings.",
    longDescription:
      "Online Travel Agency provides a complete travel management experience with destination listings, package information, and booking workflows for travel customers.",
    category: "php",
    tags: ["PHP", "MySQL", "HTML5", "CSS3"],
    features: [
      "Travel package browsing",
      "Customer booking workflow",
      "Destination information pages",
      "Responsive website interface",
    ],
    metrics: [{ label: "Category", value: "PHP" }],
    demoUrl: "https://online-travel-agency.netlify.app/",
    githubUrl: "https://online-travel-agency.netlify.app/",
    featured: true,
    accentColor: "#38bdf8",
    architecture: ["PHP application structure", "MySQL data management", "Responsive frontend layout"],
  },
  {
    id: "online-blood-bank-management-system",
    title: "Online Blood Bank Management System",
    tagline: "Blood donor and inventory management platform",
    description:
      "A PHP-based system for organizing blood donors, blood availability, and requests through one centralized platform.",
    longDescription:
      "Online Blood Bank Management System helps manage donor records, blood groups, inventory information, and blood requests through a structured web application.",
    category: "php",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    features: [
      "Donor record management",
      "Blood group availability tracking",
      "Blood request management",
      "Admin management interface",
    ],
    metrics: [{ label: "Category", value: "PHP" }],
    demoUrl: "https://bloodsavershub.000webhostapp.com/",
    githubUrl: "https://bloodsavershub.000webhostapp.com/",
    featured: true,
    accentColor: "#f43f5e",
    architecture: ["PHP backend workflows", "MySQL database", "Role-based administration"],
  },
  {
    id: "online-appointment-management-system",
    title: "Online Appointment Management System",
    tagline: "Online scheduling and appointment management",
    description:
      "A PHP application that makes it easier for users to schedule appointments and for administrators to manage them.",
    longDescription:
      "Online Appointment Management System streamlines appointment scheduling with organized user requests, booking records, and administrative controls.",
    category: "php",
    tags: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
    features: [
      "Online appointment scheduling",
      "Appointment status management",
      "Customer information records",
      "Administrative dashboard",
    ],
    metrics: [{ label: "Category", value: "PHP" }],
    demoUrl: "https://onlineappointmentmanag.000webhostapp.com/",
    githubUrl: "https://onlineappointmentmanag.000webhostapp.com/",
    featured: false,
    accentColor: "#a78bfa",
    architecture: ["PHP server-side logic", "MySQL appointment records", "Responsive booking forms"],
  },
  {
    id: "online-beauty-spa",
    title: "Online Beauty Spa",
    tagline: "Modern beauty and wellness service website",
    description:
      "A polished website presenting beauty spa services, treatment information, and a welcoming online brand experience.",
    longDescription:
      "Online Beauty Spa is a responsive service website designed to showcase spa treatments and help visitors discover the available beauty and wellness offerings.",
    category: "all",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    features: [
      "Beauty service showcase",
      "Treatment information sections",
      "Responsive visual design",
      "Clear customer call-to-actions",
    ],
    metrics: [{ label: "Category", value: "All" }],
    demoUrl: "https://beauty-spa-women.netlify.app/",
    githubUrl: "https://beauty-spa-women.netlify.app/",
    featured: true,
    accentColor: "#f9a8d4",
    architecture: ["Responsive page structure", "Service-focused layout", "Mobile-friendly styling"],
  },
  {
    id: "lrs-services",
    title: "LRS Services",
    tagline: "Professional services website",
    description:
      "A Next.js website for presenting LRS Services with a clear, professional, and responsive digital presence.",
    longDescription:
      "LRS Services is a modern business website built to communicate services clearly and provide visitors with an accessible way to learn more and get in touch.",
    category: "next",
    tags: ["Next Js", "React Js", "Tailwind", "Responsive Design"],
    features: [
      "Professional service presentation",
      "Responsive business pages",
      "Modern React-based interface",
      "Clear contact pathways",
    ],
    metrics: [{ label: "Category", value: "Next JS" }],
    demoUrl: "https://www.lrsservices.in/",
    githubUrl: "https://www.lrsservices.in/",
    featured: true,
    accentColor: "#22d3ee",
    architecture: ["Next.js page routing", "React component structure", "Responsive Tailwind styling"],
  },
  {
    id: "borcelle-catering",
    title: "Borcelle Catering",
    tagline: "Catering business website",
    description:
      "A React-based catering website that highlights food services, menus, and event catering offerings.",
    longDescription:
      "Borcelle Catering presents a focused digital experience for a catering business, helping customers explore services and connect for their next event.",
    category: "react",
    tags: ["React Js", "JavaScript", "CSS3", "Responsive Design"],
    features: [
      "Catering service showcase",
      "Menu and offering sections",
      "Event-focused presentation",
      "Responsive customer experience",
    ],
    metrics: [{ label: "Category", value: "React JS" }],
    demoUrl: "https://borcellecatering.vercel.app/",
    githubUrl: "https://borcellecatering.vercel.app/",
    featured: false,
    accentColor: "#fb923c",
    architecture: ["React component architecture", "Responsive content sections", "Modern catering brand layout"],
  },
  {
    id: "online-business",
    title: "Online Business",
    tagline: "Business website for online services",
    description:
      "A React website designed to present an online business, its offerings, and its value to prospective customers.",
    longDescription:
      "Online Business provides a clean and responsive platform for communicating business services and guiding visitors toward meaningful inquiries.",
    category: "react",
    tags: ["React Js", "JavaScript", "CSS3", "Responsive Design"],
    features: [
      "Business service presentation",
      "Responsive landing sections",
      "Customer-focused calls-to-action",
      "Clean component-based interface",
    ],
    metrics: [{ label: "Category", value: "React JS" }],
    demoUrl: "https://onlinebusiness.vercel.app/",
    githubUrl: "https://onlinebusiness.vercel.app/",
    featured: false,
    accentColor: "#60a5fa",
    architecture: ["React component structure", "Responsive layout system", "Conversion-focused page sections"],
  },
  {
    id: "online-grocery-store",
    title: "Online Grocery Store",
    tagline: "Online grocery shopping experience",
    description:
      "A React-based grocery store interface for presenting products and creating a smooth online shopping experience.",
    longDescription:
      "Online Grocery Store brings grocery products into a clear, accessible interface designed to help customers browse and shop conveniently online.",
    category: "react",
    tags: ["React Js", "JavaScript", "CSS3", "Responsive Design"],
    features: [
      "Grocery product presentation",
      "Online shopping interface",
      "Responsive product layouts",
      "Simple customer browsing flow",
    ],
    metrics: [{ label: "Category", value: "React JS" }],
    demoUrl: "https://onlinegrocerystoreapp.vercel.app",
    githubUrl: "https://onlinegrocerystoreapp.vercel.app",
    featured: false,
    accentColor: "#4ade80",
    architecture: ["React-based product interface", "Responsive shopping layout", "Structured product presentation"],
  },
];

export const SKILLS: SkillItem[] = [
  // Frontend
  {
    name: "HTML5",
    level: 98,
    category: "frontend",
    experience: "5 yrs",
    featured: true,
  },
  {
    name: "CSS3",
    level: 97,
    category: "frontend",
    experience: "5 yrs",
    featured: true,
  },
  {
    name: "JavaScript",
    level: 95,
    category: "frontend",
    experience: "5 yrs",
    featured: true,
  },
  {
    name: "Bootstrap",
    level: 92,
    category: "frontend",
    experience: "4 yrs",
    featured: false,
  },
  {
    name: "Tailwind",
    level: 96,
    category: "frontend",
    experience: "4 yrs",
    featured: true,
  },
  {
    name: "Sass",
    level: 88,
    category: "frontend",
    experience: "3 yrs",
    featured: false,
  },
  {
    name: "React Js",
    level: 95,
    category: "frontend",
    experience: "4 yrs",
    featured: true,
  },
  {
    name: "Next Js",
    level: 96,
    category: "frontend",
    experience: "4 yrs",
    featured: true,
  },

  // Backend
  {
    name: "Node Js",
    level: 92,
    category: "backend",
    experience: "4 yrs",
    featured: true,
  },
  {
    name: "Mongo DB",
    level: 87,
    category: "backend",
    experience: "3 yrs",
    featured: false,
  },
  {
    name: "PHP",
    level: 91,
    category: "backend",
    experience: "3 yrs",
    featured: true,
  },
  {
    name: "MySQL",
    level: 89,
    category: "backend",
    experience: "3 yrs",
    featured: false,
  },
  {
    name: "Laravel",
    level: 93,
    category: "backend",
    experience: "3 yrs",
    featured: true,
  },

  // Tools & Testing
  {
    name: "Git",
    level: 95,
    category: "tools",
    experience: "4 yrs",
    featured: true,
  },
  {
    name: "Github",
    level: 94,
    category: "tools",
    experience: "4 yrs",
    featured: true,
  },
  {
    name: "Postman",
    level: 90,
    category: "tools",
    experience: "3 yrs",
    featured: false,
  },
  {
    name: "API Testing",
    level: 90,
    category: "tools",
    experience: "3 yrs",
    featured: false,
  },
  {
    name: "Debugging",
    level: 94,
    category: "tools",
    experience: "4 yrs",
    featured: true,
  },
  {
    name: "Bug Fixing",
    level: 94,
    category: "tools",
    experience: "4 yrs",
    featured: true,
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "indicorp",
    role: "Software Developer",
    company: "IndiCorp IT Solution Pvt. Ltd.",
    location: "Noida, India",
    period: "2026 — Present",
    employmentType: "Full-Time",
    isCurrent: true,
    description:
      "Working as a Software Developer at IndiCorp IT Solutions Pvt. Ltd., contributing to the development, enhancement, and maintenance of web-based applications.",
    achievements: [
      "Developing and maintaining responsive and user-friendly web applications.",
      "Building frontend interfaces using HTML, CSS, JavaScript, and modern frameworks.",
      "Developing backend functionality, database schemas, and business logic.",
      "Creating, integrating, and testing RESTful APIs.",
      "Managing databases and performing optimized CRUD operations.",
      "Debugging application issues and improving overall performance.",
      "Collaborating with cross-functional teams to deliver quality software solutions.",
      "Using Git and GitHub for version control and collaborative code management.",
    ],
    skills: [
      "Next.js",
      "TypeScript",
      "GSAP",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "PHP",
      "Laravel",
      "MYSQL",
    ],
  },
  {
    id: "samarth-egov-intern",
    role: "Software Programmer Intern",
    company: "Samarth EGov",
    location: "India",
    period: "Feb 2022 — Jul 2022",
    employmentType: "Internship",
    isCurrent: false,
    description:
      "Worked for six months at an Ed-Tech company, enhancing website design and functionality while maintaining and fixing issues in the existing website.",
    achievements: [
      "Modified existing websites and portals for Central and State Universities.",
      "Added new features to university portals according to institutional requirements.",
      "Enhanced portal interfaces and user experiences based on design requirements.",
      "Reduced portal response times to improve loading performance.",
      "Designed and developed new portals based on Central and State University requirements.",
    ],
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Website Testing",
      "Debugging",
    ],
  },
  {
    id: "sopra-steria-process-associate",
    role: "Process Associate",
    company: "Sopra Steria",
    location: "India",
    period: "Jul 2018 — Nov 2020",
    employmentType: "Full-Time",
    isCurrent: false,
    description: "Worked as a Process Associate for 2.4 years at Sopra Steria.",
    achievements: [
      "Handled Safedig job packs, utility packs, and street packs.",
      "Created Safedig packs using the easting and northing details provided by email, then uploaded them to Salesforce and Box.",
      "Processed job pack requests by locating the required area from easting and northing coordinates and communicating completion by email.",
      "Processed Bot job packs and resolved errors encountered during BOT or RPA (Robotic Process Automation) runs.",
      "Audited completed job packs, provided associate feedback, and marked quality failures when errors were found.",
      "Guided the team in resolving questions related to job packs and cases.",
      "Created street packs from client-provided easting and northing coordinates, uploaded them to tools such as Appcan and Box, and notified clients.",
    ],
    skills: [
      "Process Management",
      "Quality Assurance",
      "Team Collaboration",
    ],
  },
  {
    id: "concentrix-operation-representative",
    role: "Operation Representative",
    company: "Concentrix",
    location: "India",
    period: "Feb 2017 — Feb 2018",
    employmentType: "Full-Time",
    isCurrent: false,
    description: "Worked as an Operation Representative for one year at Concentrix.",
    achievements: [
      "Handled Jio customer accounts related to data usage and the status of new Jio SIM cards.",
      "Provided resolutions for previous Service Requests (SR) within the required timelines.",
      "Provided information about new Jio plan offers.",
      "Resolved escalated calls and provided appropriate resolutions for Service Requests (SR) and First Time Resolution (FTR) cases.",
    ],
    skills: [
      "Operations",
      "Customer Support",
      "Process Coordination",
    ],
  },
  {
    id: "education-mca",
    role: "MCA",
    company: "IGNOU",
    location: "India",
    period: "2021",
    employmentType: "Education",
    isCurrent: false,
    description: "Master of Computer Applications from IGNOU.",
    achievements: ["Completed MCA in 2021."],
    skills: ["Computer Applications", "Software Development", "Database Systems"],
  },
  {
    id: "education-bca",
    role: "BCA",
    company: "CCS University",
    location: "India",
    period: "2016",
    employmentType: "Education",
    isCurrent: false,
    description: "Bachelor of Computer Applications from CCS University.",
    achievements: ["Completed BCA in 2016."],
    skills: ["Computer Applications", "Web Development", "Database Systems"],
  },
  {
    id: "education-senior-secondary",
    role: "Senior Secondary",
    company: "CBSE Board",
    location: "India",
    period: "2013",
    employmentType: "Education",
    isCurrent: false,
    description: "Completed Senior Secondary education under the CBSE Board.",
    achievements: ["Completed Senior Secondary education in 2013."],
    skills: ["Senior Secondary Education"],
  },
  {
    id: "education-secondary",
    role: "Secondary",
    company: "CBSE Board",
    location: "India",
    period: "2011",
    employmentType: "Education",
    isCurrent: false,
    description: "Completed Secondary education under the CBSE Board.",
    achievements: ["Completed Secondary education in 2011."],
    skills: ["Secondary Education"],
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Vikram Malhotra",
    role: "VP of Engineering",
    company: "TechCorp Solutions",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    content:
      "Avinash is an exceptional engineer who has a rare superpower: he writes pristine, bulletproof backend logic while having the eye of an award-winning creative designer. His GSAP animations transformed our product's perceived speed and delight.",
    rating: 5,
    highlight: "Rare blend of engineering rigor & design craftsmanship",
  },
  {
    id: "2",
    name: "Sarah Chen",
    role: "Lead Product Designer",
    company: "Nexus Creative",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    content:
      "Working with Avinash is every designer's dream. You give him high-fidelity Figma prototypes and he delivers code that actually looks and feels better than the mockup, with smooth easing and attention to micro-details you didn't even know you needed.",
    rating: 5,
    highlight: "Translates Figma to code with surgical precision",
  },
  {
    id: "3",
    name: "Arjun Reddy",
    role: "Co-Founder & CEO",
    company: "HyperScale Ventures",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    content:
      "Avinash built our investor portal from scratch in record time. Not only did we launch 2 weeks ahead of schedule, but the platform maintained 99.99% uptime through our highest-traffic funding round. Truly top 1% developer.",
    rating: 5,
    highlight: "Delivered 2 weeks ahead of schedule with 99.99% uptime",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "website-development",
    title: "Website Development",
    description:
      "Building modern, high-performing websites tailored to your business goals, audience, and brand.",
    icon: "Layers",
    deliverables: [
      "Custom website architecture",
      "Scalable frontend development",
      "Third-party integrations",
      "Production deployment setup",
    ],
    gradient: "from-cyan-500/20 via-sky-500/10 to-transparent",
    borderHover: "hover:border-cyan-400/50",
  },
  {
    id: "web-designer",
    title: "Web Designer",
    description:
      "Designing clean, engaging, and conversion-focused interfaces that make your brand stand out online.",
    icon: "Sparkles",
    deliverables: [
      "User-focused page layouts",
      "Modern visual design systems",
      "Clear calls to action",
      "Brand-aligned UI styling",
    ],
    gradient: "from-purple-500/20 via-fuchsia-500/10 to-transparent",
    borderHover: "hover:border-purple-400/50",
  },
  {
    id: "frontend-development",
    title: "Frontend Developer",
    description:
      "Developing fast, accessible, and maintainable frontend experiences with modern web technologies.",
    icon: "Gauge",
    deliverables: [
      "Reusable React components",
      "Interactive user interfaces",
      "API and CMS integration",
      "Accessible semantic markup",
    ],
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    borderHover: "hover:border-emerald-400/50",
  },
  {
    id: "mobile-responsive-website",
    title: "Mobile Responsive Website",
    description:
      "Creating seamless website experiences that look and work beautifully across phones, tablets, and desktops.",
    icon: "Rocket",
    deliverables: [
      "Mobile-first layouts",
      "Cross-browser compatibility",
      "Touch-friendly interactions",
      "Responsive performance tuning",
    ],
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    borderHover: "hover:border-amber-400/50",
  },
  {
    id: "website-testing",
    title: "Website Testing",
    description:
      "Testing every important part of your website to deliver a reliable, polished, and frustration-free experience.",
    icon: "Component",
    deliverables: [
      "Functional and usability testing",
      "Responsive device testing",
      "Browser compatibility checks",
      "Bug reporting and fixes",
    ],
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    borderHover: "hover:border-blue-400/50",
  },
  {
    id: "crm-erp-development",
    title: "CRM & ERP Development",
    description:
      "Developing customized CRM and ERP solutions that organize operations, automate workflows, and support growth.",
    icon: "Cpu",
    deliverables: [
      "Custom business workflows",
      "Customer and inventory management",
      "Reports and admin dashboards",
      "Role-based access controls",
    ],
    gradient: "from-rose-500/20 via-pink-500/10 to-transparent",
    borderHover: "hover:border-rose-400/50",
  },
  {
    id: "static-dynamic-website-development",
    title: "Static & Dynamic Website Development",
    description:
      "Delivering everything from lightweight static pages to data-driven dynamic websites with content that is easy to manage.",
    icon: "Layers",
    deliverables: [
      "SEO-friendly static pages",
      "Dynamic database-driven content",
      "CMS and admin functionality",
      "Secure forms and integrations",
    ],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    borderHover: "hover:border-cyan-400/50",
  },
];

export const RESUME_DATA = {
  summary:
    "Software Developer with experience building responsive websites, React interfaces, PHP and Laravel applications, API integrations, database-driven systems, testing, debugging, and business dashboards.",
  education: [
    {
      degree: "MCA",
      institution: "IGNOU",
      location: "India",
      period: "2021",
      grade: "Master of Computer Applications",
      highlights: [
        "Completed Master of Computer Applications in 2021",
      ],
    },
    {
      degree: "BCA",
      institution: "CCS University",
      location: "India",
      period: "2016",
      grade: "Bachelor of Computer Applications",
      highlights: [
        "Completed Bachelor of Computer Applications in 2016",
      ],
    },
    {
      degree: "Senior Secondary",
      institution: "CBSE Board",
      location: "India",
      period: "2013",
      grade: "Senior Secondary Certification",
      highlights: ["Completed Senior Secondary education in 2013"],
    },
    {
      degree: "Secondary",
      institution: "CBSE Board",
      location: "India",
      period: "2011",
      grade: "Secondary School Certification",
      highlights: ["Completed Secondary education in 2011"],
    },
  ],
  certifications: [
    {
      name: "Website Development Course",
      issuer: "SEA Solution, Laxmi Nagar",
      date: "Course",
    },
    {
      name: "SQL Workshop",
      issuer: "SkillNation",
      date: "Workshop",
    },
    {
      name: "GitLab 101 & 201 Certification",
      issuer: "Edcast",
      date: "Certification",
    },
  ],
  languages: [
    { name: "English", level: "Fluent (Professional)" },
    { name: "Hindi", level: "Native" },
  ],
};
