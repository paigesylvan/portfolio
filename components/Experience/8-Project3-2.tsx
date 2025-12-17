"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type Variants,
  type Transition,
} from "framer-motion";

const parent = (stagger = 0.12): Variants => ({
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: stagger } },
});

const item = (reduced: boolean): Variants => ({
  hidden: { opacity: 0, y: reduced ? 0 : 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: reduced ? 0 : 0.65,
      // TS-safe equivalent of "easeOut"
      ease: [0, 0, 0.58, 1],
    } as Transition,
  },
});

export default function Project3Part2() {
  const prefersReduced = useReducedMotion();
  const reduced = !!prefersReduced;

  return (
    <section className="flex flex-col items-center justify-center px-4 text-white mt-18 lg:mt-36 mb-0">
      <div className="w-full max-w-[1200px] mx-auto">
        <motion.div
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-8 md:grid-cols-12 md:auto-rows-[minmax(180px,auto)]"
        >
          <motion.div
            variants={item(reduced)}
            className="md:col-span-6 rounded-2xl"
          >
            <Image
              src="/images/experience-images/control-screen.png"
              alt="Interchange / control HMI screen"
              width={1800}
              height={900}
              className="w-full h-auto rounded-xl"
              priority
            />
          </motion.div>

          <div className="md:col-span-6 flex flex-col gap-8">
            <motion.article
              variants={item(reduced)}
              className="w-full rounded-3xl bg-white/[0.06] backdrop-blur-md ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] p-5 md:p-6"
            >
              <div className="flex items-start gap-4">
                <Image
                  src="/images/experience-images/collabb.png"
                  alt="Collaboration icon"
                  width={56}
                  height={56}
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-lg font-semibold">Collaboration</h3>
              </div>
              <ul className="mt-4 space-y-2 text-white/85 leading-tight list-disc pl-5 text-[12px] lg:text-[13px]">
                <li>
                  Worked closely with Controls Engineers to validate PLC tag accuracy and
                  functionality.
                </li>
                <li>
                  Received iteration tasks/feedback directly from the Controls Engineering Manager.
                </li>
                <li>
                  Brainstormed UI layouts and workflows before implementing the final design.
                </li>
              </ul>
            </motion.article>

            <motion.div variants={item(reduced)} className="w-full">
              <Image
                src="/images/experience-images/nav-menu.png"
                alt="HMI navigation/menu"
                width={1800}
                height={900}
                className="w-full h-auto rounded-xl"
              />
            </motion.div>
          </div>

          <motion.article
            variants={item(reduced)}
            className="md:col-span-6 rounded-3xl bg-white/[0.06] backdrop-blur-md ring-1 ring-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.45)] p-5 md:p-6 flex flex-col"
          >
            <div className="flex items-start gap-4">
              <Image
                src="/images/experience-images/solvee.png"
                alt="Problem solving icon"
                width={56}
                height={56}
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-lg font-semibold">Problem Solving</h3>
            </div>

            <div className="mt-4 text-white/85 leading-tight space-y-3 text-[12px] lg:text-[13px]">
              <p>
                One of the biggest challenges was designing the conveyor control screen for
                maintenance and operation modes. Operators needed a clear way to test ten conveyor
                belts, each capable of moving in multiple directions, while also monitoring
                occupancy.
              </p>
              <p>I explored multiple iterations and landed on a simplified 2D layout:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Each box represents a conveyor section, with a smaller inner box indicating
                  occupancy.
                </li>
                <li>
                  When a section is selected, it turns green and becomes controllable with
                  directional arrows.
                </li>
                <li>
                  For top-level conveyors, a dynamic “Transfer Up/Down” button appears only when
                  applicable, reducing clutter.
                </li>
                <li>
                  In operation mode, running conveyors turn green, giving real-time feedback on
                  movement and load status.
                </li>
              </ul>
              <p>
                The design balanced functionality with clarity so operators could quickly test,
                diagnose, and monitor conveyors without confusion.
              </p>
            </div>
          </motion.article>

          <motion.div variants={item(reduced)} className="md:col-span-6">
            <Image
              src="/images/experience-images/conveyors.png"
              alt="Conveyors control HMI"
              width={1800}
              height={1200}
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
