import React, { useState } from "react";
import styles from "./Header.module.css"
import closemenu from "../images/menu/close.svg"
import menu from "../images/menu/menu.svg"
import logo from "../images/menu/logo.svg"

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const hideMenu = () => {
    setShowMenu(!showMenu);
  }

  return(
    <div className={styles.header}>
      <div className={styles.headerr}>
        <div className={styles.menuDiv}><img src={menu} alt="menu" onClick={()=>hideMenu()}/></div>
        {
          showMenu && 
          <div className={styles.menu}>
            <div className={styles.imDiv}>
              <img src={closemenu} alt="close" onClick={()=>hideMenu()}/>
            </div>
            <div className={styles.headerLinkDiv}><a href="#about" className={styles.headerLink} onClick={()=>hideMenu()}>About me</a></div>
            <div className={styles.headerLinkDiv}><a href="#stack" className={styles.headerLink} onClick={()=>hideMenu()}>My expertise</a></div>
            <div className={styles.headerLinkDiv}><a href="#projects" className={styles.headerLink} onClick={()=>hideMenu()}>My Projects</a></div>
            <div className={styles.headerLinkDiv}><a href="#contact" className={styles.headerLink} onClick={()=>hideMenu()}>Let's connect!</a></div>
          </div>
        }
        
        <div className={styles.imDiv}>
          <img src={logo} alt="logo" className={styles.logo}/>
        </div>
        <div className={`${styles.header2} ${styles.tablet}`}>
          <a href="#about" className={styles.headerLink}>About me</a>
          <a href="#stack" className={styles.headerLink}>My expertise</a>
          <a href="#projects" className={styles.headerLink}>My Projects</a>
          <a href="#contact" className={styles.headerLink}>Let's connect!</a>
        </div>
      </div>
    </div>
  )
}

export default Header;