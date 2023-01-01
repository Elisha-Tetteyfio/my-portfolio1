import React, { useState } from "react";
import styles from "./Header.module.css"
import closemenu from "../images/menu/close.svg"
import menu from "../images/menu/menu.svg"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const hideMenu = () => {
    setShowMenu(!showMenu);
  }

  return(
    <div className={styles.header}>
      <div className={styles.headerr}>
        <div className={styles.menuDiv}><img src={menu} onClick={()=>hideMenu()}/></div>
        {
          showMenu && 
          <div className={styles.menu}>
            <div className={styles.imDiv}>
              <img src={closemenu} onClick={()=>hideMenu()}/>
            </div>
            <div className={styles.headerLinkDiv}><a href="#home" className={styles.headerLink} onClick={()=>hideMenu()}>Home</a></div>
            <div className={styles.headerLinkDiv}><a href="#about" className={styles.headerLink} onClick={()=>hideMenu()}>About</a></div>
            <div className={styles.headerLinkDiv}><a href="#projects" className={styles.headerLink} onClick={()=>hideMenu()}>Projects</a></div>
            <div className={styles.headerLinkDiv}><a href="#contact" className={styles.headerLink} onClick={()=>hideMenu()}>Contact me</a></div>
          </div>
        }
        
        <div className={styles.header1}>Elisha</div>
        <div className={`${styles.header2} ${styles.tablet}`}>
          <a href="#home" className={styles.headerLink}>Home</a>
          <a href="#about" className={styles.headerLink}>About</a>
          <a href="#projects" className={styles.headerLink}>Projects</a>
          <a href="#contact" className={styles.headerLink}>Contact me</a>
        </div>
      </div>
    </div>
  )
}

export default Header;