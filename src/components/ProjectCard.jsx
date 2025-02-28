import React from "react";
import projectsData from "../assets/projects.json";

const ProjectCard = () => {
  const projects = projectsData.projects;
  const images = import.meta.glob("/src/assets/*.png", { eager: true });

  return projects.map((project, index) => (
    <div
      key={project.title}
      className="bg-[#27163f] h-full min-w-[75vw] rounded-2xl flex flex-col justify-between items-center shadow-2xl shadow-[#27163fa4] inset-shadow-sm inset-shadow-[#451883] transition-transform duration-300 hover:scale-105"
    >
      {/* Project Img */}
      <div className="relative overflow-hidden has-hover:[&_div]:flex has-hover:[&_img]:scale-110">
        <img
          className="object-contain rounded-t-3xl transition-transform duration-200"
          src={project.image}
          alt=""
        />
        <div className="absolute top-0 h-full w-full bg-gray-700/50 hidden rounded-t-3xl justify-center items-center">
          <a
            href={project.links.deploy}
            target="_blank"
            className="flex justify-center items-center cursor-pointer w-[40%] h-[20%] text-3xl font-bold border-3 border-white rounded-xl hover:bg-white hover:text-gray-700/50 transition-colors duration-200"
          >
            Ver
          </a>
        </div>
      </div>
      {/* Description */}
      <div className="flex flex-col px-8 py-5 gap-5 h-auto overflow-auto">
        {/* Title and Category */}
        <div className="flex flex-col text-center justify-between items-center">
          <h1 className="text-3xl font-[AvenirRoman] font-semibold">
            {project.title}
          </h1>
          <label className="text-2xl  text-orange-500">
            {project.category}
          </label>
        </div>
        <p className=" text-[24px] h-auto overflow-auto">
          {project.description}
        </p>
      </div>
      {/* Tools Used */}
      <div></div>
      {/* Github / See Deploy */}
      <div className="w-full px-10 py-7 flex justify-between">
        <a
          href={project.links.github}
          target="_blank"
          className="flex justify-center items-center border-2 border-orange-600 max-w-[25%] aspect-square rounded-2xl cursor-pointer text-orange-600 hover:text-white hover:bg-orange-600 transition-colors duration-200"
        >
          <i className="bx bxl-github bx-lg"></i>
        </a>
        <a
          href={project.links.deploy}
          target="_blank"
          className="flex justify-center items-center bg-orange-600 w-[70%] rounded-2xl text-2xl font-bold cursor-pointer hover:bg-orange-700 transition-colors duration-200"
        >
          Ver projeto
        </a>
      </div>
    </div>
  ));
};

export default ProjectCard;
