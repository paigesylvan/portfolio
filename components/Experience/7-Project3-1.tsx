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
          {/* LEFT COLUMN — text cards */}
          <div className="md:col-span-5 space-y-8 mt-12">
            {/* Over View */}
            <motion.article
              variants={item(prefersReduced)}
              className="rounded-3xl bg-white/[0.06] backdrop-blur-md ring-1 ring-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.45)] p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <Image
                  src="/images/experience-images/overview.png" // icon
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

            {/* My Role */}
            <motion.article
              variants={item(prefersReduced)}
              className="rounded-3xl bg-white/[0.06] backdrop-blur-md ring-1 ring-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.45)] p-6 md:p-8"
            >
              <div className="flex items-start gap-4">
                <Image
                  src="/images/experience-images/role.png" // icon
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
                <li>
                  Reviewed electrical schematics to troubleshoot PLC logic not connecting correctly.
                </li>
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
          </div>

          {/* RIGHT COLUMN — stacked images with captions */}
          <div className="md:col-span-7 space-y-8 mt-12 pl-24">
            {/* Whiteboard */}
            <motion.div
              variants={item(prefersReduced)}
              className=""
            >
              <Image
                src="/images/experience-images/whiteboard.png" // <-- update path
                alt="Whiteboard brainstorming"
                width={1920}
                height={1280}
                className="w-[600px] h-[380px] rounded-xl"
                priority
              />
              <p className="mt-2 text-[11px] text-white/60 text-center">
                Brainstorming sessions with Controls Engineer Manager on layout and overview functionality.
              </p>
            </motion.div>

            {/* HMI screen */}
            <motion.div
              variants={item(prefersReduced)}
              className=""
            >
              <Image
                src="/images/experience-images/flagpin-hmi.png" // <-- update path
                alt="Flag Pin HMI overview screen"
                width={1920}
                height={1280}
                className="w-[600px] h-[420px] rounded-xl"
              />
              <p className="mt-2 text-[11px] text-white/60 text-center">
                Final rendition of overview screen.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
