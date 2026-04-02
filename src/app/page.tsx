import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Graph from "@/components/Graph";
import SectionHeading from "@/components/SectionHeading";
import SkillSection from "@/components/SkillsSection/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection/Experience";
import SectionIndicator from "@/components/SectionIndicator/SectionIndicator";
import LoadingScreen from "@/components/InitialLoadShell";
import SponsorSection from "@/components/SponsorsSection/SponsorSection";

const page = () => {
  return (
    <LoadingScreen>
      <Container>
        {/* <div className="hidden md:block">
          <SectionIndicator />
        </div> */}
        <div className="w-full md:px-8">
          <div className="text-white">
            <Navbar />
            <section data-section-label="Hero section">
              <HeroSection />
            </section>
            <section data-section-label="Skills section">
              <SectionHeading title="Skills" />
              <SkillSection />
            </section>
            <section data-section-label="Projects section">
              <SectionHeading title="Projects" />
              <ProjectsSection />
            </section>
            <section data-section-label="Sponsors section">
              <SectionHeading title="Sponsors" />
              <SponsorSection />
            </section>
            <section data-section-label="Experience section">
              <SectionHeading title="Experience" />
              <ExperienceSection />
            </section>
            <section data-section-label="Github section">
              <SectionHeading title="Github Graph" />
              <Graph />
            </section>
            <section data-section-label="About section">
              <SectionHeading title="About Me" />
              <About />
            </section>
            <section data-section-label="Contact section">
              <ContactSection />
            </section>
          </div>
        </div>
      </Container>

    </LoadingScreen>
  );
};

export default page;