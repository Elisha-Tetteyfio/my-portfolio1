import React from "react";
import github from "../images/socials/github.svg"
import linkedin from "../images/socials/linkedin.svg"
import twitter from "../images/socials/twitter.svg"
import gmail from "../images/socials/gmail.png"
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <div className={styles.contactSegment} id="contact">
      <div className={styles.contactHeader}>Let's connect!!!</div>
      <div className={styles.contactSegment1}>
        <div className={styles.connect}>
          <div className={`${styles.connectHeader} ${styles.tablet}`}>Connect with me</div>
          <div className={styles.deskOnly}>Be sure to connect with me on:</div>
          <div className={styles.icons}>
            <div className={styles.iconDiv}>
              <a href="https://github.com/Elisha-Tetteyfio" target="_blank" rel="noreferrer">
                <img src={github} alt="GitHub" className={styles.icon}/>
              </a>
            </div>
            <div className={styles.iconDiv}>
              <a href="https://www.linkedin.com/in/elisha-tetteyfio/" target="_blank" rel="noreferrer">
                <img src={linkedin} alt="LinkedIn" className={styles.icon}/> 
              </a> 
            </div>
            <div className={styles.iconDiv}>
              <a href="mailto:tetteyfioelisha@gmail.com" target="_blank" rel="noreferrer">
                <img src={gmail} alt="Gmail" className={styles.icon}/> 
              </a>
            </div>
            <div className={styles.iconDiv}> 
              <a href="https://twitter.com/Nii_AlYasa" target="_blank" rel="noreferrer">
                <img src={twitter} alt="AngelList" className={styles.icon}/>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.message}>
          <div className={`${styles.messageHeader} ${styles.deskOnly}`}>Contact me</div>
          <div>
            <div className={styles.messageHeader1}>Send me a message</div>
            <form action="https://formspree.io/f/myyobwbp" method="POST">
              <input
                placeholder="Name"
                name="name"
                className={styles.textField}
              />
              <input
                placeholder="Email"
                name="email"
                className={styles.textField}
              />
              <textarea
                placeholder="Message"
                name="message"
                className={styles.textArea}
              />
              <button type="submit" className={styles.formButton}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;