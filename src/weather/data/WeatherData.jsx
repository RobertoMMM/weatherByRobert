import { useContext } from "react";
import { ThemeContext } from "../../store/context";
import { HiLocationMarker } from "react-icons/hi";
import { RiCelsiusFill } from "react-icons/ri";
import "./weatherData.css";

const WeatherData = () => {
  const { allData, darkMode } = useContext(ThemeContext);
  let localDate = new Date(allData.location.localtime); 
  let localDay = localDate.getDate();
  let localYear = localDate.getFullYear();

  const toMonthName = (monthNumber) => {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", {
      month: "short",
    });
  };

  const toDayName = (localTime) => {
    let daysWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let dateNumber = new Date(localTime);
    return daysWeek[dateNumber.getDay()];
  };

  let localMonth = toMonthName(localDate.getMonth());
  let dayName = toDayName(localDay);

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

export default WeatherData;
