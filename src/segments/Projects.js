import React from "react";
import Project from "../components/Project";


const Projects = () => {
  return (
    <div className="pt-16 font-bold" id="projects">
      <h2 className="text-4xl text-white text-center mt-16">Projects</h2>
      <div className="w-[85%] m-auto">
        <Project 
          name="Math magicians"
          desc="A fun website for all mathematics lovers to perform calculations and get math quotes."
          styles="flex"
          num="1"
          />
        <Project 
          name="Project 2"
          desc="I am a full-stack developer with expertise in APIs and back-end programming. I primarily work with Ruby on Rails and PostgreSQL, with which I have built a couple of projects. I can also work on the front-end and hence can adapt to any role in any firm.
              I do enjoy teamwork and collaborating with others on projects."
          styles="flex flex-row-reverse"
          num="2"
          />
        <Project 
          name="Project 3"
          desc="I am a full-stack developer with expertise in APIs and back-end programming. I primarily work with Ruby on Rails and PostgreSQL, with which I have built a couple of projects. I can also work on the front-end and hence can adapt to any role in any firm.
              I do enjoy teamwork and collaborating with others on projects."
          styles="flex"
          num="3"
          />
        <Project 
          name="Project 4"
          desc="I am a full-stack developer with expertise in APIs and back-end programming. I primarily work with Ruby on Rails and PostgreSQL, with which I have built a couple of projects. I can also work on the front-end and hence can adapt to any role in any firm.
              I do enjoy teamwork and collaborating with others on projects."
          styles="flex flex-row-reverse"
          num="4"
          />
      </div>
    </div>
  )
}

export default Projects;