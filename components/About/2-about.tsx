"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type AboutItem = {
  src: string;
  label: string;
};

const ITEMS: AboutItem[] = [
  { src: "/images/about-images/about-1.JPG", label: "Exploring new places; China 2018" },
  { src: "/images/about-images/about-2.jpeg", label: "Enjoy baking fun things for the holidays" },
  { src: "/images/about-images/about-3.jpeg", label: "Milwaukee Bucks fan & 50/50 raffle winner" },
  { src: "/images/about-images/about-4.jpeg", label: "A new gardening hobby this summer" },
  { src: "/images/about-images/about-5.jpeg", label: "Love crafting for others" },
  { src: "/images/about-images/about-6.png", label: "Going on adventures with my dog, Sadie" },
];

export default function AboutGallery() {
  return (
    <section className="relative bg-black text-white full-bleed">
      <div className="relative z-10 mx-auto max-w-[1200px] px-6 py-28">
        {/* section header */}
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.22em] text-white/60">
            BEYOND THE SCREEN
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold">
            Life Outside of Design
          </h2>
        </div>

        {/* gallery */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6">
          {ITEMS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.45,
                delay: idx * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative group aspect-square rounded-full overflow-hidden
                        bg-white/[0.04]
                         shadow-[0_12px_40px_rgba(0,0,0,0.45)]
                         border border-white/40
                        ring-4 ring-inset ring-white
                         "
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(min-width: 768px) 160px, 120px"
                className="
                  object-cover transition-all duration-500
                  group-hover:scale-105 group-hover:brightness-75
                "
              />

              {/* hover label */}
              <div
                className="
                  absolute inset-0 flex items-center justify-center px-3 text-center
                  text-[9px] sm:text-[10px] md:text-[11px]
                  tracking-wide font-medium
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                  bg-black/45 backdrop-blur-sm
                "
              >
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}