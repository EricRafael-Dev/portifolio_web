import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Experiences = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: { trigger: "#experiences", start: "20% center" },
    });

    tl.from("#time", {
      x: 200,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1,1)",
      stagger: 1,
    }).from("#experience", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "elastic.out(1,1)",
      delay: .5,
      stagger: 1,
    }, 0);
  });
  return (
    <section
      id="experiences"
      className="h-screen w-screen p-10 py-20 [&_*]:transition-colors [&_*]:duration-200"
    >
      <div className="relative grid max-h-full w-full grid-rows-[auto_1fr] gap-[15vh]">
        <div className="relative font-[AvenirRoman] text-[5vh] font-extrabold text-[#444444]/50 uppercase transition-colors duration-200 dark:text-white/50">
          <div className="absolute top-[9vh] right-0 flex aspect-square h-[9vh] items-center justify-center rounded-2xl bg-[#27163f] text-center shadow-[-5px_5px_30px_0px] shadow-slate-300 dark:shadow-orange-500/40">
            <i className="bx bx-trip text-slate-300 dark:text-orange-500"></i>
          </div>
          Experiências
        </div>

        <div className="relative flex h-full flex-col overflow-y-hidden text-justify text-2xl text-[#111111] dark:text-white">
          <div className="absolute top-2 left-2 h-full w-0.5 bg-[#2D2D34] transition-colors duration-200 dark:bg-gray-200"></div>

          <div className="relative flex h-full flex-col gap-10 space-y-6 overflow-x-hidden overflow-y-scroll px-10">
            <div className="relative flex flex-col gap-3 before:absolute before:top-7 before:left-[-35px] before:h-[1vh] before:w-[1vh] before:rounded-full before:bg-orange-500 before:shadow-lg before:content-['']">
              <h4 className="text-[3vh] font-semibold">
                Desenvolvedor Freelancer
              </h4>
              <p
                id="time"
                className="text-end text-[2.5vh] font-semibold text-orange-500"
              >
                2025 - Atualmente
              </p>
              <p id="experience" className="text-[2.5vh]">
                Desenvolvimento de landing pages, websites, automações
                utilizando React, Python.
              </p>
            </div>

            <div className="relative flex flex-col gap-3 before:absolute before:top-7 before:left-[-35px] before:h-[1vh] before:w-[1vh] before:rounded-full before:bg-orange-500 before:shadow-lg before:content-['']">
              <h4 className="text-[3vh] font-semibold">Projetos Pessoais</h4>
              <p
                id="time"
                className="text-end text-[2.3vh] font-semibold text-orange-500"
              >
                2025 - Atualmente
              </p>
              <p id="experience" className="text-[2.3vh]">
                Desenvolvimento de landing pages, websites, automações
                utilizando React, Python.
              </p>
            </div>

            <div className="relative flex flex-col gap-3 before:absolute before:top-7 before:left-[-35px] before:h-[1vh] before:w-[1vh] before:rounded-full before:bg-orange-500 before:shadow-lg before:content-['']">
              <h4 className="text-[3vh] font-semibold">
                Curso Driven - FullStack
              </h4>
              <p
                id="time"
                className="text-end text-[2.3vh] font-semibold text-orange-500"
              >
                2024 - Concluido
              </p>
              <p id="experience" className="text-[2.3vh]">
                Desenvolvimento de projetos individuais e em times para
                aprimoramento de habilidades e construção de portfólio.
              </p>
            </div>

            <div className="relative flex flex-col gap-3 before:absolute before:top-7 before:left-[-35px] before:h-[1vh] before:w-[1vh] before:rounded-full before:bg-orange-500 before:shadow-lg before:content-['']">
              <h4 className="text-[3vh] font-semibold">
                Faculdade Engenharia Eletronica e de Computação - UFRJ
              </h4>
              <p
                id="time"
                className="text-end text-[2.3vh] font-semibold text-orange-500"
              >
                2023 - Cursando
              </p>
              <p id="experience" className="text-[2.3vh]">
                Início da caminhada como auto-didata [Python, JavaScript]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
