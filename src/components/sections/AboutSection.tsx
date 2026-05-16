"use client";
import { useEffect, useRef } from "react";
import { personalInfo, stats } from "@/data";
import { useCounter } from "@/hooks/useCounter";

function StatCard({ num, suffix, label }: { num: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(num);
  return (
    <div className="stat-card">
      <div
        ref={ref}
        className="font-syne font-black text-4xl gradient-text leading-none mb-1"
      >
        {count}{suffix}
      </div>
      <div className="font-mono text-[0.7rem] tracking-[0.15em] text-[var(--muted)] uppercase">
        {label}
      </div>
    </div>
  );
}

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

export default function AboutSection() {
  return (
    <section id="about">
      <div className="section-container">
        <RevealDiv>
          <div className="section-label">01 — About</div>
        </RevealDiv>
        <RevealDiv delay={100}>
          <h2 className="section-title">
            Crafting Digital <br />
            <span className="text-[var(--accent)]">Experiences</span>
          </h2>
        </RevealDiv>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12 items-center">
          {/* Left: Text */}
          <RevealDiv className="space-y-5">
            <p className="text-[rgba(232,232,240,0.7)] leading-[1.8]">
              I&apos;m <span className="text-[var(--accent)] font-medium">Dipak Sah</span>, a passionate
              Full Stack MERN Developer based in Nepal. I specialize in building modern, scalable, and
              performance-driven web applications from concept to deployment.
            </p>
            <p className="text-[rgba(232,232,240,0.7)] leading-[1.8]">
              With expertise across the entire web stack — from intuitive React frontends to robust
              Node.js backends — I bridge the gap between great design and engineering excellence.
            </p>
            <p className="text-[rgba(232,232,240,0.7)] leading-[1.8]">
              When I&apos;m not coding, I&apos;m exploring new technologies, contributing to open source,
              and crafting solutions that make a real-world impact for clients globally.
            </p>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {stats.map((s) => (
                <StatCard key={s.label} {...s} />
              ))}
            </div>
          </RevealDiv>

          {/* Right: Terminal card */}
          <RevealDiv delay={200}>
            <div className="terminal-box">
              <div className="flex gap-[6px] mb-4">
                {["terminal-dot-r", "terminal-dot-y", "terminal-dot-g"].map((c) => (
                  <span key={c} className={`w-3 h-3 rounded-full ${c}`} />
                ))}
              </div>
              <div className="space-y-[2px] text-sm">
                <p><span className="text-[var(--accent)]">const</span> <span className="text-[#a78bfa]">developer</span> = {"{"}</p>
                <p>&nbsp;&nbsp;<span className="text-[#a78bfa]">name</span>: <span className="text-[#34d399]">&quot;Dipak Sah&quot;</span>,</p>
                <p>&nbsp;&nbsp;<span className="text-[#a78bfa]">role</span>: <span className="text-[#34d399]">&quot;Full Stack Dev&quot;</span>,</p>
                <p>&nbsp;&nbsp;<span className="text-[#a78bfa]">location</span>: <span className="text-[#34d399]">&quot;Nepal 🇳🇵&quot;</span>,</p>
                <p>&nbsp;&nbsp;<span className="text-[#a78bfa]">stack</span>: [</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#34d399]">&quot;React&quot;</span>, <span className="text-[#34d399]">&quot;Node.js&quot;</span>,</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#34d399]">&quot;MongoDB&quot;</span>, <span className="text-[#34d399]">&quot;Next.js&quot;</span></p>
                <p>&nbsp;&nbsp;],</p>
                <p>&nbsp;&nbsp;<span className="text-[#a78bfa]">available</span>: <span className="text-[var(--amber)]">true</span>,</p>
                <p>&nbsp;&nbsp;<span className="text-[#a78bfa]">passion</span>: <span className="text-[#34d399]">&quot;Building the web&quot;</span></p>
                <p>{"}"}</p>
                <p className="text-[var(--muted)] mt-2">// +977 9805104098</p>
              </div>
            </div>

            {/* Floating badges */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              {["React", "Node.js", "MongoDB", "Next.js"].map((tech, i) => (
                <div
                  key={tech}
                  className="floating-badge"
                  style={{ animation: `float 3s ease-in-out infinite`, animationDelay: `${i * 0.4}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </RevealDiv>
        </div>
      </div>
    </section>
  );
}