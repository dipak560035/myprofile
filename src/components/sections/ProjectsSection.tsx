"use client";
import { useEffect, useRef } from "react";
import { projects } from "@/data";

function RevealDiv({ children, delay = 0, className = "" }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); }
    }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

const PROJECT_ICONS = [
  // E-commerce
  <svg key="1" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <rect x="10" y="20" width="60" height="40" rx="2" stroke="rgba(0,245,200,0.5)" strokeWidth="1.5"/>
    <rect x="20" y="30" width="18" height="12" rx="1" fill="rgba(0,245,200,0.15)" stroke="rgba(0,245,200,0.3)" strokeWidth="1"/>
    <rect x="44" y="30" width="16" height="6" rx="1" fill="rgba(124,58,237,0.2)" stroke="rgba(124,58,237,0.4)" strokeWidth="1"/>
    <line x1="10" y1="50" x2="70" y2="50" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
  </svg>,
  // Chat
  <svg key="2" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <circle cx="40" cy="40" r="20" stroke="rgba(0,245,200,0.4)" strokeWidth="1.5"/>
    <circle cx="40" cy="40" r="6" fill="rgba(0,245,200,0.2)"/>
    <line x1="25" y1="30" x2="20" y2="20" stroke="rgba(0,245,200,0.3)" strokeWidth="1.5"/>
    <line x1="55" y1="30" x2="60" y2="20" stroke="rgba(0,245,200,0.3)" strokeWidth="1.5"/>
    <line x1="25" y1="50" x2="20" y2="60" stroke="rgba(0,245,200,0.2)" strokeWidth="1.5"/>
    <line x1="55" y1="50" x2="60" y2="60" stroke="rgba(0,245,200,0.2)" strokeWidth="1.5"/>
  </svg>,
  // Dashboard
  <svg key="3" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <rect x="8" y="15" width="20" height="50" rx="1" stroke="rgba(124,58,237,0.5)" strokeWidth="1.5"/>
    <rect x="32" y="25" width="20" height="40" rx="1" stroke="rgba(124,58,237,0.4)" strokeWidth="1.5"/>
    <rect x="56" y="35" width="16" height="30" rx="1" stroke="rgba(124,58,237,0.3)" strokeWidth="1.5"/>
    <line x1="8" y1="65" x2="72" y2="65" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
  </svg>,
  // Auth
  <svg key="4" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <rect x="20" y="15" width="40" height="50" rx="4" stroke="rgba(245,158,11,0.5)" strokeWidth="1.5"/>
    <rect x="28" y="25" width="24" height="3" rx="1" fill="rgba(245,158,11,0.3)"/>
    <rect x="28" y="32" width="18" height="3" rx="1" fill="rgba(245,158,11,0.2)"/>
    <circle cx="40" cy="50" r="6" stroke="rgba(245,158,11,0.4)" strokeWidth="1.5"/>
    <line x1="40" y1="56" x2="40" y2="62" stroke="rgba(245,158,11,0.3)" strokeWidth="1.5"/>
  </svg>,
  // Portfolio
  <svg key="5" width="80" height="80" viewBox="0 0 80 80" fill="none">
    <rect x="10" y="10" width="60" height="60" rx="4" stroke="rgba(0,245,200,0.3)" strokeWidth="1"/>
    <circle cx="40" cy="35" r="12" stroke="rgba(0,245,200,0.5)" strokeWidth="1.5"/>
    <rect x="25" y="55" width="30" height="3" rx="1" fill="rgba(0,245,200,0.2)"/>
    <rect x="30" y="61" width="20" height="3" rx="1" fill="rgba(0,245,200,0.1)"/>
  </svg>,
];

const THUMB_GRADIENTS = [
  "from-[#0a1628] to-[#1a2744]",
  "from-[#0a1a12] to-[#0d2b1a]",
  "from-[#1a0a28] to-[#2a1244]",
  "from-[#1a1008] to-[#2a1c0a]",
  "from-[#0a1020] to-[#0d1830]",
];

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="section-container">
        <RevealDiv>
          <div className="section-label">03 — Projects</div>
        </RevealDiv>
        <RevealDiv delay={100}>
          <h2 className="section-title">
            Selected <span className="text-[var(--accent)]">Work</span>
          </h2>
        </RevealDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
          {projects.map((project, i) => (
            <RevealDiv key={project.id} delay={i * 80} className="project-card">
              <div className="glass-card overflow-hidden group cursor-default">
                {/* Thumbnail */}
                <div
                  className={`h-[200px] relative overflow-hidden bg-gradient-to-br ${THUMB_GRADIENTS[i % THUMB_GRADIENTS.length]}`}
                >
                  <span className="absolute top-3 right-3 font-syne font-black text-5xl text-white/[0.04] leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {PROJECT_ICONS[i % PROJECT_ICONS.length]}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,245,200,0.08)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[0.7rem] text-[var(--accent)] tracking-[0.15em]">
                      {String(i + 1).padStart(2, "0")} / {project.category}
                    </span>
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-transparent border border-white/10 text-[var(--muted)] px-3 py-1 font-mono text-[0.65rem] tracking-[0.08em] uppercase hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 no-underline"
                        >
                          Live ↗
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-transparent border border-white/10 text-[var(--muted)] px-3 py-1 font-mono text-[0.65rem] tracking-[0.08em] uppercase hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200 no-underline"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="font-syne font-bold text-xl mb-2 text-[var(--text)]">
                    {project.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm leading-[1.6] mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-[6px]">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}