import { useContext } from "react";
import { ThemeContext } from "./store/context";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Content from "./content/Content";

const App = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <section className={darkMode ? "darkSec" : "lightSec"}>
      <Navbar />
      <Content />
    </section>
  );
};

export default App;
