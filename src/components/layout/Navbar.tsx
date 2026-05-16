"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-300",
        scrolled
          ? "bg-[rgba(5,5,8,0.85)] backdrop-blur-[20px] border-b border-white/5 px-6 md:px-12 py-4"
          : "px-6 md:px-12 py-6"
      )}
    >
      {/* Logo */}
      <span className="font-syne font-black text-2xl gradient-text select-none">DS.</span>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link.href}>
            <button
              onClick={() => scrollTo(link.href)}
              className="text-[var(--muted)] font-mono text-xs uppercase tracking-[0.1em] hover:text-[var(--accent)] transition-colors duration-300 cursor-pointer bg-transparent border-none"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button
        onClick={() => scrollTo("#contact")}
        className="hidden md:block btn-outline text-xs px-5 py-2"
      >
        Hire Me
      </button>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-[var(--text)] bg-transparent border-none cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-[5px]">
          <span className={cn("block w-6 h-[1px] bg-current transition-all", menuOpen && "rotate-45 translate-y-[6px]")} />
          <span className={cn("block w-6 h-[1px] bg-current transition-all", menuOpen && "opacity-0")} />
          <span className={cn("block w-6 h-[1px] bg-current transition-all", menuOpen && "-rotate-45 -translate-y-[6px]")} />
        </div>
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[rgba(5,5,8,0.98)] backdrop-blur-xl border-b border-white/5 py-6 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="block w-full text-left px-6 py-3 text-[var(--muted)] font-mono text-xs uppercase tracking-[0.1em] hover:text-[var(--accent)] transition-colors bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}