import React from "react";
import gym_landing_page from "../assets/gym_landing_page.png";

const ProjectCard = () => {
  return (
    // Card
    <div className="bg-[#27163f] h-[650px] w-[500px] rounded-2xl flex flex-col justify-between items-center shadow-2xl shadow-[#27163fa4] inset-shadow-sm inset-shadow-[#451883] transition-transform duration-300 hover:scale-105">
      {/* Project Img */}
      <div className="relative h-[50%] overflow-hidden has-hover:[&_div]:flex has-hover:[&_img]:scale-110">
        <img
          className="object-contain rounded-t-3xl transition-transform duration-200"
          src={gym_landing_page}
          alt=""
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gray-700/50 hidden justify-center items-center">
          <a
            href="https://gymlp.vercel.app"
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
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-[AvenirRoman] font-semibold">
            Página de vendas
          </h1>
          <label className="text-2xl  text-orange-500">Landing-Page</label>
        </div>
        <p className=" text-[24px] h-auto overflow-auto">
          Essa landing page foi projetada para promover um kit gratuito que
          ajuda academias a enfrentar a sazonalidade e manter o faturamento
          mesmo em períodos de baixa demanda, como inverno e férias.
        </p>
      </div>
      {/* Tools Used */}
      <div></div>
      {/* Github / See Deploy */}
      <div className="w-full px-10 py-7 flex justify-between">
        <a
          href="https://github.com/EricRafael-Dev/landing-page_gym-pt-BR"
          target="_blank"
          className="flex justify-center items-center border-2 border-orange-600 w-[20%] aspect-square rounded-2xl cursor-pointer text-orange-600 hover:text-white hover:bg-orange-600 transition-colors duration-200"
        >
          <i className="bx bxl-github bx-lg"></i>
        </a>
        <a
          href="https://gymlp.vercel.app"
          target="_blank"
          className="flex justify-center items-center bg-orange-600 w-[70%] rounded-2xl text-2xl font-bold cursor-pointer hover:bg-orange-700 transition-colors duration-200"
        >
          Ver projeto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
