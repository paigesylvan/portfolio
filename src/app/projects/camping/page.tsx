
import Section from "../../../../components/section";

import Hero from "../../../../components/Project2/1-Hero";
import Overview from "../../../../components/Project2/2-Overview";
import Userflow from "../../../../components/Project2/3-Userflow";
import Mindmap from "../../../../components/Project2/4-Mindmap";
import Insight from "../../../../components/Project2/5-Insight";
import Wireframes from "../../../../components/Project2/6-Wireframes";
import Prototype from "../../../../components/Project2/7-Prototype";
import BeginnerFlow from "../../../../components/Project2/8-BeginnerFlow";
import TestingIterationCamping from "../../../../components/Project2/9-Testing";
import Iterations from "../../../../components/Project2/10-Iterations";


export default function DogGroomingPage() {
  return (
<main className=" w-screen h-[100svh] overflow-y-auto snap-y snap-mandatory scroll-smooth bg-black text-white
 
      project-green
      h-[100svh]
      overflow-y-auto
      snap-y snap-mandatory
      scroll-smooth
      bg-black text-white
    ">
  <Section id="hero"><Hero /></Section>
  <Section id="overview"><Overview /></Section>
  <Section id="userflow"><Userflow /></Section>
  <Section id="Mindmap"><Mindmap /></Section>
  <Section id="Insight"><Insight/></Section>
  <Section id="wireframes"> <Wireframes /></Section>
  <Section id="prototypes"> <Prototype /></Section>
  <Section id="beginnerflow"> <BeginnerFlow /></Section>
  <Section id="testing"> <TestingIterationCamping /></Section>
  <Section id="iterations"> <Iterations /></Section>
</main>

  );
}