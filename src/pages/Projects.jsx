import React from 'react'
import ProjectCard from '../components/ProjectCard';
import { ArrowLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center gap-15 ">
      <div className="relative w-full h-[90%] flex flex-col gap-10 justify-around">
        <div className="font-[AvenirRoman] font-extrabold text-7xl uppercase text-white/10 p-10 ">
          Projetos
        </div>
        <div className="relative flex h-full gap-10 p-10 overflow-x-auto scrollbar-hide">
          <ProjectCard />
          
        </div>
      </div>
    </section>
  );
}

export default Projects