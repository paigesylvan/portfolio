"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const parent = (stagger = 0.12): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger } },
});

const item = (reduced: boolean): Variants => ({
  hidden: { opacity: 0, y: reduced ? 0 : 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: reduced
      ? { duration: 0.01 }
      : { duration: 0.7, ease: [0, 0, 0.58, 1] },
  },
});

function Media({
  src,
  alt,
  caption,
  priority = false,
}: {
  src: string;
  alt: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure className="w-full">
      <div className="relative w-full overflow-hidden rounded-xl ring-1 ring-white/10">
        <Image
          src={src}
          alt={alt}
          width={1920}
          height={1280}
          priority={priority}
          placeholder="blur"
          blurDataURL="/images/blur-placeholder.png" // swap to a real tiny placeholder you have
          sizes="(min-width: 768px) 58vw, 100vw"
          className="h-auto w-full object-cover"
        />
      </div>
      <figcaption className="mt-2 text-center text-[11px] text-white/60">
        {caption}
      </figcaption>
    </figure>
  );
}

function InfoCard({
  iconSrc,
  iconAlt,
  title,
  children,
}: {
  iconSrc: string;
  iconAlt: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="rounded-3xl bg-white/[0.06] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] ring-1 ring-white/10 backdrop-blur-md md:p-6">
      <header className="flex items-start gap-4">
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={56}
          height={56}
          className="h-12 w-12 object-contain"
        />
        <h3 className="text-lg font-semibold">{title}</h3>
      </header>
      <div className="mt-4 text-[12px] leading-tight text-white/85 lg:text-[13px]">
        {children}
      </div>
    </article>
  );
}

export default function Project3Part1() {
  const reduced = !!useReducedMotion();

  return (
    <section className="mt-16 mb-0 flex flex-col items-center justify-center px-4 text-white lg:mt-36">
      <div className="mx-auto w-full max-w-[1200px]">
        <SectionHeader kicker="PROJECT 3" title="Flag Pin Project" align="left" />

        <motion.div
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-12"
        >
          <motion.div variants={item(reduced)} className="order-1 md:order-2 md:col-span-7">
            <Media
              src="/images/experience-images/whiteboard.png"
              alt="Whiteboard brainstorming"
              caption="Brainstorming sessions with Controls Engineer Manager on layout and overview functionality."
              // priority={true} // only if this is above-the-fold and your hero
            />
          </motion.div>

          <motion.div variants={item(reduced)} className="order-2 md:order-1 md:col-span-5">
            <InfoCard
              iconSrc="/images/experience-images/overview.png"
              iconAlt="Overview icon"
              title="Overview"
            >
              <p>
                I designed and implemented a complete HMI application in{" "}
                <span className="font-semibold">FactoryTalk View SE</span> for a robotic welding and
                assembly cell. Operators can control cell functions and see real-time status, part
                flow, and alarms, within an interface aligned to the company’s design system.
              </p>
            </InfoCard>
          </motion.div>

          <motion.div variants={item(reduced)} className="order-3 md:order-4 md:col-span-7">
            <Media
              src="/images/experience-images/flagpin-hmi.png"
              alt="Flag Pin HMI overview screen"
              caption="Final rendition of the overview screen."
            />
          </motion.div>

          <motion.div variants={item(reduced)} className="order-4 md:order-3 md:col-span-5">
            <InfoCard iconSrc="/images/experience-images/role.png" iconAlt="Role icon" title="My Role">
              <ul className="space-y-2 list-disc pl-5">
                <li>Designed and built the HMI in FactoryTalk View Studio around operator tasks.</li>
                <li>Followed the company design system to keep screens consistent and readable.</li>
                <li>Uploaded and organized the tag database; bound PLC tags to UI components.</li>
                <li>Reviewed electrical schematics to troubleshoot connectivity and logic issues.</li>
                <li>Collaborated with engineering on recipe selection/saving and cell behavior.</li>
                <li>Created PLC logic where needed and documented the interface for the Ops Manual.</li>
              </ul>
            </InfoCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
