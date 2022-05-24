import { HiLocationMarker } from "react-icons/hi";
import { RiCelsiusFill } from "react-icons/ri";
import useDate from "../../../hooks/use-date";
import useStoreData from "../../../hooks/use-store";
import "./currentweather.css";
import useImg from "./../../../hooks/use-img";

const CurrentWeather = () => {
  const { allData, darkMode } = useStoreData();

  const { localYear, localMonth, localDay, dayName } = useDate(
    allData.location.localtime
  );
  let conditionLength = allData.current.condition.text.length;
  const response = useImg(allData.current.condition.code);
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
          <img src={response} className="imgCondition" alt="img"/>
          <div className="localTemp">
            {allData.current.temp_c}
            <RiCelsiusFill />
          </div>
          <div className="localCondition">
            {conditionLength < 13
              ? allData.current.condition.text
              : allData.current.condition.text.substring(0, 13) + "..."}
          </div>
        </div>
      </section>
    </>
  );
};

export default CurrentWeather;
