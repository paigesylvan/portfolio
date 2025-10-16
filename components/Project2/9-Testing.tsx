"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const parent = (stagger = 0.12) => ({
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: stagger } },
});

const item = (reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: reduced ? 0 : 0.5, ease: "easeOut" },
  },
});

function MiniImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={36}
        height={36}
        className="object-contain opacity-90"
      />
    </div>
  );
}

export default function TestingIterationCamping() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-3 md:px-6 text-white mt-24 lg:mt-0 pb-10">
      <div className="mx-auto w-full max-w-[900px]">
        <SectionHeader
          kicker="TESTING & ITERATION"
          title="How I validated and refined the experience"
          align="center"
          accent="camp"
        />

        {/* Top row */}
        <motion.div
          className="mt-6 md:mt-8 grid gap-5 md:grid-cols-2"
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Left card */}
          <motion.div
            variants={item(prefersReduced)}
            className="rounded-2xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
          >
            <p className="text-[10px] tracking-[0.22em] text-[#00C67C] font-semibold">
              WHAT I WANTED TO LEARN
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-white mt-2 mb-8">
              Learning Objectives
            </h3>

            <div className="mt-4 grid gap-6 sm:grid-cols-3 text-center">
              <div>
                <MiniImage
                  src="/images/project2-images/clarity.png"
                  alt="Clarity"
                />
                <h4 className="font-semibold text-[#00C67C] text-sm">Clarity</h4>
                <p className="mt-1 text-xs text-white/75">
                  Do users quickly grasp what the site offers?
                </p>
              </div>
              <div>
                <MiniImage
                  src="/images/project2-images/navigation.png"
                  alt="Navigation"
                />
                <h4 className="font-semibold text-[#00C67C] text-sm">
                  Navigation
                </h4>
                <p className="mt-1 text-xs text-white/75">
                  Can users move from discovery to purchase without friction?
                </p>
              </div>
              <div>
                <MiniImage
                  src="/images/project2-images/confidence.png"
                  alt="Confidence"
                />
                <h4 className="font-semibold text-[#00C67C] text-sm">
                  Confidence
                </h4>
                <p className="mt-1 text-xs text-white/75">
                  Do tighter bundles + clear copy raise purchase confidence?
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div
            variants={item(prefersReduced)}
            className="rounded-2xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
          >
            <p className="text-[10px] tracking-[0.22em] text-[#00C67C] font-semibold">
              HOW I TESTED IT
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-white mt-2">
              Moderated Usability Testing
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-white/80 leading-snug">
              I ran a <span className="font-semibold text-[#00C67C]">moderated usability test</span> 
              with one participant. During the session, I:
            </p>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-white/80 text-xs sm:text-sm leading-snug">
              <li>Gave realistic tasks (e.g., find and add the Starter Bundle).</li>
              <li>Observed navigation and moments of hesitation/confidence.</li>
              <li>Recorded the click path and qualitative impressions.</li>
              <li>Asked follow-ups to understand reasoning behind choices.</li>
            </ul>
            <p className="mt-3 text-xs sm:text-sm text-white/75 leading-snug">
              Even with a single participant, the test revealed how a first-time visitor
              interprets the homepage and moves through the flow.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          className="mt-8 grid gap-5 md:grid-cols-2"
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Left card */}
          <motion.div
            variants={item(prefersReduced)}
            className="rounded-2xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
          >
            <p className="text-[10px] tracking-[0.22em] text-[#00C67C] font-semibold">
              HOW I IMPROVED THE DESIGN
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-white mt-2">
              Key Design Adjustments
            </h3>
            <ul className="mt-3 space-y-2 list-disc pl-5 text-white/85 text-xs sm:text-sm leading-snug">
              <li>Elevated the Starter Bundle on the homepage with clearer context.</li>
              <li>Simplified checkout copy and item details to reassure purchases.</li>
            </ul>
            <p className="mt-3 text-xs sm:text-sm text-white/75 leading-snug">
              These changes balanced simplicity and trust—clear explanations +
              streamlined selection increased confidence to complete a purchase.
            </p>
          </motion.div>

          {/* Right card */}
          <motion.div
            variants={item(prefersReduced)}
            className="rounded-2xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
          >
            <p className="text-[10px] tracking-[0.22em] text-[#00C67C] font-semibold">
              WHAT I DISCOVERED
            </p>
            <h3 className="text-lg md:text-xl font-semibold text-white mt-2">
              Key Findings
            </h3>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-[10px] tracking-[0.22em] text-[#00C67C] font-semibold">
                  CLARITY
                </p>
                <ul className="mt-2 space-y-1 list-disc pl-4 text-white/80 text-xs sm:text-sm">
                  <li>Homepage conveyed intent clearly.</li>
                  <li>Users understood the Starter Bundle quickly.</li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.22em] text-[#00C67C] font-semibold">
                  NAVIGATION
                </p>
                <ul className="mt-2 space-y-1 list-disc pl-4 text-white/80 text-xs sm:text-sm">
                  <li>Starter Bundle felt like a natural entry point.</li>
                  <li>Some hesitation at checkout—wanted reassurance.</li>
                </ul>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.22em] text-[#00C67C] font-semibold">
                  CONFIDENCE
                </p>
                <ul className="mt-2 space-y-1 list-disc pl-4 text-white/80 text-xs sm:text-sm">
                  <li>Fewer options reduced decision fatigue.</li>
                  <li>Needed supportive copy for bundles.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
