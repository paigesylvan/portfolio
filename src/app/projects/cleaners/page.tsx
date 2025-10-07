// src/app/projects/dry-cleaner/page.tsx (or similar path)
import Section from "../../../../components/section";

import Hero from "../../../../components/Project3/1-hero";
import Overview from "../../../../components/Project3/2-overview";
import HighlightsDryCleaner from "../../../../components/Project3/3-highlights";


export default function DryCleanerPage() {
  return (
    <main
      className="
        project-amber           /* <- sets the accent for this page */
        w-screen h-[100svh]
        overflow-y-auto
        snap-y snap-mandatory
        scroll-smooth
        bg-black text-white
      "
    >
      <Section id="hero"><Hero /></Section>
      <Section id="overview"><Overview /></Section>
      <Section id="highlights"><HighlightsDryCleaner /></Section>

    </main>
  );
}
