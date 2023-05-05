import Header from "./components/Header";
import About from "./segments/About";
import Home from "./segments/Home";
import Projects from "./segments/Projects";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
