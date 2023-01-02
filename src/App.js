import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./segments/About";
import Contact from "./segments/Contact";
import Expertise from "./segments/Expertise";
import Intro from "./segments/Intro";
import Projects from "./segments/Projects";
import styles from "./App.module.css"
import { useSelector } from "react-redux";

const App = () => {
  const isLight = useSelector(state=>state.isLightTheme);

  return (
    <div className={`${!isLight? `${styles.dark}`:""} ${styles.all}`}>
      <Header />
      <Intro />
      <About />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
