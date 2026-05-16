"use client";
import { useEffect, useRef, Suspense, lazy } from "react";
import { skillCategories } from "@/data";

const TechSphere = lazy(() => import("@/components/three/TechSphere"));

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

export default function SkillsSection() {
  return (
    <section id="skills">
      <div className="section-container">
        <RevealDiv>
          <div className="section-label">02 — Skills</div>
        </RevealDiv>
        <RevealDiv delay={100}>
          <h2 className="section-title">
            Technical <span className="text-[var(--accent)]">Arsenal</span>
          </h2>
        </RevealDiv>

        {/* 3D Sphere */}
        <RevealDiv delay={200} className="my-12">
          <Suspense
            fallback={
              <div className="h-[400px] border border-white/5 bg-dark2 flex items-center justify-center">
                <span className="font-mono text-xs text-[var(--muted)] tracking-widest animate-pulse">
                  Loading 3D Scene...
                </span>
              </div>
            }
          >
            <TechSphere />
          </Suspense>
        </RevealDiv>

        {/* Skill categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <RevealDiv key={cat.id} delay={i * 100}>
              <div className="glass-card p-6">
                <div className="font-mono text-[0.75rem] tracking-[0.15em] text-[var(--accent)] uppercase mb-4">
                  ■ {cat.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </RevealDiv>
          ))}
        </div>
      </div>
    </section>
  );
}