"use client";
import { useEffect } from "react";

export function useLenis() {
  useEffect(() => {
    let lenis: { raf: (time: number) => void; destroy: () => void } | null = null;
    let rafId: number;

    async function init() {
      try {
        const { default: Lenis } = await import("lenis");
        lenis = new Lenis({ duration: 1.2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        const raf = (time: number) => {
          lenis!.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      } catch {
        // lenis not available
      }
    }

    init();
    return () => {
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);
}