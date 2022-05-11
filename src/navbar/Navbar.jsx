import { useContext, useState } from "react";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { ThemeContext } from "../store/context";
import "./Navbar.css";

const Navbar = () => {
  const [btnEffect, setBtnEffect] = useState(true);
  const { darkMode, changheDark, getUserInput, userInput } =
    useContext(ThemeContext);

  const themeToggler = () => {
    changheDark();
    setBtnEffect(true);
  };
  return (
    <div className="navbarSearch">
      <label className="labelInputDark">
        <FiSearch className={darkMode ? "searchIconDark" : "searchIconLigth"} />
        <input
          value={userInput}
          onChange={(e) => getUserInput(e)}
          type="text"
          className={darkMode ? "userInputDark" : "userInputLigth"}
          placeholder="Check out current weather"
        />
      </label>
      <div
        className={`${btnEffect && "divThemeAc"} divThemeIn`}
        onClick={themeToggler}
        onAnimationEnd={() => setBtnEffect(false)}
        style={{ borderColor: `${!darkMode ? "#45A29E" : "#66FCF1"}` }}
      >
        <button className={darkMode ? "darkBtn" : "lightBtn"}>
          {darkMode ? <MdOutlineLightMode /> : <MdOutlineNightlight />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
