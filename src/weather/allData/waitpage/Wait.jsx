import { useContext } from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { ThemeContext } from "../../../store/context";
import "./waitpage.css";

const Wait = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <TiWeatherCloudy className={darkMode ? "waitIconDark" : "waitIconWhite"} />
    </>
  );
};

export default Wait;
