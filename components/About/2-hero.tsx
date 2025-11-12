"use client";

import { useState } from "react";
import Image from "next/image";

const items = [
  { src: "/images/about-images/about-1.JPG", label: "Designing clean, intuitive flows" },
  { src: "/images/about-images/about-2.jpeg", label: "Bringing ideas to life in code" },
  { src: "/images/about-images/about-3.jpeg", label: "Live music + stadium energy" },
  { src: "/images/about-images/about-4.jpeg", label: "Slow mornings + strong coffee" },
  { src: "/images/about-images/about-5.jpeg", label: "Dogs, always dogs" },
  { src: "/images/about-images/about-6.png", label: "Exploring new places + details" },
];

export default function AboutGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-black text-white px-6">
      <div className="mx-auto w-full max-w-[1100px]">
      <p className=" text-white/80 max-w-4xl mx-auto text-xs lg:text-md leading-snug pt-24 pb-2 accent-text uppercase tracking-[0.12em]">
          A few things I love
        </p>
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {items.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={index}
                type="button"
                onClick={() => handleToggle(index)}
                className="relative group aspect-square overflow-hidden rounded-2xl border border-white/10 bg-white/5 focus:outline-none"
              >
                {/* Image */}
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className={`object-cover transition-all duration-300
                    ${isActive ? "blur-sm scale-105 brightness-75" : "scale-100"}
                    group-hover:blur-sm group-hover:scale-105 group-hover:brightness-75
                  `}
                />

                {/* Overlay */}
                <div
                  className={`
                    absolute inset-0 flex items-center justify-center px-2 text-center
                    text-[9px] xs:text-xs sm:text-sm md:text-base font-medium
                    transition-opacity duration-300
                    ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                    bg-black/40 backdrop-blur-sm
                  `}
                >
                  {item.label}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
