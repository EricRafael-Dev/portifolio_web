import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#aboutme",
        
        start: "top center",
      },
    });

    tl.fromTo(
      "#abouttitle",
      {
        x: 500,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.out",
      },
    ).fromTo(
      "#aboutdescription",
      {
        y: 100,
        opacity: 0
      },
      { y: 0, opacity: 1,
        duration: 3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#aboutme",
          scrub: true,
          start: "top center",
          end: "40% center"
        }, },
    );
  }, []);

  return (
    <section
      id="aboutme"
      className="flex h-screen w-screen flex-col items-center justify-center gap-15 p-10"
    >
      <div className="relative flex h-[70%] w-full flex-col justify-around gap-10">
        <div
          id="abouttitle"
          className="pointer-events-none text-end font-[AvenirRoman] text-[7vh] font-extrabold text-white/50 uppercase"
        >
          Sobre mim
        </div>
        <div
          id="aboutdescription"
          className="flex flex-col gap-2 text-justify indent-5 text-2xl"
        >
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
