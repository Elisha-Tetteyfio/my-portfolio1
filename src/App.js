import Header from "./components/Header";
import About from "./segments/About";
import Expertise from "./segments/Expertise";
import Intro from "./segments/Intro";

const App = () => {
  return (
    <div >
      <Header />
      <Intro />
      <About />
      <Expertise />
    </div>
  );
}

export default App;
