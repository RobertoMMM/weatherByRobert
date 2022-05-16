import { BiMoon } from "react-icons/bi";
import { ImSun } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
import useStoreData from "../hooks/use-store";
import "./Navbar.css";
import AuthModal from "./AuthModal/AuthModal";

const Navbar = () => {
  const { darkMode, changheDark, getUserInput, userInput, setIsOpenModal, isOpenModal } = useStoreData();
  const themeToggler = () => {
    changheDark();
  };
  const changheModalVisibility = () => {
    setIsOpenModal(true)
  }
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
      <div
        className={`${darkMode ? "divAuthDark" : "divAuthLigth"}`}
      >
      <button onClick={changheModalVisibility} className={darkMode ? "darkBtn" : "ligthBtn"}>
        <RiUserLine />
      </button>
      </div>
    </div>
  );
};

export default Navbar;
