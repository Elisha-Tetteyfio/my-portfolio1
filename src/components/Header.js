import React from "react";
import styles from "./Header.module.css"

const Header = () => {
  return(
    <div className={styles.header}>
      <div className={styles.headerr}>
        <div className={styles.header1}>Elisha</div>
        <div className={styles.header2}>
          <a href="#home" className={styles.headerLink}>Home</a>
          <a href="#about" className={styles.headerLink}>About</a>
          <a href="#projects" className={styles.headerLink}>Projects</a>
          <div className={styles.headerLink}>Testimonials</div>
          <div className={styles.headerLink}>Contact me</div>
        </div>
      </div>
    </div>
  )
}

export default Header;