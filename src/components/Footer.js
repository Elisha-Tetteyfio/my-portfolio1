import React from "react";
import github from "../images/socials/github.svg"
import linkedin from "../images/socials/linkedin.svg"
import twitter from "../images/socials/twitter.svg"
import gmail from "../images/socials/gmail.png"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer1}>
        <div>Gmail @ tetteyfioelisha@gmail.com</div>
        <div className={styles.icons}>
          <a href="https://github.com/Elisha-Tetteyfio" target="_blank" rel="noreferrer" className={styles.iconDiv}>
            <img src={github} alt="GitHub" className={styles.icon}/> 
          </a>
          <a href="https://www.linkedin.com/in/elisha-tetteyfio/" target="_blank" rel="noreferrer" className={styles.iconDiv}>
            <img src={linkedin} alt="LinkedIn" className={styles.icon}/>
          </a>
          <a href="https://twitter.com/Nii_AlYasa" target="_blank" rel="noreferrer" className={styles.iconDiv}>
            <img src={twitter} alt="AngelList" className={styles.icon}/>
          </a>
          <a href="mailto:tetteyfioelisha@gmail.com" target="_blank" rel="noreferrer" className={styles.iconDiv}>
            <img src={gmail} alt="Gmail" className={styles.icon}/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;