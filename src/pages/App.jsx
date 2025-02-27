import React from "react";
import About from "./About";
import Presentation from "./Presentation";
import Projects from "./Projects";

const App = () => {
  return (
    <div className="font-[AvenirLight] w-dvw h-full bg-[#11071f] text-white">
      <Presentation />
      <About />
      <Projects />
    </div>
  );
};

export default App;
