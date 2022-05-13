import useDate from "../../../hooks/use-date";
import { BsFillCloudPlusFill, BsFillCloudMinusFill } from "react-icons/bs";
import "./BoxForecast.css";
import useStoreData from "../../../hooks/use-store";

const BoxForecast = ({ description, maxtemp, mintemp, date }) => {
  const { darkMode } = useStoreData();

  const { dayName } = useDate(date);

  return (
    <>
      <div className={darkMode ? "mainBoxDark" : "mainBoxWhite"}>
        <div className="forecastDate">
          <div className="forecastDay">{dayName}</div>
          <p className="descriptionDay">{description}</p>
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
          <p>{mintemp}</p>
        </div>
      </div>
    </>
  );
};

export default BoxForecast;
