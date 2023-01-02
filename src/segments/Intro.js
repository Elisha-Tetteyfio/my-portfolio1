import styles from "./Intro.module.css"
import im from "../images/t1.png"
import teamwork from "../images/icons/teamwork.svg"
import remote from "../images/icons/remote-work.svg"
import satisfaction from "../images/icons/satisfaction.svg"
import { useDispatch} from "react-redux";
import { changeTheme } from "../store/reducer";

const Intro = () => {
  const dispatch = useDispatch();

  const change = () => {
    dispatch(changeTheme())
  }

  return(
    <div id="home" className={styles.home}>
      <div className={styles.intro}>
        <div className={styles.introLeft}>
          <div className={styles.intro1}>Hello there,</div>
          <div className={styles.intro2}>I am <span className={styles.introName}>Elisha Tetteyfio</span>!</div>
          <div className={styles.intro3}>
            I am a full-stack developer and a mathematician too. 
            <span className={styles.deskOnly}> Feel free to contact me about Programming or Maths.</span>
          </div>
          <div>
            <a href="#contact">
              <button className={`${styles.introButton} ${styles.introButton1}`}>Hire me</button> 
            </a>
            <a href="#contact">
              <button className={styles.introButton}>Let's talk</button>
            </a>
          </div>
          <label className={styles.toggle}  >
            <input type="checkbox" onClick={change}/>
            <span/>
          </label>
        </div>
        <div className={`${styles.introRight} ${styles.tablet}`}>
          <img src={im} alt="Me" className={styles.deskOnly}/>
        </div>
      </div>
      <div className={styles.introDown}>
        <div className={styles.introDown1}>
          <div className={styles.introDown3}>
            <div className={`${styles.introDown3ImDiv} ${styles.deskOnly}`}><img src={teamwork} alt="Teamwork"/></div>
            <div>Teamwork</div>
          </div>
          <div className={styles.introDown2}>
            &#x2727;
          </div>
          <div className={styles.introDown3}>
            <div className={`${styles.introDown3ImDiv} ${styles.deskOnly}`}><img src={remote} alt="remote"/></div>
            <div>Remote working</div>
          </div>
          <div className={styles.introDown2}>
            &#x2727;
          </div>
          <div className={styles.introDown3}>
            <div className={`${styles.introDown3ImDiv} ${styles.deskOnly}`}><img src={satisfaction} alt="satisfaction"/></div>
            <div>Satisfaction guaranteed</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro;