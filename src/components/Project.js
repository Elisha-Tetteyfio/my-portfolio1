import React from "react";
import styles from "./Project.module.css"
import im from "../images/aboutImage.jpg"

const Project = (project) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgDiv}> <img src={im} alt="im" /> </div>
      <div className={styles.projectInfo}>
        <div className={styles.projectName}>{project.name}</div>
        <div className={styles.projectDetails}>
          {project.description}
        </div>
        <button className={styles.liveDemo}>Live Demo</button>
        <button className={`${styles.liveDemo} ${styles.source}`}>Source code</button>
      </div>
    </div>
  )
}

export default Project;