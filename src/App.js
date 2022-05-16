import { useContext } from "react";
import { ThemeContext } from "./store/context";
import "./App.css";
import Navbar from "./navbar/Navbar";
import Content from "./weather/content/Content";
import AuthModal from "./navbar/AuthModal/AuthModal";

const App = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <section className={darkMode ? "darkSec" : "lightSec"}>
      <Navbar />
      <Content />
      <AuthModal />
    </section>
  );
};

export default App;
