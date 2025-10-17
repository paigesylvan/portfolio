// components/Experience/9-Project3Part3.tsx
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const parent = (stagger = 0.12) => ({
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: stagger } },
});

const item = (reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0 : 0.65, ease: "easeOut" },
  },
});

export default function Project3Part3() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-4 text-white mt-18 pb-8 lg:pb-0 lg:mt-36 scale-[0.85] md:scale-[0.83] lg:scale-[0.8] origin-top">
      <div className="w-full max-w-[1200px] mx-auto">
        {/* Top: two cards (equal height) */}
        <motion.div
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {/* Problem Solving */}
          <motion.article
            variants={item(prefersReduced)}
            className="h-full rounded-3xl bg-white/[0.06] backdrop-blur-md ring-1 ring-white/10 
                       shadow-[0_30px_100px_rgba(0,0,0,0.45)] p-5 md:p-6 flex flex-col justify-between"
          >
            <div>
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
              <p className="mt-4 text-white/85 leading-snug text-sm md:text-base">
                A major challenge in this project was learning and creating PLC logic to support the
                recipe functionality. I built logic that allowed operators to save, edit, and delete
                both pin and plate recipes, then ensured these updates were reflected in the HMI
                application. I learned how to read electrical schematics to trace connections and
                troubleshoot logic that wasn’t working as expected. After finishing PLC logic, I
                integrated it with the HMI screens so operators could seamlessly manage recipes
                through the interface—requiring technical accuracy and a strong understanding of
                operator workflows.
              </p>
            </div>
          </motion.article>

          {/* Learning Experience */}
          <motion.article
            variants={item(prefersReduced)}
            className="h-full rounded-3xl bg-white/[0.06] backdrop-blur-md ring-1 ring-white/10 
                       shadow-[0_30px_100px_rgba(0,0,0,0.45)] p-5 md:p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start gap-4">
                <Image
                  src="/images/experience-images/learn.png"
                  alt="Learning icon"
                  width={56}
                  height={56}
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-lg font-semibold">Learning Experience</h3>
              </div>
              <p className="mt-4 text-white/85 leading-snug text-sm md:text-base">
                This project let me bridge UI design principles with industrial automation.
                Following HMI design guidelines reinforced how consistency and clarity are critical
                for operators. Uploading and organizing the tag database, then binding PLC tags to
                on-screen components, strengthened my understanding of how the HMI layer connects to
                real machine behavior. I also created my own PLC logic for searching, saving, and
                deleting recipes—deepening my grasp of accurate process control. Finally,
                documenting the application for the customer’s operation manual improved my ability
                to explain complex systems in a clear, actionable way.
              </p>
            </div>
          </motion.article>
        </motion.div>

        {/* Bottom: two equal-height images */}
        <motion.div
          variants={parent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {/* Left: PLC ladder */}
          <motion.div
            variants={item(prefersReduced)}
            className="rounded-2xl h-[320px] md:h-[360px] overflow-hidden bg-white/5 ring-1 ring-white/10"
          >
            <Image
              src="/images/experience-images/plc-ladder.png"
              alt="PLC ladder logic for recipe process"
              width={2000}
              height={1200}
              className="w-full h-full object-contain rounded-xl"
              priority
            />
          </motion.div>

          {/* Right: HMI recipe edit */}
          <motion.div
            variants={item(prefersReduced)}
            className="rounded-2xl h-[320px] md:h-[360px] overflow-hidden bg-white/5 ring-1 ring-white/10"
          >
            <Image
              src="/images/experience-images/recipe-edit.png"
              alt="HMI Plate Recipe Edit"
              width={1600}
              height={1200}
              className="w-full h-full object-contain rounded-xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
