"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import SectionHeader from "../SectionHeader";

const parent = (stagger = 0.12): Variants => ({
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: stagger } },
});

const item = (reduced: boolean): Variants => ({
  hidden: { opacity: 0, y: reduced ? 0 : 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: reduced
      ? { duration: 0 }
      : { duration: 0.5, ease: [0.22, 1, 0.36, 1] }, // ✅ typed easing (no string)
  },
});

function MiniImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 overflow-hidden">
      <Image
        src={src}
        alt={alt}
        width={30}
        height={30}
        className="object-contain opacity-90"
      />
    </div>
  );
}

export default function TestingIterationCamping() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="flex flex-col items-center justify-center px-3 md:px-6 text-white mt-24 lg:mt-0 pb-10">
      <div className="mx-auto w-full max-w-[1000px]">
        <SectionHeader
          kicker="TESTING & ITERATION"
          title="How I validated and refined the experience"
          align="center"
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
            variants={item(!!prefersReduced)}
            className="rounded-2xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_16px_60px_rgba(0,0,0,0.45)]"
          >
            <p className="text-[10px] tracking-[0.22em] text-[#00C67C] font-semibold">
              WHAT I WANTED TO LEARN
            </p>
            <h3 className="text-base md:text-lg font-semibold text-white mt-2 mb-8 lg:mb-6">
              Learning Objectives
            </h3>

            <div className="mt-3 grid gap-4 sm:grid-cols-3 text-center">
              <div>
                <MiniImage src="/images/project2-images/clarity.png" alt="Clarity" />
                <h4 className="font-semibold text-[#00C67C] text-xs">Clarity</h4>
                <p className="mt-1 text-[12px] md:text-[13px] text-white/70 leading-snug mb-8 lg:mb-0">
                  Do users quickly grasp what the site offers?
                </p>
              </div>
              <div>
                <MiniImage src="/images/project2-images/navigation.png" alt="Navigation" />
                <h4 className="font-semibold text-[#00C67C] text-xs">Navigation</h4>
                <p className="mt-1 text-[12px] md:text-[13px] text-white/70 leading-snug mb-8 lg:mb-0">
                  Can users move from discovery to purchase without friction?
                </p>
              </div>
              <div>
                <MiniImage src="/images/project2-images/confidence.png" alt="Confidence" />
                <h4 className="font-semibold text-[#00C67C] text-xs">Confidence</h4>
                <p className="mt-1 text-[12px] md:text-[13px] text-white/70 leading-snug mb-8 lg:mb-0">
                  Do tighter bundles + clear copy raise purchase confidence?
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div
            variants={item(!!prefersReduced)}
            className="rounded-2xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_16px_60px_rgba(0,0,0,0.45)]"
          >
            <p className="text-[9px] tracking-[0.22em] text-[#00C67C] font-semibold">
              HOW I TESTED IT
            </p>
            <h3 className="text-base md:text-lg font-semibold text-white mt-2">
              Moderated Usability Testing
            </h3>
            <p className="mt-2 text-[12px] md:text-[13px] text-white/75 leading-snug">
              I ran a{" "}
              <span className="font-semibold text-[#00C67C]">moderated usability test</span>{" "}
              with one participant. During the session, I:
            </p>
            <ul className="mt-2 space-y-1 list-disc pl-4 text-white/75 text-[12px] md:text-[13px] leading-snug">
              <li>Gave realistic tasks (e.g., find and add the Starter Bundle).</li>
              <li>Observed navigation and moments of hesitation/confidence.</li>
              <li>Recorded the click path and qualitative impressions.</li>
              <li>Asked follow-ups to understand reasoning behind choices.</li>
            </ul>
            <p className="mt-2 text-[12px] md:text-[13px] text-white/70 leading-snug">
              Even with a single participant, the test revealed how a first-time
              visitor interprets the homepage and moves through the flow.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom row */}
        <motion.div
          className="mt-6 grid gap-5 md:grid-cols-2"
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Left card */}
          <motion.div
            variants={item(!!prefersReduced)}
            className="rounded-2xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_16px_60px_rgba(0,0,0,0.45)]"
          >
            <p className="text-[9px] tracking-[0.22em] text-[#00C67C] font-semibold">
              HOW I IMPROVED THE DESIGN
            </p>
            <h3 className="text-base md:text-lg font-semibold text-white mt-2">
              Key Design Adjustments
            </h3>
            <ul className="mt-2 space-y-1 list-disc pl-4 text-white/75 text-[12px] md:text-[13px] leading-snug">
              <li>Elevated the Starter Bundle on the homepage with clearer context.</li>
              <li>Simplified checkout copy and item details to reassure purchases.</li>
            </ul>
            <p className="mt-2 text-[12px] md:text-[13px] text-white/70 leading-snug">
              These changes balanced simplicity and trust. Clear explanations +
              streamlined selection increased confidence to complete a purchase.
            </p>
          </motion.div>

          {/* Right card */}
          <motion.div
            variants={item(!!prefersReduced)}
            className="rounded-2xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 p-5 md:p-6 shadow-[0_16px_60px_rgba(0,0,0,0.45)]"
          >
            <p className="text-[10px] tracking-[0.22em] text-[#00C67C] font-semibold">
              WHAT I DISCOVERED
            </p>
            <h3 className="text-base md:text-lg font-semibold text-white mt-2">
              Key Findings
            </h3>

            <div className="mt-3 grid gap-3 md:grid-cols-3">
              <div>
                <p className="text-[10px] tracking-[0.22em] text-[#00C67C] font-semibold">
                  CLARITY
                </p>
                <ul className="mt-1 space-y-0.5 list-disc pl-4 text-white/70 text-[12px] md:text-[13px] leading-snug">
                  <li>Homepage conveyed intent clearly.</li>
                  <li>Users understood the Starter Bundle quickly.</li>
                </ul>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.22em] text-[#00C67C] font-semibold">
                  NAVIGATION
                </p>
                <ul className="mt-1 space-y-0.5 list-disc pl-4 text-white/70 text-[12px] md:text-[13px] leading-snug">
                  <li>Starter Bundle felt like a natural entry point.</li>
                  <li>Some hesitation at checkout—wanted reassurance.</li>
                </ul>
              </div>
              <div>
                <p className="text-[9px] tracking-[0.22em] text-[#00C67C] font-semibold">
                  CONFIDENCE
                </p>
                <ul className="mt-1 space-y-0.5 list-disc pl-4 text-white/70 text-[12px] md:text-[13px] leading-snug">
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
