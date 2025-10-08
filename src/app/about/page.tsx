"use client";

import Section from "../../../components/section";        
import ExperienceHero from "../../../components/Experience/1-Hero"; 
import OverviewMWES from "../../../components/Experience/2-Overview";
import Terms from "../../../components/Experience/3-Terms";
import Experience from "../../../components/Experience/4-Highlights";
import Project1 from "../../../components/Experience/5-Project1";
import Project2 from "../../../components/Experience/6-Project2";
import Project3Part1 from "../../../components/Experience/7-Project3-1";
import Project3Part2 from "../../../components/Experience/8-Project3-2";
import Project3Part3 from "../../../components/Experience/9-Project3-3";
import Outcomes from "../../../components/Experience/10-Final";

export default function ExperiencePage() {
  return (
    <main className="snap-page bg-black text-white project-yellow">
      <Section id="hero"><ExperienceHero /></Section>
      <Section id="overview"><OverviewMWES /></Section>
      <Section id="terms"><Terms /></Section>
      <Section id="experience"><Experience /></Section>
      <Section id="project-1"><Project1 /></Section>
      <Section id="project-2"><Project2 /></Section>
      <Section id="project-3-1"><Project3Part1 /></Section>
      <Section id="project-3-2"><Project3Part2 /></Section>
      <Section id="project-3-3"><Project3Part3 /></Section>
      <Section id="outcome"><Outcomes /></Section>
    </main>
  );
}
