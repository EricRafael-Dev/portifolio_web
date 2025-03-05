import React from "react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(useGSAP);

const Skills = () => {
  useGSAP(() => {
    // gsap.set("#rect1", {
    //   xPercent: -50,
    //   yPercent: -50,
    //   transformOrigin: "50% 50%",
    // });
    // gsap.set("#rect2", {
    //   xPercent: -50,
    //   yPercent: -50,
    //   transformOrigin: "50% 50%",
    // });
    // gsap.set("#rect3", {
    //   xPercent: -50,
    //   yPercent: -50,
    //   transformOrigin: "50% 50%",
    // });
    // gsap.set("#rect4", {
    //   xPercent: -50,
    //   yPercent: -50,
    //   transformOrigin: "50% 50%",
    // });
    // gsap.set("#rect5", {
    //   xPercent: -50,
    //   yPercent: -50,
    //   transformOrigin: "50% 50%",
    // });
    // gsap.set("#rect6", {
    //   xPercent: -50,
    //   yPercent: -50,
    //   transformOrigin: "50% 50%",
    // });

    let tl1 = gsap.timeline();
    let tl2 = gsap.timeline();

    tl2
      .to("#react", {
        backgroundColor: "#ff6900",
        textColor: "#27163f",
        ease: "power1.out",
        duration: 1.5,
        delay: 0.5,
      })
      .to("#react", {
        backgroundColor: "",
        color: "",
        ease: "power1.out",
        delay: 0.5,
      })
      .to("#nodejs", {
        backgroundColor: "#ff6900",
        color: "#27163f",
        duration: 1.5,
        delay: 0.5,
      })
      .to("#nodejs", {
        backgroundColor: "",
        color: "",
        delay: 0.5,
      })
      .to("#vite", {
        backgroundColor: "#ff6900",
        color: "#27163f",
        duration: 1.2,
        delay: 0.8,
      })
      .to("#vite", {
        backgroundColor: "",
        color: "",
        delay: 0.4,
      })
      .to("#tailwind", {
        backgroundColor: "#ff6900",
        color: "#27163f",
        duration: 1.2,
        delay: 0.8,
      })
      .to("#tailwind", {
        backgroundColor: "",
        color: "",
        delay: 0.4,
      })
      .to("#mongodb", {
        backgroundColor: "#ff6900",
        color: "#27163f",
        duration: 1,
        delay: 1,
      })
      .to("#mongodb", {
        backgroundColor: "",
        color: "",
        delay: 0.3,
      })
      .to("#python", {
        backgroundColor: "#ff6900",
        color: "#27163f",
        duration: 1,
        delay: 1,
      })
      .to("#python", {
        backgroundColor: "",
        color: "",
        delay: 0.3,
      });

    tl1
      .fromTo(
        "#rect1",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          ease: "power1.inOut",
          motionPath: { path: "#path1" },
        },
      )
      .to("#rect1", { opacity: 0 })
      .fromTo(
        "#rect2",
        { opacity: 0 },
        {
          opacity: 1,
          delay: 0.5,
          duration: 2,
          ease: "power1.inOut",
          motionPath: { path: "#path2" },
        },
      )
      .to("#rect2", { opacity: 0 })
      .fromTo(
        "#rect3",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 2,
          delay: 0.4,
          ease: "power1.inOut",
          motionPath: { path: "#path3" },
        },
      )
      .to("#rect3", { opacity: 0 })
      .fromTo(
        "#rect4",
        { opacity: 0 },
        {
          opacity: 1,
          delay: 0.4,
          duration: 2,
          ease: "power1.inOut",
          motionPath: { path: "#path4" },
        },
      )
      .to("#rect4", { opacity: 0 })
      .fromTo(
        "#rect5",
        { opacity: 0 },
        {
          opacity: 1,
          delay: 0.3,
          duration: 2,
          ease: "power1.inOut",
          motionPath: { path: "#path5" },
        },
      )
      .to("#rect5", { opacity: 0 })
      .fromTo(
        "#rect6",
        { opacity: 0 },
        {
          opacity: 1,
          delay: 0.3,
          duration: 2,
          ease: "power1.inOut",
          motionPath: { path: "#path6" },
        },
      )
      .to("#rect6", { opacity: 0 });
  });
  return (
    <section
      id="skills"
      className="flex h-screen w-screen flex-col items-center p-10"
    >
      <div className="relative flex h-full w-full flex-col justify-between">
        <div className="flex flex-col text-[6vh]">
          <i className="bx bx-code text-start text-orange-500/50"></i>
          <div className="text-center font-[AvenirRoman] text-[6vh] font-extrabold text-white/50 uppercase">
            Skills Técnicas
          </div>
          <i className="bx bx-code-alt text-end text-orange-500/50"></i>
        </div>

        <div className="absolute top-[33vh] left-[39vw] z-0 flex items-center justify-center">
          <div
            id="rect1"
            className="rounded-full bg-orange-500 shadow-[0px_0px_30px_20px] shadow-orange-500"
          ></div>
          <div
            id="rect2"
            className="rounded-full bg-orange-500 shadow-[0px_0px_30px_20px] shadow-orange-500"
          ></div>
          <div
            id="rect3"
            className="rounded-full bg-orange-500 shadow-[0px_0px_30px_20px] shadow-orange-500"
          ></div>
          <div
            id="rect4"
            className="rounded-full bg-orange-500 shadow-[0px_0px_30px_20px] shadow-orange-500"
          ></div>
          <div
            id="rect5"
            className="rounded-full bg-orange-500 shadow-[0px_0px_30px_20px] shadow-orange-500"
          ></div>
          <div
            id="rect6"
            className="rounded-full bg-orange-500 shadow-[0px_0px_30px_20px] shadow-orange-500"
          ></div>
          <svg height="32" version="1.1" width="10" className="hidden">
            <path id="path1" d="M0 -150C0 80 0 80-45 80" />
            <path id="path2" d="M0 -150C0 80 0 80 55 80" />
            <path id="path3" d="M0 -150C0 160 0 160-45 160" />
            <path id="path4" d="M0 -150C0 160 0 160 55 160" />
            <path id="path5" d="M0 -150C0 230 0 230-45 230" />
            <path id="path6" d="M0 -150C0 230 0 230 55 230" />
          </svg>
        </div>

        {/* Content */}
        <div className="mt-10 py-10 backdrop-blur-md">
          <div className="[&_a]:bg-[] relative z-1 grid h-full grid-cols-2 gap-5 [&_a]:flex [&_a]:h-[6dvh] [&_a]:w-full [&_a]:items-center [&_a]:justify-evenly [&_a]:rounded-xl [&_a]:bg-[#27163f] [&_a]:transition-colors [&_a]:duration-200 [&_a]:hover:bg-orange-500 [&_a]:hover:text-[#27163f] [&_a]:hover:[&_i]:text-[#27163f] [&_label]:cursor-pointer [&_label]:text-xl">
            <a id="react" href="https://react.dev/" target="_blank">
              <i className="bx bxl-react text-2xl text-blue-500"></i>
              <label>React</label>
            </a>
            <a id="nodejs" href="https://nodejs.org/" target="_blank">
              <i className="bx bxl-nodejs text-2xl text-green-700"></i>
              <label>NodeJS</label>
            </a>
            <a id="vite" href="https://vitejs.dev/" target="_blank">
              <img src="./vite.svg" className="h-6"></img>
              <label>Vite</label>
            </a>
            <a id="tailwind" href="https://tailwindcss.com/" target="_blank">
              <i className="bx bxl-tailwind-css text-2xl text-blue-500"></i>
              <label>Tailwind CSS</label>
            </a>
            <a id="mongodb" href="https://www.mongodb.com/" target="_blank">
              <i className="bx bxl-mongodb text-2xl text-green-800"></i>
              <label>MongoDB</label>
            </a>
            <a id="python" href="https://www.python.org/" target="_blank">
              <i className="bx bxl-python text-2xl text-gray-700"></i>
              <label>Python</label>
            </a>
          </div>
        </div>

        <div className="my-10 flex items-center gap-5">
          <div className="flex aspect-square w-10 items-center justify-center rounded-xl bg-[#27163f]">
            <i className="bx bx-wrench text-orange-500"></i>
          </div>
          <h2 className="text-3xl text-white/50">Ferramentas</h2>
        </div>

        <div className="grid h-[30dvh] grid-cols-2 gap-5 [&_a]:flex [&_a]:h-[6dvh] [&_a]:w-full [&_a]:items-center [&_a]:justify-evenly [&_a]:rounded-xl [&_a]:bg-[#27163f] [&_a]:transition-colors [&_a]:duration-200 [&_a]:hover:bg-orange-500 [&_a]:hover:text-[#27163f] [&_a]:hover:[&_i]:text-[#27163f] [&_label]:cursor-pointer [&_label]:text-xl">
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
