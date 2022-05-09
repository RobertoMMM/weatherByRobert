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
        <FiSearch className="text-2xl ml-4 text-[#000000]" />
        <input
          value={userInput}
          onChange={(e) => getUserInput(e)}
          type="text"
          className={
            darkMode
              ? "text-white border-b-2 border-[#66FCF1] bg-black b w-[80%] h-[70%] outline-0 "
              : "text-white border-b-2 border-[#66FCF1] bg-white b w-[80%] h-[70%] outline-0"
          }
        />
      </label>
      <div
        className={`${btnEffect && "divThemeAc"} divThemeIn`}
        onClick={themeToggler}
        onAnimationEnd={() => setBtnEffect(false)}
      >
        <button className={darkMode ? "darkBtn" : "lightBtn"}>
          {darkMode ? <MdOutlineLightMode /> : <MdOutlineNightlight />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
