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
        <div>
          <SkillSet 
            name="Front-end" 
            skills={["React", "Redux", "JavaScript", "Bootstrap", "CSS"]}
            img={frontend}
          />
        </div>
        <div>
          <SkillSet
            name="Back-end" 
            skills={["Ruby on Rails", "Ruby", "JavaScript"]}
            img={backend}
          />
        </div>
        <div>
          <SkillSet 
            name="Databases & APIs" 
            skills={["Ruby on Rails", "PostgreSQL"]}
            img={databases}
          />
        </div>
        <div>
          <SkillSet 
            name="Tools & methods" 
            skills={["Git", "GitHub", "Heroku", "Netlify"]}
            img={tools}
          />
        </div>
        <div>
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