import React from "react";
import Skill from "./Skill";
import styles from "./SkillSet.module.css"

const SkillSet = (skill) => {
  const {name, skills} = skill;
  // const {skills} = skills;
  return(
    <div className={styles.card}>
      <div className={styles.imgDiv}></div>
      {name}
      <div className={styles.skills}>
        {skill.skills.map((ss)=>
          <Skill name={ss} key={Math.random()} /> 
        )}
      </div>
    </div>
  )
}

export default SkillSet;