import React from 'react'
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center gap-15 p-10 ">
      <div className="relative w-full h-[70%] flex flex-col gap-10 justify-around">
        <div className="font-[AvenirRoman] font-extrabold text-7xl uppercase text-white/10 ">
          Projetos
        </div>
        <div className="flex gap-2">
          <ProjectCard />
        </div>
      </div>
    </section>
  );
}

export default Projects