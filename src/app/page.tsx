import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import LoadingSCreen from "@/components/InitialLoadShell";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Graph from "@/components/Graph";
import SectionHeading from "@/components/SectionHeading";
import SkillSection from "@/components/SkillsSection/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection/Experience";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <LoadingSCreen>

      <Container>
        <div className="w-full md:px-8">
          <div className="text-white">
            <Navbar />
            <HeroSection />
            <SectionHeading title="Skills" />
            <SkillSection />
            <SectionHeading title="Projects" />
            <ProjectsSection />
            <SectionHeading title="Experience" />
            <ExperienceSection />
            <SectionHeading title="Github Graph" />
            <Graph />
            <SectionHeading title="About Me" />
            <About />
            <ContactSection />
          </div>
        </div>
      </Container>

    </LoadingSCreen>
  );
};

export default page;