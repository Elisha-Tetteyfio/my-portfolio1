import React from "react";
import Project from "../components/Project";
import math from "../images/projects/mathmagicians.png"
import leader from "../images/projects/leaderboard.png"
import todo from "../images/projects/todolist.png"
import meentors from "../images/projects/meetmentors.png"


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
          image={math}
          live="https://radiant-sunburst-89a1e6.netlify.app/"
          source="https://github.com/Elisha-Tetteyfio/Math-Magicians"
          />
        <Project 
          name="Meet mentors"
          desc="I am a full-stack developer with expertise in APIs and back-end programming. I primarily work with Ruby on Rails and PostgreSQL, with which I have built a couple of projects. I can also work on the front-end and hence can adapt to any role in any firm.
              I do enjoy teamwork and collaborating with others on projects."
          styles="flex flex-row-reverse"
          num="2"
          image={meentors}
          live="https://elisha-tetteyfio.github.io/First-Capstone-Project/"
          source="https://github.com/Elisha-Tetteyfio/First-Capstone-Project"
          />
        <Project 
          name="Leaderboard"
          desc="I am a full-stack developer with expertise in APIs and back-end programming. I primarily work with Ruby on Rails and PostgreSQL, with which I have built a couple of projects. I can also work on the front-end and hence can adapt to any role in any firm.
              I do enjoy teamwork and collaborating with others on projects."
          styles="flex"
          num="3"
          image={leader}
          live="https://elisha-tetteyfio.github.io/Leaderboard/"
          source="https://github.com/Elisha-Tetteyfio/Leaderboard"
          />
        <Project 
          name="To-do list"
          desc="I am a full-stack developer with expertise in APIs and back-end programming. I primarily work with Ruby on Rails and PostgreSQL, with which I have built a couple of projects. I can also work on the front-end and hence can adapt to any role in any firm.
              I do enjoy teamwork and collaborating with others on projects."
          styles="flex flex-row-reverse"
          num="4"
          image={todo}
          live="https://elisha-tetteyfio.github.io/To-do-list1/"
          source="https://github.com/Elisha-Tetteyfio/To-do-list1"
          />
      </div>
    </div>
  )
}

export default Projects;