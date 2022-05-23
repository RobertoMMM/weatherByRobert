import MoonSun from "../setRise/MoonSun";
import CurrentWeather from "../current data/CurrentWeather";
import ForecastWeather from "../forecastData/ForecastWeather";
import HourWeather from "../hourData/HourWeather";
const AllWeather = () => {
  return (
    <>
      <CurrentWeather />
      <ForecastWeather />
      <MoonSun />
      <HourWeather />
    </>
  );
};

export default AllWeather;
