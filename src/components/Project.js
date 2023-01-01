import React from "react";
import styles from "./Project.module.css"

const Project = (project) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgDiv}> <img src={project.im} alt="im" /> </div>
      <div className={styles.projectInfo}>
        <div className={styles.projectName}>{project.name}</div>
        <div className={styles.projectDetails}>
          {project.description}
        </div>
        <a href={project.liveLink} target="_blank" rel="noreferrer">
          <button className={styles.liveDemo}>Live Demo</button>
        </a>
        <a href={project.source} target="_blank" rel="noreferrer">
          <button className={`${styles.liveDemo} ${styles.source}`}>Source code</button>
        </a>
      </div>
    </div>
  )
}

export default Project;