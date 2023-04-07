import React from "react";

import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github-logo.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import cpp from"../assets/c-.png";
import java from"../assets/java.png";
import gcd from"../assets/google-cloud.512x412.png";

const Experience = () => {
  const techs = [
    
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: java,
      title: "Java",
      style: "shadow-orange-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: gcd,
      title: "Google Cloud Platform",
      style: "shadow-red-500",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-yellow-400",
    },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      src: cpp,
      title: "C++",
      style: "shadow-blue-400",
    },
  ];

  return (
    <div
      name="experience"
      className="lg:pt-10   bg-gradient-to-b from-blue-500 to-white w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full font-bold">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Want to know about my Experience?
          </p>
          <p className="py-6 text-2xl font-semibold text-teal-800">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;