export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  category: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  category: "frontend" | "backend" | "database" | "tools";
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  type: "education" | "work" | "achievement";
}

export interface SocialLink {
  label: string;
  href: string;
  icon?: string;
}