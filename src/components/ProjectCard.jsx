import React from "react";
import projectsData from "../assets/projects.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const ProjectCard = () => {
  const projects = projectsData.projects;
  useGSAP(() => {
    gsap.fromTo(
      ".projectcard",
      { y: "10vh", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        delay: 1,
        duration: 1,
        stagger: 0.5,
        ease: "elastic.out(1,1)",
        scrollTrigger: {
          trigger: "#projects",
          start: "top center",
        },
      },
    );
  }, []); 
  return projects.map((project, index) => (
    <div key={index} className="projectcard h-full min-w-[90%]">
      <div className="flex h-full min-w-full flex-col items-center justify-between rounded-2xl border-2 border-[#FF6900] shadow-lg shadow-[#27163fa4] transition-transform duration-300 hover:scale-105 dark:bg-[#27163f]">
        {/* Project Img */}
        <div className="relative overflow-hidden has-hover:rounded-t-2xl has-hover:[&_div]:flex has-hover:[&_img]:scale-110">
          <img
            className="rounded-t-2xl object-cover transition-transform duration-200"
            src={project.image}
            alt=""
          />
          <div className="absolute top-0 hidden h-full w-full items-center justify-center rounded-t-2xl bg-gray-700/50">
            <a
              href={project.links.deploy}
              target="_blank"
              className="flex h-[20%] w-[40%] text-white cursor-pointer items-center justify-center rounded-2xl border-3 border-white text-3xl font-bold transition-colors duration-200 hover:bg-white hover:text-gray-700/50"
            >
              Ver
            </a>
          </div>
        </div>
        {/* Description */}
        <div className="flex h-auto flex-col gap-5 overflow-auto px-8 py-5">
          {/* Title and Category */}
          <div className="flex flex-col items-center justify-between text-center">
            <h1 className="font-[AvenirRoman] text-[3vh] font-semibold">
              {project.title}
            </h1>
            <label className="text-[2.5vh] text-[#FF6900] transition-colors duration-200 dark:text-orange-500">
              {project.category}
            </label>
          </div>
          <p className="h-auto overflow-auto text-[2.5vh]">
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
            <i className="bx bxl-github text-[5vh]"></i>
          </a>
          <a
            href={project.links.deploy}
            target="_blank"
            className="flex w-[70%] cursor-pointer items-center justify-center rounded-2xl bg-[#FF6900] text-white text-[2.6vh] font-bold transition-colors duration-200 hover:bg-orange-700 dark:bg-orange-600"
          >
            Ver projeto
          </a>
        </div>
      </div>
    </div>
  ));
};

export default ProjectCard;
