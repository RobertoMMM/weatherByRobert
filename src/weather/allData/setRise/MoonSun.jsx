import "./MoonSun.css";
import imgSun from "./../../../assets/weather/sunny.png";
import imgMoon from "./../../../assets/weather/cloudy-night.png";
import useStoreData from "../../../hooks/use-store";
import { RiArrowUpDownLine } from "react-icons/ri";

const MoonSun = () => {
  const { dataAstronomical, isError } = useStoreData();
  if (!isError && dataAstronomical)
    return (
      <>
        <div className="SetRiseMain">
          <p className="antenttext">Sunrise / Moonset Today</p>
          <div className="sun">
            <img src={imgSun} className="imagesSunMoon" alt="img" />
            <RiArrowUpDownLine className="arrowUpDown" />
            <p className="rise">{dataAstronomical.astronomy.astro.sunrise}</p>
            <p className="set">{dataAstronomical.astronomy.astro.sunset}</p>
          </div>
          <div className="moon">
            <img src={imgMoon} className="imagesSunMoon" alt="img" />
            <RiArrowUpDownLine className="arrowUpDown" />
            <p className="rise">{dataAstronomical.astronomy.astro.moonrise}</p>
            <p className="set">{dataAstronomical.astronomy.astro.moonset}</p>
          </div>
        </div>
      </>
    );
};

export default MoonSun;
