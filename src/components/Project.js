import React from "react";
import about from "../images/about.jpg"

const Project = (project) => {
  return (
    <div className={`pt-16 font-bold ${project.styles} justify-between mt-20 items-center`} id="projects">
      <div className="w-[45%]">
        <div className="text-4xl text-lightBlue font-light mb-5">Project {project.num}</div>
        <div className="text-4xl text-white">{project.name}</div>
        <div className="text-grey text-lg font-bold mt-5">
          {project.desc}  
        </div>
        <div className="mt-5">
          <a href="#projects" class="inline-block text-lg px-5 py-3 leading-none rounded-lg mr-5 text-lightBlue border border-lightBlue hover:text-darkBlue hover:bg-white mt-4 lg:mt-0">
            Live demo <i className="bi-box-arrow-up-right"></i>
          </a>
          <a href="#projects" class="inline-block text-lg px-5 py-3 leading-none rounded-lg text-darkBlue bg-lightBlue border border-darkBlue hover:text-darkBlue hover:bg-white mt-4 lg:mt-0">
            Source code <i className="bi-github"></i>
          </a>
        </div>
      </div>
      <div className="w-[45%] aspect-[3/2] border-[15px] border-lightBlue box-border rounded-lg">
        <img src={about} className="w-[100%] h-[100%] relative left-6 -top-6 rounded-lg" alt="img"/>
      </div>
    </div>
  )
}

export default Project;