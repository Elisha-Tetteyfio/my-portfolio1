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
        <div className={styles.projectsSection1}>
          <Project 
            name="Math magician"
            description="A fun website for all mathematics lovers to perform calculations and get math quotes."
            im={math}
            liveLink="https://radiant-sunburst-89a1e6.netlify.app/"
            source="https://github.com/Elisha-Tetteyfio/Math-Magicians"
          />
        </div>
        <div className={styles.projectsSection1}>
          <Project 
            name="To-do list"
            description="An app to help you schedule your daily activities"
            im={todo}
            liveLink="https://elisha-tetteyfio.github.io/To-do-list1/"
            source="https://github.com/Elisha-Tetteyfio/To-do-list1"
          />
        </div>
        <div className={styles.projectsSection1}>
          <Project 
            name="Meet Mentors"
            description="A website giving information about Meet Mentors programme"
            im={mentors}
            liveLink="https://elisha-tetteyfio.github.io/First-Capstone-Project/"
            source="https://github.com/Elisha-Tetteyfio/First-Capstone-Project"
          />
        </div>
        <div className={styles.projectsSection1}>
          <Project
            name="Leaderboard"
            description="A site connected to an API to allow gamers record their scores and view other player's scores."
            im={leaders}
            liveLink="https://elisha-tetteyfio.github.io/Leaderboard/"
            source="https://github.com/Elisha-Tetteyfio/Leaderboard"
          />
        </div>
        <div className={styles.projectsSection1}>
          <Project
            name="Portfolio"
            description="This project was my previous portfolio"
            im={portfolio}
            liveLink="https://elisha-tetteyfio.github.io/My-portfolio/"
            source="https://github.com/Elisha-Tetteyfio/My-portfolio"
          />
        </div>
        <div className={styles.projectsSection1}>
          <Project 
            name="Book A Dev"
            description="The budget app allows users to keep records of financial transactions they've made an plan
            their budget well"
            im={bookdev}
            source="https://github.com/gak92/book_devs_app"
          />
        </div>
      </div>
    </div>
  )
}

export default Projects;