import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {  FaLinkedinIn } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiPython } from "react-icons/si";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Software Engineer"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
    const linkedInURL = "https://www.linkedin.com/in/ikechukwu-victor-b01388281";  
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ikechukwu Victor</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a dedicated software engineer passionate about problem solving and
         building well engineered software solutions using agile driven development 
         and leveraging on latest technologies to build optimal solutions for end users.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            
            <span className="bannerIcon">
            <a href={linkedInURL} target="_blank" rel="noopener noreferrer">
      <FaLinkedinIn />
    </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaJava />
            </span>
            <span className="bannerIcon">
            <IoLogoJavascript />
            </span>
            <span className="bannerIcon">
            <SiPython />
            </span>
            <span className="bannerIcon">
            <SiSpringboot />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner