import { ChevronsDown } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="fixed right-5 bottom-5 flex gap-5 items-center text-white/20 animate-bounce">
      <label className="text-1xl animate-pulse">Deslize para baixo</label>
      <ChevronsDown size={32} />
    </footer>
  );
};

export default Footer;
