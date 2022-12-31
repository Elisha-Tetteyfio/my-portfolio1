import React from "react";
import github from "../images/socials/github.svg"
import linkedin from "../images/socials/linkedin.svg"
import angellist from "../images/socials/angellist.svg"
import gmail from "../images/socials/gmail.png"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer1}>
        <div>Gmail @ tetteyfioelisha@gmail.com</div>
        <div className={styles.icons}>
          <div className={styles.iconDiv}> <img src={github} alt="GitHub" className={styles.icon}/> </div>
          <div className={styles.iconDiv}> <img src={linkedin} alt="LinkedIn" className={styles.icon}/> </div>
          <div className={styles.iconDiv}> <img src={angellist} alt="AngelList" className={styles.icon}/> </div>
          <div className={styles.iconDiv}> <img src={gmail} alt="Gmail" className={styles.icon}/> </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;