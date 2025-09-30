import Image from "next/image";
import CaseStudies from "../../components/CaseStudyHomePage";
import SkillsHomePage from "../../components/SkillsHomePage";
import Hero from "../../components/SplashHomePage";

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
