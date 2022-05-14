import useDate from "../../../hooks/use-date";
import useStoreData from "../../../hooks/use-store";
import { BsFillCloudPlusFill, BsFillCloudMinusFill } from "react-icons/bs";
import "./BoxForecast.css";

const BoxForecast = ({ description, maxtemp, mintemp, date }) => {
  const { darkMode } = useStoreData();

  const { dayName } = useDate(date);
  let conditionLength = description;
  return (
    <>
      <div className={darkMode ? "mainBoxDark" : "mainBoxWhite"}>
        <div className="forecastDate">
          <div className="forecastDay">{dayName}</div>
          <p className="descriptionDay">
            {conditionLength <= 20
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
          <p>{mintemp}</p>
        </div>
      </div>
    </>
  );
};

export default BoxForecast;
