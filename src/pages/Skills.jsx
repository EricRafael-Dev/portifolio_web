import React from "react";

const Skills = () => {
  return (
    <section className="flex h-screen w-screen flex-col items-center gap-15 p-10">
      <div className="relative flex h-[70%] w-full flex-col justify-between gap-10">
        <div className="flex flex-col text-[6vh]">
          <i className="bx bx-code text-start text-orange-500/50"></i>
          <div className="text-center font-[AvenirRoman] text-[6vh] font-extrabold text-white/50 uppercase">
            Skills Técnicas
          </div>
          <i className="bx bx-code-alt text-end text-orange-500/50"></i>
        </div>
        {/* Content */}
        <div className="grid grid-cols-2 gap-5 h-[30dvh] [&_a]:flex [&_a]:h-[6dvh] [&_a]:w-full [&_a]:items-center [&_a]:justify-evenly [&_a]:rounded-xl [&_a]:bg-[#27163f] [&_a]:transition-colors [&_a]:duration-200 [&_a]:hover:bg-orange-500 [&_a]:hover:text-[#27163f] [&_a]:hover:[&_i]:text-[#27163f] [&_label]:cursor-pointer [&_label]:text-xl">
          <a href="https://react.dev/" target="_blank">
            <i className="bx bxl-react text-2xl text-blue-500"></i>
            <label>React</label>
          </a>
          <a href="https://nodejs.org/" target="_blank">
            <i className="bx bxl-nodejs text-2xl text-green-700"></i>
            <label>NodeJS</label>
          </a>
          <a href="https://vitejs.dev/" target="_blank">
            <img src="./vite.svg" className="h-6"></img>
            <label>Vite</label>
          </a>
          <a href="https://tailwindcss.com/" target="_blank">
            <i className="bx bxl-tailwind-css text-2xl text-blue-500"></i>
            <label>Tailwind CSS</label>
          </a>
          <a href="https://www.mongodb.com/" target="_blank">
            <i className="bx bxl-mongodb text-2xl text-green-800"></i>
            <label>MongoDB</label>
          </a>
          <a href="https://www.python.org/" target="_blank">
            <i className="bx bxl-python text-2xl text-gray-700"></i>
            <label>Python</label>
          </a>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex aspect-square w-10 items-center justify-center rounded-xl bg-[#27163f]">
            <i className="bx bx-wrench text-orange-500"></i>
          </div>
          <h2 className="text-3xl text-white/50">Ferramentas</h2>
        </div>

        <div className="grid grid-cols-2 gap-5 h-[30dvh] [&_a]:flex [&_a]:h-[6dvh] [&_a]:w-full [&_a]:items-center [&_a]:justify-evenly [&_a]:rounded-xl [&_a]:bg-[#27163f] [&_a]:transition-colors [&_a]:duration-200 [&_a]:hover:bg-orange-500 [&_a]:hover:text-[#27163f] [&_a]:hover:[&_i]:text-[#27163f] [&_label]:cursor-pointer [&_label]:text-xl">
          <a href="https://github.com/" target="_blank">
            <i className="bx bxl-github text-2xl text-blue-500"></i>
            <label>GitHub</label>
          </a>
          <a href="https://git-scm.com/" target="_blank">
            <i className="bx bxl-git text-2xl text-green-700"></i>
            <label>Git</label>
          </a>

          <a href="https://www.figma.com/" target="_blank">
            <i className="bx bxl-figma text-2xl text-blue-500"></i>
            <label>Figma</label>
          </a>
          <a href="https://vercel.com/" target="_blank">
            <i className="bx bx-send text-2xl text-green-800"></i>
            <label>Vercel</label>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
