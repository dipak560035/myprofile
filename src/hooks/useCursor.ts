"use client";
import { useEffect, useRef } from "react";

export function useCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef<number>(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ringEl = ringRef.current;
    if (!cursor || !ringEl) return;

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      ringEl.style.left = `${ring.current.x}px`;
      ringEl.style.top = `${ring.current.y}px`;
      rafId.current = requestAnimationFrame(animate);
    };

    animate();
    document.addEventListener("mousemove", onMove);

    const interactables = document.querySelectorAll("a, button, .project-card, .stat-card, .skill-tag");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
        ringEl.classList.add("hover");
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
        ringEl.classList.remove("hover");
      });
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return { cursorRef, ringRef };
}