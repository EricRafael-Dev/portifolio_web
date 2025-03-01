import React from "react";

const SoftSkills = () => {
  const softSkills = [
    { name: "Comunicação assertiva", icon: "bxs-microphone" },
    { name: "Proativo", icon: "bxs-rocket" },
    { name: "Adaptabilidade", icon: "bx-sync" },
    { name: "Gestão de tempo", icon: "bxs-time-five" },
    { name: "Capacidade analítica", icon: "bxs-brain" },
    { name: "Resolução de problemas", icon: "bxs-wrench" },
  ];

  return (
    <section id="softskills" className="flex h-screen w-screen items-center gap-10 p-7">
      <div className="relative flex h-[70%] w-full flex-col justify-between gap-10">
        <div className="flex flex-col items-center text-7xl">
          <div className="text-center font-[AvenirRoman] text-[6vh] font-extrabold text-white/50 uppercase">
            Skills Pessoais
          </div>
        </div>
        {/* Content */}
        <div className="grid h-[30dvh] grid-cols-2 gap-3 [&_div]:flex [&_div]:h-[8dvh] [&_div]:w-full [&_div]:items-center [&_div]:justify-evenly [&_div]:rounded-xl [&_div]:bg-[#27163f] [&_div]:transition-colors [&_div]:duration-200 [&_div]:hover:bg-orange-500 [&_div]:hover:text-[#27163f] [&_div]:hover:[&_i]:text-[#27163f] [&_label]:text-center [&_label]:text-[16px]">
          {softSkills.map((skill, index) => (
            <div key={index}>
              <i className={`bx ${skill.icon} text-2xl text-orange-500`}></i>
              <label>{skill.name}</label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
