import React from "react";
import Skill from "./Skill";
import styles from "./SkillSet.module.css"

const SkillSet = (skill) => {
  const {name} = skill;
  return(
    <div className={styles.card}>
      <div className={styles.imgDiv}><img src={skill.img} alt="icon"/></div>
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