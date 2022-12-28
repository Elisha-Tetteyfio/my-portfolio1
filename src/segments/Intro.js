import React from "react";
import styles from "./Intro.module.css"
import im from "../images/t1.png"

const Intro = () => {
  return(
    <div>
      <div className={styles.intro}>
        <div className={styles.introLeft}>
          <div className={styles.intro1}>Hello there,</div>
          <div className={styles.intro2}>I am <span className={styles.introName}>Elisha Tetteyfio</span></div>
          <div className={styles.intro3}>I am a full-stack developer and a mathematician too. Feel free to contact me about Programming or Maths.</div>
          <div>
            <button className={`${styles.introButton} ${styles.introButton1}`}>Hire me</button>
            <button className={styles.introButton}>Let's talk</button>
          </div>
        </div>
        <div className={styles.introRight}>
          <img src={im} alt="My image"/>
        </div>
      </div>
      <div className={styles.introDown}>
        <div className={styles.introDown1}>
          <div>
            Hello &#x2727;
          </div>
          <div className={styles.introDown2}>
            &#x2727;
          </div>
          <div>
            Hello &#x2727;
          </div>
          <div className={styles.introDown2}>
            &#x2727;
          </div>
          <div>
            Hello &#x2727;
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro;