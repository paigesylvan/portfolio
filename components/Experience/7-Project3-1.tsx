"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";
import { motion, useReducedMotion } from "framer-motion";

const parent = (stagger = 0.12) => ({
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: stagger } },
});

const item = (reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0 : 0.7, ease: "easeOut" },
  },
});

export default function Project3Part1() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      <div className="w-full max-w-[1400px] mx-auto mt-24">
        <SectionHeader kicker="PROJECT 3" title="Flag Pin Project" align="left" />

        <motion.div
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8"
        >
          {/* ===== MOBILE ORDER: 1 =====  DESKTOP: ROW 1 RIGHT (image) */}
          <motion.div
            variants={item(prefersReduced)}
            className="order-1 md:order-2 md:col-span-7"
          >
            <div className="w-full rounded-xl overflow-hidden">
              <Image
                src="/images/experience-images/whiteboard.png"
                alt="Whiteboard brainstorming"
                width={1920}
                height={1280}
                className="w-full h-auto rounded-xl object-cover"
                priority
              />
            </div>
            <p className="mt-2 text-[11px] text-white/60 text-center">
              Brainstorming sessions with Controls Engineer Manager on layout and overview functionality.
            </p>
          </motion.div>

          {/* ===== MOBILE ORDER: 2 =====  DESKTOP: ROW 1 LEFT (text) */}
          <motion.article
            variants={item(prefersReduced)}
            className="order-2 md:order-1 md:col-span-5 rounded-3xl bg-white/[0.06] backdrop-blur-md ring-1 ring-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.45)] p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <Image
                src="/images/experience-images/overview.png"
                alt="Overview icon"
                width={56}
                height={56}
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-lg font-semibold">Over View</h3>
            </div>

            <p className="mt-5 text-white/85 leading-tight">
              I designed and implemented a complete HMI application in
              <span className="font-semibold"> FactoryTalk View SE</span> for a robotic welding and assembly cell.
              Operators can control cell functions and see real-time status, part flow, and alarms—
              all within an interface aligned with the company’s design system. The role blended UI
              design, user flows, and interaction logic with technical implementation.
            </p>
          </motion.article>

          {/* ===== MOBILE ORDER: 3 =====  DESKTOP: ROW 2 RIGHT (image) */}
          <motion.div
            variants={item(prefersReduced)}
            className="order-3 md:order-4 md:col-span-7"
          >
            <div className="w-full rounded-xl overflow-hidden">
              <Image
                src="/images/experience-images/flagpin-hmi.png"
                alt="Flag Pin HMI overview screen"
                width={1920}
                height={1280}
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
            <p className="mt-2 text-[11px] text-white/60 text-center">
              Final rendition of overview screen.
            </p>
          </motion.div>

          {/* ===== MOBILE ORDER: 4 =====  DESKTOP: ROW 2 LEFT (text) */}
          <motion.article
            variants={item(prefersReduced)}
            className="order-4 md:order-3 md:col-span-5 rounded-3xl bg-white/[0.06] backdrop-blur-md ring-1 ring-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.45)] p-6 md:p-8"
          >
            <div className="flex items-start gap-4">
              <Image
                src="/images/experience-images/role.png"
                alt="Role icon"
                width={56}
                height={56}
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-lg font-semibold">My Role</h3>
            </div>

            <ul className="mt-5 space-y-2 text-white/85 leading-tight list-disc pl-5">
              <li>
                Designed and created the HMI application using FactoryTalk View Studio; ensured
                UI flows aligned with operator tasks.
              </li>
              <li>Followed the company HMI design system and guidelines for consistency.</li>
              <li>Uploaded and organized the tag database.</li>
              <li>Bound PLC tags to on-screen components (robots, conveyors, workstations, alarms).</li>
              <li>Reviewed electrical schematics to troubleshoot PLC logic not connecting correctly.</li>
              <li>
                Collaborated on “recipe” selection/saving and overall functionality with the
                engineering team.
              </li>
              <li>Created and implemented my own PLC logic where needed.</li>
              <li>
                Wrote an overview/explanation of the HMI application for the customer’s Operations
                Manual.
              </li>
            </ul>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
