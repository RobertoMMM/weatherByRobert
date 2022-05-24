import MoonSun from "../setRise/MoonSun";
import CurrentWeather from "../current data/CurrentWeather";
import ForecastWeather from "../forecastData/ForecastWeather";
import HourWeather from "../hourData/HourWeather";
import AirQuality from "../airQuality/AirQuality";
const AllWeather = () => {
  return (
    <>
      <CurrentWeather />
      <ForecastWeather />
      <MoonSun />
      <HourWeather />
      <AirQuality />
    </>
  );
};

export default AllWeather;
