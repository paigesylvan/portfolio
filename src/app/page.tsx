import Image from "next/image";
import CaseStudies from "../../components/Homepage/CaseStudy";
import SkillsHomePage from "../../components/Homepage/Skills";
import Hero from "../../components/Homepage/Splash";

export default function Home() {
  return (
    <main className="min-h-screen grid place-items-center text-white">
      <div className="">
        <Hero />
        <SkillsHomePage />
        <CaseStudies />
      </div>
      

    </main>
  );
}
