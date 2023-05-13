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
          desc="A MeetMentors website providing information about their events and programmes."
          styles="flex flex-row-reverse"
          num="2"
          image={meentors}
          live="https://elisha-tetteyfio.github.io/First-Capstone-Project/"
          source="https://github.com/Elisha-Tetteyfio/First-Capstone-Project"
          />
        <Project 
          name="Leaderboard"
          desc="A site connected to an API to allow gamers record their scores and view other player's scores."
          styles="flex"
          num="3"
          image={leader}
          live="https://elisha-tetteyfio.github.io/Leaderboard/"
          source="https://github.com/Elisha-Tetteyfio/Leaderboard"
          />
        <Project 
          name="To-do list"
          desc="An app to help you schedule your daily activities."
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