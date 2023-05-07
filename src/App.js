import Header from "./components/Header";
import About from "./segments/About";
import Home from "./segments/Home";
import Projects from "./segments/Projects";
import Services from "./segments/Services";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Projects />
      <Services />
    </div>
  );
}

export default App;
