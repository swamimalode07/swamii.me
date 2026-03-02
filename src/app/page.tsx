"use client";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Experience from "@/components/ExperienceSection/Experience";
import Heading from "@/components/Heading";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Separator from "@/components/Separator";
import SkillsSection from "@/components/SkillsSection";
import React, { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Taskbar from "@/components/Taskbar/Taskbar";
import Graph from "@/components/Graph";
import ProjectsRow from "@/components/ProjectsRow";
import { projects } from "@/helpers/constants";
import SectionHeading from "@/components/SectionHeading";
import SkillSection from "@/components/SkillsSection/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection/Experience";

const page = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-black">
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}

      <Container>
        <div className="w-full">
          <div className="text-white">
            <Navbar />
            <HeroSection />
            <SectionHeading title="Skills" />
            <SkillSection/>
            <SectionHeading title="Projects" />
            <ProjectsSection />
            <SectionHeading title="Experience" />
            <ExperienceSection/>
            <SectionHeading title="Github Graph" />
            <Graph />
            <SectionHeading title="About Me" />
            <About />
            <ContactSection />
          </div>
        </div>
      </Container>

      {!loading && <Taskbar />}
    </div>
  );
};

export default page;