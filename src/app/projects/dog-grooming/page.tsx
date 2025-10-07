"use client";

import Section from "../../../../components/section";

import Hero from "../../../../components/Project1/1-hero";
import Overview from "../../../../components/Project1/2-overview";
import Research from "../../../../components/Project1/3-research";
import Users from "../../../../components/Project1/4-users";
import Goals from "../../../../components/Project1/5-goals";
import IA from "../../../../components/Project1/6-IA";
import Wireframes from "../../../../components/Project1/7-wireframes";
import Prototype from "../../../../components/Project1/8-protoype";
import Testing from "../../../../components/Project1/9-testing";
import FinalDesign from "../../../../components/Project1/10-final";
import ChallengesOutcomes from "../../../../components/Project1/11-outcomes";


export default function DogGroomingPage() {
  return (
<main className="project-blue w-screen h-[100svh] overflow-y-auto snap-y snap-mandatory scroll-smooth bg-black text-white
        project-blue
        h-[100svh]
        overflow-y-auto
        snap-y snap-mandatory
        scroll-smooth
        bg-black text-white">
  <Section id="hero"><Hero /></Section>
  <Section id="overview"><Overview /></Section>
  <Section id="research"><Research /></Section>
  <Section id="users"><Users /></Section>
  <Section id="goals"><Goals/></Section>
  <Section id="ia"> <IA /></Section>
  <Section id="wireframes"> <Wireframes /></Section>
  <Section id="prototypes"> <Prototype /></Section>
  <Section id="testing"> <Testing /></Section>
  <Section id="final"> <FinalDesign /></Section>
  <Section id="outcomes"> <ChallengesOutcomes /></Section>
</main>

  );
}
