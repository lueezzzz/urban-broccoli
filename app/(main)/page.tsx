import Experience from "@/components/sections/experience";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import RecentHappenings from "@/components/sections/recent-happenings";
import TopBar from "@/components/sections/topbar";

export default function Home() {
  return (
    <>
      <TopBar />
      <Hero />
      <Experience />
      <Projects />
      <RecentHappenings />
    </>
  );
}
