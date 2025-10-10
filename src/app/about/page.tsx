import AboutHero from "../../../components/About/1-hero"; 
import TimelineAbout from "../../../components/About/2-timeline";
import Three from "../../../components/About/3";


export default function AboutPage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <AboutHero />
      <TimelineAbout />
      <Three />
    </main>
  );
}
