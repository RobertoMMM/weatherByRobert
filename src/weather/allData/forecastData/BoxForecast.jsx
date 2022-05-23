import useDate from "../../../hooks/use-date";
import useStoreData from "../../../hooks/use-store";
import { BsFillCloudPlusFill, BsFillCloudMinusFill } from "react-icons/bs";
import imgTempDark from "../../../assets/circle-small.png";
import imgTempWhite from "../../../assets/circle-small-free-icon-font.png";
import "./BoxForecast.css";

const BoxForecast = ({ description, maxtemp, mintemp, date }) => {
  const { darkMode } = useStoreData();

  const { dayName } = useDate(date);
  let conditionLength = description.length;
  return (
    <>
      <div className={darkMode ? "mainBoxDark" : "mainBoxWhite"}>
        <div className="forecastDate">
          <div className="forecastDay">{dayName}</div>
          <p className="descriptionDay">
            {conditionLength < 20
              ? description
              : description.substring(0, 20) + "..."}
          </p>
        </div>
        <div className="arrowsMaxMinTemp">
          <BsFillCloudPlusFill
            style={{
              color: darkMode ? "#7f5af0" : "#2cb67d",
              fontSize: "1.75rem",
            }}
          />
          <BsFillCloudMinusFill
            style={{
              color: darkMode ? "#7f5af0" : "#2cb67d",
              fontSize: "1.75rem",
            }}
          />
        </div>
        <div className="maxMinTemp">
          <p>{maxtemp}</p>
          <img
            src={darkMode ? imgTempWhite : imgTempDark}
            className="boxForecastPoint"
          />
          <p>{mintemp}</p>
          <img
            src={darkMode ? imgTempWhite : imgTempDark}
            className="boxForecastPoint"
          />
        </div>
      </div>
    </>
  );
};

export default BoxForecast;
