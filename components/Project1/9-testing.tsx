"use client";

import Image from "next/image";
import SectionHeader from "../SectionHeader";

export default function Testing() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white">
      <div className="max-w-[1200px] w-full text-center mx-auto">
        {/* Header */}
        <SectionHeader
          kicker="TESTING USABILITY"
          title="Design Evolution Through Iteration"
          align="center"
        />

        {/* Subtitle */}
        <h3 className="mt-6 text-lg md:text-xl font-medium text-white">
          Moderated User Testing informed iterations and guided my final design decisions
        </h3>

        {/* Description */}
        <p className="mx-auto mt-4 max-w-3xl text-white/85 leading-relaxed">
          Through a moderated usability study of one user, they navigated through the app
          while I noted comments and areas of refinement. Feedback was positive about the
          user flow of the booking process and ability to schedule for more than one dog.
          To bring more reassurance and comfort to the user, I prioritized the status of
          appointments and the personalization of dog profiles by adding them to the home
          screen. During the study, I noted the service information and messaging features
          were not easily accessible, so they were added to the navigation menu to benefit
          both new and repeating users.
        </p>

        {/* Evolution Images */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/project1-images/evolution-1.png"
              alt="Wireframe version"
              width={280}
              height={560}
              className="rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
            />
            <p className="mt-4 text-sm font-semibold text-[#7FB2FF]">
              Wireframe
            </p>
            <p className="mt-1 text-sm text-white/70">
              Testing structure & navigation
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/project1-images/evolution-2.png"
              alt="First iteration"
              width={280}
              height={560}
              className="rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
            />
            <p className="mt-4 text-sm font-semibold text-[#7FB2FF]">
              First Iteration
            </p>
            <p className="mt-1 text-sm text-white/70">
              Added visual identity + clearer CTA
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/project1-images/evolution-3.png"
              alt="Second iteration"
              width={280}
              height={560}
              className="rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
            />
            <p className="mt-4 text-sm font-semibold text-[#7FB2FF]">
              Second Iteration
            </p>
            <p className="mt-1 text-sm text-white/70">
              Personalized screen with appointments
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/project1-images/evolution-4.png"
              alt="Final design"
              width={280}
              height={560}
              className="rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.45)]"
            />
            <p className="mt-4 text-sm font-semibold text-[#7FB2FF]">
              Final Design
            </p>
            <p className="mt-1 text-sm text-white/70">
              Added Navigation + Messaging Feature
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
