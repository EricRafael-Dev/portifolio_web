import React from "react";
import About from "../components/About";
import Presentation from "../components/Presentation";

const App = () => {
  return (
    <div className="font-[AvenirLight] w-dvw h-full bg-[#11071f] text-white">
      <Presentation />
      <About />
    </div>
  );
};

export default App;
