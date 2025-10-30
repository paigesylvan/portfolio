
import CaseStudies from "../../components/Homepage/CaseStudy";
import SkillsHomePage from "../../components/Homepage/Skills";
import Hero from "../../components/Homepage/Splash";
import HomeAbout from "../../components/Homepage/About";

export default function Home() {
  return (
    <main className="h-screen grid place-items-center text-white snap-page relative min-h-screen-fix bg-black pt-safe pb-safe overflow-hidden">
      <div className="">
        <Hero />
        <HomeAbout />
        <SkillsHomePage />
        <CaseStudies />
      </div>
      

    </main>
  );
}
