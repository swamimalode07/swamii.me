"use client";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import ExperienceSection from "@/components/ExperianceSection";
import Heading from "@/components/Heading";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/ProjectsSection";
import Separator from "@/components/Separator";
import SkillsSection from "@/components/SkillsSection";
import React from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { useState } from "react";
import Taskbar from "@/components/Taskbar";
import Graph from "@/components/Graph";
import ProjectsRow from "@/components/ProjectsRow";
import { projects } from "@/helpers/constants";
import { Section } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const page = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div className="bg-black">
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <Container>
          
        <div className="w-full">
            <div className="text-white">
              <Navbar />
              <HeroSection />
              <SectionHeading title="Skills" />
              <SkillsSection />
              <SectionHeading title="Projects" />
                <ProjectsSection />
              <SectionHeading title="Experience" />
              <ExperienceSection
                logo="/conduit.png"
                title="Conduit Commerce"
                link="https://conduitcommerce.com/"
                type="Internship"
                highlights={[
                  "Contributing to the development of enterprise-grade frontend systems powering modern wholesale e-commerce.",
                  "Collaborating with the engineering team to build scalable, responsive UI components and optimize performance across the platform."
                ]}
                skills={["Javascript", "Next.js", "Tailwind CSS", "Redux"]}
              />
              <ExperienceSection
                color="orange-500"
                logo="/mach5.png"
                link="https://mach5.io/"
                title="Mach5 Software"
                type="Freelance"
                highlights={[
                  "Worked as a Frontend Developer, transforming Figma design into fully responsive, high-performance website ",
                  " Implemented core SEO features: lazy loading, WebP images, clean URLs, meta tags, Open Graph, and accessibility. ",
                  "Set up essential SEO infrastructure that includes robots.txt, dynamic sitemap.xml, and crawlable internal links.",
                ]}
                skills={["HTML", "Tailwind CSS", "SEO"]}
              />
               <SectionHeading title="Github Graph" />
               <Graph/> 
              <SectionHeading title="About Me" />
              <About />
              <ContactSection />
            </div>
        </div>
        </Container>
      )}
     {loading ||   <Taskbar />}
      
    </div>
  );
};

export default page;
