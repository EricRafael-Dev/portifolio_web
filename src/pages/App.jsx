import React from "react";
import About from "./About";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Skills from "./Skills";
import SoftSkills from "./SoftSkills";
import Experiences from "./Experiences";

const App = () => {
  return (
    <main className="flex flex-col bg-[#FFFFFF] font-[AvenirLight] text-white transition-colors duration-200 dark:bg-[#11071f]">
      <Presentation />
      <About />
      <Projects />
      <Skills />
      <SoftSkills />
      <Experiences />
    </main>
  );
};

export default App;
