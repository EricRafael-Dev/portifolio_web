import React from "react";

const About = () => {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center gap-15 p-10 ">
      <div className="relative w-full h-[70%] flex flex-col gap-10 justify-around">
        <div className="font-[AvenirRoman] font-extrabold text-end text-7xl uppercase text-white/10 pointer-events-none">
          Sobre mim
        </div>
        <div className="text-2xl indent-5 flex flex-col gap-2 text-justify ">
          <p>
            Desenvolvedor Fullstack com mais de 2 anos de experiência
            na indústria.
          </p>
          <p>
            Crio sites, landing pages, SaaS, automações e envolventes que
            equilibram as necessidades dos usuários e os objetivos de negócios.
          </p>

          <p>
            Transformar dados e código em soluções reais e impactantes é o que
            me motiva.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
