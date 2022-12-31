import React from "react";
import github from "../images/socials/github.svg"
import linkedin from "../images/socials/linkedin.svg"
import angellist from "../images/socials/angellist.svg"
import gmail from "../images/socials/gmail.png"
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <div className={styles.contactSegment} id="contact">
      <div className={styles.contactHeader}>Let's connect!!!</div>
      <div className={styles.contactSegment1}>
        <div className={styles.connect}>
          <div className={styles.connectHeader}>Connect with me</div>
          <div>Be sure to connect with me on:</div>
          <div className={styles.icons}>
            <div className={styles.iconDiv}> <img src={github} alt="GitHub" className={styles.icon}/> </div>
            <div className={styles.iconDiv}> <img src={linkedin} alt="LinkedIn" className={styles.icon}/> </div>
            <div className={styles.iconDiv}> <img src={angellist} alt="AngelList" className={styles.icon}/> </div>
            <div className={styles.iconDiv}> <img src={gmail} alt="Gmail" className={styles.icon}/> </div>
          </div>
        </div>
        <div className={styles.message}>
          <div className={styles.messageHeader}>Contact me</div>
          <div>
            <div className={styles.messageHeader1}>Send me a message</div>
            <form>
              <input
                placeholder="Name"
                className={styles.textField}
              />
              <input
                placeholder="Email"
                className={styles.textField}
              />
              <textarea
                placeholder="Message"
                className={styles.textArea}
              />
              <button className={styles.formButton}>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;