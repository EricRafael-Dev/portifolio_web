import React from "react";

const Presentation = () => {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center gap-6 px-8">
      <div className="w-full flex flex-col justify-center items-center">
        <img src="https://placehold.co/400x600" />
        <div className="w-[90%] border border-gray-200/50 rounded-full"></div>
      </div>
      <div>
        <h1 className="text-5xl font-[AvenirRoman] font-bold">Eric Rafael</h1>
      </div>
      <div className="flex flex-col items-center gap-6">
        <h2 className="text-3xl">Full Stack Developer</h2>

        <div className="flex gap-5 bx-sm flex-wrap justify-center">
          <div className="px-4 py-1 bg-gray-200/90 rounded-full text-gray-700 flex items-center gap-2">
            <i className="bx bxl-react text-blue-500"></i>
            <label className="text-[20px]">React</label>
          </div>

          <div className="px-4 py-1 bg-gray-200/90 rounded-full text-gray-700 flex items-center gap-2">
            <i className="bx bxl-nodejs text-green-700"></i>
            <label className="text-[20px]">NodeJS</label>
          </div>

          <div className="px-4 py-1 bg-gray-200/90 rounded-full text-gray-700 flex items-center gap-2">
            <i className="bx bxl-tailwind-css text-blue-500"></i>
            <label className="text-[20px]">Tailwind CSS</label>
          </div>

          <div className="px-4 py-1 bg-gray-200/90 rounded-full text-gray-700 flex items-center gap-2">
            <i className="bx bxl-python text-gray-700"></i>
            <label className="text-[20px]">Python</label>
          </div>

          <div className="px-4 py-1 bg-gray-200/90 rounded-full text-gray-700 flex items-center gap-2">
            <i className="bx bxl-mongodb text-green-800"></i>
            <label className="text-[20px]">MongoDB</label>
          </div>

          <div className="px-4 py-1 bg-gray-200/90 rounded-full text-gray-700 flex items-center gap-2">
            <i className="bx bxl-git text-orange-600"></i>
            <label className="text-[20px]">Git</label>
          </div>

          <div className="px-4 py-1 bg-gray-200/90 rounded-full text-gray-700 flex items-center gap-2">
            <i className="bx bxl-github text-black"></i>
            <label className="text-[20px]">GitHub</label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentation;
