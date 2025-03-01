import React from "react";
import ProjectCard from "../components/ProjectCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useGSAP(() => {
      gsap.fromTo(
        "#projecttitle",
        { x: "-100vw", opacity: 0 },
        { x: 0, opacity: 1, duration: 1,  scrollTrigger: {
        trigger: "#projects",
        start: "top center",
      }, },
      )
      
  }, []);

  return (
    <section
      id="projects"
      className="flex h-screen w-screen flex-col items-center justify-center gap-15"
    >
      <div className="relative flex h-[90%] w-full flex-col justify-around gap-10">
        <div
          id="projecttitle"
          className="p-10 font-[AvenirRoman] text-[7vh] font-extrabold text-white/50 uppercase"
        >
          Projetos
        </div>
        <div className="scrollbar-hide relative flex h-full gap-10 overflow-x-auto p-10">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
};

export default Projects;
