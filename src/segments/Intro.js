import React from "react";
import styles from "./Intro.module.css"
import im from "../images/t4.png"

const Intro = () => {
  return(
    <div className={styles.intro}>
      <h2 className={styles.intro1}>Hello there, I am... </h2>
      <h1 className={styles.intro2}>Elisha Tetteyfio</h1>
      <h3 className={styles.intro3}>...a full-stack developer</h3>
      {/* <img src={im} alt="fsd"/> */}
    </div>
  )
}

export default Intro;