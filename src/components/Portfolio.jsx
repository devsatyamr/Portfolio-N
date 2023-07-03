import React,{ useEffect, useState } from "react";
import Foodyver from "../assets/portfolio/Foodyver.png";
import LibRaR from "../assets/portfolio/LibRaR.png";
import Login from "../assets/portfolio/Login Page .png";
import Phonesall from "../assets/portfolio/Phonesall.png";
import Board from "../assets/portfolio/board.png";
import Thanos from "../assets/portfolio/thanos.png";


const ProjectCard = ({ image, demoLink, sourceLink }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);


  return (
    <div
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
    
    <div className="relative bg-inherit shadow-lg rounded-lg p-2 ">
      <img src={image} alt="Project Banner" className="w-full h-40 object-cover rounded" />
      <div className="mt-4 flex justify-between p-2 gap-2">
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black font-bold hover:underline text-lg"
        >
          Demo
        </a>
        <a
          href={sourceLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black font-bold hover:underline text-lg"
        >
          Source Code
        </a>
      </div>
    </div>
    </div>
  );
};

const ProjectsGrid = () => {
  const projects = [
    {
      id: 1,
      image: Foodyver,
      demoLink: "https://devsatyamr.github.io/foodyver2/",
      sourceLink: "https://github.com/devsatyamr/foodyver",
    },
    {
      id: 2,
      image: LibRaR,
      demoLink: "https://devsatyamr.github.io/LibRaR/",
      sourceLink: "https://github.com/devsatyamr/LibRaR",
    },
    {
      id: 3,
      image: Login,
      demoLink: "https://example.com/project2-demo",
      sourceLink: "https://github.com/devsatyamr/login-page",
    },
    {
      id: 4,
      image: Phonesall,
      demoLink: "https://phonesall.devsatyamray.com",
      sourceLink: "https://github.com/devsatyamr/landing_page",
    },
    {
      id: 5,
      image: Board,
      demoLink: "https://board.devsatyamray.com",
      sourceLink: "https://github.com/your-username/project2",
    },
    {
      id: 6,
      image: Thanos,
      demoLink: "https://example.com/project2-demo",
      sourceLink: "https://github.com/your-username/project2",
    },
    
  ];

  return (
    <div className="bg-gradient-to-b from-white to-blue-500 w-full md:h-screen">
      <div className="max-w-screen-lg p-6 mx-auto my-auto flex flex-col justify-center w-full h-full">
      <div className="pb-5">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-4xl font-semibold">Here to hire me?</p>
          <p className="text-2xl">Check my works!</p>
        </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          demoLink={project.demoLink}
          sourceLink={project.sourceLink}
        />
      ))}
    </div>
    </div>
    </div>
  );
};

export default ProjectsGrid;