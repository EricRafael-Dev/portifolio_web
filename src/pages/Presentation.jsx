import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
const Presentation = () => {

  useGSAP(() => {
    gsap.from("#me", { x: "-100vh", duration: 1, delay:1, ease: "elastic.out(1,1)" });
    let tl = gsap.timeline({delay:1.2});
    tl.from("#name", { y: 50, opacity: 0, duration: 1, ease: "power1.out" })
      .from(
        "#name2",
        { y: 30, opacity: 0, duration: 0.5, ease: "power1.out" },
        0.5,
      )
      .from(
        "#feature",
        {
          scale: 2,
          rotate: 480,
          opacity: 0,
          duration: 1,
          delay: .5,
          ease: "elastic.out(1,1)",
          stagger: 0.2,
        },
        0.2,
      );
  }, []);

  return (
    <section
      id="presentation"
      className="mt-[20dvh] flex h-screen w-screen flex-col items-center justify-center gap-1 px-8"
    >
      <div
        id="me"
        className="mb-5 flex w-full flex-col items-center justify-center"
      >
        <img src="https://placehold.co/400x600" />
        <div className="w-[90%] rounded-full border border-gray-200/50"></div>
      </div>
      <div>
        <h1 id="name" className="font-[AvenirRoman] text-[10vh] font-bold">
          Eric Rafael
        </h1>
      </div>
      <div className="flex flex-col items-center gap-6">
        <h2 id="name2" className="text-[7vh]">
          Full Stack Developer
        </h2>

        <div className="bx-sm flex flex-wrap justify-center gap-5 text-[5vh]">
          <div
            id="feature"
            className="flex items-center gap-2 rounded-full bg-gray-200/90 px-4 py-1 text-gray-700"
          >
            <i className="bx bxl-react text-blue-500"></i>
            <label className="">React</label>
          </div>

          <div
            id="feature"
            className="flex items-center gap-2 rounded-full bg-gray-200/90 px-4 py-1] text-gray-700"
          >
            <i className="bx bxl-nodejs text-green-700"></i>
            <label className="">NodeJS</label>
          </div>

          <div
            id="feature"
            className="flex items-center gap-2 rounded-full bg-gray-200/90 px-4 py-1 text-gray-700"
          >
            <i className="bx bxl-tailwind-css text-blue-500"></i>
            <label className="">Tailwind CSS</label>
          </div>

          <div
            id="feature"
            className="flex items-center gap-2 rounded-full bg-gray-200/90 px-4 py-1 text-gray-700"
          >
            <i className="bx bxl-python text-gray-700"></i>
            <label className="">Python</label>
          </div>

          <div
            id="feature"
            className="flex items-center gap-2 rounded-full bg-gray-200/90 px-4 py-1 text-gray-700"
          >
            <i className="bx bxl-mongodb text-green-800"></i>
            <label className="">MongoDB</label>
          </div>

          <div
            id="feature"
            className="flex items-center gap-2 rounded-full bg-gray-200/90 px-4 py-1 text-gray-700"
          >
            <i className="bx bxl-git text-orange-600"></i>
            <label className="">Git</label>
          </div>

          <div
            id="feature"
            className="flex items-center gap-2 rounded-full bg-gray-200/90 px-4 py-1 text-gray-700"
          >
            <i className="bx bxl-github text-black"></i>
            <label className="">GitHub</label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
