import { Routes, Route } from "react-router-dom";
import MoonSun from "../setRise/MoonSun";
import HourWeather from "../hourData/HourWeather";
import AirQuality from "../airQuality/AirQuality";
import DataNav from "../../dataNav/DataNav";
import CurAndForecast from "../currentAndForecast/CurAndForecast";
const AllWeather = () => {
  return (
    <>
      <DataNav />
      <Routes>
        <Route path="/" element={<CurAndForecast />} />
        <Route path="moonsun" element={<MoonSun />} />
        <Route path="hours" element={<HourWeather />} />
        <Route path="airquality" element={<AirQuality />} />
      </Routes>
    </>
  );
};

export default AllWeather;
