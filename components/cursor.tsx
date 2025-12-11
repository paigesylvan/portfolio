"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorCircle() {
  const elRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return; // skip touch

    const el = elRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      setVisible(true);
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const handleLeave = () => {
      setVisible(false);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={elRef}
      aria-hidden
      className={`pointer-events-none fixed z-[9999] h-8 w-8 rounded-full border-2 border-white hidden md:block transition-opacity duration-150 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        left: 0,
        top: 0,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
