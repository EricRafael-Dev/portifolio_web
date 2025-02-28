import React from "react";
import projectsData from "../assets/projects.json";

const ProjectCard = () => {
  const projects = projectsData.projects;
  const images = import.meta.glob("/src/assets/*.png", { eager: true });

  return projects.map((project, index) => (
    <div
      key={index}
      className="flex h-full min-w-[90%] flex-col items-center justify-between rounded-2xl bg-[#27163f] shadow-2xl inset-shadow-sm shadow-[#27163fa4] inset-shadow-[#451883] transition-transform duration-300 hover:scale-105"
    >
      {/* Project Img */}
      <div className="relative overflow-hidden has-hover:rounded-t-3xl has-hover:[&_div]:flex has-hover:[&_img]:scale-110">
        <img
          className="rounded-t-3xl object-cover transition-transform duration-200"
          src={project.image}
          alt=""
        />
        <div className="absolute top-0 hidden h-full w-full items-center justify-center rounded-t-3xl bg-gray-700/50">
          <a
            href={project.links.deploy}
            target="_blank"
            className="flex h-[20%] w-[40%] cursor-pointer items-center justify-center rounded-xl border-3 border-white text-3xl font-bold transition-colors duration-200 hover:bg-white hover:text-gray-700/50"
          >
            Ver
          </a>
        </div>
      </div>
      {/* Description */}
      <div className="flex h-auto flex-col gap-5 overflow-auto px-8 py-5">
        {/* Title and Category */}
        <div className="flex flex-col items-center justify-between text-center">
          <h1 className="font-[AvenirRoman] text-3xl font-semibold">
            {project.title}
          </h1>
          <label className="text-2xl text-orange-500">{project.category}</label>
        </div>
        <p className="h-auto overflow-auto text-[24px]">
          {project.description}
        </p>
      </div>
      {/* Tools Used */}
      <div></div>
      {/* Github / See Deploy */}
      <div className="flex w-full justify-between px-10 py-7">
        <a
          href={project.links.github}
          target="_blank"
          className="flex aspect-square max-w-[25%] cursor-pointer items-center justify-center rounded-2xl border-2 border-orange-600 text-orange-600 transition-colors duration-200 hover:bg-orange-600 hover:text-white"
        >
          <i className="bx bxl-github bx-lg"></i>
        </a>
        <a
          href={project.links.deploy}
          target="_blank"
          className="flex w-[70%] cursor-pointer items-center justify-center rounded-2xl bg-orange-600 text-2xl font-bold transition-colors duration-200 hover:bg-orange-700"
        >
          Ver projeto
        </a>
      </div>
    </div>
  ));
};

export default ProjectCard;
