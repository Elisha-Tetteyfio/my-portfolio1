import React from "react";
import SkillSet from "../components/SkillSet";
import styles from "./Expertise.module.css"

const Expertise = () => {
  return (
    <div className={styles.expertise}>
      <div className={styles.title}>My expertise</div>
      <div className={styles.skills}>
        <SkillSet name="Front-end" skills={["React", "Redux", "JavaScript", "Bootstrap", "CSS"]}/>
        <SkillSet name="Back-end" skills={["Ruby on Rails", "Ruby", "JavaScript"]}/>
        <SkillSet name="Databases & APIs" skills={["Ruby on Rails", "PostgreSQL"]}/>
        <SkillSet name="Tools & methods" skills={["Git", "GitHub", "Heroku", "Netlify"]}/>
        <SkillSet name="Data analysis" skills={["Python", "Ruby", "Ruby on Rails"]}/>
      </div>
    </div>
  )
}

export default Expertise;