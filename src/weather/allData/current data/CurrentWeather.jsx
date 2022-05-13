import { HiLocationMarker } from "react-icons/hi";
import { RiCelsiusFill } from "react-icons/ri";
import useDate from "../../../hooks/use-date";
import useStoreData from "../../../hooks/use-store";
import "./currentweather.css";

const CurrentWeather = () => {
  const { allData, darkMode } = useStoreData();

  const { localYear, localMonth, localDay, dayName } = useDate(
    allData.location.localtime
  );

  return (
    <>
      <section
        className={
          darkMode ? "weatherDataSectionDark" : "weatherDataSectionLight"
        }
      >
        <div className="localUserData">
          <div className="localDay">{dayName}</div>
          <div className="localDate">
            <p>{localDay}</p>
            <p>{localMonth}</p>
            <p>{localYear}</p>
          </div>
          <div className="location">
            <HiLocationMarker />
            {allData.location.name}
          </div>
        </div>
        <div className="localWeatherData">
          <div className="localTemp">
            {allData.current.temp_c}
            <RiCelsiusFill />
          </div>
          <div className="localCondition">{allData.current.condition.text}</div>
        </div>
      </section>
    </>
  );
};

export default CurrentWeather;