import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTheme } from "../hooks/ThemeContext";

gsap.registerPlugin(useGSAP);

const Header = () => {
  useGSAP(() => {
    gsap.from("header", {
      y: -200,
      duration: 1,
      delay: 1,
      ease: "power1.out",
      
    });
  });

  const {theme, setTheme} = useTheme();

  return (
    <header className="fixed top-0 z-10 flex h-[10dvh] w-dvw items-center justify-between bg-[#2D2D34] p-10 font-[AvenirRoman] text-white transition-colors duration-200 dark:bg-[#1A0B2E]">
      <h1 className="text-[3vh] font-semibold">ER</h1>
      <div className="flex items-center justify-center gap-5 [&_button]:text-[2vh]">
        <button
          className="flex items-center justify-center"
          onClick={() => setTheme("light")}
        >
          <i className="bx bx-sun"></i>
        </button>

        <div className="h-[3vh] w-[0.5vw] rounded-4xl transition-colors duration-200 bg-white"></div>

        <button
          className="flex items-center justify-center"
          onClick={() => setTheme("dark")}
        >
          <i className="bx bx-moon"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
