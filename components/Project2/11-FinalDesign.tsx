"use client";

import SectionHeader from "../SectionHeader";

export default function FinalDesign() {
  return (
    <section className="flex min-h-[100svh] flex-col items-center justify-center px-6 text-white mt-36 lg:mt-0">
      <div className="max-w-[1200px] w-full mx-auto text-center">
        {/* Header */}
        <SectionHeader
          kicker="PROJECT OUTCOME"
          title="Final Design"
          align="center"
        />
              {/* short blurb */}
              <p className="mx-auto mt-3 max-w-6xl text-center text-white/85 text-[10px] md:text-md leading-tight">
           The final product is a intuitive and sleek e-commerce experience designed to help 
          users feel confident while gearing up for the outdoors. Clear navigation, 
          curated bundles, and simplified product details reduce decision fatigue and make selections
           feel guided rather than overwhelming. Thoughtful information hierarchy and reassuring microcopy support users at every step, while a clean, modern visual style reinforces trust and brand clarity. The result is a shopping experience that transforms uncertainty into excitement, empowering users to explore nature with confidence and the right gear for their adventure.
        
        </p>

        {/* Video Demo */}
        <div className="flex justify-center mt-10">
          <div className="overflow-hidden max-w-[950px] w-full">
            <video
              src="/images/project2-images/final-design-desktop.mp4" // replace with your actual path
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
