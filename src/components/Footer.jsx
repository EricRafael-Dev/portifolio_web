import { ChevronsDown } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="fixed right-5 bottom-5 flex animate-bounce items-center gap-5 text-white/20">
        <label className="text-1xl animate-pulse">Deslize para baixo</label>
        <ChevronsDown size={32} />
      </div>
      <footer className="grid-rows-auto relative z-1 grid gap-6 border-t border-orange-500 bg-[#11071f] p-15 font-[AvenirLight] text-gray-300 shadow-[0_50px_100px_1px] shadow-orange-500 [&_h1]:font-[AvenirRoman] [&_h1]:text-2xl [&_h1]:font-semibold [&_h1]:text-white">
        {/* Me */}
        <div className="flex flex-col gap-5">
          <h1 className="">Eric Rafael P. Andrade</h1>
          <p className="text-xl">
            Desenvolvedor FullStack motivado a transformar ideias em
            experiências completas.
          </p>
        </div>
        {/* Links */}
        <div className="flex flex-col gap-5">
          <h1>Contatos</h1>
          <ul className="grid grid-cols-2 gap-2 text-xl [&_a]:flex [&_a]:items-center [&_a]:gap-2 [&_a]:hover:text-orange-500 [&_li]:flex [&_li]:items-center">
            <li>
              <a href="https://github.com/EricRafael-Dev" target="_blank">
                <i className="bx bxl-github bx-fw"></i>GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/eric-rafael/">
                <i className="bx bxl-linkedin bx-fw"></i>LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=rafaelpsec@gmail.com"
                target="_blank"
              >
                <i className="bx bxl-gmail bx-fw"></i>Gmail
              </a>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div className="flex flex-col gap-5">
          <h1>Links</h1>
          <ul className="grid grid-cols-2 gap-2 text-xl [&_a]:flex [&_a]:items-center [&_a]:gap-2 [&_a]:hover:text-orange-500 [&_li]:flex [&_li]:items-center">
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="./CV Eric Rafael PT-BR.pdf" download>
                <i className="bx bx-download"></i>Baixar CV
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
