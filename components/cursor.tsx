// components/CursorCircle.tsx
"use client";

import { useEffect, useRef } from "react";

export default function CursorCircle() {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip touch devices
    const el = elRef.current!;

    const move = (e: MouseEvent) => {
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={elRef}
      aria-hidden
      className="pointer-events-none fixed z-[9999] h-8 w-8 rounded-full border-2 border-white"
      style={{
        left: 0,
        top: 0,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
