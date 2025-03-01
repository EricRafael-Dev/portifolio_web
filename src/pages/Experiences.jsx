import React from "react";

const Experiences = () => {
  return (
    <section id="experiences" className="flex h-screen w-screen flex-col items-center justify-center gap-15 p-10">
      <div className="relative grid max-h-[70%] w-full grid-rows-[auto_1fr] flex-col justify-around gap-[15vh]">
        <div className="relative font-[AvenirRoman] text-[5vh] font-extrabold text-white/50 uppercase">
          <div className="absolute top-[9vh] right-0 flex aspect-square h-[9vh] items-center justify-center rounded-2xl bg-[#27163f] text-center shadow-[-5px_5px_30px_0px] shadow-orange-500/40">
            <i className="bx bx-trip text-orange-500"></i>
          </div>
          Experiências
        </div>

        <div className="relative flex h-full flex-col overflow-y-hidden text-justify text-2xl">
          <div className="absolute top-2 left-2 h-full w-0.5 bg-gray-200"></div>

          <div className="relative h-full space-y-6 overflow-y-scroll px-5">
            <div className="relative flex flex-col gap-2 before:absolute before:top-2 before:left-[-1.15rem] before:h-3 before:w-3 before:rounded-full before:bg-orange-500 before:shadow-lg before:content-['']">
              <h4 className="font-semibold">Desenvolvedor Freelancer</h4>
              <p className="text-end text-xl font-semibold text-orange-500">
                2025 - Atualmente
              </p>
              <p className="text-xl">
                Desenvolvimento de landing pages, websites, automações
                utilizando React, Python.
              </p>
            </div>
            <div className="relative flex flex-col gap-2 before:absolute before:top-2 before:left-[-1.15rem] before:h-3 before:w-3 before:rounded-full before:bg-orange-500 before:shadow-lg before:content-['']">
              <h4 className="font-semibold">Projetos Pessoais</h4>
              <p className="text-end text-xl font-semibold text-orange-500">
                2025 - Atualmente
              </p>
              <p className="text-xl">
                Desenvolvimento de landing pages, websites, automações
                utilizando React, Python.
              </p>
            </div>

            <div className="relative flex flex-col gap-2 before:absolute before:top-2 before:left-[-1.15rem] before:h-3 before:w-3 before:rounded-full before:bg-orange-500 before:shadow-lg before:content-['']">
              <h4 className="font-semibold">Curso Driven - FullStack</h4>
              <p className="text-end text-xl font-semibold text-orange-500">
                2024 - Concluido
              </p>
              <p className="text-xl">
                Desenvolvimento de projetos individuais e em times para
                aprimoramento de habilidades e construção de portfólio.
              </p>
            </div>

            <div className="relative flex flex-col gap-2 before:absolute before:top-2 before:left-[-1.15rem] before:h-3 before:w-3 before:rounded-full before:bg-orange-500 before:shadow-lg before:content-['']">
              <h4 className="font-semibold">
                Faculdade Engenharia Eletronica e de Computação - UFRJ
              </h4>
              <p className="text-end text-xl font-semibold text-orange-500">
                2023 - Cursando
              </p>
              <p className="text-xl">
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
