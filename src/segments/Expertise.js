import React from "react";
import SkillSet from "../components/SkillSet";
import frontend from "../images/icons/front-end.svg"
import backend from "../images/icons/back-end.svg"
import databases from "../images/icons/database.svg"
import tools from "../images/icons/tools.svg"
import data from "../images/icons/data-analysis.svg"
import styles from "./Expertise.module.css"

const Expertise = () => {
  return (
    <div className={styles.expertise} id="stack">
      <div className={styles.title}>My expertise</div>
      <div className={styles.skills}>
        <div className={styles.skills1}>
          <SkillSet 
            name="Front-end" 
            skills={["React", "Redux", "JavaScript", "Bootstrap", "CSS"]}
            img={frontend}
          />
        </div>
        <div className={styles.skills1}>
          <SkillSet
            name="Back-end" 
            skills={["Ruby on Rails", "Ruby", "JavaScript"]}
            img={backend}
          />
        </div>
        <div className={styles.skills1}>
          <SkillSet 
            name="Databases & APIs" 
            skills={["Ruby on Rails", "PostgreSQL"]}
            img={databases}
          />
        </div>
        <div className={styles.skills1}>
          <SkillSet 
            name="Tools & methods" 
            skills={["Git", "GitHub", "Heroku", "Netlify"]}
            img={tools}
          />
        </div>
        <div className={styles.skills1}>
          <SkillSet 
            name="Data analysis" 
            skills={["Python", "Ruby", "Ruby on Rails"]}
            img={data}
          />
        </div>
      </div>
    </div>
  )
}

export default Expertise;