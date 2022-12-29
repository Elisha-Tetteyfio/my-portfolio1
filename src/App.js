import Header from "./components/Header";
import About from "./segments/About";
import Expertise from "./segments/Expertise";
import Intro from "./segments/Intro";
import Projects from "./segments/Projects";

const App = () => {
  return (
    <div >
      <Header />
      <Intro />
      <About />
      <Expertise />
      <Projects />
    </div>
  );
}

export default App;
