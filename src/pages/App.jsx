import React from "react";
import About from "./About";
import Presentation from "./Presentation";
import Projects from "./Projects";
import Skills from "./Skills";

const App = () => {
  return (
    <main className="w-screen bg-[#11071f] font-[AvenirLight] text-white">
      <Presentation />
      <About />
      <Projects />
      <Skills />
    </main>
  );
};

export default App;
