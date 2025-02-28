import React from "react";

const Header = () => {
  return (
    <header className="font-[AvenirRoman] w-dvw h-[10dvh] bg-[#1A0B2E] flex justify-between items-center p-10 text-white absolute top-0">
      <h2 className="text-4xl font-semibold">ER</h2>
      <div className="flex items-center [&_button]:w-10 [&_button]:text-2xl gap-1">
        <button>pt</button>
        <div className="h-7 w-0.5 bg-white rounded-4xl"></div>
        <button>en</button>
      </div>
    </header>
  );
};

export default Header;
