import { useContext, useState } from "react";
import { ThemeContext } from "./store/context";
import "./Main.css";
import Navbar from "./navbar/Navbar";
import Content from "./weather/content/Content";
import AuthModal from "./navbar/AuthModal/AuthModal";
import { createPortal } from "react-dom";

const App = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isVisibleNav, setIsVisibleNav] = useState(true);

  let lastKnownScrollPosition = 0;
  let ticking = false;

  function doSomething(scrollPos) {
    if (scrollPos > 100) setIsVisibleNav(false);
    else setIsVisibleNav(true);
  }

  document.addEventListener("scroll", function (e) {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function () {
        doSomething(lastKnownScrollPosition);
        ticking = false;
      });
      ticking = true;
    }
  });

  // const screenHeight = window.screen.width / 10
  return (
    <section className={darkMode ? "darkSec" : "lightSec"}>
      {isVisibleNav && <Navbar />}
      <Content />
      {createPortal(<AuthModal />, document.getElementById('authmodal'))}
    </section>
  );
};

export default App;
