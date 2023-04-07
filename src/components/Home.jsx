import React from "react";
import {GiGraduateCap,  } from 'react-icons/gi';
import {DiJava } from 'react-icons/di';
import { RxDot } from 'react-icons/rx';
import { FaPython } from 'react-icons/fa';
import { GrCss3, GrGithub, GrHtml5, GrInstagram,  GrLinkedin, GrLocation, GrMail, GrReactjs, GrTwitter,GrJs} from 'react-icons/gr'
import Devsatyam from "../assets/IMG_20230407_190638.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className=" flex justify-center h-full w-full bg-gradient-to-b from-white via-gray-200 to-blue-500 ">
    <div className="flex-row  sm:flex justify-center gap-20 py-5 ">
        <div className="max-w-screen-lg mx-auto flex items-center  h-full px-4 py-2 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
         <div>
          <img
            src={Devsatyam}
            alt="my profile"
            className="rounded-3xl mx-auto w-52 shadow-2xl hover:scale-110 duration-500"
          />
         </div>
            
          <h2 className="text-4xl sm:text-4xl font-bold text-zinc-00 text-center py-5">
            DEVSATYAM RAY
            </h2>
          <h2 className="text-4xl sm:text-2xl font-bold text-slate-500  text-center pb-3">
            Frontend Developer
            </h2>
              <div className="flex justify-center gap-4">
                <div className=" items-center w-fit px-2 py-2 rounded-lg">
                  <a href="https://www.linkedin.com/in/devsatyam-ray-63ab11251/" target="_blank" rel="noreferrer"><GrLinkedin  size={30} className=" rounded-sm"></GrLinkedin></a>
                  </div>
                <div className="gray-400 items-center w-fit px-2 py-2 rounded-lg">
                  <a href="https://twitter.com/DevsatyamR" target="_blank" rel="noreferrer"><GrTwitter  size={30} className=" rounded-sm"></GrTwitter></a>
                  </div>
                <div className=" items-center w-fit px-2 py-2 rounded-lg">
                  <a href="https://github.com/devsatyamr" target="_blank" rel="noreferrer"><GrGithub  size={30} className=" rounded-sm"></GrGithub></a>
                  </div>
                <div className=" items-center w-fit px-2 py-2 rounded-lg">
                  <a href="https://www.instagram.com/devsatyamr/" target="_blank" rel="noreferrer"><GrInstagram  size={30} className=" rounded-sm"></GrInstagram></a>
                  </div>
              
             </div> 
            <div>
              <div className="flex gap-3 justify-center py-3 text-lg ">
              <GrMail size={27}></GrMail>
              <p class="font-mono font-semibold">devsatyamr@gmail.com</p>
              </div>
              <div className="flex gap-3 justify-center py-3 text-lg">
              <GrLocation size={27}></GrLocation>
              <p class="font-mono font-semibold">Dum Dum, Kolkata, India</p>
              </div>
            </div>

          <div >
            <center><a href="https://drive.google.com/file/d/14OQAuvvZYSAuZHdIaLeJrVT1-NwZV5H5/view?usp=sharing" target="_blank" rel="noreferrer"><div className="group text-white text-center font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-purple-600 cursor-pointer">
              Resume
              <span className="group-hover:translate-x-2 duration-300 ">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </div></a></center>
          </div>
        </div>

      </div>
       <div className="sm: hidden lg:block lg:pt-3 lg:mt-10">
        <div className="container sm:text-left  bg-slate-250 mx-auto px-4 py-5 max-w-md sm:rounded-2xl hover:scale-110 duration-500">
          <h1 className="font-extrabold text-xl p-4">Education</h1>
          <div className="flex gap-2">
          <GiGraduateCap size={25}/>
          <h2 className="text-lg">Institute of Engineering & Management, Kolkata.</h2>
          </div>
          <div>
            <h3 className="text-sm pl-8">(2022-Present)</h3>
          </div>
        <div className="flex  gap-2">
          <GiGraduateCap size={25}/>
          <h2 className="text-lg">Prafullanagar Vidyamandir(H.S.)</h2>
        </div>
        <div>
            <h3 className="text-sm pl-8">(2014-2021)</h3>
          </div>
        <div>
        <h1 className="font-extrabold text-xl p-4">Skills</h1>
          <div className="flex p-1 gap-3">
          <GrHtml5 size={25}/>
          <GrCss3 size={25}/>
          <GrJs size={25}/>
          <GrReactjs size={25}/>
          <DiJava size={25}/>
          <FaPython size={25}/>
          <GrGithub size={25}/>
          </div>
        </div>
        <div>
        <h1 className="font-extrabold text-xl p-4">Strengths</h1>
          <div className="flex gap-1">
            <RxDot size={25}/>
            <h2 className="text-md font-semibold">Fast learner</h2>
          </div>
          <div className="flex gap-1">
            <RxDot size={25}/>
            <h2 className="text-md font-semibold">Team-Player</h2>
          </div>
          <div className="flex gap-1">
            <RxDot size={25}/>
            <h2 className="text-md font-semibold">Good Leadership Experience</h2>
          </div>
        </div>
        </div>
        </div>
      </div>
      
  </div>
  );
};

export default Home;