"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

const INSIGHTS = {
  positives: [
    "The booking flow was straightforward.",
    "Scheduling for multiple dogs was perceived as valuable and intuitive.",
  ],
  friction: [
    "Appointment status was unclear after booking.",
    "The user sought reassurance their dog was “in good hands.”",
    "Service information and messaging were not easily discoverable.",
  ],
  adjustments: [
    {
      strong: "Appointment status",
      rest: " surfaced to reduce uncertainty and increase trust.",
    },
    {
      strong: "Dog profile personalization",
      rest: " enhanced on the home screen for emotional reassurance.",
    },
    {
      strong: "Service info + messaging",
      rest: " added to primary navigation for new and returning users.",
    },
  ],
};

const EVOLUTION = [
  {
    src: "/images/project1-images/evolution-1.png",
    title: "Wireframe",
    desc: "Testing structure & navigation",
  },
  {
    src: "/images/project1-images/evolution-2.png",
    title: "First Iteration",
    desc: "Added visual identity + clearer CTA",
  },
  {
    src: "/images/project1-images/evolution-3.png",
    title: "Second Iteration",
    desc: "Personalized homescreen with appointments + dog profile",
  },
  {
    src: "/images/project1-images/evolution-4.png",
    title: "Final Design",
    desc: "Added navigation bar with CTA throughout entire app",
  },
];

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
      <p className="text-[9px] tracking-[0.22em] text-white/50">{label}</p>
      <p className="mt-1 text-sm md:text-base text-white/90">{value}</p>
    </div>
  );
}

function InsightCard({
  title,
  tone = "neutral",
  children,
}: {
  title: string;
  tone?: "good" | "warn" | "neutral";
  children: React.ReactNode;
}) {
  const toneStyles =
    tone === "good"
      ? "border-[#7FB2FF]/25 bg-[#7FB2FF]/[0.06]"
      : tone === "warn"
      ? "border-white/10 bg-white/[0.03]"
      : "border-white/10 bg-white/[0.03]";

  return (
    <div className={`rounded-3xl border ${toneStyles} p-5 md:p-6`}>
      <h4 className="text-[10px] md:text-sm font-semibold text-[#7FB2FF] tracking-wide uppercase">
        {title}
      </h4>
      <div className="mt-3">{children}</div>
    </div>
  );
}

export default function Testing() {
  return (
    <section className="relative flex flex-col justify-center px-4 md:px-6 text-white py-10 md:py-14 mt-20 md:mt-48 mb-8 lg:mb-0">
      <div className="mx-auto w-full max-w-[1200px]">
        {/* Header */}
        <div className="mx-auto w-full max-w-[900px] text-center">
          <SectionHeader
            kicker="TESTING USABILITY"
            title="Design Evolution Through Iteration"
            align="center"
          />

          <p className="mx-auto mt-3 max-w-[760px] text-left text-[10px] md:text-base text-white/75 leading-snug md:leading-normal">
            After developing low-fidelity prototypes, I conducted a moderated usability test with a participant
            representative of the target user. They completed key booking tasks using a think-aloud protocol,
            supported by follow-up questions to understand expectations and decision-making. The results informed
            refinements to the high-fidelity prototypes and ensured the final design aligned with user needs and
            confidence in booking.
          </p>

          {/* Quick summary pills */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <StatPill label="METHOD" value="Moderated usability test" />
            <StatPill label="FORMAT" value="Think-aloud + follow-ups" />
            <StatPill label="OUTPUT" value="High-fi refinements" />
          </div>
        </div>

        {/* Insights cards */}
        <div className="mx-auto mt-8 w-full max-w-[1000px] grid gap-4 md:gap-5 md:grid-cols-3">
          <InsightCard title="Positive signals" tone="good">
            <ul className="list-disc pl-5 text-[10px] md:text-sm text-white/75 leading-snug space-y-1.5">
              {INSIGHTS.positives.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </InsightCard>

          <InsightCard title="Identified friction" tone="warn">
            <ul className="list-disc pl-5 text-[10px] md:text-sm text-white/75 leading-snug space-y-1.5">
              {INSIGHTS.friction.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </InsightCard>

          <InsightCard title="Design adjustments" tone="neutral">
            <ul className="list-disc pl-5 text-[10px] md:text-sm text-white/75 leading-snug space-y-1.5">
              {INSIGHTS.adjustments.map((a) => (
                <li key={a.strong}>
                  <span className="font-medium text-white/90">{a.strong}</span>
                  <span className="text-white/75">{a.rest}</span>
                </li>
              ))}
            </ul>
          </InsightCard>
        </div>

        {/* Evolution */}
        <div className="mt-10 md:mt-12">
          <div className="mx-auto w-full max-w-[1000px] flex items-center justify-between gap-3">
            <p className="text-[10px] tracking-[0.22em] text-white/50 uppercase">
              Iteration timeline
            </p>
            <div className="h-px flex-1 bg-white/10" />
            <p className="text-[10px] text-white/55">Wireframe → Final</p>
          </div>

          <div className="mx-auto mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 justify-items-center">
            {EVOLUTION.map((card, i) => (
              <div
                key={card.title}
                className="group flex flex-col items-center w-full max-w-[140px] sm:max-w-[160px] md:max-w-[150px]"
              >
                <div className="w-full aspect-[9/18] overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/[0.03] shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={card.src}
                    alt={card.title}
                    width={240}
                    height={480}
                    className="w-full h-full object-cover"
                    priority={i === 0}
                  />
                </div>

                <p className="mt-3 text-[9px] md:text-[10px] font-semibold text-[#7FB2FF] uppercase tracking-wide">
                  {card.title}
                </p>
                <p className="mt-1 text-[8px] md:text-[9px] text-white/70 text-center max-w-[150px] leading-tight">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
