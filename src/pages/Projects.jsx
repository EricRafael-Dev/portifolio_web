import React from "react";
import ProjectCard from "../components/ProjectCard";
import { ArrowLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center gap-15">
      <div className="relative flex h-[90%] w-full flex-col justify-around gap-10">
        <div className="p-10 font-[AvenirRoman] text-[7vh] font-extrabold text-white/10 uppercase">
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
