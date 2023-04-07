import React from "react";
import Foodyver from "../assets/portfolio/Foodyver.png";
import LibRaR from "../assets/portfolio/LibRaR.png";
import Login from "../assets/portfolio/Login Page .png";
import Phonesall from "../assets/portfolio/Phonesall.png";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Foodyver,
      
    },
    {
      id: 2,
      src: LibRaR,
    },
    {
      id: 3,
      src: Login,
    },
    {
      id: 4,
      src: Phonesall,
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-white to-blue-500 w-full md:h-screen"
    >
      <div className="max-w-screen-lg p-6 mx-auto my-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-4xl font-semibold">Here to hire me?</p>
          <p className="text-2xl">Check my works!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 py-1">
          {portfolios.map(({ id, src,DemoCode, CodeDev }) => (
            <div key={id} className="shadow-lg shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href="https://devsatyamr.github.io/foodyver2/" target="_blank" rel="noreferrer"><button
                Democode={DemoCode}
                className="w-1/2 px-6  m-4 duration-200 hover:scale-105 font-semibold text-xl">
                  Demo
                </button></a>
                <a href="https://github.com/devsatyamr/foodyver2" target="_blank" rel="noreferrer"><button
                CodeDev={CodeDev}
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 font-semibold text-xl">
                  Code
                </button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;