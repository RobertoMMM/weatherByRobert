import { useContext, useState } from "react";
import { BiMoon } from "react-icons/bi";
import { ImSun } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { ThemeContext } from "../store/context";
import "./Navbar.css";

const Navbar = () => {
  const { darkMode, changheDark, getUserInput, userInput } =
    useContext(ThemeContext);

  const themeToggler = () => {
    changheDark();
  };
  return (
    <div className="navbarSearch">
      <label className="labelInput">
        <FaSearch className="searchIcon" />
        <input
          value={userInput}
          onChange={(e) => getUserInput(e)}
          type="text"
          className={darkMode ? "userInputDark" : "userInputLigth"}
          placeholder="Let's find a weather :)"
        />
      </label>
      <div
        className={`${darkMode ? "divButtonDark" : "divButtonLigth"}`}
        onClick={themeToggler}
      >
        <button className={darkMode ? "darkBtn" : "ligthBtn"}>
          {darkMode ? <ImSun /> : <BiMoon />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
