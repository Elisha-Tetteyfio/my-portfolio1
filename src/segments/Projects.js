import React from "react";
import Project from "../components/Project";
import styles from "./Projects.module.css"

const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles.title}>My Projects</div>
      <div className={styles.projectsSection}>
        <Project 
          name="Math magician"
          description="Project description is a little description about the project to show you"
        />
        <Project 
          name="Budget app"
          description="The budget app allows users to keep records of financial transactions they've made an plan
          their budget well"
        />
        <Project 
          name="To-do list"
          description="An app to help you schedule your daily activities"
        />
        <Project 
          name="Space hub"
        />
        <Project />
        <Project />
      </div>
    </div>
  )
}

export default Projects;