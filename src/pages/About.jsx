import React from "react";

const About = () => {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center gap-15 p-10">
      <div className="relative flex h-[70%] w-full flex-col justify-around gap-10">
        <div className="pointer-events-none text-end font-[AvenirRoman] text-[7vh] font-extrabold text-white/10 uppercase">
          Sobre mim
        </div>
        <div className="flex flex-col gap-2 text-justify indent-5 text-2xl">
          <p>
            Desenvolvedor Fullstack com mais de 2 anos de experiência na
            indústria.
          </p>
          <p>
            Crio sites, landing pages, SaaS, automações que equilibram as
            necessidades dos usuários e os objetivos de negócios.
          </p>

          <p>Transformar dados e código em soluções reais é o que me motiva.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
