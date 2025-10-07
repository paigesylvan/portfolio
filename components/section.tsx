"use client";
import React from "react";

export default function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      // Force full viewport width & center
      className={`w-screen min-w-screen max-w-none min-h-[100svh] snap-start flex items-center justify-center ${className}`}
    >
      {children}
    </section>
  );
}
