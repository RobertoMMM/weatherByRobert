import "./HourWeather.css";
import useStoreData from "../../../hooks/use-store";
import BoxHour from "./divHour/BoxHour";
const HourWeather = () => {
  const { allData, darkMode } = useStoreData();
  const hourTimes = allData.forecast.forecastday[0].hour;
  return (
    <>
      <p className="hourtextmain">Try 24h weather</p>
      <div className={darkMode ? "hoursDataWhite" : "hoursDataDark"}>
        <div className="hoursData2">
          {hourTimes.map(({ time, temp_c, condition }) => {
            const date = new Date(time);
            const convertedTime = date.toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            });
            return (
              <BoxHour
                time={convertedTime}
                temp={temp_c}
                imgIcon={condition.code}
                key={convertedTime}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HourWeather;
