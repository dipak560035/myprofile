"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={cn(
        "loading-screen transition-all duration-700",
        !visible && "opacity-0 pointer-events-none"
      )}
    >
      <div className="font-syne font-black text-5xl gradient-text mb-8">DS</div>
      <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--accent)] to-[var(--violet)]"
          style={{ animation: "loadFill 2s ease-in-out forwards" }}
        />
      </div>
      <p className="font-mono text-[0.7rem] text-[var(--muted)] tracking-[0.3em] uppercase mt-4">
        Loading experience...
      </p>
      <style>{`
        @keyframes loadFill {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}