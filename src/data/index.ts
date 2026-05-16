// import type { Project, Skill, TimelineItem, SocialLink } from "@/types";
import { Project, TimelineItem, SocialLink } from "@/types";
export const personalInfo = {
  name: "Dipak Sah",
  title: "Full Stack MERN Developer",
  tagline: "Building scalable, modern, interactive digital experiences.",
  description:
    "I'm a passionate Full Stack MERN Developer based in Nepal. I specialize in building modern, scalable, and performance-driven web applications from concept to deployment.",
  email: "dipak560035@gmail.com",
  phone: "+977 9805104098",
  location: "Nepal 🇳🇵",
  github: "https://github.com/dipak560035",
  linkedin: "https://linkedin.com/in/dipak-sah-bab95a202",
  available: true,
};

export const stats = [
  { num: 20, suffix: "+", label: "Projects Built" },
  { num: 3, suffix: "+", label: "Years Exp." },
  { num: 15, suffix: "+", label: "Tech Stack" },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-featured online store with product management, cart, authentication, payment integration, and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    liveUrl: "https://mern-frontened.vercel.app/",
    githubUrl: "https://github.com/dipak560035",
    category: "E-Commerce",
    featured: true,
  },
  {
    id: 2,
    title: "Real-Time Chat App",
    description:
      "WebSocket-powered real-time messaging with rooms, user presence, typing indicators, and media sharing.",
    tags: ["Socket.io", "React", "Node.js", "MongoDB"],
    liveUrl: "https://chat-app-five-blue-45.vercel.app/",
    githubUrl: "https://github.com/dipak560035",
    category: "Realtime",
    featured: true,
  },
  {
    id: 3,
    title: "Admin Dashboard",
    description:
      "Comprehensive admin panel with analytics, user management, data visualization, charts, and full CRUD operations.",
    tags: ["React", "Redux", "Chart.js", "Node.js"],
    githubUrl: "https://github.com/dipak560035",
    category: "Dashboard",
  },
  {
    id: 4,
    title: "Authentication System",
    description:
      "Secure JWT-based auth with OAuth2, role-based access control, refresh tokens, and email verification flow.",
    tags: ["JWT", "OAuth2", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/dipak560035",
    category: "Auth",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "Cinematic developer portfolio with 3D elements, particle animations, GSAP scroll effects, and premium UI design.",
    tags: ["Next.js", "Three.js", "GSAP", "Framer Motion"],
    githubUrl: "https://github.com/dipak560035",
    category: "Portfolio",
  },
];

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Node.js", "Express.js", "REST API", "Socket.io", "JWT Auth", "Prisma"],
  },
  {
    id: "database",
    label: "Database",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Mongoose"],
  },
  {
    id: "tools",
    label: "Tools & DevOps",
    skills: ["Git & GitHub", "Docker", "Vercel", "Postman", "VS Code", "Linux"],
  },
];

export const techSphere = [
  "React", "Next.js", "Node.js", "Express", "MongoDB",
  "PostgreSQL", "TypeScript", "Tailwind", "Redux", "Socket.io",
  "Prisma", "Git", "Docker", "Vercel", "HTML5", "CSS3",
];

export const timeline: TimelineItem[] = [
  {
    year: "2024 — Present",
    title: "Advanced Full Stack Development",
    description:
      "Mastering Next.js 15, TypeScript, system design, and cloud deployment on Vercel & AWS.",
    type: "education",
  },
  {
    year: "2023 — 2024",
    title: "MERN Stack Specialization",
    description:
      "Deep dive into MongoDB, Express, React, and Node.js. Built 10+ full-stack applications.",
    type: "work",
  },
  {
    year: "2022 — 2023",
    title: "Web Development Foundation",
    description:
      "Started with HTML, CSS, JavaScript and began the journey into frontend development.",
    type: "education",
  },
  {
    year: "2021 — 2022",
    title: "Computer Science Education",
    description:
      "Formal education in programming fundamentals, algorithms, and software engineering.",
    type: "education",
  },
];

export const achievements = [
  {
    icon: "⭐",
    title: "E-Commerce Platform Live",
    desc: "Deployed on Vercel with real users",
    color: "accent",
  },
  {
    icon: "💬",
    title: "Real-Time Chat App",
    desc: "WebSocket powered, live on Vercel",
    color: "violet",
  },
  {
    icon: "🏆",
    title: "Full Stack Proficiency",
    desc: "MERN + Next.js + TypeScript",
    color: "amber",
  },
  {
    icon: "🚀",
    title: "Open Source Contributor",
    desc: "Active on GitHub: dipak560035",
    color: "accent",
  },
];

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/dipak560035" },
  { label: "LinkedIn", href: "https://linkedin.com/in/dipak-sah-bab95a202" },
  { label: "Email", href: "mailto:dipak560035@gmail.com" },
];