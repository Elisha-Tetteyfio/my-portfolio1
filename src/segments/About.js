import React from "react";
import im from "../images/aboutImage.jpg"
import styles from "./About.module.css"

const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.aboutLeft}>
        <img src={im} alt="about" />
      </div>
      <div className={styles.aboutRight}>
        <div className={styles.aboutRightTitle}>About me</div>
        <div className={styles.aboutRightText1}>Over two years of developing and web apps and APIs.</div>
        <div className={styles.aboutRightText2}>  
          I am a full-stack developer with expertise in APIs and back-end programming. I can adapt to any role
          in any firm to work. I do enjoy teamwork and collaborating with others on projects.
          I also enjoy mathematics especially abstract algebra. <br/>
          I believe life is a learning process and everyone can still learn new things so I make it a point
          to keep learning.
        </div>
      </div>
    </div>
  )
}

export default About;