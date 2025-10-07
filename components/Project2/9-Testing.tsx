"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "../SectionHeader";

const parent = (stagger = 0.12) => ({
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: stagger } },
});

const item = (reduced: boolean) => ({
  hidden: { opacity: 0, y: reduced ? 0 : 26 },
  show: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.6, ease: "easeOut" } },
});

function MiniIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
      {children}
    </div>
  );
}

export default function TestingIterationCamping() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      <div className="mx-auto w-full max-w-[1200px]">
        <SectionHeader
          kicker="TESTING & ITERATION"
          title="How I validated and refined the experience"
          align="center"
        />

        {/* Top row: What I wanted to learn / How I tested it */}
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2"
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Left card */}
          <motion.div
            variants={item(prefersReduced)}
            className="rounded-3xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 p-7 md:p-9 shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
          >
            <p className="accent-text text-[12px] tracking-[0.22em]">WHAT I WANTED TO LEARN</p>
            <div className="mt-6 grid gap-8 sm:grid-cols-3 text-center">
              <div>
                <MiniIcon>
                  {/* magnifier over list */}
                  <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-90">
                    <path fill="currentColor" d="M10 2a8 8 0 1 1 5.3 13.9l4.4 4.4-1.4 1.4-4.4-4.4A8 8 0 0 1 10 2m0 2a6 6 0 1 0 0 12A6 6 0 0 0 10 4z"/>
                  </svg>
                </MiniIcon>
                <h4 className="font-semibold">Clarity</h4>
                <p className="mt-2 text-sm text-white/75">
                  Do users quickly grasp what the site offers?
                </p>
              </div>
              <div>
                <MiniIcon>
                  {/* path/flow */}
                  <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-90">
                    <path fill="currentColor" d="M7 4a3 3 0 0 1 3 3v2h4a3 3 0 1 1 0 6h-1v2a3 3 0 1 1-6 0h2a1 1 0 1 0 2 0v-2H10a3 3 0 1 1 0-6h1V7a1 1 0 0 0-2 0H7a3 3 0 0 1 0-6z"/>
                  </svg>
                </MiniIcon>
                <h4 className="font-semibold">Navigation</h4>
                <p className="mt-2 text-sm text-white/75">
                  Can users move from discovery to purchase without friction?
                </p>
              </div>
              <div>
                <MiniIcon>
                  {/* shield/question = confidence */}
                  <svg width="22" height="22" viewBox="0 0 24 24" className="opacity-90">
                    <path fill="currentColor" d="M12 2l8 4v6c0 5-3.5 9.7-8 10c-4.5-.3-8-5-8-10V6l8-4zm1 14h-2v-2h2v2zm1.2-6.8c0-1.3-1-2.2-2.6-2.2c-1 0-1.9.4-2.6 1.1l1.3 1.3c.3-.3.7-.5 1.2-.5c.6 0 .9.3.9.7c0 .4-.2.6-.8 1.1c-.9.7-1.4 1.3-1.2 2.6h2c-.1-.7.2-1 .9-1.6c.7-.6 1.2-1.2 1.2-2.5z"/>
                  </svg>
                </MiniIcon>
                <h4 className="font-semibold">Confidence</h4>
                <p className="mt-2 text-sm text-white/75">
                  Do tighter bundles + clear copy raise purchase confidence?
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div
            variants={item(prefersReduced)}
            className="rounded-3xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 p-7 md:p-9 shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
          >
            <h3 className="text-2xl font-semibold">How I tested it</h3>
            <p className="mt-3 text-white/80">
              I ran a <span className="font-semibold">moderated usability test</span> with one
              participant. During the session, I:
            </p>
            <ul className="mt-5 space-y-3 list-disc pl-5 text-white/80">
              <li>Gave realistic tasks (e.g., find and add the Starter Bundle).</li>
              <li>Observed navigation and moments of hesitation/confidence.</li>
              <li>Recorded the click path and captured qualitative impressions.</li>
              <li>Asked follow-ups to understand reasoning behind choices.</li>
            </ul>
            <p className="mt-5 text-white/75">
              Even with a single participant, the test revealed how a first-time visitor
              interprets the homepage, understands offerings, and moves through the flow.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom row: Improvements / Discoveries */}
        <motion.div
          className="mt-10 grid gap-6 md:grid-cols-2"
          variants={parent()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div
            variants={item(prefersReduced)}
            className="rounded-3xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 p-7 md:p-9 shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
          >
            <h3 className="text-2xl font-semibold">How I improved the design</h3>
            <ul className="mt-5 space-y-3 list-disc pl-5 text-white/85">
              <li>Elevated the Starter Bundle on the homepage with clearer context.</li>
              <li>Simplified checkout copy and item details to reassure purchases.</li>
            </ul>
            <p className="mt-5 text-white/75">
              These changes balanced simplicity and trust—clear explanations +
              streamlined selection increased confidence to complete a purchase.
            </p>
          </motion.div>

          <motion.div
            variants={item(prefersReduced)}
            className="rounded-3xl bg-white/[0.04] backdrop-blur-md ring-1 ring-white/10 p-7 md:p-9 shadow-[0_30px_100px_rgba(0,0,0,0.45)]"
          >
            <h3 className="text-2xl font-semibold">What I discovered</h3>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div>
                <p className="accent-text text-[12px] tracking-[0.22em]">CLARITY</p>
                <ul className="mt-3 space-y-2 list-disc pl-5 text-white/80">
                  <li>Homepage conveyed intent without overwhelming products.</li>
                  <li>Users understood the Starter Bundle quickly.</li>
                </ul>
              </div>
              <div>
                <p className="accent-text text-[12px] tracking-[0.22em]">NAVIGATION</p>
                <ul className="mt-3 space-y-2 list-disc pl-5 text-white/80">
                  <li>Starter Bundle felt like a natural entry point.</li>
                  <li>Some hesitation at checkout—wanted reassurance.</li>
                </ul>
              </div>
              <div>
                <p className="accent-text text-[12px] tracking-[0.22em]">CONFIDENCE</p>
                <ul className="mt-3 space-y-2 list-disc pl-5 text-white/80">
                  <li>Fewer options reduced decision fatigue.</li>
                  <li>Needed supportive copy about what’s in each bundle.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
