import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Header = () => {
  useGSAP(()=>{
    gsap.from("header", {y:-200, duration:1, delay:1, ease:"power1.out"})
  })
  return (
    <header className="font-[AvenirRoman] w-dvw h-[10dvh] bg-[#1A0B2E] flex justify-between items-center p-10 text-white absolute top-0 z-1">
      <h1 className="text-[8vh] font-semibold">ER</h1>
      <div className="flex items-center justify-center [&_button]:text-[7vh] gap-5">
        <button>pt</button>
        <div className="h-[10vh] w-[0.5vh] bg-white rounded-4xl"></div>
        <button>en</button>
      </div>
    </header>
  );
};

export default Header;
