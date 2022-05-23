import { useState } from "react";
import "./HourWeather.css";
import useStoreData from "../../../hooks/use-store";
import BoxHour from "./divHour/BoxHour";
import useImg from "../../../hooks/use-img";
// import imgCloudyDay from "../../../assets/condition/cloudy-day.png";
// import imgCloudy from "../../../assets/condition/cloudy.png";
// import imgFog from "../../../assets/condition/fog.png";
// import imgRainyLittle from "../../../assets/condition/rainy-little.png";
// import imgRainyMuch from "../../../assets/condition/rainy-much.png";
// import imgRainyDay from "../../../assets/condition/rainy-day.png";
// import imgRainyVeryMuch from "../../../assets/condition/rainy.png";
// import imgSnowLittle from "../../../assets/condition/snowy-little.png";
// import imgSnowMuch from "../../../assets/condition/snowy-much.png";
// import imgSunny from "../../../assets/condition/sunny.png";
// import imgLowTemperature from "../../../assets/condition/temperature.png";
// import imgThunderStorm from "../../../assets/condition/thunderstorm.png";
// import imgDrizzle from "../../../assets/condition/hailstorm.png";
const HourWeather = () => {
  const [code, setCode] = useState("");
  const { allData, darkMode } = useStoreData();
  const hourTimes = allData.forecast.forecastday[0].hour;
  const weatherIcon = useImg(code);
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
            setCode(condition.code);
            // let weatherIcon;
            // switch (condition.code) {
            //   case 1000:
            //     weatherIcon = imgSunny;
            //     break;
            //   case 1003:
            //     weatherIcon = imgCloudyDay;
            //     break;
            //   case 1006:
            //     weatherIcon = imgCloudy;
            //     break;
            //   case 1009:
            //     weatherIcon = imgCloudy;
            //     break;
            //   case 1030:
            //     weatherIcon = imgFog;
            //     break;
            //   case 1063:
            //     weatherIcon = imgRainyLittle;
            //     break;
            //   case 1066:
            //     weatherIcon = imgSnowLittle;
            //     break;
            //   case 1069:
            //     weatherIcon = imgLowTemperature;
            //     break;
            //   case 1072:
            //     weatherIcon = imgSnowMuch;
            //     break;
            //   case 1087:
            //     weatherIcon = imgThunderStorm;
            //     break;
            //   case 1114:
            //     weatherIcon = imgSnowMuch;
            //     break;
            //   case 1117:
            //     weatherIcon = imgSnowMuch;
            //     break;
            //   case 1135:
            //     weatherIcon = imgFog;
            //     break;
            //   case 1147:
            //     weatherIcon = imgFog;
            //     break;
            //   case 1150:
            //     weatherIcon = imgDrizzle;
            //     break;
            //   case 1153:
            //     weatherIcon = imgDrizzle;
            //     break;
            //   case 1168:
            //     weatherIcon = imgDrizzle;
            //     break;
            //   case 1171:
            //     weatherIcon = imgDrizzle;
            //     break;
            //   case 1180:
            //     weatherIcon = imgRainyLittle;
            //     break;
            //   case 1183:
            //     weatherIcon = imgRainyLittle;
            //     break;
            //   case 1186:
            //     weatherIcon = imgRainyMuch;
            //     break;
            //   case 1189:
            //     weatherIcon = imgRainyMuch;
            //     break;
            //   case 1192:
            //     weatherIcon = imgRainyVeryMuch;
            //     break;
            //   case 1195:
            //     weatherIcon = imgRainyVeryMuch;
            //     break;
            //   case 1198:
            //     weatherIcon = imgRainyVeryMuch;
            //     break;
            //   case 1201:
            //     weatherIcon = imgRainyVeryMuch;
            //     break;
            //   case 1204:
            //     weatherIcon = imgSnowLittle;
            //     break;
            //   case 1207:
            //     weatherIcon = imgSnowLittle;
            //     break;
            //   case 1210:
            //     weatherIcon = imgSnowLittle;
            //     break;
            //   case 1213:
            //     weatherIcon = imgSnowLittle;
            //     break;
            //   case 1216:
            //     weatherIcon = imgSnowLittle;
            //     break;
            //   case 1219:
            //     weatherIcon = imgSnowMuch;
            //     break;
            //   case 1222:
            //     weatherIcon = imgSnowMuch;
            //     break;
            //   case 1225:
            //     weatherIcon = imgSnowMuch;
            //     break;
            //   case 1237:
            //     weatherIcon = imgSnowMuch;
            //     break;
            //   case 1240:
            //     weatherIcon = imgRainyDay;
            //     break;
            //   case 1243:
            //     weatherIcon = imgRainyMuch;
            //     break;
            //   case 1246:
            //     weatherIcon = imgRainyVeryMuch;
            //     break;
            //   case 1249:
            //     weatherIcon = imgLowTemperature;
            //     break;
            //   case 1252:
            //     weatherIcon = imgLowTemperature;
            //     break;
            //   case 1255:
            //     weatherIcon = imgSnowLittle;
            //     break;
            //   case 1258:
            //     weatherIcon = imgSnowMuch;
            //     break;
            //   case 1261:
            //     weatherIcon = imgSnowLittle;
            //     break;
            //   case 1264:
            //     weatherIcon = imgThunderStorm;
            //     break;
            //   case 1273:
            //     weatherIcon = imgThunderStorm;
            //     break;
            //   case 1276:
            //     weatherIcon = imgThunderStorm;
            //     break;
            //   case 1279:
            //     weatherIcon = imgLowTemperature;
            //     break;
            //   case 1282:
            //     weatherIcon = imgLowTemperature;
            //     break;
            //   default:
            //     weatherIcon = imgSunny;
            // }
            return (
              <BoxHour
                time={convertedTime}
                temp={temp_c}
                imgIcon={weatherIcon}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HourWeather;
