"use client";
import { personalInfo, socialLinks } from "@/data";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };
        >
          ▶ Available for opportunities
        </div>

        {/* Name */}
            opacity: 0,
          }}
        >
          <span className="block text-[var(--text)]">DIPAK</span>
          <span className="block gradient-text">SAH.</span>
        </h1>

        {/* Typing title */}
        <div
          className="font-mono mb-6 text-[var(--muted)]"
          style={{
            fontSize: "clamp(0.9rem,2vw,1.2rem)",
            animation: "fadeUp 0.8s 0.9s forwards",
            opacity: 0,
          }}
        >
          <span className="typing-text">{personalInfo.title}</span>
        </div>

        {/* Description */}
        <p
          className="text-[rgba(232,232,240,0.6)] max-w-[550px] leading-[1.7] mb-12 text-base md:text-lg"
          style={{ animation: "fadeUp 0.8s 1.1s forwards", opacity: 0 }}
        >
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex gap-4 flex-wrap"
          style={{ animation: "fadeUp 0.8s 1.3s forwards", opacity: 0 }}
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="btn-primary"
          >
            View Projects →
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-outline"
          >
            Let&apos;s Talk
          </button>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Resume ↗
          </a>
        </div>

        {/* Socials */}
        <div
          className="flex gap-8 mt-12"
          style={{ animation: "fadeUp 0.8s 1.5s forwards", opacity: 0 }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-300 font-mono text-xs tracking-[0.1em] no-underline"
            >
              <span className="block w-5 h-[1px] bg-current" />
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[2]"
        style={{ animation: "fadeUp 1s 2s backwards" }}
      >
        className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,245,200,0.04) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)",
        }}
      />
    </section>
  );
}















































"use client";
import { personalInfo, socialLinks } from "@/data";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-6 md:px-12"
    >
      <div className="max-w-5xl mx-auto w-full relative z-[2]">
        {/* Eyebrow */}
        <div
          className="font-mono text-[0.8rem] tracking-[0.3em] text-[var(--accent)] uppercase mb-6"
          style={{ animation: "fadeUp 0.8s 0.5s forwards", opacity: 0 }}
        >
          ▶ Available for opportunities
        </div>

        {/* Name */}
        <h1
          className="font-syne font-black leading-[0.95] mb-4"
          style={{
            fontSize: "clamp(3rem,8vw,7rem)",
            animation: "fadeUp 0.8s 0.7s forwards",
            opacity: 0,
          }}
        >
          <span className="block text-[var(--text)]">DIPAK</span>
          <span className="block gradient-text">SAH.</span>
        </h1>

        {/* Typing title */}
        <div
          className="font-mono mb-6 text-[var(--muted)]"
          style={{
            fontSize: "clamp(0.9rem,2vw,1.2rem)",
            animation: "fadeUp 0.8s 0.9s forwards",
            opacity: 0,
          }}
        >
          <span className="typing-text">{personalInfo.title}</span>
        </div>

        {/* Description */}
        <p
          className="text-[rgba(232,232,240,0.6)] max-w-[550px] leading-[1.7] mb-12 text-base md:text-lg"
          style={{ animation: "fadeUp 0.8s 1.1s forwards", opacity: 0 }}
        >
          {personalInfo.tagline}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex gap-4 flex-wrap"
          style={{ animation: "fadeUp 0.8s 1.3s forwards", opacity: 0 }}
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="btn-primary"
          >
            View Projects →
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="btn-outline"
          >
            Let&apos;s Talk
          </button>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Resume ↗
          </a>
        </div>

        {/* Socials */}
        <div
          className="flex gap-8 mt-12"
          style={{ animation: "fadeUp 0.8s 1.5s forwards", opacity: 0 }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-300 font-mono text-xs tracking-[0.1em] no-underline"
            >
              <span className="block w-5 h-[1px] bg-current" />
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[2]"
        style={{ animation: "fadeUp 1s 2s backwards" }}
      >
        <span className="font-mono text-[0.7rem] text-[var(--muted)] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <div className="scroll-line" />
      </div>

      {/* Decorative gradient blobs */}
      <div
        className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(0,245,200,0.04) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)",
        }}
      />
    </section>
  );
}
