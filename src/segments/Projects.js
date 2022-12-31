import React from "react";
import Project from "../components/Project";
import styles from "./Projects.module.css"
import math from "../images/projects/mathmagicians.png"
import bookdev from "../images/projects/bookadev.png"
import todo from "../images/projects/todolist.png"
import mentors from "../images/projects/meetmentors.png"
import leaders from "../images/projects/leaderboard.png"
import portfolio from "../images/projects/portfolio.png"

const Projects = () => {
  return (
    <div className={styles.projects} id="projects">
      <div className={styles.title}>My Projects</div>
      <div className={styles.projectsSection}>
        <Project 
          name="Math magician"
          description="A fun website for all mathematics lovers to perform calculations and get math quotes."
          im={math}
        />
        <Project 
          name="Book A Dev"
          description="The budget app allows users to keep records of financial transactions they've made an plan
          their budget well"
          im={bookdev}
        />
        <Project 
          name="To-do list"
          description="An app to help you schedule your daily activities"
          im={todo}
        />
        <Project 
          name="Meet Mentors"
          description="A website giving information about Meet Mentors programme"
          im={mentors}
        />
        <Project
          name="Leaderboard"
          description="A site connected to an API to allow gamers record their scores and view other player's scores."
          im={leaders}  
        />
        <Project
          name="Portfolio"
          description="This project was my previous portfolio"
          im={portfolio}
        />
      </div>
    </div>
  )
}

export default Projects;