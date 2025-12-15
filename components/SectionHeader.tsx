"use client";

import React from "react";

export default function SectionHeader({
  kicker,
  title,
  align = "left",
  titleClassName = "",
  kickerClassName = "",
}: {
  kicker?: string;
  title: string;
  align?: "left" | "center" | "right";
  titleClassName?: string;
  kickerClassName?: string;
}) {
  return (
    <header className={`text-${align}`}>
      {kicker && (
        <p
          className={`text-left accent-text uppercase tracking-[0.12em] ${
            kickerClassName || "text-[10px] lg:text-xs"
          }`}
        >
          {kicker}
        </p>
      )}
      <h2
        className={`text-left font-semibold leading-tight lg:mt-2 text-white ${
          titleClassName || "text-xl md:text-3xl"
        }`}
      >
        {title}
      </h2>
    </header>
  );
}
