"use client";

import Image from "next/image";
import Link from "next/link";
import PaigeOutlineTrace from "../outline";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  title?: string;
  subtitle?: string;
  kicker?: string;
  minHeight?: number | string;
};

export default function Hero({
  title = "Product Designer & UX/UI Developer",
  kicker = "PAIGE SYLVAN",
  subtitle = "I design clean, intuitive interfaces and build responsive, user-centered products with modern front-end tools. I blend UX strategy, visual design, and development experience to turn complex problems into simple, functional experiences.",
  minHeight,
}: Props) {
  const prefersReduced = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-hidden text-white full-bleed pt-safe pb-safe bg-black"
      style={minHeight ? { minHeight } : undefined}
    >
      {/* Background */}
      <div className="aurora-top absolute left-1/2 top-0 -translate-x-1/2 w-screen h-[100vh] pointer-events-none z-0" />
      <div
        className="film-grain absolute inset-0 pointer-events-none mix-blend-overlay opacity-30 z-[1]"
        aria-hidden
      />
      <div className="vignette-soft absolute inset-0 pointer-events-none z-[1]" aria-hidden />

      {/* Bottom hue (soft + not cut off) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-36 z-0 h-[70vh] opacity-85"
        style={{
          backgroundImage: [
            "radial-gradient(1400px 620px at 18% 92%, rgba(245,60,160,0.18) 0%, rgba(245,60,160,0.08) 42%, rgba(0,0,0,0) 78%)",
            "radial-gradient(1400px 620px at 55% 95%, rgba(0,196,255,0.16) 0%, rgba(0,196,255,0.07) 45%, rgba(0,0,0,0) 80%)",
            "radial-gradient(1400px 620px at 88% 92%, rgba(0,210,190,0.14) 0%, rgba(0,210,190,0.06) 46%, rgba(0,0,0,0) 82%)",
          ].join(", "),
          filter: "blur(95px)",
          mixBlendMode: "screen",
          WebkitMaskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0) 92%)",
          maskImage:
            "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0) 92%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1000] lg:max-w-[1090px] px-6 pt-24 pb-20 md:pt-28 lg:pt-32">
        <div className="grid items-left gap-14 lg:grid-cols-12">
          {/* LEFT: text */}
          <motion.div
            className="lg:col-span-6 text-left lg:mt-36"
            initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: prefersReduced ? 0 : 0.7, ease: "easeOut" }}
          >
            <motion.p
              className="text-[11px] tracking-[0.22em] text-white/60"
              initial={prefersReduced ? { opacity: 1 } : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReduced ? 0 : 0.5, delay: prefersReduced ? 0 : 0.05 }}
            >
              {kicker}
            </motion.p>

            <motion.h1
              id="hero-title"
              className="mt-3 text-3xl md:text-4xl lg:text-5xl font-semibold tracking-[0.01em]"
              initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReduced ? 0 : 0.7, ease: "easeOut", delay: prefersReduced ? 0 : 0.08 }}
            >
              {title}
            </motion.h1>

            <motion.p
              className="mt-5 text-white/80 text-[12px] md:text-[13px] leading-snug max-w-[52ch] mx-auto lg:mx-0"
              initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReduced ? 0 : 0.7, ease: "easeOut", delay: prefersReduced ? 0 : 0.14 }}
            >
              {subtitle}
            </motion.p>

            {/*
            <div className="mt-6 flex flex-col sm:flex-row items-center lg:items-start gap-3 justify-center lg:justify-start">
              <Link ...>...</Link>
            </div>
            */}
          </motion.div>

          {/* RIGHT: headshot */}
          <motion.div
            className="lg:col-span-6 flex justify-center lg:justify-end relative md:mt-10 lg:mt-16 lg:mr-4"
            initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: prefersReduced ? 0 : 0.8, ease: "easeOut", delay: prefersReduced ? 0 : 0.1 }}
          >
            <motion.div
              className="relative w-[330px] md:w-[370px]"
              initial={prefersReduced ? { scale: 1 } : { scale: 0.98 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: prefersReduced ? 0 : 0.8, ease: "easeOut" }}
            >
              <div className="absolute -inset-4 rounded-[28px] bg-white/[0.04] ring-1 ring-inset ring-white/10 backdrop-blur-md shadow-[0_24px_90px_rgba(0,0,0,0.55)]" />

              <Image
                src="/images/homepage-images/paige-headshot.png"
                alt="Paige Sylvan headshot"
                width={500}
                height={520}
                className="relative rounded-3xl object-cover w-full"
                priority
                sizes="(min-width: 1024px) 400px, 330px"
              />

              {/* subtle “draw-on” vibe */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                initial={prefersReduced ? { opacity: 1 } : { opacity: 0, scale: 0.99 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: prefersReduced ? 0 : 0.9, ease: "easeOut", delay: prefersReduced ? 0 : 0.18 }}
              >
                <PaigeOutlineTrace />
              </motion.div>

              <div className="pointer-events-none absolute inset-x-10 -bottom-3 h-6 rounded-full bg-black/70 blur-lg" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
