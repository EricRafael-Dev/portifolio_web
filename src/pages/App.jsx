import React from "react";
import About from "./About";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Skills from "./Skills";
import SoftSkills from "./SoftSkills";
import Experiences from "./Experiences";

const App = () => {
  return (
    <main className="flex flex-col bg-[#11071f] font-[AvenirLight] text-white">
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
