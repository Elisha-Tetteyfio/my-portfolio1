import React from "react";
import styles from "./Skill.module.css"

const Skill = (skill) => {
  const {name} = skill
  return (
    <div className={styles.skill}>{name}</div>
  )
}

export default Skill;