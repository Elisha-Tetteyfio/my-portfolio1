import React from "react";
import styles from "./Header.module.css"

const Header = () => {
  return(
    <div className={styles.header}>
      <div className={styles.header1}>Elisha</div>
      <div className={styles.header2}>
        <div className={styles.headerLink}>Home</div>
        <div className={styles.headerLink}>About</div>
        <div className={styles.headerLink}>Projects</div>
        <div className={styles.headerLink}>Testimonials</div>
        <div className={styles.headerLink}>Contact me</div>
      </div>
    </div>
  )
}

export default Header;