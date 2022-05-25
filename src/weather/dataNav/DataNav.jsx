import { Link } from "react-router-dom";
import imgHomeWhite from "../../assets/navIcons/homeWhite.svg";
import imgMoonSunWhite from "../../assets/navIcons/eclipse.svg";
import imgHoursWhite from "../../assets/navIcons/time-twentyWhite.svg";
import imgAirQualityWhite from "../../assets/navIcons/smokeWhite.svg";
import imgHomeDark from "../../assets/navIcons/homeDark.svg";
import imgMoonSunDark from "../../assets/navIcons/eclipse1.svg";
import imgHoursDark from "../../assets/navIcons/time-twenty-fourDark.svg";
import imgAirQualityDark from "../../assets/navIcons/smokeDark.svg";
import "./DataNav.css";
import useStoreData from "../../hooks/use-store";
const DataNav = () => {
  const { darkMode } = useStoreData();
  return (
    <div className={darkMode ? "mainDataNavDark" : "mainDataNavWhite"}>
      <Link to="/">
        <img
          src={darkMode ? imgHomeDark : imgHomeWhite}
          alt="img"
          className="imgDataNav"
        />
      </Link>
      <Link to="/moonsun">
        <img
          src={darkMode ? imgMoonSunDark : imgMoonSunWhite}
          alt="img"
          className="imgDataNav"
        />
      </Link>
      <Link to="/hours">
        <img
          src={darkMode ? imgHoursDark : imgHoursWhite}
          alt="img"
          className="imgDataNav"
        />
      </Link>
      <Link to="/airquality">
        <img
          src={darkMode ? imgAirQualityDark : imgAirQualityWhite}
          alt="img"
          className="imgDataNav"
        />
      </Link>
    </div>
  );
};

export default DataNav;
