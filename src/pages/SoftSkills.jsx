import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const SoftSkills = () => {
  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#softskills",
        start: "30% center",
      },
    });

    tl.fromTo(
      "#softs",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "elastic.out(1,1)",
      },
    );
    let colortitle = gsap.timeline({
      scrollTrigger: {
        trigger: "#softskills",
        start: "30% center",
      },
    });
    colortitle
      .fromTo(
        "#softtitle",
        {
          color: "inherit",
        },
        {
          color: "#FF6900",
          y: -10,
          ease: "power1.in",
        },
      )

      .to("#softtitle", {
        color: "inherit",
        y: 0,
        delay: 2,
        ease: "power1.in",
      });
  }, []);

  const softSkills = [
    { name: "Comunicação assertiva", icon: "bxs-microphone" },
    { name: "Proativo", icon: "bxs-rocket" },
    { name: "Adaptabilidade", icon: "bx-sync" },
    { name: "Gestão de tempo", icon: "bxs-time-five" },
    { name: "Capacidade analítica", icon: "bxs-brain" },
    { name: "Resolução de problemas", icon: "bxs-wrench" },
  ];

  return (
    <section
      id="softskills"
      className="flex h-screen w-screen items-center gap-10 p-7"
    >
      <div className="relative flex h-[70%] w-full flex-col justify-evenly gap-10">
        <div className="flex flex-col items-center text-7xl text-[#444444]/50 transition-colors duration-200 dark:text-white/50">
          <div
            id="softtitle"
            className="text-center font-[AvenirRoman] text-[6vh] font-extrabold uppercase"
          >
            Skills Pessoais
          </div>
        </div>
        {/* Content */}
        <div className="[&_div]:p-5 grid h-[30dvh] grid-cols-2 gap-3 [&_div]:flex [&_div]:h-[8dvh] [&_div]:w-full [&_div]:items-center [&_div]:justify-evenly [&_div]:rounded-xl [&_div]:bg-[#2D2D34] [&_div]:transition-colors [&_div]:duration-200 [&_div]:hover:bg-slate-300 [&_div]:hover:text-[#2D2D34] dark:[&_div]:bg-[#27163f] dark:[&_div]:hover:bg-orange-500 dark:[&_div]:hover:text-[#27163f] [&_i]:text-[4vh] [&_div]:hover:[&_i]:text-[#2D2D34] dark:[&_div]:hover:[&_i]:text-[#27163f] [&_label]:text-center [&_label]:text-[2.5vh]">
          {softSkills.map((skill, index) => (
            <div key={index}>
              <i
                id="softs"
                className={`bx ${skill.icon} text-slate-300 dark:text-orange-500`}
              ></i>
              <label id="softs">{skill.name}</label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
