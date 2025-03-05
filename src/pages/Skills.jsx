import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: { trigger: "#skills", start: "20% center" },
    });

    tl.from(
      "#skill",
      {
        scale: 2,
        x: -400,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(0.8,1)",
        stagger: 1,
      },
      0.2,
    )
      .from(
        "#skill2",
        {
          scale: 2,
          x: 400,
          opacity: 0,
          duration: 1.2,
          ease: "elastic.out(0.8,1)",
          delay: 0.5,
          stagger: 1,
        },
        0.2,
      )
      .from(
        "#tools",
        {
          scale: 2,
          x: -400,
          y: 100,
          opacity: 0,
          duration: 1,
          delay: 0,
          ease: "elastic.out(1,1)",
          stagger: 2,
        },
        0.2,
      )
      .from(
        "#tools2",
        {
          scale: 2,
          x: 400,
          y: 100,
          opacity: 0,
          duration: 1,
          delay: 1,
          ease: "elastic.out(1,1)",
          stagger: 2,
        },
        0.2,
      );
  });
  return (
    <section
      id="skills"
      className="flex h-screen w-screen flex-col items-center p-10"
    >
      <div className="relative flex h-full w-full flex-col justify-between gap-10">
        <div className="flex flex-col text-[6vh]">
          <i className="bx bx-code text-start text-orange-500/50"></i>
          <div className="text-center font-[AvenirRoman] text-[6vh] font-extrabold text-white/50 uppercase">
            Skills Técnicas
          </div>
          <i className="bx bx-code-alt text-end text-orange-500/50"></i>
        </div>

        {/* Content */}
        <div className="[&_i]:text-[4vh] relative z-1 grid h-full grid-cols-2 gap-5 text-[2.5vh]  [&_a]:flex [&_a]:h-[6dvh] [&_a]:w-full [&_a]:items-center [&_a]:justify-evenly [&_a]:rounded-xl [&_a]:bg-[#27163f] [&_a]:transition-colors [&_a]:duration-200 [&_a]:hover:bg-orange-500 [&_a]:hover:text-[#27163f] [&_a]:hover:[&_i]:text-[#27163f] [&_label]:cursor-pointer">
          <a id="skill" href="https://react.dev/" target="_blank">
            <i className="bx bxl-react text-blue-500"></i>
            <label>React</label>
          </a>
          <a id="skill2" href="https://nodejs.org/" target="_blank">
            <i className="bx bxl-nodejs text-green-700"></i>
            <label>NodeJS</label>
          </a>
          <a id="skill" href="https://vitejs.dev/" target="_blank">
            <img src="./vite.svg" className="h-[4vh]"></img>
            <label>Vite</label>
          </a>
          <a id="skill2" href="https://tailwindcss.com/" target="_blank">
            <i className="bx bxl-tailwind-css text-blue-500"></i>
            <label>Tailwind CSS</label>
          </a>
          <a id="skill" href="https://www.mongodb.com/" target="_blank">
            <i className="bx bxl-mongodb text-green-800"></i>
            <label>MongoDB</label>
          </a>
          <a id="skill2" href="https://www.python.org/" target="_blank">
            <i className="bx bxl-python text-gray-700"></i>
            <label>Python</label>
          </a>
        </div>

        <div className="my-10 flex items-center gap-5 text-[3vh]">
          <div className="flex aspect-square w-[10vw] items-center justify-center rounded-xl bg-[#27163f]">
            <i className="bx bx-wrench text-orange-500"></i>
          </div>
          <h2 className="text-white/50">Ferramentas</h2>
        </div>

        <div className="grid h-[30dvh] grid-cols-2 gap-5 text-[2.5vh] [&_a]:flex [&_a]:h-[6dvh] [&_a]:w-full [&_a]:items-center [&_a]:justify-evenly [&_a]:rounded-xl [&_a]:bg-[#27163f] [&_a]:transition-colors [&_a]:duration-200 [&_a]:hover:bg-orange-500 [&_a]:hover:text-[#27163f] [&_a]:hover:[&_i]:text-[#27163f] [&_label]:cursor-pointer">
          <a id="tools" href="https://github.com/" target="_blank">
            <i className="bx bxl-github text-blue-500"></i>
            <label>GitHub</label>
          </a>
          <a id="tools2" href="https://git-scm.com/" target="_blank">
            <i className="bx bxl-git text-green-700"></i>
            <label>Git</label>
          </a>

          <a id="tools" href="https://www.figma.com/" target="_blank">
            <i className="bx bxl-figma text-blue-500"></i>
            <label>Figma</label>
          </a>
          <a id="tools2" href="https://vercel.com/" target="_blank">
            <i className="bx bx-send text-green-800"></i>
            <label>Vercel</label>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
