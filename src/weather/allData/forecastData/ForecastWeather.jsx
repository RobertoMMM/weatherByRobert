import useStoreData from "../../../hooks/use-store";
import BoxForecast from "./BoxForecast";
import "./BoxForecast.css";

const ForecastWeather = () => {
  const { allData } = useStoreData();
  return (
    <div className="mainForecastDiv">
      {allData.forecast.forecastday.map((date) => (
        <BoxForecast
          description={date.day.condition.text}
          date={date.date}
          maxtemp={date.day.maxtemp_c}
          mintemp={date.day.mintemp_c}
          key={date.date}
        />
      ))}
    </div>
  );
};

export default ForecastWeather;
