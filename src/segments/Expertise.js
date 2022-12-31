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
    <div className={styles.expertise}>
      <div className={styles.title}>My expertise</div>
      <div className={styles.skills}>
        <SkillSet 
          name="Front-end" 
          skills={["React", "Redux", "JavaScript", "Bootstrap", "CSS"]}
          img={frontend}
        />
        <SkillSet
          name="Back-end" 
          skills={["Ruby on Rails", "Ruby", "JavaScript"]}
          img={backend}
        />
        <SkillSet 
          name="Databases & APIs" 
          skills={["Ruby on Rails", "PostgreSQL"]}
          img={databases}
        />
        <SkillSet 
          name="Tools & methods" 
          skills={["Git", "GitHub", "Heroku", "Netlify"]}
          img={tools}
        />
        <SkillSet 
          name="Data analysis" 
          skills={["Python", "Ruby", "Ruby on Rails"]}
          img={data}
        />
      </div>
    </div>
  )
}

export default Expertise;